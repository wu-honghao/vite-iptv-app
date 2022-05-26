import { createStore } from "vuex";
import { getTvList } from "../http/api/user.js";
import parser from "iptv-playlist-parser";
const store = createStore({
  state() {
    return {
      inptList: [],
      watching: [],
    };
  },
  getters: {},
  mutations: {
    setIPTVlist(state, data) {
      state.inptList = data;
    },
    addWatching(state, data) {
      state.watching = [];
      state.watching.push(data);
    },
  },
  actions: {
    async setIPTVlist(context) {
      const list = await getTvList();
      const result = parser.parse(list);
      console.log(result);
      context.commit("setIPTVlist", result);
    },
  },
});
export default store;
