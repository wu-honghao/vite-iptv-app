import{A as m,a6 as U,an as f,a9 as M}from"./index.90ba19b0.js";import{b as V,I as B}from"./index.dd95ec36.js";import{a as o,C as $,N as k,B as x,D as _,E as h,G as A,F as N,Y as w,M as p,J as C,I as s,u as d,r as D,c as E,$ as I,e as F,a0 as G}from"./index.e84d594c.js";var J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},T=J;function L(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.forEach(function(r){Y(n,r,e[r])})}return n}function Y(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var g=function(t,e){var a=L({},t,e.attrs);return o(m,L({},a,{icon:T}),null)};g.displayName="CopyOutlined";g.inheritAttrs=!1;var q=g,Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},W=Q;function R(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.forEach(function(r){X(n,r,e[r])})}return n}function X(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var b=function(t,e){var a=R({},t,e.attrs);return o(m,R({},a,{icon:W}),null)};b.displayName="DeleteOutlined";b.inheritAttrs=!1;var P=b,Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},K=Z;function S(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.forEach(function(r){ee(n,r,e[r])})}return n}function ee(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var O=function(t,e){var a=S({},t,e.attrs);return o(m,S({},a,{icon:K}),null)};O.displayName="DownloadOutlined";O.inheritAttrs=!1;var te=O,ne="/vite-iptv-app/icons/iptv-profiles.png";const ae=["onClick"],re=["onClick"],oe={name:"SubscribeShowCard",props:{channelURL:Array},setup(n){const t=$();k();const e=x(),a=l=>{t.push({name:"Home",params:{url:l}}),e.commit("updateCurrentURL",l)},r=l=>{e.commit("deleteURL",l)};return(l,y)=>{const u=U;return _(!0),h(N,null,A(n.channelURL,(c,v)=>(_(),h("div",{key:n.channelURL,class:"showURL",onClick:w(i=>a(c),["self"])},[p("a",{onClick:w(i=>a(c),["self"])}," \u6E90"+C(v+1)+" :"+C(c.split("/")[c.split("/").length-1]),9,re),o(u,{size:"large",onClick:i=>r(c)},{icon:s(()=>[o(d(P))]),_:2},1032,["onClick"])],8,ae))),128)}}};const le={id:"app-subscribe"},ce=p("img",{src:ne},null,-1),se={href:"https://github.com/iptv-org/iptv",target:"_blank"},ie=F(" Download "),ue={class:"show-url-box"},fe={name:"index",setup(n){const t=x();$();const e=D(""),a=()=>{e.value=""},r=D(!1),l=async()=>{if(e.value!=""){try{r.value=!0;const u=await G(e.value);t.state.channelURL.indexOf(e.value)!=-1?f.info("Channel already exists"):(t.commit("updateChannelURL",e.value),f.success("Add Channel successful"))}catch(u){f.error(u.message)}r.value=!1}},y=E(()=>t.state.channelURL);return(u,c)=>{const v=B,i=U,z=M,H=V;return _(),h("div",le,[ce,o(H,{compact:""},{default:s(()=>[o(v,{value:e.value,"onUpdate:value":c[0]||(c[0]=j=>e.value=j),size:"large",placeholder:"Download from a URL",class:"input",onKeyup:I(l,["enter"])},null,8,["value","onKeyup"]),o(z,{title:"please copy git url"},{default:s(()=>[o(i,{size:"large"},{icon:s(()=>[p("a",se,[o(d(q))])]),_:1})]),_:1}),o(i,{size:"large",onClick:a},{icon:s(()=>[o(d(P))]),_:1}),o(i,{type:"primary",size:"large",class:"download",style:{background:"#4285f4"},onClick:l,loading:r.value},{icon:s(()=>[o(d(te))]),default:s(()=>[ie]),_:1},8,["loading"])]),_:1}),p("div",ue,[o(oe,{channelURL:d(y)},null,8,["channelURL"])])])}}};export{fe as default};
