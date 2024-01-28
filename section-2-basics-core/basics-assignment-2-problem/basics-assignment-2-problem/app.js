const app = Vue.createApp({
  data() {
    return {
      userInput_Keydown: "",
      userInput_Enter: "",
    };
  },
  methods: {
    alertMessage() {
      return window.alert("Alert triggered: Event Practice!");
    },
    updateInputFieldText(event, inputKeyType) {
      return inputKeyType === "keydown"
        ? (this.userInput_Keydown = event.target.value)
        : (this.userInput_Enter = event.target.value);
    },
  },
});

app.mount("#assignment");
