/**
 * 商城Vuex-mutations
 */
export default{
    saveUsername(state,username){
        state.username=username;
    },
    saveCartCount(state,count){
        state.cartCount=count;
    }
}