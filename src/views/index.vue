<template>
  <router-view />
</template>

<script>
import { determineHome } from "@/mixin/root";

export default {
  beforeRouteEnter: determineHome,
  beforeRouteUpdate: determineHome,
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
