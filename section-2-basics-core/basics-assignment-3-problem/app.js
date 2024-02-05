const app = Vue.createApp({
    data() {
      return {
        result: 0,
      };
    },
    computed: {
      resultStatus() {
        if (this.result < 37) {
          return "Not there yet";
        } else if (this.result > 37) {
          return "Too much!";
        } else {
          return "exactly 37";
        }
      },
    },
    watch: {
      result(newValue, oldValue) {
        if (newValue !== oldValue) {
          setTimeout(() => {
            this.result = 0;
          }, 5000);
        }
      },
    },
    methods: {
      addOne() {
        this.result += 1;
      },
      addFive() {
        this.result += 5;
      },
    },
  });
  
  app.mount("#assignment");