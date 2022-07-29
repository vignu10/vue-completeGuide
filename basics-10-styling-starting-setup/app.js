const app = Vue.createApp({
data(){
    return{
        userMovement: true
    };
},
computed: {
    movementClass(){
        return{
           animation: this.userMov,
        }
    }
},
methods:{
    toggleInput(){

        this.userMovement = !this.userMovement
        movementClass(DeviceMotionEvent)
    }
}
});
app.mount('#styling');
