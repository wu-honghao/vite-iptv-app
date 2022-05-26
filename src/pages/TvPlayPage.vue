<template>
  <div id="app-tv-play-page">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="IPTV Details"
      sub-title="Welcome to IPTV Details"
      @back="returnHome"
    />

    <div class="example" v-if="isNotPlay">
      <a-spin />
    </div>

    <video
      id="videoPlayer"
      class="vjs-default-skin"
      controls
      preload="auto"
      muted
    >
      <source :src="playerInfo.length > 0? playerInfo[0].url : 'http://210.210.155.35/dr9445/h/h16/02.m3u8'" type="application/x-mpegURL" />
    </video>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Videojs from "video.js";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import { message } from 'ant-design-vue';

const router = useRouter();
const store = useStore();

const returnHome = () => {
  router.push("/");
};

let myPlyer = null;
let isNotPlay = ref(true);
const playerInfo = computed(() => store.state.watching);
console.log(playerInfo)

onMounted(() => {
  // videojs的第一个参数表示的是，文档中video的id
  myPlyer = Videojs("videoPlayer", {
    bigPlayButton: false,
    textTrackDisplay: false,
    posterImage: true,
    errorDisplay: false,
    controlBar: false,
    muted: true, //静音模式 解决首次页面加载播放。
  });

  myPlyer.ready(async function () {
    try {
      var promise = await myPlyer.play();
      console.log(promise)
      isNotPlay.value = false;
    } catch (error) {
      console.log(error)
      message.error('播放失败，源加载出错啦！换一个看吧~');
      returnHome()
    }
  });
});

onUnmounted(() => {
  if (myPlyer) {
    myPlyer.dispose();
  }
});
</script>

<style lang="scss">
#app-tv-play-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-page-header{
    width: 100%;
  }

  .btn-return-home {
    width: 100px;
    height: 40px;
  }

  .vjs-default-skin {
    width: 50%;
  }
  .example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
}
</style>
