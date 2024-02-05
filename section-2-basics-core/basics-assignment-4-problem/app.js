const { ref, onMounted } = Vue;

const App = {
  setup() {
    const model = ref("Style me");
    const isVisible = ref(true);
    const inlineStyle = ref("white");

    // Lifecycle hook (similar to mounted)
    onMounted(() => {
      console.log(model);
    });

    // Return values to be used in the template
    return {
      model,
      isVisible,
      inlineStyle,
    };
  },
};

// Mount the app
Vue.createApp(App).mount("#assignment");