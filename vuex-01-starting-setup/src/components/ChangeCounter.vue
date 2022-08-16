<template>
  <button @click="addOne">Add one</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
  },
};
</script>
