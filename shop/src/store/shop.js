export default {
    state: {
        shopList: [
            {
                id: 1, 
                title: 'Nike Red', 
                descr: 'Cool sneakers',
                img: require('../assets/img/1.png')
            },
            {
                id: 2, 
                title: 'Nike Default', 
                descr: 'Cool sneakers',
                img: require('../assets/img/4.png')
            },
            {
                id: 3, 
                title: 'Nike Green', 
                descr: 'Cool sneakers',
                img: require('../assets/img/7.png')
            },
            {
                id: 4, 
                title: 'Nike Street', 
                descr: 'Cool sneakers',
                img: require('../assets/img/10.png')
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList (state) {
            return state.shopList
        }
    }
}