const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
    };
  },
  methods:{
    fullname()
    {
      return this.name + ' '+'Uzumaki'
    },
    // setName(event){
    //   this.name = event.target.value;
    // },
    add(){
      return this.counter++
    },
    minus(){
      return this.counter--;
    }
  }
});

app.mount('#events');
