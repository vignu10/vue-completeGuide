const app = Vue.createApp({
    data(){
        return{
            counter: 0
        };
    },
    methods:{
       add(num){
        this.counter=this.counter+num;
        return this.counter
       }
    },
    computed:{
        wordValue(){
            if(this.counter==37)
            {
                return this.counter;
            }
            else if(this.counter<37)
            {
                return "not yet there";
            }
            else if(this.counter > 37){
                return "too much";
            }
        }
    },
    watch:{
       
        wordValue(value)
        {
            const that = this;
            setTimeout(function(){
               that.counter=0
            },5000)
        }
    }

});
app.mount('#assignment');