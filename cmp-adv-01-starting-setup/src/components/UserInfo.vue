<template>
  <section>
    <base-card>
      <template v-slot:header>
        <header>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </header>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
