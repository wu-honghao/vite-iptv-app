import{c as l,V as Y,r as T,z as ee,o as he,O as _e,L as Oe,d as D,P as S,u as M,x as re,b as pe,j as ie,R as X,a8 as F,a as A,_ as I,e as k,a3 as be,Z as Pe,ar as Z,F as xe,f as J,w as Ce,N as Se,A as Ae,B as we,aJ as ke,aK as Re,aL as je}from"./index.42ee1e3f.js";import{y as ue,C as Be,z as Ne,R as ge,i as Te,F as Ie,G as Ee,o as ze,e as De,H as $e,c as Le,I as He,M as ce,K as se,J as Fe}from"./index.950c1ea9.js";var Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},Ue=Me;function ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),a.forEach(function(r){We(t,r,n[r])})}return t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var te=function(e,n){var a=ve({},e,n.attrs);return l(Y,ve({},a,{icon:Ue}),null)};te.displayName="DownOutlined";te.inheritAttrs=!1;var Ge=te;function Ke(){var t=T({}),e=null;return ee(function(){e=ue.subscribe(function(n){t.value=n})}),he(function(){ue.unsubscribe(e)}),t}function Ve(t){var e=_e();return Oe(function(){e.value=t()},{flush:"sync"}),e}var Je=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:S.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},Xe=D({name:"AAvatar",inheritAttrs:!1,props:Je(),slots:["icon"],setup:function(e,n){var a=n.slots,r=n.attrs,p=T(!0),v=T(!1),b=T(1),h=T(null),O=T(null),y=M("avatar",e),s=y.prefixCls,m=Be(),i=re(function(){return e.size==="default"?m.value:e.size}),f=Ke(),d=Ve(function(){if(pe(e.size)==="object"){var c=Ne.find(function(u){return f.value[u]}),o=e.size[c];return o}}),x=function(o){return d.value?{width:"".concat(d.value,"px"),height:"".concat(d.value,"px"),lineHeight:"".concat(d.value,"px"),fontSize:"".concat(o?d.value/2:18,"px")}:{}},_=function(){if(!(!h.value||!O.value)){var o=h.value.offsetWidth,u=O.value.offsetWidth;if(o!==0&&u!==0){var g=e.gap,P=g===void 0?4:g;P*2<u&&(b.value=u-P*2<o?(u-P*2)/o:1)}}},C=function(){var o=e.loadError,u=o==null?void 0:o();u!==!1&&(p.value=!1)};return ie(function(){return e.src},function(){X(function(){p.value=!0,b.value=1})}),ie(function(){return e.gap},function(){X(function(){_()})}),ee(function(){X(function(){_(),v.value=!0})}),function(){var c,o,u=e.shape,g=e.src,P=e.alt,R=e.srcset,w=e.draggable,$=e.crossOrigin,B=F(a,e,"icon"),j=s.value,G=(c={},A(c,"".concat(r.class),!!r.class),A(c,j,!0),A(c,"".concat(j,"-lg"),i.value==="large"),A(c,"".concat(j,"-sm"),i.value==="small"),A(c,"".concat(j,"-").concat(u),u),A(c,"".concat(j,"-image"),g&&p.value),A(c,"".concat(j,"-icon"),B),c),L=typeof i.value=="number"?{width:"".concat(i.value,"px"),height:"".concat(i.value,"px"),lineHeight:"".concat(i.value,"px"),fontSize:B?"".concat(i.value/2,"px"):"18px"}:{},E=(o=a.default)===null||o===void 0?void 0:o.call(a),N;if(g&&p.value)N=l("img",{draggable:w,src:g,srcset:R,onError:C,alt:P,crossorigin:$},null);else if(B)N=B;else if(v.value||b.value!==1){var H="scale(".concat(b.value,") translateX(-50%)"),z={msTransform:H,WebkitTransform:H,transform:H},K=typeof i.value=="number"?{lineHeight:"".concat(i.value,"px")}:{};N=l(ge,{onResize:_},{default:function(){return[l("span",{class:"".concat(j,"-string"),ref:h,style:I(I({},K),z)},[E])]}})}else N=l("span",{class:"".concat(j,"-string"),ref:h,style:{opacity:0}},[E]);return l("span",k(k({},r),{},{ref:O,class:G,style:[L,x(!!B),r.style]}),[N])}}}),U=Xe,Ze=function(){return I(I({},Ie()),{content:S.any,title:S.any})},qe=D({name:"APopover",props:Te(Ze(),I(I({},Ee()),{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,n){var a=n.expose,r=n.slots,p=T();a({getPopupDomNode:function(){var m,i;return(i=(m=p.value)===null||m===void 0?void 0:m.getPopupDomNode)===null||i===void 0?void 0:i.call(m)}});var v=M("popover",e),b=v.prefixCls,h=v.configProvider,O=re(function(){return h.getPrefixCls()}),y=function(){var m,i,f=e.title,d=f===void 0?Z((m=r.title)===null||m===void 0?void 0:m.call(r)):f,x=e.content,_=x===void 0?Z((i=r.content)===null||i===void 0?void 0:i.call(r)):x,C=!!(Array.isArray(d)?d.length:d),c=!!(Array.isArray(_)?_.length:d);if(!(!C&&!c))return l(xe,null,[C&&l("div",{class:"".concat(b.value,"-title")},[d]),l("div",{class:"".concat(b.value,"-inner-content")},[_])])};return function(){return l(De,k(k({},ze(e,["title","content"])),{},{prefixCls:b.value,ref:p,transitionName:Pe(O.value,"zoom-big",e.transitionName)}),{title:y,default:r.default})}}}),Qe=be(qe),Ye=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},er=D({name:"AAvatarGroup",inheritAttrs:!1,props:Ye(),setup:function(e,n){var a=n.slots,r=n.attrs,p=M("avatar-group",e),v=p.prefixCls,b=p.direction;return $e(e),function(){var h,O=e.maxPopoverPlacement,y=O===void 0?"top":O,s=e.maxCount,m=e.maxStyle,i=e.maxPopoverTrigger,f=i===void 0?"hover":i,d=(h={},A(h,v.value,!0),A(h,"".concat(v.value,"-rtl"),b.value==="rtl"),A(h,"".concat(r.class),!!r.class),h),x=F(a,e),_=J(x).map(function(u,g){return Le(u,{key:"avatar-key-".concat(g)})}),C=_.length;if(s&&s<C){var c=_.slice(0,s),o=_.slice(s,C);return c.push(l(Qe,{key:"avatar-popover-key",content:o,trigger:f,placement:y,overlayClassName:"".concat(v.value,"-popover")},{default:function(){return[l(U,{style:m},{default:function(){return["+".concat(C-s)]}})]}})),l("div",k(k({},r),{},{class:d,style:r.style}),[c])}return l("div",k(k({},r),{},{class:d,style:r.style}),[_])}}}),q=er;U.Group=q;U.install=function(t){return t.component(U.name,U),t.component(q.name,q),t};var rr=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]]);return n},tr=function(){return{prefixCls:String,href:String,separator:S.any,overlay:S.any,onClick:Function}},V=D({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:tr(),slots:["separator","overlay"],setup:function(e,n){var a=n.slots,r=n.attrs,p=M("breadcrumb",e),v=p.prefixCls,b=function(O,y){var s=F(a,e,"overlay");return s?l(He,{overlay:s,placement:"bottom"},{default:function(){return[l("span",{class:"".concat(y,"-overlay-link")},[O,l(Ge,null,null)])]}}):O};return function(){var h,O=(h=F(a,e,"separator"))!==null&&h!==void 0?h:"/",y=F(a,e),s=r.class,m=r.style,i=rr(r,["class","style"]),f;return e.href!==void 0?f=l("a",k({class:"".concat(v.value,"-link"),onClick:e.onClick},i),[y]):f=l("span",k({class:"".concat(v.value,"-link"),onClick:e.onClick},i),[y]),f=b(f,v.value),y?l("span",{class:s,style:m},[f,O&&l("span",{class:"".concat(v.value,"-separator")},[O])]):null}}}),ar=function(){return{prefixCls:String,routes:{type:Array},params:S.any,separator:S.any,itemRender:{type:Function}}};function nr(t,e){if(!t.breadcrumbName)return null;var n=Object.keys(e).join("|"),a=t.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(r,p){return e[p]||r});return a}function fe(t){var e=t.route,n=t.params,a=t.routes,r=t.paths,p=a.indexOf(e)===a.length-1,v=nr(e,n);return p?l("span",null,[v]):l("a",{href:"#/".concat(r.join("/"))},[v])}var W=D({name:"ABreadcrumb",props:ar(),slots:["separator","itemRender"],setup:function(e,n){var a=n.slots,r=M("breadcrumb",e),p=r.prefixCls,v=r.direction,b=function(s,m){return s=(s||"").replace(/^\//,""),Object.keys(m).forEach(function(i){s=s.replace(":".concat(i),m[i])}),s},h=function(s,m,i){var f=Ae(s),d=b(m||"",i);return d&&f.push(d),f},O=function(s){var m=s.routes,i=m===void 0?[]:m,f=s.params,d=f===void 0?{}:f,x=s.separator,_=s.itemRender,C=_===void 0?fe:_,c=[];return i.map(function(o){var u=b(o.path,d);u&&c.push(u);var g=[].concat(c),P=null;return o.children&&o.children.length&&(P=l(ce,null,{default:function(){return[o.children.map(function(w){return l(ce.Item,{key:w.path||w.breadcrumbName},{default:function(){return[C({route:w,params:d,routes:i,paths:h(g,w.path,d)})]}})})]}})),l(V,{overlay:P,separator:x,key:u||o.breadcrumbName},{default:function(){return[C({route:o,params:d,routes:i,paths:g})]}})})};return function(){var y,s,m,i=e.routes,f=e.params,d=f===void 0?{}:f,x=J(F(a,e)),_=(s=F(a,e,"separator"))!==null&&s!==void 0?s:"/",C=e.itemRender||a.itemRender||fe;i&&i.length>0?m=O({routes:i,params:d,separator:_,itemRender:C}):x.length&&(m=x.map(function(o,u){return Ce(pe(o.type)==="object"&&(o.type.__ANT_BREADCRUMB_ITEM||o.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Se(o,{separator:_,key:u})}));var c=(y={},A(y,p.value,!0),A(y,"".concat(p.value,"-rtl"),v.value==="rtl"),y);return l("div",{class:c},[m])}}}),or=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]]);return n},lr=function(){return{prefixCls:String}},Q=D({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:lr(),setup:function(e,n){var a=n.slots,r=n.attrs,p=M("breadcrumb",e),v=p.prefixCls;return function(){var b;r.separator;var h=r.class,O=or(r,["separator","class"]),y=J((b=a.default)===null||b===void 0?void 0:b.call(a));return l("span",k({class:["".concat(v.value,"-separator"),h]},O),[y.length>0?y:"/"])}}});W.Item=V;W.Separator=Q;W.install=function(t){return t.component(W.name,W),t.component(V.name,V),t.component(Q.name,Q),t};var ir={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},ur=ir;function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),a.forEach(function(r){cr(t,r,n[r])})}return t}function cr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ae=function(e,n){var a=de({},e,n.attrs);return l(Y,de({},a,{icon:ur}),null)};ae.displayName="ArrowLeftOutlined";ae.inheritAttrs=!1;var sr=ae,vr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},fr=vr;function me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),a.forEach(function(r){dr(t,r,n[r])})}return t}function dr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ne=function(e,n){var a=me({},e,n.attrs);return l(Y,me({},a,{icon:fr}),null)};ne.displayName="ArrowRightOutlined";ne.inheritAttrs=!1;var mr=ne,pr=globalThis&&globalThis.__rest||function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]]);return n},br={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},gr=D({name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,n){var a=n.slots,r=n.emit,p=n.attrs,v=n.expose,b=T(),h=function(f){var d=f.keyCode;d===se.ENTER&&f.preventDefault()},O=function(f){var d=f.keyCode;d===se.ENTER&&r("click",f)},y=function(f){r("click",f)},s=function(){b.value&&b.value.focus()},m=function(){b.value&&b.value.blur()};return ee(function(){e.autofocus&&s()}),v({focus:s,blur:m}),function(){var i,f=e.noStyle,d=e.disabled,x=pr(e,["noStyle","disabled"]),_={};return f||(_=I({},br)),d&&(_.pointerEvents="none"),l("div",k(k(k({role:"button",tabindex:0,ref:b},x),p),{},{onClick:y,onKeydown:h,onKeyup:O,style:I(I({},_),p.style||{})}),[(i=a.default)===null||i===void 0?void 0:i.call(a)])}}}),yr=gr,hr=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},_r=D({name:"APageHeader",props:hr(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(e,n){var a=n.emit,r=n.slots,p=M("page-header",e),v=p.prefixCls,b=p.direction,h=p.pageHeader,O=T(!1),y=Fe(),s=function(o){var u=o.width;y.value||(O.value=u<768)},m=re(function(){var c,o,u;return(u=(c=e.ghost)!==null&&c!==void 0?c:(o=h.value)===null||o===void 0?void 0:o.ghost)!==null&&u!==void 0?u:!0}),i=function(){var o,u,g;return(g=(o=e.backIcon)!==null&&o!==void 0?o:(u=r.backIcon)===null||u===void 0?void 0:u.call(r))!==null&&g!==void 0?g:b.value==="rtl"?l(mr,null,null):l(sr,null,null)},f=function(o){return!o||!e.onBack?null:l(Re,{componentName:"PageHeader",children:function(g){var P=g.back;return l("div",{class:"".concat(v.value,"-back")},[l(yr,{onClick:function(w){a("back",w)},class:"".concat(v.value,"-back-button"),"aria-label":P},{default:function(){return[o]}})])}},null)},d=function(){var o;return e.breadcrumb?l(W,e.breadcrumb,null):(o=r.breadcrumb)===null||o===void 0?void 0:o.call(r)},x=function(){var o,u,g,P,R,w,$,B,j,G=e.avatar,L=(o=e.title)!==null&&o!==void 0?o:(u=r.title)===null||u===void 0?void 0:u.call(r),E=(g=e.subTitle)!==null&&g!==void 0?g:(P=r.subTitle)===null||P===void 0?void 0:P.call(r),N=(R=e.tags)!==null&&R!==void 0?R:(w=r.tags)===null||w===void 0?void 0:w.call(r),H=($=e.extra)!==null&&$!==void 0?$:(B=r.extra)===null||B===void 0?void 0:B.call(r),z="".concat(v.value,"-heading"),K=L||E||N||H;if(!K)return null;var oe=i(),le=f(oe),ye=le||G||K;return l("div",{class:z},[ye&&l("div",{class:"".concat(z,"-left")},[le,G?l(U,G,null):(j=r.avatar)===null||j===void 0?void 0:j.call(r),L&&l("span",{class:"".concat(z,"-title"),title:typeof L=="string"?L:void 0},[L]),E&&l("span",{class:"".concat(z,"-sub-title"),title:typeof E=="string"?E:void 0},[E]),N&&l("span",{class:"".concat(z,"-tags")},[N])]),H&&l("span",{class:"".concat(z,"-extra")},[H])])},_=function(){var o,u,g=(o=e.footer)!==null&&o!==void 0?o:Z((u=r.footer)===null||u===void 0?void 0:u.call(r));return ke(g)?null:l("div",{class:"".concat(v.value,"-footer")},[g])},C=function(o){return l("div",{class:"".concat(v.value,"-content")},[o])};return function(){var c,o,u,g=((o=e.breadcrumb)===null||o===void 0?void 0:o.routes)||r.breadcrumb,P=e.footer||r.footer,R=J((u=r.default)===null||u===void 0?void 0:u.call(r)),w=we(v.value,(c={"has-breadcrumb":g,"has-footer":P},A(c,"".concat(v.value,"-ghost"),m.value),A(c,"".concat(v.value,"-rtl"),b.value==="rtl"),A(c,"".concat(v.value,"-compact"),O.value),c));return l(ge,{onResize:s},{default:function(){return[l("div",{class:w},[d(),x(),R.length?C(R):null,_()])]}})}}}),xr=be(_r);const Cr=()=>{je.back(-1)};export{Ge as D,xr as _,Cr as b,Ke as u};
