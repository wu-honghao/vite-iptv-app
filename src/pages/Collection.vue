<template>
  <!-- 页头 -->
  <a-page-header
    style="
      position: fixed;
      top: -1px;
      background-color: white;
      z-index: 15;
      width: 100%;
      min-height: 72px;
    "
    title="你的收藏"
    @back="back"
  />

  <main>
    <div v-if="collectionChannel != null">
      <ChannelVirtualList
        :iptvListAll="collectionChannel"
        modelName="collection"
        style="padding-top: 72px"
      ></ChannelVirtualList>
      <ChannelCard
        :iptvListAll="collectionChannel"
        modelName="collection"
      ></ChannelCard>
    </div>

    <a-empty description="暂无" v-else style="margin-top: 80px" />
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { back } from "../hooks/utils.js";

const store = useStore();
const router = useRouter();

const collectionChannel = computed(() =>
  store.state.collectionChannel.length > 0
    ? store.state.collectionChannel
    : null
);
</script>

<style lang="scss"></style>
