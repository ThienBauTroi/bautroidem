/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{397:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("384307db",content,!0,{sourceMap:!1})},426:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgBlVFBbsIwENzdhh6qUiUvaI4VVaX0CfwgOfRceBk8ABH4gX8ABw5IXPIDAtwAe7ADCiFCCoxkrcc7s17tMtWwTkPfo/d/BvLDpjUN+vO8mvfqBo/eBgTEcPePg7KhW83zbfVO5IFnNxVYd9vJUpW0bIFMBEhMBL9WMSOGIrByLfIu7aSWxPQIQIp342/QExDnelhttXIU3Qcha9Yic9piSnenU8OR979BsprLmYnf9MMrWp8uFoYXMWGTQYOC0qDFKBvySsPKzn5ypZRfNNdNr9OvUIz07FHtv0WR3I5+YrCOjJhhkCwz93YCVuJkYjaIUQwAAAAASUVORK5CYII="},427:function(t,e,n){t.exports=function(){"use strict";return function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes moveSlideshow { 100% { transform: translateX(-50%); } } .vifnslb-container[data-v-2964abc9] { width: 100%; overflow: hidden; } .vifnslb-element[data-v-2964abc9] { transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */ position: relative; overflow: hidden; animation-name: moveSlideshow; animation-iteration-count: infinite; animation-timing-function: linear; display: flex; width: max-content; min-width: 200%; } .vifnslb-bar[data-v-2964abc9] { width: 50%; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}(),{_scopeId:"data-v-2964abc9",name:"vue-infinite-slide-bar",props:{barStyle:Object,duration:{type:String,default:"12s"},direction:{type:String,default:"normal"},delay:{type:String,default:"0s"}},computed:{customStyle:function(){return Object.assign({},this.barStyle,{"animation-duration":this.duration,"animation-direction":this.direction,"animation-delay":this.delay})}},render:function(t){var e=t("div",{class:"vifnslb-bar"},this.$slots.default);return t("div",{class:["vifnslb-container"]},[t("div",{class:["vifnslb-element"],style:this.customStyle},[e,e])])}}}()},428:function(t,e,n){"use strict";n(397)},429:function(t,e,n){var r=n(37)(!1);r.push([t.i,".status[data-v-4b3cecaa]{color:green}.right span[data-v-4b3cecaa]{display:flex;flex-direction:column;align-items:flex-end;margin-bottom:8px}.reviews__wrapper[data-v-4b3cecaa]{width:100%;overflow:hidden}.reviews__title[data-v-4b3cecaa]{font-style:normal;font-weight:700;font-size:48px;margin:0}.card-carousel-wrapper[data-v-4b3cecaa]{display:flex;align-items:center;justify-content:center;margin:0 auto 40px}.card-carousel[data-v-4b3cecaa]{display:flex;justify-content:center;width:100%;overflow:hidden}.card-carousel--cards[data-v-4b3cecaa]{display:flex}.card-carousel--card[data-v-4b3cecaa]{display:flex;flex-direction:column;justify-content:space-between;width:420px;height:228px;padding:24px;margin-left:40px;border-radius:24px;border:1px solid rgba(0,0,0,.1);background-color:#fff;z-index:3;margin-bottom:2px}.header[data-v-4b3cecaa]{margin-bottom:12px;height:52px}.content[data-v-4b3cecaa]{line-height:1.6;height:106px;text-align:justify;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.user-avatar-container[data-v-4b3cecaa]{width:55px;height:55px;border-radius:50%;overflow:hidden}.user-avatar[data-v-4b3cecaa]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.user-info[data-v-4b3cecaa]{flex:1;padding-left:12px;height:52px;display:flex;justify-content:space-between}.user-info__name[data-v-4b3cecaa]{font-weight:700;font-size:18px;line-height:24px;color:#1f2d3d;margin-bottom:8px}.user-info__vote--star[data-v-4b3cecaa]{width:12px;height:12px;overflow:hidden}.user-info__vote--number[data-v-4b3cecaa]{font-weight:400;font-size:14px;line-height:20px;color:#a4a7ad}@media only screen and (max-width:960px){.card-carousel--card[data-v-4b3cecaa]{width:311px;height:239px}}@media (max-width:1199px) and (min-width:1024px){.reviews__wrapper[data-v-4b3cecaa]{padding:140px 0!important}}@media (max-width:1023px){.reviews__wrapper[data-v-4b3cecaa]{padding:80px 0!important}}@media (max-width:575px){.reviews__wrapper[data-v-4b3cecaa]{padding:60px 0!important}.card-carousel--card[data-v-4b3cecaa]{margin-left:16px!important}.reviews__title[data-v-4b3cecaa]{font-size:32px}}",""]),t.exports=r},437:function(t,e,n){"use strict";n.r(e);var r=n(138),d=n.n(r),c=n(427),o={components:{InfiniteSlideBar:n.n(c).a},created:function(){var t=this;this.$api.get("/client/user/list/rated",{params:{page:1,limit:8}}).then((function(e){t.rateds=e.data.list})).catch((function(t){}))},setup:function(){},data:function(){return{rateds:[],img:n(265)}},methods:{getStar:function(t){return Math.round(t+"e+1")/10},getDate:function(t){return d()(t).format("DD/MM/YYYY")}}},l=(n(428),n(28)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reviews__wrapper background",attrs:{id:"review"}},[r("div",{staticClass:"pb-5 px-0",attrs:{"data-aos":"fade-down","data-aos-easing":"linear"}},[r("h1",{staticClass:"w-100 text-dark reviews__title text-center"},[t._v("\n      "+t._s(t.$t("review.userReview"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"card-carousel-wrapper",attrs:{"data-aos":"fade-left","data-aos-easing":"ease-in-sine",duration:"1500"}},[r("client-only",[r("infinite-slide-bar",{attrs:{duration:"50s"}},[r("div",{staticClass:"card-carousel"},[r("div",{staticClass:"card-carousel--cards"},t._l(t.rateds,(function(e){return r("div",{key:e.id,staticClass:"card-carousel--card"},[r("aside",{staticClass:"d-flex align-items-center header"},[r("span",{staticClass:"user-avatar-container"},[r("img",{staticClass:"user-avatar",attrs:{src:""+(""===e.user_id.avatar?t.img:e.user_id.avatar),alt:"..."}})]),t._v(" "),r("aside",{staticClass:"user-info"},[r("div",[r("p",{staticClass:"user-info__name"},[t._v("\n                      "+t._s(e.user_id.fullname)+"\n                    ")]),t._v(" "),r("span",{staticClass:"user-info__vote"},[r("span",{staticClass:"user-info__vote--star"},[r("img",{attrs:{src:n(426),alt:"..."}})]),t._v(" "),r("span",{staticClass:"user-info__vote--number"},[t._v(t._s(t.getStar(e.user_id.star_avg)))])])]),t._v(" "),r("div",{staticClass:"right"},[r("span",[t._v("\n                      "+t._s(t.getDate(e.appointment_start_at))+"\n                    ")]),t._v(" "),"stop"===e.appointment_status?r("span",{staticClass:"status"},[t._v("\n                      Đã hẹn\n                    ")]):t._e()])])]),t._v(" "),e.messages&&e.messages.note?r("aside",{staticClass:"content"},[t._v("\n                "+t._s(e.messages.note)+"\n              ")]):t._e(),t._v(" "),void 0===e.messages.note?r("aside",{staticClass:"content"},[t._v("\n                "+t._s(e.messages)+"\n              ")]):t._e()])})),0)])])],1)],1)])}),[],!1,null,"4b3cecaa",null);e.default=component.exports}}]);