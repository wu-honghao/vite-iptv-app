import serverAxios from "../index";

const getTvList = () => {
  return serverAxios({
    url: "https://iptv-org.github.io/iptv/countries/cn.m3u",
    method: "get",
  });
};

export { getTvList };
