<template>
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
              :disabled="false"
            >
              <template #option="item">
                <div style="display: flex; justify-content: space-between">
                  <span>
                    <a target="_blank" rel="noopener noreferrer">
                      {{ item.value }}
                    </a>
                  </span>
                  <span v-if="item.count == 0">{{ item.count }} results</span>
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
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, toRefs, watch } from "vue";
import { symbol } from "vue-types";

const props = defineProps({
  iptvListAll: {
    type: Array,
    required: true,
  },
});

const { iptvListAll } = toRefs(props);

const store = useStore();
const inputValue = ref("");
const dataSource = ref([]);

const searchResultInfo = ref(store.state.searchResultInfo);
watch(searchResultInfo, (val) => store.commit("addSearchResultInfo", val));

const onSelect = (value) => {
  searchResultInfo.value = iptvListAll.value.filter(
    (element) => element.name.toLowerCase() === value.toLowerCase()
  );
};

// 搜索用户输入数据
const queryInfo = (query) => {
  return iptvListAll.value.filter((element) =>
    element.name.toLowerCase().startsWith(query.toLowerCase())
  );
};

// 对搜索的结果做二次处理
const searchResult = (query) => {
  const result = queryInfo(query.trim());

  let resultArrLen;
  if (result.length > 10) {
    resultArrLen = 10;
  } else {
    resultArrLen = result.length;
  }

  return new Array(resultArrLen)
    .join(".")
    .split(".")
    .map((_item, idx) => ({
      id: symbol(idx),
      value: `${result[idx] ? result[idx].name : "精确匹配找不到噢~"}`,
      count: result.length,
    }));
};

const handleSearch = (val) => {
  if (val == "") {
    store.commit("deleteSearchResultInfo");
  }

  dataSource.value = val ? searchResult(val) : [];
};
</script>
