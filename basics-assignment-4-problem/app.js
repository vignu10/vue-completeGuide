        const app =  Vue.createApp({

            data(){
                return{
                userInput: '',
                toggleInput: true,
                inputBG: ''
                }
            },
            computed:{
                paraClasses(){
                    return {
                        user1: this.userInput === 'user1',
                        user2: this.userinput === 'user2',
                        visible: this.toggleInput,
                        hidden: !this.toggleInput
                    }
                }
            },
            methods:{
                toggleClick(){
                this.toggleInput = !this.toggleInput;

                }
            }

        });
        app.mount('#assignment')