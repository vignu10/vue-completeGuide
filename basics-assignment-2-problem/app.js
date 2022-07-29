const app = Vue.createApp({
    data(){
        return{
            name : ''
        }
    },
    methods:{
        clickAlert()
        {
            alert('Hey you pressed this')
        },
        confirmName(event)
        {
            this.name = event.target.value;
        },
        confirmedName(event)
        {
            this.name = event.target.value;
        }
    }


});

app.mount('#assignment')