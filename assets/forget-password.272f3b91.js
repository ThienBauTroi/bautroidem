import{_ as v,a as p,u as b,r as c,w as E,b as k,o as d,c as f,d as e,e as u,f as _,g as w,h,i as x,v as y,n as C,t as M}from"./index.fa74b716.js";/* empty css            */import{_ as S}from"./Logo.91462b09.js";const B={setup(){const g=p(),s=b(),l=c(null),o=c("B\u1EA1n ch\u01B0a nh\u1EADp Email"),i=c(""),n=c(!1);return E(l,r=>(r=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r),r?n.value=!1:n.value=!0)),{auth:g,email:l,messageErrorEmail:o,messageForgetError:i,boolEmail:n,closeErrorMessage:()=>i.value="",handleSubmit:async()=>{try{if(l.value!==null){let r={email:l.value.toLowerCase()};await $axios.post("/client/user/forgot-password",r).then(a=>{a.message==="forgot-password-success"&&s.push({path:`/reset-password/${l.value.toLowerCase()}`})}).catch(a=>{i.value="",(a==="user-not-found-by-email"||a==="exceeded-count-times-forgot-password")&&(i.value=a),console.log(a)});return}}catch(r){console.log(r)}}}}},N={class:"forget-container"},V={class:"forget-wrapper"},z={class:"forget-navbar"},F=e("img",{src:S},null,-1),q=e("div",{class:"forget-language"},null,-1),A={class:"forget-content"},D={class:"forget-form-input"},L={class:"forget-form-forget"},Q=e("div",{class:"forget-header"},[e("div",{class:"forget-header-title"},"Qu\xEAn m\u1EADt kh\u1EA9u"),e("div",{class:"forget-header-sub-title"},"\u0110\u1EEBng lo, ch\xFAng t\xF4i s\u1EBD g\u1EEDi cho b\u1EA1n h\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t l\u1EA1i")],-1),Z={class:"forget-form-content"},P={key:0,class:"forget-alert-error"},R=e("p",{class:"forget-alert-error-title"},"Email kh\xF4ng t\u1ED3n t\u1EA1i!",-1),T={key:1,class:"forget-alert-error"},U=e("p",{class:"forget-alert-error-title"},"\u0110\xE3 v\u01B0\u1EE3t qu\xE1 s\u1ED1 l\u1EA7n qu\xEAn m\u1EADt kh\u1EA9u",-1),j=e("label",{class:"forget-form-label"},"Email",-1),G={class:"forget-form-item"},H={class:"forget-form-el"},I={key:0,class:"forget-form-el-error"},J={class:"forget-form-item-submit"},K=e("button",null,"\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u",-1),O=e("button",{class:"forget-return"},"Quay l\u1EA1i",-1);function W(g,s,l,o,i,n){const m=k("router-link");return d(),f("div",N,[e("div",V,[e("div",z,[u(m,{to:"/",class:"forget-navbar-logo"},{default:_(()=>[F]),_:1}),q]),e("div",A,[e("div",D,[e("div",L,[Q,e("form",{class:"forget-form",method:"post",onSubmit:s[3]||(s[3]=w((...t)=>o.handleSubmit&&o.handleSubmit(...t),["prevent"]))},[e("div",Z,[o.messageForgetError==="user-not-found-by-email"?(d(),f("div",P,[R,e("i",{onClick:s[0]||(s[0]=(...t)=>o.closeErrorMessage&&o.closeErrorMessage(...t)),class:"fa-solid fa-xmark forget-alert-close"})])):o.messageForgetError==="exceeded-count-times-forgot-password"?(d(),f("div",T,[U,e("i",{onClick:s[1]||(s[1]=(...t)=>o.closeErrorMessage&&o.closeErrorMessage(...t)),class:"fa-solid fa-xmark forget-alert-close"})])):h("",!0),j,e("div",G,[e("div",H,[x(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.email=t),class:C([{error:o.boolEmail},"forget-form-el-item"]),placeholder:"Nh\u1EADp email l\u1EA5y l\u1EA1i m\u1EADt kh\u1EA9u, v\xED d\u1EE5: lunchwme@gmail.com"},null,2),[[y,o.email,void 0,{trim:!0}]])]),o.email==""?(d(),f("div",I,M(o.messageErrorEmail),1)):h("",!0)])]),e("div",J,[K,u(m,{to:"/login"},{default:_(()=>[O]),_:1})])],32)])])])])])}const ee=v(B,[["render",W]]);export{ee as default};