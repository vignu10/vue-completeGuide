const app = Vue.createApp({
    data() {
        return {
            couseGoal : 'Finished the course and Learnt Vue!'
        }
    },
    methods() {
outputGoal(){
    const randomNumber = Math.random();
    if(randomNumber<0.5)
    {
    return 'Learn Vue';
    }
    else{
    return 'Master Vue'
    }
}
}
});
app.mount('#user-goal')