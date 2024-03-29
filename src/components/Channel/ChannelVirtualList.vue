<template>
  <div class="channel-list">
    <VirtualList
      :data="iptvListShow"
      :itemSize="120"
      :poolBuffer="20"
      ref="channelList"
      class="demo-loadmore-list"
      style="height: 93%"
      @scroll="scrollChannelList"
      dataKey="tvg"
    >
      <template v-slot="{ item, index }">
        <div class="channel-list_itembox" @click="toDetails(item.name)">
          <div class="channel-list_photoItem">
            <a-empty
              :description="null"
              v-if="!item.tvg.logo || item.tvg.logo === 'error'"
              class="channel-list_empty"
            />
            <img
              :src="item.tvg.logo ? item.tvg.logo : ''"
              v-else
              @error="onPhotoError(item)"
              class="channel-list_tvg-logo"
              alt="tvg_logo"
            />
          </div>

          <div
            class="channel-list_itemname"
            style="flex: 0 0 30%; color: #8c8c8c"
          >
            {{ item.name }}
          </div>

          <div
            style="
              flex: 0 0 20%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
            class="channel-list_right"
          >
            <a-tooltip
              style="z-index: 0"
              :title="
                item.status === 'ok'
                  ? '频道可用'
                  : item.status === 'not-use'
                  ? '频道不可用'
                  : item.status === 'not-test'
                  ? '频道未检测'
                  : '频道测试中'
              "
            >
              <div
                @click.stop="testChannel(item.url)"
                class="url-status"
                :class="
                  item.status === 'ok'
                    ? 'success'
                    : item.status === 'not-use'
                    ? 'error'
                    : item.status === 'not-test'
                    ? 'not-test'
                    : 'testing'
                "
              ></div>
            </a-tooltip>
            <a-button
              key="list-loadmore-edit"
              @click.stop="toCollect(item)"
              v-if="modelName == 'main'"
              type="link"
              >收藏本台</a-button
            >
            <a-button
              key="list-loadmore-edit"
              @click.stop="toUnCollect(item)"
              v-if="modelName == 'collection'"
              type="link"
            >
              取消收藏
            </a-button>
          </div>
        </div>
      </template>
    </VirtualList>
    <div
      :style="{
        textAlign: 'center',
        height: '5%',
        lineHeight: '50px',
      }"
      class="loading-button"
    >
      <a-button
        v-if="isCanLoad"
        @click="
          () => {
            currentPage++;
          }
        "
        type="primary"
        >加载更多频道</a-button
      >
      <div v-else>欢迎访问 iptv.hellozero.site</div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, reactive } from "vue";
import { VirtualList } from "vue3-virtual-list";
// iptv虚拟列表 screen 手机端
import "swiper/css";
import { computed, onUpdated, ref, toRefs, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { testURL } from "../../http/api/user.js";
import { toCollect, toUnCollect } from "../../hooks/user.js";

const props = defineProps({
  iptvListAll: {
    type: Array,
    required: true,
  },
  modelName: String,
});

const { iptvListAll } = toRefs(props);

const store = useStore();
const router = useRouter();

//分页展示iptv列表
const currentPage = ref(store.state.currentPage);
watch(currentPage, (val) => store.commit("updateCurrentPage", val));

const pageSize = ref(10);

const iptvListShow = computed(() => {
  if (store.state.searchResultInfo.length > 0) {
    return store.state.searchResultInfo;
  }

  if (iptvListAll.value) {
    return iptvListAll.value.slice(0, currentPage.value * pageSize.value);
  }
});

const rateValue = ref(2);

// 去详情页
const toDetails = (name) => {
  store.commit(
    "addWatching",
    iptvListShow.value.find((item) => item.name === name)
  );

  router.push("/TvPlayPage");
};

// 测试频道是否可用
const testChannel = async (url) => {
  iptvListShow.value.find((channel) => channel.url === url).status = "testing";
  try {
    const res = await testURL(url);

    iptvListShow.value.find((channel) => channel.url === url).status = "ok";
  } catch (error) {
    iptvListShow.value.find((channel) => channel.url === url).status =
      "not-use";
  }
};
const testAllChannel = () => {
  iptvListShow.value.forEach((channel) => {
    testChannel(channel.url);
  });
};

// 滑动到底部显示loading按钮
const isCanLoad = ref(false);
const scrollChannelList = (e) => {
  store.commit("updateChannelListScrollTop", e.srcElement.scrollTop);

  if (
    Math.round(e.srcElement.scrollTop + e.srcElement.clientHeight) >=
    e.srcElement.scrollHeight
  ) {
    isCanLoad.value = true;
  } else {
    isCanLoad.value = false;
  }
};

const channelList = ref(null);
onUpdated(() => {
  const { channelListScrollTop } = store.state;
  channelList.value.$el.scrollTo(
    0,
    channelListScrollTop === 0 ? 1 : channelListScrollTop
  );

  testAllChannel();
});

const onPhotoError = async (errorItem) => {
  iptvListShow.value.find((item) => {
    return errorItem.name === item.name;
  }).tvg.logo = "error";
};
</script>
  
<style lang="scss">
.ant-tooltip {
  z-index: 0;
}

@media screen and (max-width: 1024px) {
  .channel-list {
    height: 100%;

    &_tvg-logo {
      max-width: 70px;
      max-height: 70px;
    }

    &_itembox {
      display: flex;
      border-bottom: 1px solid rgb(235, 237, 240);
      height: 100%;
      align-items: center;
      justify-content: space-around;
    }

    &_photoItem {
      height: 80%;
      width: 20%;
      line-height: 80px;
    }

    &_empty {
      display: flex;
      justify-content: center;

      > :first-child {
        > :first-child {
          max-width: 70px;
          max-height: 70px;
        }
      }
    }
  }
  .demo-loadmore-list {
    .loading-button {
      position: relative;
      bottom: 0;
      width: 100%;
      z-index: 15;
      > :first-child {
        width: 100%;
        height: 100%;
        color: white;
        background: #418dd3;
      }
    }

    .url-status {
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: relative;
      margin-right: 10px;
    }
    .success {
      background: rgb(66, 133, 244);
    }
    .error {
      background: red;
    }
    .not-test {
      background: rgb(128, 124, 124);
    }
    .testing {
      background: rgb(250, 175, 0);
    }

    .collection-slide {
      height: 100%;
      width: 100%;
      text-align: left;
      padding-left: 40px;
      align-self: center;
    }

    .ant-list-item {
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        border-color: transparent;
        box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%),
          0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
      }

      @media screen and (max-width: 475px) {
        .ant-list-item-meta-avatar {
          img {
            max-width: 50px;
            max-height: 50px;
            margin-left: 20px;
          }
        }
        .ant-empty {
          .ant-empty-img-default {
            max-width: 50px;
            max-height: 50px;
            margin-left: 20px;
          }
        }
      }

      @media screen and (min-width: 475px) {
        .ant-list-item-meta-avatar {
          img {
            max-width: 100px;
            max-height: 100px;
            margin-left: 20px;
          }
        }
        .ant-empty {
          margin: 0;

          .ant-empty-img-default {
            max-width: 100px;
            max-height: 100px;
            margin-left: 20px;
          }
        }
      }

      .ant-list-item-meta {
        align-items: center;

        .ant-list-item-meta-avatar {
          display: flex;
          justify-content: center;
        }

        .ant-empty {
          margin: 0;
          .ant-empty-image {
            height: auto;
          }
        }
      }
      .ant-list-item-action {
        margin-right: 20px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .demo-loadmore-list {
    display: none;
  }
}
</style>
  