const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            timedOut: false,
            result: 'Not there yet'
        };
    },
    watch: {
        counter(value) {
            if(!this.timedOut) {
                this.timedOut = true;
                const that = this;
                setTimeout(function() {
                    that.timedOut = false;
                    that.counter = 0;
                }, 5000);
            }

            if (value < 37) {
                this.result = 'Not there yet';
            }
            else if (value === 37) {
                this.result = value;
            }
            else {
                this.result = 'Too much!';
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