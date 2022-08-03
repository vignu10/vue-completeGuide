<template>
  <div>
    <li>
      <ul>
        <li><strong>Name:</strong> {{ name }}</li>
        <li><strong>Age</strong> {{ age }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
