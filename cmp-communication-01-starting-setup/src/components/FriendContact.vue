<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(favourite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Favourite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavourite"],

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      // validator: (value) => {
      //   return value === "0" || value === "1";
      // },
    },
  },

  emits: ["toggle-favorite", "delete"],

  // emits: {
  //   "toggle-favorite": (id) => {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("This is wrong");
  //       false;
  //     }
  //   },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },

    // Additional alternative to call emit
    // deleteFriend()
    // {
    //   this.$emit('delete')
    // }
  },
};
</script>
