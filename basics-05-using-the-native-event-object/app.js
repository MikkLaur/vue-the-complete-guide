const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // computed properties will be updated on DOM only when a computed property is changed
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === "") {
        return '';
      }
      return this.name + " " + "Wannabe";
    }
  },
  methods: {
    outputFullname() {

    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');