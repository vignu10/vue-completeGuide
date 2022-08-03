const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                id: 'mauel',
                name: 'Manuel Lorenz',
                phone: '0102 2321 2309',
                email: 'mauel@localhost.com',
            },
            {
            id: 'Julie',
            name : 'julie morgan',
            phone: '2831 5475 4566',
            email: 'julie@localhost.com'
            }
        ]
        }
    },
   
});

app.component('friend-contact',{
    template: `
    <li>
    <h2>{{ friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data(){
        return{
            detailsAreVisible: false,
            friend:{
                id: 'mauel',
                name: 'Manuel Lorenz',
                phone: '0102 2321 2309',
                email: 'mauel@localhost.com',
            }
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
    
})


app.mount('#app');