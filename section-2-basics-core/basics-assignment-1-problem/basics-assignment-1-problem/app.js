const app = Vue.createApp({
    data(){
        return {
            name: 'Andy Dowell',
            age: 40,
            randomNumber: Math.random()
        };
    },
    methods: {
        futureAge(){
            return this.myAge + 5
        }
    }
});

app.mount('#assignment');