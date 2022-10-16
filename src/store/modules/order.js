import router from "../../router";
import {closeModal} from "../../components/functions/modalControls";
import { notify } from "@kyvg/vue3-notification";
import {showNotification} from "../../components/functions/js-notification";

export default ({
    state: {
        orders : {},
        orderSettings: {},
        orderInfoByPin: {},
        orderNotFoundMessage: null
    },
    mutations: {
        UPDATE_ORDER_SETTINGS(state, data){
            state.orderSettings = data;
        },
        UPDATE_ORDERS_HISTORY(state, data){
            state.orders = data;
        },
        UPDATE_ORDER_INFO_BY_PIN(state, data){
            state.orderInfoByPin = { '1': data} ;
        }
    },
    actions: {
        async FETCH_EXECUTE_ORDER(ctx, data){
            try{
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/order/add`,
                    {
                        method: 'POST',
                        credentials: "include",
                        mode: 'cors',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                const payload = await res.json();
                console.log(payload);
                const orderId = payload.data.id;
                console.log('orderId --> ', orderId)
                Echo.private(`order.${orderId}`)
                    .listen('OrderStatusUpdated', function (e)  {
                        console.log(e);
                        alert(e)
                    });
                /**
                 * if request is successful
                 * we close modal window, redirect to order status, update cart
                 */
                if(payload.meta.success === 'yes') {
                    router.push({ name: 'OrderStatus', params: {pin: payload.data.pin}})
                    closeModal('orderModal');
                    ctx.dispatch('FETCH_CART');
                } else {
                    for (let error in payload.meta.errors.data) {
                        showNotification('Ошибка отправки данных', payload.meta.errors.data[error]);
                    }
                }
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message);
            }
        },
        async FETCH_ORDER_SETTINGS(ctx){
            try{
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/order_settings`,
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
                ctx.commit('UPDATE_ORDER_SETTINGS', payload);
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message);
            }
        },
        async FETCH_ORDERS_HISTORY(ctx){
            try{
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/orders`,
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
                if(payload.meta.success === 'yes') {
                    ctx.commit('UPDATE_ORDERS_HISTORY', payload.data);
                } else {
                    for (let error in payload.meta.errors) {
                        showNotification('Ошибка отправки данных', payload.meta.errors[error]);
                    }
                }
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message);
            }
        },
        async FETCH_ORDER_INFORMATION(ctx, data){
            try{
                ctx.state.orderNotFoundMessage = null;
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/order/pin/${data.pin}`,
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
                if(payload.meta.success === 'yes') {
        //isFetching = true
                    await ctx.dispatch('FETCH_ORDER_SETTINGS');
                    ctx.commit('UPDATE_ORDER_INFO_BY_PIN', payload.data);
                    data.callback.reset();
        //isFetching = false
                    router.push({ name: 'OrderInfoByPin'});
                    closeModal('orderStatusWindow');
                } else {
                    ctx.state.orderNotFoundMessage = 'Заказ не найден.';
                }
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message);
            }
        },
        async REQUEST_UPDATE_ORDER_INFORMATION(ctx, pin){
            try{
                const res = await fetch(`${ctx.rootState.DOMAIN}:${ctx.rootState.PORT}/api/order/pin/${pin}`,
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
                if(payload.meta.success === 'yes') {
                    await ctx.dispatch('FETCH_ORDER_SETTINGS');
                    ctx.commit('UPDATE_ORDER_INFO_BY_PIN', payload.data);
                    alert('order status info has been updated!')
                } else {
                    for (let error in payload.meta.errors) {
                        showNotification('Ошибка отправки данных', payload.meta.errors[error]);
                    }
                }
            }
            catch (e) {
                showNotification('Ошибка соединения',e.message);
            }
        }
    },
    getters: {
        GET_ORDERS_HISTORY(state){
            return state.orders;
        },
        GET_ORDER_SETTINGS(state){
            return state.orderSettings;
        },
        GET_ORDER_INFO(state){
            return state.orderInfoByPin;
        },
        GET_ORDER_NOT_FOUND_MESSAGE(state){
            return state.orderNotFoundMessage;
        }
    }
})