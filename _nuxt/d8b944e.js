(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{396:function(e,t,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("1b17065d",content,!0,{sourceMap:!1})},423:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOC4yNUMwLjU4NTc4NiA4LjI1IDAuMjUgOC41ODU3OSAwLjI1IDlDMC4yNSA5LjQxNDIxIDAuNTg1Nzg2IDkuNzUgMSA5Ljc1VjguMjVaTTE3IDkuNzVDMTcuNDE0MiA5Ljc1IDE3Ljc1IDkuNDE0MjEgMTcuNzUgOUMxNy43NSA4LjU4NTc5IDE3LjQxNDIgOC4yNSAxNyA4LjI1VjkuNzVaTTkuNzUgMUM5Ljc1IDAuNTg1Nzg2IDkuNDE0MjEgMC4yNSA5IDAuMjVDOC41ODU3OSAwLjI1IDguMjUgMC41ODU3ODYgOC4yNSAxTDkuNzUgMVpNOC4yNSAxN0M4LjI1IDE3LjQxNDIgOC41ODU3OSAxNy43NSA5IDE3Ljc1QzkuNDE0MjEgMTcuNzUgOS43NSAxNy40MTQyIDkuNzUgMTdIOC4yNVpNMSA5Ljc1SDE3VjguMjVIMVY5Ljc1Wk04LjI1IDFMOC4yNSAxN0g5Ljc1VjFMOC4yNSAxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEwMjhfMzIyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwMjhfMzIyIiB4MT0iMTciIHkxPSIxIiB4Mj0iMS42OTc5NSIgeTI9IjE3LjY0MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y5OTYzQiIvPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMSIgc3RvcC1jb2xvcj0iI0Y5OTYzQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOTVEM0IiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},424:function(e,t,n){"use strict";n(396)},425:function(e,t,n){var o=n(37)(!1);o.push([e.i,".FAQ-container[data-v-49e19ec6]{overflow-x:hidden;overflow-y:auto}.heading[data-v-49e19ec6]{font-style:normal;font-weight:700;font-size:48px;line-height:48px;margin:0}.questions[data-v-49e19ec6]{display:flex;justify-content:center}.questions__wrapper[data-v-49e19ec6]{width:870px}.questions__container[data-v-49e19ec6]{color:#000;width:100%;border-radius:24px;overflow:hidden;display:flex;flex-wrap:wrap;padding:0;margin-bottom:32px;box-shadow:0 10px 20px rgba(255,138,63,.1)}.questions__questions__container .icon[data-v-49e19ec6]{color:#f9963b;font-size:28px;font-weight:400}.questions__questions__container .icon[data-v-49e19ec6]:hover{opacity:.8}.btn-question[data-v-49e19ec6]{width:100%;height:80px;line-height:80px;background-color:#fff;outline:none;border:none;border-radius:24px;font-weight:500;padding:27px 24px}.answer[data-v-49e19ec6]{margin-top:12px;line-height:1.6;border:none}@media only screen and (max-width:960px){.btn-question[data-v-49e19ec6]{min-height:94px;line-height:1.4}}@media (max-width:1199px) and (min-width:1024px){.FAQ-container[data-v-49e19ec6]{padding:140px 16px!important}}@media (max-width:1023px){.field_slogan[data-v-49e19ec6]{padding:0 26px}.FAQ-container[data-v-49e19ec6]{padding:80px 16px!important}}@media (max-width:575px){.FAQ-container[data-v-49e19ec6]{padding:60px 16px!important}.heading[data-v-49e19ec6]{font-size:32px}}",""]),e.exports=o},436:function(e,t,n){"use strict";n.r(t);n(2),n(1);var o={components:{},setup:function(){},data:function(){return{showAnswer:[],questions:[{id:"question-1",FAQ:"Q&A.questions.whatIsLunchwme",answer:["Q&A.answer.whatIsLunchwme.1"]},{id:"question-2",FAQ:"Q&A.questions.iWantBid",answer:["Q&A.answer.iWantBid"]},{id:"question-3",FAQ:"Q&A.questions.charities",answer:["Q&A.answer.charities"]},{id:"question-4",FAQ:"Q&A.questions.receiveMoney",answer:["Q&A.answer.receiveMoney"]},{id:"question-5",FAQ:"Q&A.questions.regulation",answer:["Q&A.answer.regulation"]}]}},methods:{onToggleFAQ:function(e){var t=this.$refs[e][0];if(t.classList.contains("show"))return t.classList.remove("show"),t.parentElement.classList.remove("shadow"),void(this.showAnswer=this.showAnswer.filter((function(t){return t!==e})));this.showAnswer.push(e),t.classList.add("show"),t.parentElement.classList.add("shadow")}}},c=(n(424),n(28)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"FAQ-container background",attrs:{id:"faq"}},[o("div",{staticClass:"pb-5 px-0",attrs:{"data-aos":"fade-up","data-aos-easing":"linear"}},[o("h1",{staticClass:"w-100 text-dark heading text-center"},[e._v("\n      "+e._s(e.$t("Q&A.questions.question"))+"\n    ")])]),e._v(" "),o("div",{staticClass:"questions"},[o("div",{staticClass:"questions__wrapper"},e._l(e.questions,(function(t,c){return o("div",{key:c,staticClass:"questions__container"},[o("button",{staticClass:"btn-white btn-question text-start d-flex justify-content-between align-items-center",attrs:{type:"button","data-aos":"fade-down","data-aos-easing":"linear",duration:"300"},on:{click:function(n){return e.onToggleFAQ(t.id)}}},[e._v("\n          "+e._s(e.$t(t.FAQ))+"\n          "),o("span",[o("Transition",[e.showAnswer.includes(t.id)?e._e():o("span",{staticClass:"icon"},[o("img",{attrs:{src:n(423),alt:""}})])])],1)]),e._v(" "),o("div",{ref:t.id,refInFor:!0,staticClass:"answer-container accordion-collapse collapse"},e._l(t.answer,(function(text,t){return o("p",{key:t,staticClass:"accordion-body answer py-2"},[e._v("\n            "+e._s(e.$t(text))+"\n          ")])})),0)])})),0)])])}),[],!1,null,"49e19ec6",null);t.default=component.exports}}]);