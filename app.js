const app = Vue.createApp({
  data() {
    return {
      isLoading: false,
      firstName: "John",
      lastName: "Doe",
      email: "john@email.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      this.isLoading = true;
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      if(results){
        this.isLoading = false;
        (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
      }
    },
  },
});

app.mount("#app");
