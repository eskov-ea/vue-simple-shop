import {showNotification} from "../../components/functions/js-notification";

export default ({
    state: {
        cart: [],
        object_cart: {},
        totalCount: null,
        related_products: []
    },
    mutations: {
        UPDATE_CART(state, data){
            state.cart = [];
            data.cart.forEach(el => {
                data.ctx.getters.GET_ALL_PRODUCTS_ARRAY.forEach(item => {
                    if(item.id === el.id) {
                        // this.totalCount += Number(item.price) * el.amount;
                        state.cart.push(item)
                    }
                })
            })
        },
        UPDATE_OBJECT_CART(state, data) {
            state.object_cart = {};
            data.forEach(item => {
                state.object_cart[item.id] = item.amount;
            })
        },
        UPDATE_TOTAL_COUNT(state){
            let total = 0;
            state.cart.forEach(el => {
                total += el.price * state.object_cart[el.id];
            })
            state.totalCount = total;
        },
        DECREASE_CART_ITEM_QUANTITY(state, id){
            state.cart[id] > 0
                ? state.cart[id] --
                : state.cart[id];
        },
        INCREASE_CART_ITEM_QUANTITY(state, id){
            state.cart[id]
                ? state.cart[id] ++
                : state.cart[id] = 1;
        },
        REMOVE_CART_ITEM(state, id){
            state.cart[id] = 0;
        },
        CREATE_RELATED_LIST(state, ctx){
            state.related_products = [];
            let relatedSet = new Set();
            for( let key in state.cart){
                for(let recommended in state.cart[key].related) {
                    relatedSet.add(state.cart[key].related[recommended].id)
                }
            }
            for(let key in ctx.rootState.products.all_products_array){
                if(relatedSet.has(ctx.rootState.products.all_products_array[key].id)){
                    state.related_products.push(ctx.rootState.products.all_products_array[key])
                }
            }
            // console.log(ctx.state.related_products)
        }
    },
    actions: {
        async FETCH_CART(ctx){
            try{
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/cart`, {
                    credentials: "include",
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                let cart = [];
                if(data.data){
                    for(let key in data.data.products) {
                        cart.push(data.data.products[key])
                    }
                }
                ctx.commit('UPDATE_OBJECT_CART', cart);
                ctx.commit('UPDATE_CART', {cart, ctx});
                ctx.commit('UPDATE_TOTAL_COUNT');
                ctx.commit('CREATE_RELATED_LIST', ctx);
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message)
            }
        },
        async FETCH_ADD_TO_CART(ctx, data ){
            try{
                console.log(data)
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/cart/add/${data.id}/${data.quantity}`,
                {
                    credentials: "include",
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res);
                const payload = await res.json();
                if(payload.meta.success === 'yes') {
                    ctx.dispatch('FETCH_CART');
                } else {
                    for (let error in payload.meta.errors.products) {
                        showNotification('Ошибка', payload.meta.errors.products[error], 'error');
                    }
                }
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message)
            }
        },
        async FETCH_DELETE_ITEMS_FROM_CART(ctx, id){
            const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/cart/del/${id}`,
                {
                    credentials: "include",
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            const payload = await res.json();
            ctx.dispatch('FETCH_CART');
        },
        async FETCH_DECREASE_CART_ITEM_AMOUNT(ctx, id){
            const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/cart/add/${id}/-1`,
                {
                    credentials: "include",
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            const payload = await res.json();
            console.log(payload)
            ctx.dispatch('FETCH_CART');
        },
        // FETCH_ORDERS_CART(ctx){
        //     ctx.commit('BUILD_ORDERS_CART', {cart: ctx.getters.GET_ARRAY_LIKE_CART, products: ctx.rootGetters.GET_ALL_PRODUCTS_ARRAY});
        // },
    },
    getters: {
        GET_CART(state){
            return state.cart;
        },
        GET_OBJECT_CART(state){
            return state.object_cart;
        },
        GET_CART_PRODUCT_COUNT(state){
            let totalCount = 0;
            state.cart.forEach(item => totalCount += item.amount)
            return totalCount
                // ? Object.values(state.cart).reduce((acc, value) => acc + value.amount)
                // : 0
        },
        GET_PRODUCTION_CART(state){
            return state.production_cart;
        },
        GET_TOTAL_COUNT(state){
            return state.totalCount;
        },
        GET_RELATED_PRODUCTS(state) {
            return state.related_products;
        }
    }
})