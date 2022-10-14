export default ({
    state: {
        product_items: [],
        all_products_array: [],
        related2: [],
        related: {},
        related_products_array: []
    },
    mutations: {
        UPDATE_PRODUCTS(state, data){
            // state.products = data;
        },
        CREATE_ALL_PRODUCTS_ARRAY(state, data){
            state.product_items = [];
            state.all_products_array = [];
            for (let key in data['data']) {
                state.product_items.push(data['data'][key])
                for(let i in data['data'][key].products) {
                    state.all_products_array.push(data['data'][key].products[i])
                    // state.related.push(data['data'][key].products[i].related)
                    state.related = {...state.related, ...data['data'][key].products[i].related}
                }
            }
        },
        CREATE_RELATED_PRODUCTS(state, data){
            let relatedSet = new Set();
            for( let key in state.related){
                relatedSet.add(state.related[key].id)
            }
            let products = state.all_products_array;
            for(let key in products){
                if(relatedSet.has(products[key].id)){
                    state.related_products_array.push(products[key])
                }
            }
            // console.log(relatedSet.has(2))
        }
    },
    actions: {
        async FETCH_PRODUCTS(ctx){
            const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/catalog`,{
                credentials: "include",
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            // ctx.commit('UPDATE_PRODUCTS', data)
            ctx.commit('CREATE_ALL_PRODUCTS_ARRAY', data)
        }
    },
    getters: {
        GET_PRODUCTS(state){
            return state.product_items;
        },
        GET_ALL_PRODUCTS_ARRAY(state){
            return state.all_products_array;
        },
        // GET_RELATED_PRODUCTS(state){
        //     return state.related_products_array;
        // }
    }
})