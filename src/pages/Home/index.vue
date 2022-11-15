<template>
  <div id="app-home">
    <Header :iptvListAll="iptvListAll" class="header"></Header>
    <!-- 展示卡片 -->
    <main>
      <ChannelVirtualList
        :iptvListAll="iptvListAll"
        modelName="main"
        class="main-channel-list"
      ></ChannelVirtualList>
      <ChannelCard :iptvListAll="iptvListAll" modelName="main"></ChannelCard>
    </main>
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Header from "./Header.vue";

const store = useStore();

const iptvListAll = computed(() =>
  store.state.inptList ? store.state.inptList : null
);

const route = useRoute();

onMounted(() => {
  store.dispatch("setIPTVlist", store.state.currentURL);
});
</script>

<style lang="scss">
#app-home {
  height: 100%;
  main {
    height: 100%;
  }

  .header {
    max-height: 120px;
  }

  @media screen and (max-width: 1024px) {
    .main-channel-list {
      padding-top: 85px;
    }
  }
  @media screen and (max-width: 512px) {
    .main-channel-list {
      padding-top: 120px;
    }
  }
}
</style>
