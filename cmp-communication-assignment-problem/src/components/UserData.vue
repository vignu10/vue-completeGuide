<template>
  <form @submit.prevent="">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div>
      <button @click="addPeople">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addPeople() {
      this.$emit("add-people", this.enteredName, this.enteredAge);
    },
  },
};
</script>
