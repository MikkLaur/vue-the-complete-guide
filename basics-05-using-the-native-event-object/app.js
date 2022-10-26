const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  // similar to computed properties
  watch: {
    // Watcher could watcvh a counter for example and when it exceeds 50, it will be reset.
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
        this.counter = 0;
      }
    }

    // // if data.name is modified, a watcher name() will be triggered
    // // name(newValue, oldValue) //old value is sent as well!
    // name(value) {
    //   if(value === '' ) {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if(value === '' ) {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  // computed properties will be updated on DOM only when a computed property is changed
  // computed: {
  //   fullname() {
  //     console.log('Running again...');
  //     if (this.name === "") {
  //       return '';
  //     }
  //     return this.name + " " + "Wannabe";
  //   }
  // },
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