(window.webpackJsonp=window.webpackJsonp||[]).push([[14,11],{397:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("fb2c69ba",content,!0,{sourceMap:!1})},398:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2663e93e",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";n(397)},408:function(t,e,n){var o=n(37)(!1);o.push([t.i,".carouselImage,.carouselImage img{height:370px;width:462px}.carouselImage img{border-radius:24px;-o-object-fit:cover;object-fit:cover}.displayNone .carousel-control-next-icon,.displayNone .carousel-control-prev-icon,.displayNone .carousel-indicators li{display:none}.displayBlock .carousel-control-next-icon,.displayBlock .carousel-control-prev-icon,.displayBlock .carousel-indicators li{display:block}",""]),t.exports=o},409:function(t,e,n){"use strict";n(398)},410:function(t,e,n){var o=n(37)(!1);o.push([t.i,"@media (min-width:990px) and (max-width:1200px){.carouselImage,.carouselImage img{width:748px}}@media screen and (max-width:479px){.carouselImage,.carouselImage img{width:311px;height:250px}}@media (min-width:480px) and (max-width:500px){.carouselImage,.carouselImage img{width:400px;height:400px}}@media screen and (max-width:320px){.carouselImage,.carouselImage img{width:263px;height:250px}}@media screen and (max-width:280px){.carouselImage,.carouselImage img{width:220px}}",""]),t.exports=o},443:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{slides:[]}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},created:function(){var t=this;this.$api.get("/client/appointment/get/".concat(this.$route.params.id)).then((function(e){t.slides=e.data.appointment.images,console.log("alo",t.slides.length)})).catch((function(t){}))}},r=(n(407),n(409),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{class:1===t.slides.length?"displayNone":"",attrs:{id:"carousel-1",interval:8e3,controls:"",touch:"","no-animation":"",indicators:""},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.slides,(function(e){return n("b-carousel-slide",{key:e,staticClass:"carouselImage",class:(t.slides.length,"displayBlock"),scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid",attrs:{src:e,alt:e}})]},proxy:!0}],null,!0)})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("2321c5e9",content,!0,{sourceMap:!1})},460:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("11a5a4ec",content,!0,{sourceMap:!1})},486:function(t,e,n){t.exports=n.p+"img/calender.fcb0bd1.svg"},487:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJaSURBVHgB1VTrcdpAEN49JHAyeSgVWHSAKwhUEJPEmRGYCaoAXAG4A1KBSEDWBGNDB+AKoASlAisZzwSsx2ZPBMw7yb94ZzSn27397tvXAfzvgvuMrdZlFgQeo8CXck8RfYeI+qXSyfCfAC3H0VVQLTZnYwXRt9lpPPx9xPXhPmcahrvuK9YVdqeTUTE5AhQZIDjzJ+LVaeG9Lj/5zwxMZB4qJUe23cnsZThjlhxIBwGYM4y8C1vEcXp6BDQgIs3H+6NlpsryQYXUOmPpDJaeg1mWpampZ2X572PQl87SxqC5UMCImdbYZG4wtHo9TZ1Et6xoFo135oKxDJ9Am+USPKQwVyx+GMtty76qI0LFn/5Im6bpreRQuQvifEQQfZ7rVEhZSOglQKTlxxVnTFFfhCSiIVPSUqnn2Y2QhSCdeA1AcRcOFKXZcmsUZuF/cbo3CRSHD86KGzKFgCJtA3CbEGETBNVa9mVd8I184RtAau7zWQBGAl2MFYHOiyt1wVPRUH+GOgpRo/gCuPGn4mzuEwSBjgqXkH03AIMDZaxOyYMQj3k7lDozn5eJLltWrwoHoJmFtTZKYDn2ndyN56qVPmw73T4Qvl6u2i556FkYzrtCysqkEFBDVk198qIGfxBupwov3LPifFm/AlgyTobc/Z8Yudr+ev1xF1j74qoqzxBE5+vTtPVxaDvXA+abZWOdw1kwiKdGsmcwTs34tPD2aN135/PVuug2ELHCJzwu7xh5Skjw68NTI6MIpom6aea9vwaUYtu9DGHIoaEuc8tv4ZD7si9TA49WfgEaO/1BThwlQAAAAABJRU5ErkJggg=="},488:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgNSA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIyLjUiIGN5PSIzIiByPSIyLjUiIGZpbGw9IiNBNEE3QUQiLz4KPC9zdmc+Cg=="},489:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDk5NSAwLjQ0MDU1NEMxMS44MDg1IDAuNzE2NDI3IDExLjgzNTMgMS4xOTA1NCAxMS41NTk1IDEuNDk5NTJMNC40MTY2IDkuNDk5NTJDNC4yNzQzMSA5LjY1ODg5IDQuMDcwOCA5Ljc1MDAxIDMuODU3MTUgOS43NTAwMUMzLjY0MzUgOS43NTAwMSAzLjQzOTk5IDkuNjU4ODkgMy4yOTc3IDkuNDk5NTJMMC40NDA1NTQgNi4yOTk1MkMwLjE2NDY4MSA1Ljk5MDU0IDAuMTkxNTE4IDUuNTE2NDMgMC41MDA0OTYgNS4yNDA1NUMwLjgwOTQ3MyA0Ljk2NDY4IDEuMjgzNTkgNC45OTE1MiAxLjU1OTQ2IDUuMzAwNUwzLjg1NzE1IDcuODczOTFMMTAuNDQwNiAwLjUwMDQ5NkMxMC43MTY0IDAuMTkxNTE4IDExLjE5MDUgMC4xNjQ2ODEgMTEuNDk5NSAwLjQ0MDU1NFoiIGZpbGw9IiNmZmZmIiAvPgo8L3N2Zz4KICAgIA=="},490:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTA0NjkgMS4yODM5MUM3LjE5MzQgLTAuNDI3OTY5IDQuODA2NiAtMC40Mjc5NzEgNC4wOTUzMSAxLjI4MzkxTDMuNzIyNDYgMi4xODEyNkMzLjU3NCAyLjUzODU2IDMuMjUwNDkgMi43ODE1MiAyLjg4MDczIDIuODIzMzlMMS44NDAyNiAyLjk0MTJDMC4wODEzODY3IDMuMTQwMzUgLTAuNjIwNDY3IDUuMzI5OTIgMC42NDQxOTYgNi41NTI1OUwxLjUyNzYxIDcuNDA2NjdDMS43ODg2MSA3LjY1OSAxLjkwNTk2IDguMDMzMyAxLjgzMzk5IDguMzk3MzJMMS42MjA2OSA5LjQ3NjE1QzEuMjY2NTYgMTEuMjY3MyAzLjE5NjY3IDEyLjY2NTUgNC43NTE5MSAxMS42NjdMNS40NDk2OSAxMS4yMTkxQzUuNzg2NDQgMTEuMDAyOSA2LjIxMzU2IDExLjAwMjkgNi41NTAzMSAxMS4yMTkxTDcuMjQ4MDkgMTEuNjY3QzguODAzMzQgMTIuNjY1NSAxMC43MzM0IDExLjI2NzMgMTAuMzc5MyA5LjQ3NjE1TDEwLjE2NiA4LjM5NzMzQzEwLjA5NCA4LjAzMzMgMTAuMjExNCA3LjY1OSAxMC40NzI0IDcuNDA2NjdMMTEuMzU1OCA2LjU1MjU5QzEyLjYyMDUgNS4zMjk5MiAxMS45MTg2IDMuMTQwMzUgMTAuMTU5NyAyLjk0MTJMOS4xMTkyNyAyLjgyMzM5QzguNzQ5NTEgMi43ODE1MiA4LjQyNiAyLjUzODU2IDguMjc3NTQgMi4xODEyNkw3LjkwNDY5IDEuMjgzOTFaIiBmaWxsPSIjRjNBRTJCIi8+Cjwvc3ZnPgo="},491:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7VLBDcIwDDwjBugIsAFMAEIdgBHMBHQTRkgG4VE2YAM6QgZACo6aUBMRVJD49aRIjuU7+ywTPqBm0xDo6IFFTF3Plte6Zl4i79gwQCevchJXeV1RYCadFfUi5E4CN1pAsErBHdi39uDeNxqBEjmA9GfLJnis+tHoNkzglzF0udjLBOKnCURNTmL9g8UvFhLiIpE1HSB+Oi8bj7+NosYc2lyAUEDN9nkCcjzFuq8sTAJ/EngAgJYvK5SccrkAAAAASUVORK5CYII="},492:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgBpVNLbsIwFBy/WtmUVvQG9ASlJyiVKlXdcQM4QtaVIiVVF92VI8ANYIGEYAE34ArmBkFixSePFwNRsgCZMNKzPCN7PH6ygRTfw7qtEiAEk39ob24rGPm4EgSF3CZq4kqQVJTjXZRCOK3aKgGFYNyWHG+W7XiA389+QYOKsVxFeKiIxi9IlBwk6za7Gf6+jBaLBli1DhfihYx9KK6BqX0wYIPH+4ZM6rIuPTI1bcK7M/Cnr9ohZC1LAq4W9MraJ7ggSSL8fDyB9LOwONNJtVwMYulLaGfhu5EUvXwKBwOOL3G3K1zAGQPl/CbOJbjZwBlaLDrI/oBnjrY5DcUmkif6dnaie16fRfViZ+NiAAAAAElFTkSuQmCC"},493:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKISURBVHgBjVO/b9NAFP7e+c51Yge8dSQzqpAZGEBCdf4ChFiApe0fULXdkdqKgaFD0gkmWhBSJ9R2R4ordehWVwLWVGKoxORE+WUnueM5VZOqRYiT3t09633ffff5HYFHNdz3be2sKBqGEghsbfwZo6G0gTSGV8DikBqJBJ1bI739OH6xm2Mpnz4+2T+1SQdK6yNJOrK52NYaEjoH8QqIPLSAZSjgb884iw11KrT3aG9RCexYhMrzk1cR/jEa5R0fxW65L4q+RbI+ImyKO0hXSqPO4d/AjaDqN8pV/yqXXn9DCXFa0t3EwSBy9XBelkyvzNIPrwN/BW9DadQ69CAUHuH33FbMd13TNIz4Vv7sz+X44v77IyKxwgp6/h20J+CL4E1YgK4rk5IygyVbpGsOZWxqVi8OkmT2x/JiXmcj4xj6siTbbNJwQuCprCp0eu7GW+E1UbVsbr2uLazzProiAMsRpZkmPLs1rjLhou8UWoFy2ts3/VDU/aQoDU2wOvZEMoGFAaRbaEKKqQLJObRJbhLA6vvCWNM6Vm14FY6XwC5eKqBoN4HXiuA1F24ROO0VqG5McW1MLvh0YViBKDGY9LSw0NnkvG5ezzdgaBupStApLiDtljEsVK7KhMhguEsFvHZ+6gRPX6IIblaB12/CyaoopDtwOwSHu+54N5qelIEo49a+24u54eevq6UPJ3lhYFbDsWFU+3bbE9UPMMI5mXcPNjBj1qFMhZa/R/iPYcKXIXpuHYOZJTLVwEfJqkNSAGUdQNMZcksynvq4jA4/pTZHYgNNZx4tN0THjen480OasH59uggpV9meeyzNx4B/UjoCukzU4X1uU1MmSNQZEjdCghpFB8kfGlgSjnnqM+EAAAAASUVORK5CYII="},494:function(t,e,n){"use strict";n(459)},495:function(t,e,n){var o=n(37)(!1);o.push([t.i,".displayNone .carousel-control-next-icon,.displayNone .carousel-control-prev-icon,.displayNone .carousel-indicators li{display:none}",""]),t.exports=o},496:function(t,e,n){"use strict";n(460)},497:function(t,e,n){var o=n(37)(!1);o.push([t.i,'.giving{margin-bottom:16px}.detail{width:100%}.detail-background{background-color:#fff;border-radius:24px}.detail-appointment{display:flex;flex-direction:column;padding-left:34px;width:100%}.padding{display:flex;padding:56px}.img{height:370px;width:462px;border-radius:24px}.title{display:flex;align-items:center;justify-content:space-between}.txtTitle{font-style:normal;font-weight:700;font-size:41px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;width:100%;-webkit-line-clamp:4;-webkit-box-orient:vertical}.type{display:flex;align-items:flex-end}.type-nohost{background-color:#40c3b7}.type-fixed,.type-nohost{padding:5px 13px;border-radius:20px;font-family:"SVN-Gilroy",sans-serif;font-style:normal;font-weight:600;font-size:14px;color:#fff;margin-left:8px;text-transform:uppercase}.type-fixed{background-color:#72a0ff}.type-bid{background-color:#ff7272}.type-bid,.type-giving{padding:5px 13px;border-radius:20px;font-family:"SVN-Gilroy",sans-serif;font-style:normal;font-weight:600;font-size:14px;color:#fff;margin-left:8px;text-transform:uppercase}.type-giving{background-color:#ffb073}.time-location-slot{display:flex;justify-content:space-between;margin:16px 0;color:#70747c}.time-location-slot span{font-style:normal;font-weight:400;font-size:16px}.price{font-style:normal;font-weight:700;font-size:18px;color:#f95d3b}.user{position:relative;padding:20px 0;border-top:1px solid #ccc;border-bottom:1px solid #ccc;margin:20px 0;align-items:center;justify-content:space-between}.user,.users{display:flex}.social img{padding:12px;border-radius:15px;background-color:#eff0f3;display:none}.icCheck{position:absolute;background-color:#36bd69;padding:4px 3px;border-radius:10px;bottom:20px;left:35px}.img-avatar{width:48px;height:48px;border-radius:30px}.detail-user{flex-direction:column;display:flex;margin-left:12px}.detail-user .names{font-style:normal;font-weight:700;font-size:18px}.contents{text-align:justify}.contents .txtTitle{font-style:normal;font-weight:700;font-size:18px}.contents .txtContent{font-style:normal;font-weight:500;font-size:18px;color:#585d63}.txtContent-box{display:flex;flex-wrap:wrap}.children{background-color:#eff0f3;padding:8px 16px;border-radius:20px;margin-right:8px}.icForm{margin-bottom:4px;width:24px}.btns{margin-bottom:32px;margin-top:12px}.btns a{padding:14px 39px;border-radius:12px;background-image:linear-gradient(222.6deg,#f9963b,#f9963b .01%,#f95d3b);border:0 solid;color:#fff}.btns a:hover{background-image:linear-gradient(222.6deg,#f9963b,#f9963b .01%,#f95d3b .1%);color:#fff}.img{-o-object-fit:cover;object-fit:cover}.carousel-indicators li{width:10px;height:10px;border-radius:50%;flex:none;bottom:-40px}.carousel-indicators .active{opacity:1;width:20px;border-radius:6px}.carousel-indicators .active,.carousel-indicators li{background:linear-gradient(222.6deg,#f9963b,#f9963b .01%,#f95d3b)}.carousel-indicators li{opacity:.4}@media (max-width:1200px){.padding{display:flex;flex-direction:column}.box-img{display:flex;justify-content:center;margin-bottom:20px}.img{width:100%}.detail-appointment{padding-left:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:none}}@media (max-width:767px){.img{width:100%}}@media (max-width:992px){.children{margin-bottom:10px}}@media (min-width:993px){.children{margin-bottom:10px}}@media (max-width:575px){.giving{margin-bottom:8px}.detail{padding-top:88px;padding-bottom:80px}.padding{padding:16px}.box-img{margin-bottom:10px}.txtTitle{font-size:20px;margin-top:15px}.time-location-slot span,.type-bid,.type-fixed,.type-nohost{font-size:14px}.user{padding:10px 0;margin:10px 0}.time-location-slot{margin:6px 0;flex-direction:column}.price{font-size:18px}.detail-user .names{font-size:14px}.contents .txtTitle{font-size:18px;margin-top:15px}.contents .txtContent{font-size:18px;line-height:1.4}.children{font-size:16px}}@media (max-width:375px){.img{height:249.07px}}@media (min-width:990px) and (max-width:1200px){.carouselImage,.carouselImage img{width:748px}}@media (min-width:1200px) and (max-width:1400px){.contents .txtTitle{font-size:36px}}',""]),t.exports=o},507:function(t,e,n){"use strict";n.r(e);var o=n(33),r=(n(72),n(4),n(66),n(11),n(21),n(1),n(39),n(138)),l=n.n(r),d=(n(395),n(263)),c=n(65),A=n(443),m={head:function(){return{title:this.detail.title,meta:[{hid:"og:title",name:"og:title",content:this.detail.title},{hid:"og:url",name:"og:url",content:"LunchW.me"},{hid:"og:image",name:"og:image",content:this.detail.images[0]},{hid:"og:description",name:"og:description",content:this.detail.description}]}},data:function(){return{facebook:c.d}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api,o=t.params,r=t.error,e.abrupt("return",n.get("/client/appointment/get/".concat(o.id)).then((function(t){return{detail:t.data.appointment,count_user_join:t.data.count_user_join,topics:t.data.appointment.topics,forms:t.data.appointment.forms,languages:t.data.appointment.languages,type:t.data.appointment.appointment_type_id.short_name,price:t.data.appointment.price,giving:t.data.appointment.giving}})).catch((function(t){r({statusCode:404})})));case 2:case"end":return e.stop()}}),e)})))()},methods:{getDate:function(t){return l()(t).format("DD/MM/YYYY")},getMoney:function(t){var e;return(null===(e=t)||void 0===e?void 0:e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1."))+"đ"},getStar:function(t){return Math.round(t+"e+1")/10},linkify:function(t){var text=t.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,'<a href="$1" target="_blank">$1</a>');return text=text.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim,'$1<a href="http://$2" target="_blank">$2</a>')}},computed:{formattedText:function(){return this.linkify(this.detail.description)}},components:{Download:d.default,SliderImages:A.default}},x=(n(494),n(496),n(28)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"detail background"},[o("div",{staticClass:"detail-cover container"},[o("div",{staticClass:"detail-background"},[o("div",{staticClass:"padding"},[o("div",{staticClass:"box-img"},[o("SliderImages")],1),t._v(" "),o("div",{staticClass:"detail-appointment"},[o("div",{staticClass:"title"},[o("div",[o("span",{staticClass:"txtTitle"},[t._v("\n                  "+t._s(t.detail.title)+"\n                ")])]),t._v(" "),o("div",{staticClass:"type"},[o("div",[o("span",{class:("fixed"===t.type?"type-fixed":"")+" "+("nohost"===t.type?"type-nohost":"")+" "+("bid"===t.type?"type-bid":"")},[t._v(t._s(t.type))])]),t._v(" "),o("div",[t.giving?o("span",{staticClass:"type-giving"},[t._v("giving")]):t._e()])])]),t._v(" "),o("div",{staticClass:"time-location-slot"},[o("div",[o("img",{staticStyle:{"margin-bottom":"2px"},attrs:{src:n(486),alt:""}}),t._v(" "),o("span",[t._v("\n                  "+t._s(t.getDate(t.detail.start_at))+" -\n                  "+t._s(t.getDate(t.detail.end_at))+"\n                ")])]),t._v(" "),o("div",[o("img",{attrs:{src:n(487),alt:""}}),t._v(" "),o("span",[t._v("\n                  "+t._s(t.detail.province_id.name)+"\n                ")]),t._v(" "),o("img",{attrs:{src:n(488),alt:""}}),t._v(" "),o("span",[t._v("\n                  "+t._s(t.count_user_join)+"/"+t._s(t.detail.slot)+"\n                  "+t._s(t.$t("appointment_detail.slot"))+"\n                ")])])]),t._v(" "),t.giving&&t.giving.nameCharityOrganization?o("div",{staticClass:"giving"},[o("span",[t._v(" "+t._s(t.$t("appointment_detail.charities"))+": ")]),t._v(" "),o("span",[t._v("\n                "+t._s(t.giving.nameCharityOrganization)+"\n              ")])]):t._e(),t._v(" "),t.giving&&t.giving.nameCharityOrganization?o("div",{staticClass:"giving"},[o("span",[t._v(" "+t._s(t.$t("appointment_detail.charityVenues"))+": ")]),t._v(" "),o("span",[t._v(" "+t._s(t.giving.locationOrganization))])]):t._e(),t._v(" "),o("div",[0===t.price?o("span",{staticClass:"price"},[t._v(t._s(t.$t("appointment_detail.freeConnect")))]):o("span",{staticClass:"price"},[t._v(t._s(t.getMoney(t.price)))])]),t._v(" "),o("div",{staticClass:"user"},[o("div",{staticClass:"users"},[o("div",[o("img",{staticClass:"img-avatar",attrs:{src:t.detail.created_by.avatar}}),t._v(" "),!0===t.detail.created_by.green_tick?o("img",{staticClass:"icCheck",attrs:{src:n(489)}}):t._e()]),t._v(" "),o("div",{staticClass:"detail-user"},[o("span",{staticClass:"names"},[t._v("\n                    "+t._s(t.detail.created_by.fullname)+"\n                  ")]),t._v(" "),o("div",[o("img",{staticStyle:{"margin-bottom":"4px","margin-right":"3px"},attrs:{src:n(490),alt:""}}),t._v(" "),o("span",[t._v("\n                      "+t._s(t.getStar(t.detail.created_by.star_avg))+"\n                    ")])])])]),t._v(" "),o("div",{staticClass:"social"},[o("a",{attrs:{target:"_blank",href:t.facebook}},[o("img",{attrs:{src:n(491),alt:""}})]),t._v(" "),o("img",{attrs:{src:n(492),alt:""}}),t._v(" "),o("img",{attrs:{src:n(493),alt:""}})])]),t._v(" "),o("div",{staticClass:"btns"},[o("a",{attrs:{href:"#download"}},[t._v(t._s(t.$t("appointment_detail.joinNow")))])]),t._v(" "),o("div",{staticClass:"contents"},[o("div",{staticStyle:{"margin-bottom":"14px"}},[o("div",{staticStyle:{"margin-bottom":"2px"}},[o("span",{staticClass:"txtTitle"},[t._v(t._s(t.$t("appointment_detail.information")))])]),t._v(" "),o("span",{staticClass:"txtContent",domProps:{innerHTML:t._s(t.formattedText)}})]),t._v(" "),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("div",{staticStyle:{"margin-bottom":"6px"}},[o("span",{staticClass:"txtTitle"},[t._v(t._s(t.$t("appointment_detail.forms")))])]),t._v(" "),o("div",{staticClass:"txtContent-box"},t._l(t.forms,(function(form){return o("span",{key:form._id,staticClass:"children"},[o("img",{staticClass:"icForm",attrs:{src:form.appointment_form_id.image,alt:""}}),t._v("\n                    "+t._s(form.appointment_form_id.name)+"\n                  ")])})),0)]),t._v(" "),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("div",{staticStyle:{"margin-bottom":"6px"}},[o("span",{staticClass:"txtTitle"},[t._v(t._s(t.$t("appointment_detail.topics")))])]),t._v(" "),o("div",{staticClass:"txtContent-box"},t._l(t.topics,(function(e){return o("span",{key:e._id,staticClass:"children"},[t._v("\n                    "+t._s(e.appointment_topic_id.name)+"\n                  ")])})),0)]),t._v(" "),o("div",{staticStyle:{"margin-bottom":"10px"}},[o("div",{staticStyle:{"margin-bottom":"6px"}},[o("span",{staticClass:"txtTitle"},[t._v(t._s(t.$t("appointment_detail.languages")))])]),t._v(" "),o("div",{staticClass:"txtContent-box"},t._l(t.languages,(function(e){return o("span",{key:e._id,staticClass:"children"},[t._v("\n                    "+t._s(e.appointment_language_id.name)+"\n                  ")])})),0)])])])])])])]),t._v(" "),o("Download")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SliderImages:n(443).default,Download:n(263).default})}}]);