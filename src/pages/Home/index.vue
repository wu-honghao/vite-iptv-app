<template>
  <div id="app-home">
    <Header :iptvListAll="iptvListAll"></Header>

    <div class="example" v-if="!iptvListAll">
      <a-spin />
    </div>

    <!-- iptv频道列表 -->
    <div class="iptv-list-box" v-else>
      <a-list :dataSource="iptvListShow">
        <template #loadMore>
          <div
            :style="{
              textAlign: 'center',
              marginTop: '12px',
              height: '32px',
              lineHeight: '32px',
            }"
          >
            <a-button
              @click="
                () => {
                  currentPage++;
                }
              "
              >loading more</a-button
            >
          </div>
        </template>
        <template #renderItem="{ item }">
          <a-card
            hoverable
            style="width: 240px"
            class="iptv-list"
            @click="toDetails(item.name)"
            :style="iptvListTotal < 10 ? 'flex:0.5 0 0;margin-top:50px;' : ''"
          >
            <template #cover>
              <a-empty :description="null" v-if="!item.tvg.logo" />
              <img
                v-else
                style="max-width: 150px; max-height: 200px"
                alt="example"
                :src="item.tvg.logo ? item.tvg.logo : ''"
              />
            </template>
            <a-card-meta :title="null">
              <template #description>{{ item.name }}</template>
            </a-card-meta>
          </a-card>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";

const store = useStore();
const router = useRouter();

const iptvListAll = computed(() => store.state.inptList.items);

// 去详情页
const toDetails = (name) => {
  store.commit(
    "addWatching",
    iptvListAll.value.find((item) => item.name === name)
  );

  router.push("/TvPlayPage");
};

//分页展示iptv列表
const currentPage = ref(store.state.currentPage);
watch(currentPage, (val) => {
  store.commit("updateCurrentPage", val);
});

const pageSize = ref(10);
const iptvListShow = computed(() => {
  if (store.state.searchResultInfo.length > 0) {
    return store.state.searchResultInfo;
  }

  if (iptvListAll.value) {
    return iptvListAll.value.slice(0, currentPage.value * pageSize.value);
  }
});
const iptvListTotal = computed(() => {
  if (store.state.searchResultInfo.length > 0) {
    return iptvListShow.value ? iptvListShow.value.length : 1;
  } else {
    return iptvListAll.value ? iptvListAll.value.length : 1;
  }
});

onMounted(() => {
  store.dispatch("setIPTVlist");
});
</script>

<style lang="scss">
#app-home {
  @media screen and (max-width: 500px) {
    .iptv-list {
      flex: 1 0 100%;
      width: 100%;
    }
    .ant-page-header-heading {
      display: flex;
      flex-direction: column;
      .ant-page-header-heading-left {
        display: flex;
        justify-content: center;
        > span {
          font-size: 28px;
        }
        > .ant-page-header-heading-sub-title {
          margin-right: 0;
        }
      }
    }
    .search-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 120px;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 768px) {
    .iptv-list {
      flex: 1 0 100%;
      width: 100%;
    }
    .ant-page-header-heading {
      display: flex;
      flex-direction: column;
      .ant-page-header-heading-left {
        display: flex;
        justify-content: center;
        > span {
          font-size: 28px;
        }
        > .ant-page-header-heading-sub-title {
          margin-right: 0;
        }
      }
    }
    .search-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 120px;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    .iptv-list {
      flex: 1 0 20%;
    }
    .search-box {
      display: flex;
      align-items: center;
      min-width: 450px;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 1366px) {
    .iptv-list {
      flex: 1 0 10%;
    }
    .search-box {
      display: flex;
      align-items: center;
      min-width: 450px;
      justify-content: space-around;
    }
    .iptv-list-box-active {
      display: block;
    }
  }

  .iptv-list-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* max-height: 300px; */
    .iptv-list {
      // max-height: 75vh;
      cursor: pointer;
      overflow: hidden;
      /* max-height: 300px; */
      .ant-empty-image {
        display: flex;
      }

      .ant-card-cover {
        display: flex;
        justify-content: center;
        min-height: 200px;
        align-items: center;
      }
    }
  }

  .ant-pagination {
    margin-top: 50px;
  }

  .example {
    width: 100%;
    height: 50vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
}
</style>
