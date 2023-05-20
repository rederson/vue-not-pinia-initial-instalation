import {defineStore} from 'pinia';

const useCounter = defineStore('counter', {
    //state:() => ({

    //})

    state: function() {
        return {
            count: 0,
            name: 'Alexandre'
        }
    },

    getters:{
        getCounter(state){
            return 'Counter = '+state.count;
        }
    },
    actions:{
        increment(){
            this.count++
        }
    }
})

export { useCounter};