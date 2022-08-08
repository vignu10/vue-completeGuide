<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals-vue #default="slotProps">
      <h2>{{ slotProps.item }}</h2></course-goals-vue
    >
    <active-goals></active-goals>
    <managed-goals></managed-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import courseGoalsVue from "./components/courseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManagedGoals from "./components/ManagedGoals.vue";
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    courseGoalsVue,
    ManagedGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
