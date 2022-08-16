<template>
  <base-container title="Vuex">
    <button @click="addOne">Add 1</button>
    <the-counter
      ><template #default><h3>killua</h3></template></the-counter
    >
    <favorite-value></favorite-value>
    <change-counter></change-counter
  ></base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
export default {
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter,
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
  methods: {
    addOne() {
      //this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
