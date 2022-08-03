const app = Vue.createApp({
  data() {
    
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {

    // used to add new goals
    addGoal(){
      this.goals.push(this.enteredGoalValue)
    },

    // to remove the existing lists of items

    removeGoal(idx) {
      this.goals.splice(idx,1); 
    }
    
  }
});

app.mount('#user-goals');
