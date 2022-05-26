<template>
  <div id="app-home">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Home"
      sub-title="Welcome to IPTV"
    />

    <div
      v-for="(item, index) in iptvList.items"
      :key="index"
      class="iptv-list"
      @click="toDetails(item.name)"
    >
      <p v-if="index < 100">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
store.dispatch("setIPTVlist");

const iptvList = computed(() => store.state.inptList);
const toDetails = (name) => {
  store.commit(
    "addWatching",
    iptvList.value.items.find((item) => item.name === name)
  );
  router.push("/TvPlayPage");
};
</script>

<style lang="scss">
#app-home {
  .iptv-list {
    height: 100px;
    cursor: pointer;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border: 1px solid white;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
