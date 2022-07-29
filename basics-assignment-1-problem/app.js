const app = Vue.createApp({

    data() {
        return{
            name : 'vignu',
            age : '20', 
        }
    },
    methods: {
        age5() {
            const fiveAge = this.age;
            console.log(fiveAge);
        }
    }

});

app.mount('#assignment');
