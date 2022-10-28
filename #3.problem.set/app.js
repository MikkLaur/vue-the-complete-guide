const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            timedOut: false,
        };
    },
    watch: {
        // It is much more efficient to run this watcher on result instead of counter.
        // counter triggers watcher every time Add button is used. 
        // Result triggers watcher only when computed result() changes 
        result(value) {
            console.log("Watcher running...");
            if(!this.timedOut) {
                this.timedOut = true;
                const that = this;
                setTimeout(function() {
                    that.timedOut = false;
                    that.counter = 0;
                }, 5000);
            }

            // if (value < 37) {
            //     this.result = 'Not there yet';
            // }
            // else if (value === 37) {
            //     this.result = value;
            // }
            // else {
            //     this.result = 'Too much!';
            // }
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet!';
            } else if (this.counter === 37) {
                return this.counter;
            }
            else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        }
    }
});

app.mount('#assignment');