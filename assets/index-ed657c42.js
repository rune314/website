import{v as C}from"./index-e0483567.js";import{D,b as d,c as N,d as S,U as V}from"./index-c058c27c.js";/* empty css              *//* empty css              */import{d as U,r as v,v as k,aQ as E,E as B,F as I,aO as a,aM as n,u as c,aW as u,I as y,aX as M,aY as O,aJ as R,w as _,bn as j,bj as F,bh as $,aZ as z,b4 as J,bp as P,a$ as Q}from"./ui-0471c6f3.js";import{f}from"./wallet-44760d83.js";import{_ as W}from"./plugin-vueexport-helper-c27b6911.js";import"./vue-86a1e227.js";const X={class:"reward-container"},Y=U({__name:"index",setup(Z){const{t:l}=C.useI18n(),o=D(),t=v({total:0,history:0,reward:0,loading:!1}),i=v({total:0,history:0,reward:0});async function x(){t.total=await o.totalDividendsDistributed().then(e=>Number(f(e)))}async function m(){const e=await N();e&&d.address.value&&([t.reward,t.history]=await Promise.all([e.dividendOf(d.address.value).then(s=>Number(f(s))),e.withdrawableDividendOf(d.address.value).then(s=>Number(f(s)))]))}async function b(){if(t.reward===0){R.warning("Too few rewards");return}if(d.isConnected.value)try{t.loading=!0;const s=await(await S()).claim().then(r=>r.wait());s&&(s.logs.filter(r=>r.address===V),t.reward=0)}finally{t.loading=!1}}function g(){_(()=>t.total,e=>{e&&setTimeout(()=>{i.total=e},1e3)}),_(()=>t.history,e=>{e&&setTimeout(()=>{i.history=e},1e3)}),_(()=>t.reward,e=>{e&&setTimeout(()=>{i.reward=e},1e3)}),_(d.address,e=>{e&&m()})}function A(){o.on(o.getEvent("DividendsDistributed"),(e,s,r)=>{t.total=Number(f(r)),m()}),o.on(o.getEvent("Claim"),(e,s)=>{})}return k(()=>{g(),A(),x(),d.isConnected.value&&m()}),E(()=>{o.off(o.getEvent("DividendsDistributed")),o.off(o.getEvent("Claim"))}),(e,s)=>{const r=j,p=F,w=$,T=z,h=J,q=P,G=Q;return B(),I("div",X,[a(h,{style:{width:"1500px","max-width":"90%",margin:"0 auto"},gutter:[20,30]},{default:n(()=>[a(w,{md:8,style:{width:"100%"}},{default:n(()=>[a(p,{class:"card",bordered:!1,title:c(l)("reward.history")},{default:n(()=>[a(r,{value:t.total,"value-from":i.total,animation:"","show-group-separator":""},null,8,["value","value-from"]),u(" USDT ")]),_:1},8,["title"])]),_:1}),a(w,{md:8,style:{width:"100%"}},{default:n(()=>[a(p,{class:"card",bordered:!1,title:c(l)("reward.my.history")},{default:n(()=>[a(r,{value:t.history,"value-from":i.history,animation:"","show-group-separator":""},null,8,["value","value-from"]),u(" USDT ")]),_:1},8,["title"])]),_:1}),a(w,{md:8,style:{width:"100%"}},{default:n(()=>[a(p,{class:"card",bordered:!1,title:c(l)("reward.my.reward")},{default:n(()=>[a(h,{justify:"space-between",align:"end"},{default:n(()=>[y("div",null,[a(r,{value:t.reward,"value-from":i.reward,animation:"","show-group-separator":""},null,8,["value","value-from"]),u(" USDT ")]),y("div",null,[a(T,{style:{"z-index":"1"},status:"success",type:"primary",disabled:t.reward<1,loading:t.loading,onClick:b},{default:n(()=>[u(M(c(l)("reward.claim")),1)]),_:1},8,["disabled","loading"])])]),_:1})]),_:1},8,["title"])]),_:1}),O("",!0)]),_:1})])}}});const re=W(Y,[["__scopeId","data-v-1826f606"]]);export{re as default};
