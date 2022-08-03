    const app = Vue.createApp({

        data(){
            return{
                userInput: '',
                goals: [],
                userClick: true,
                clickValue: ''
            }
        },
        methods:{
            addGoal(){
                this.goals.push(this.userInput)
            },
            hidorvis()
            {
                this.userClick = !this.userClick
            },
        
        }

    });

    app.mount('#assignment');   