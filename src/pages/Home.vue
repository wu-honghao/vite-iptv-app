<template>
  <div id="app-home">
    <!-- 页头 -->
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Home"
      sub-title="Welcome to IPTV"
    >
      <template #extra>
        <!-- 搜索模块 -->
        <div class="search-box">
          <a-row class="global-search-wrapper" style="width: 300px">
            <a-col :span="24">
              <a-auto-complete
                v-model:value="inputValue"
                :dropdown-match-select-width="252"
                style="width: 300px"
                :options="dataSource"
                @select="onSelect"
                @search="handleSearch"
                disabled
              >
                <template #option="item">
                  <div style="display: flex; justify-content: space-between">
                    <span>
                      Found {{ item.query }} on
                      <a target="_blank" rel="noopener noreferrer">
                        {{ item.category }}
                      </a>
                    </span>
                    <span>{{ item.count }} results</span>
                  </div>
                </template>
                <a-input-search
                  size="large"
                  placeholder="功能模块更新中~"
                  enter-button
                ></a-input-search> </a-auto-complete
            ></a-col>
          </a-row>

          <!-- 频道数量显示 -->
          <a-row>
            <a-col :span="24">
              <a-statistic
                title="中国源频道数量"
                :value="iptvListAll ? iptvListAll.length : 0"
              />
            </a-col>
          </a-row>
        </div>
      </template>
    </a-page-header>

    <div class="example" v-if="!iptvListAll">
      <a-spin />
    </div>

    <!-- iptv频道列表 -->
    <div class="iptv-list-box" v-else>
      <a-card
        hoverable
        style="width: 240px"
        v-for="(item, index) in iptvListShow"
        :key="index"
        class="iptv-list"
        @click="toDetails(item.name)"
      >
        <template #cover>
          <a-empty :description="null" v-if="!item.tvg.logo" />
          <img
            v-else
            style="width: 50%"
            alt="example"
            :src="item.tvg.logo ? item.tvg.logo : ''"
          />
        </template>
        <a-card-meta :title="null">
          <template #description>{{ item.name }}</template>
        </a-card-meta>
      </a-card>
    </div>

    <!-- iptv列表分页 -->
    <a-pagination
      v-model:current="currentPage"
      v-model:pageSize="pageSize"
      :total="iptvListAll ? iptvListAll.length : 1"
      show-less-items
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// 搜索模块 还未实现功能：onSelect后将查询出来的数据分页展示在页面上
const inputModel = () => {
  const inputValue = ref("");
  const dataSource = ref([]);
  const searchResultInfo = ref([]);

  const onSelect = (value) => {
    searchResultInfo.value = iptvListAll.value.filter(
      (element) => element.name.indexOf(value) != -1
    );
  };

  const getRandomInt = (query) => {
    return iptvListAll.value.filter(
      (element) => element.name.indexOf(query) != -1
    ).length;
  };

  //and-design-vue的写法，只会使用但没有完全理解
  const searchResult = (query) => {
    return new Array()
      .join(".")
      .split(".")
      .map((_item, idx) => ({
        query,
        category: `${query}${idx}`,
        value: `${query}${idx}`,
        count: getRandomInt(query),
      }));
  };

  const handleSearch = (val) => {
    dataSource.value = val ? searchResult(val) : [];
  };

  return {
    inputValue,
    dataSource,
    onSelect,
    handleSearch,
  };
};
// 搜索模块的使用
const { inputValue, searchResultInfo, dataSource, onSelect, handleSearch } =
  inputModel();

// iptv列表展示模块
const iptvListModel = () => {
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
  const currentPage = ref(1);
  const pageSize = ref(10);
  const iptvListShow = computed(() => {
    if (iptvListAll) {
      return iptvListAll.value.slice(
        (currentPage.value - 1) * 10,
        currentPage.value * pageSize.value
      );
    }
  });

  onMounted(() => {
    store.dispatch("setIPTVlist");
  });

  return { iptvListAll, toDetails, currentPage, pageSize, iptvListShow };
};
// iptv列表展示模块的使用
const { iptvListAll, toDetails, currentPage, pageSize, iptvListShow } =
  iptvListModel();
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

  @media screen and (min-width: 500px) and (max-width: 767px) {
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
      }
    }
    .search-box {
      display: flex;
      align-items: center;
      min-width: 450px;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 768px) {
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
  }

  .iptv-list-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .iptv-list {
      max-height: 75vh;
      cursor: pointer;
      overflow: hidden;

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
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
}
</style>
