(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("477316e5",content,!0,{sourceMap:!1})},432:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOC4yNUMwLjU4NTc4NiA4LjI1IDAuMjUgOC41ODU3OSAwLjI1IDlDMC4yNSA5LjQxNDIxIDAuNTg1Nzg2IDkuNzUgMSA5Ljc1VjguMjVaTTE3IDkuNzVDMTcuNDE0MiA5Ljc1IDE3Ljc1IDkuNDE0MjEgMTcuNzUgOUMxNy43NSA4LjU4NTc5IDE3LjQxNDIgOC4yNSAxNyA4LjI1VjkuNzVaTTkuNzUgMUM5Ljc1IDAuNTg1Nzg2IDkuNDE0MjEgMC4yNSA5IDAuMjVDOC41ODU3OSAwLjI1IDguMjUgMC41ODU3ODYgOC4yNSAxTDkuNzUgMVpNOC4yNSAxN0M4LjI1IDE3LjQxNDIgOC41ODU3OSAxNy43NSA5IDE3Ljc1QzkuNDE0MjEgMTcuNzUgOS43NSAxNy40MTQyIDkuNzUgMTdIOC4yNVpNMSA5Ljc1SDE3VjguMjVIMVY5Ljc1Wk04LjI1IDFMOC4yNSAxN0g5Ljc1VjFMOC4yNSAxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEwMjhfMzIyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwMjhfMzIyIiB4MT0iMTciIHkxPSIxIiB4Mj0iMS42OTc5NSIgeTI9IjE3LjY0MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y5OTYzQiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMSIgc3RvcC1jb2xvcj0iI0Y5OTYzQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOTVEM0IiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},433:function(t,e,n){"use strict";n(403)},434:function(t,e,n){var o=n(37)(!1);o.push([t.i,".FAQ-container[data-v-b0a106ae]{overflow-x:hidden;overflow-y:auto}.heading[data-v-b0a106ae]{font-style:normal;font-weight:700;font-size:48px;line-height:48px;margin:0}.questions[data-v-b0a106ae]{display:flex;justify-content:center}.questions__wrapper[data-v-b0a106ae]{width:870px}.questions__container[data-v-b0a106ae]{color:#000;width:100%;border-radius:24px;overflow:hidden;display:flex;flex-wrap:wrap;padding:0;margin-bottom:32px;box-shadow:0 10px 20px rgba(255,138,63,.1)}.questions__questions__container .icon[data-v-b0a106ae]{color:#f9963b;font-size:28px;font-weight:400}.questions__questions__container .icon[data-v-b0a106ae]:hover{opacity:.8}.btn-question[data-v-b0a106ae]{width:100%;height:80px;line-height:80px;background-color:#fff;outline:none;border:none;border-radius:24px;font-weight:500;padding:27px 24px;color:#000}.answer[data-v-b0a106ae]{margin-top:12px;line-height:1.6;border:none}@media only screen and (max-width:960px){.btn-question[data-v-b0a106ae]{min-height:94px;line-height:1.4}}@media (max-width:1199px) and (min-width:1024px){.FAQ-container[data-v-b0a106ae]{padding:140px 16px!important}}@media (max-width:1023px){.field_slogan[data-v-b0a106ae]{padding:0 26px}.FAQ-container[data-v-b0a106ae]{padding:80px 16px!important}}@media (max-width:575px){.FAQ-container[data-v-b0a106ae]{padding:60px 16px!important}.heading[data-v-b0a106ae]{font-size:32px}}",""]),t.exports=o},445:function(t,e,n){"use strict";n.r(e);n(2),n(1);var o={components:{},setup:function(){},data:function(){return{showAnswer:[],questions:[{id:"question-1",FAQ:"Q&A.questions.whatIsLunchwme",answer:["Q&A.answer.whatIsLunchwme.1"]},{id:"question-2",FAQ:"Q&A.questions.iWantBid",answer:["Q&A.answer.iWantBid"]},{id:"question-3",FAQ:"Q&A.questions.charities",answer:["Q&A.answer.charities"]},{id:"question-4",FAQ:"Q&A.questions.receiveMoney",answer:["Q&A.answer.receiveMoney"]},{id:"question-5",FAQ:"Q&A.questions.regulation",answer:["Q&A.answer.regulation"]}]}},methods:{onToggleFAQ:function(t){var e=this.$refs[t][0];if(e.classList.contains("show"))return e.classList.remove("show"),e.parentElement.classList.remove("shadow"),void(this.showAnswer=this.showAnswer.filter((function(e){return e!==t})));this.showAnswer.push(t),e.classList.add("show"),e.parentElement.classList.add("shadow")}}},r=(n(433),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"FAQ-container background",attrs:{id:"faq"}},[o("div",{staticClass:"pb-5 px-0",attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[o("h1",{staticClass:"w-100 text-dark heading text-center"},[t._v("\n      "+t._s(t.$t("Q&A.questions.question"))+"\n    ")])]),t._v(" "),o("div",{staticClass:"questions"},[o("div",{staticClass:"questions__wrapper"},t._l(t.questions,(function(e,r){return o("div",{key:r,staticClass:"questions__container"},[o("button",{staticClass:"btn-white btn-question text-start d-flex justify-content-between align-items-center",attrs:{type:"button","data-aos":"fade-down","data-aos-easing":"linear",duration:"300"},on:{click:function(n){return t.onToggleFAQ(e.id)}}},[t._v("\n          "+t._s(t.$t(e.FAQ))+"\n          "),o("span",[o("Transition",[t.showAnswer.includes(e.id)?t._e():o("span",{staticClass:"icon"},[o("img",{attrs:{src:n(432),alt:""}})])])],1)]),t._v(" "),o("div",{ref:e.id,refInFor:!0,staticClass:"answer-container accordion-collapse collapse"},t._l(e.answer,(function(text,e){return o("p",{key:e,staticClass:"accordion-body answer py-2"},[t._v("\n            "+t._s(t.$t(text))+"\n          ")])})),0)])})),0)])])}),[],!1,null,"b0a106ae",null);e.default=component.exports}}]);