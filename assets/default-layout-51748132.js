import{v as V,a as j,I as ee,u as te,r as ne,L as oe,b as ae,c as se}from"./index-e0483567.js";import{R as ce}from"./index-c058c27c.js";import{d as N,b as P,c as S,w as le,aQ as _e,aK as w,E as n,F as x,aL as a,aO as t,aM as e,aU as U,aV as z,aW as L,aX as R,u as p,I as y,aY as M,a4 as ue,aZ as H,a_ as re,a$ as K,v as ie,G as F,b0 as de,b1 as pe,a2 as me,b2 as fe,b3 as ve,b4 as G,b5 as Q,b6 as W,b7 as ye,b8 as T,b9 as be,ba as ge,bb as he,bc as ke,bd as xe,be as Le,bf as we}from"./ui-0471c6f3.js";import{_ as Ae}from"./logo-44bf3b7d.js";import{u as Ie,f as $e}from"./vue-86a1e227.js";import{_ as D}from"./plugin-vueexport-helper-c27b6911.js";import{f as Ce}from"./wallet-44760d83.js";const Re={style:{color:"white","font-size":"25px"}},Se={key:2,class:"drawer"},Ne={style:{width:"100%",display:"flex","justify-content":"center"}},De=N({__name:"mobile",setup(_){const{t:b}=V.useI18n(),s=P(!1),g=S(()=>j.reduce((c,o)=>c.concat(o.children),[]).filter(c=>![""].includes(c.name)));return le(s,c=>{document.body.style.overflow=c?"hidden":"auto"}),_e(()=>{document.body.style.overflow="auto"}),(c,o)=>{const d=ee,u=ue,m=H,A=w("RouterLink"),h=re,B=w("w3m-button"),I=K;return n(),x("div",Re,[s.value?(n(),a(u,{key:1,onClick:o[1]||(o[1]=f=>s.value=!1)})):(n(),a(d,{key:0,onClick:o[0]||(o[0]=f=>s.value=!0)})),s.value?(n(),x("div",Se,[t(I,{direction:"vertical",fill:""},{default:e(()=>[(n(!0),x(U,null,z(g.value,f=>(n(),a(A,{key:f.name,to:{name:f.name},class:"router-btn"},{default:e(()=>[t(m,{long:"",onClick:o[2]||(o[2]=k=>s.value=!1)},{default:e(()=>{var k;return[L(R(p(b)((k=f.meta)==null?void 0:k.locale)),1)]}),_:2},1024)]),_:2},1032,["to"]))),128)),t(h,null,{default:e(()=>[L("wallet")]),_:1}),y("div",Ne,[t(B,{style:{zoom:"1.3","letter-spacing":"0.2rem"},balance:!1,label:p(b)("connect")},null,8,["label"])])]),_:1})])):M("",!0)])}}});const Be=D(De,[["__scopeId","data-v-ebf5b532"]]),Ee=_=>(Q("data-v-396e0c25"),_=_(),W(),_),Pe={style:{"border-bottom":"1px solid hsla(0, 0%, 100%, 0.1)"}},Ue=Ee(()=>y("img",{src:Ae,class:"logo"},null,-1)),ze={class:"title"},Oe=N({__name:"index",setup(_){const s=Ie($e).smaller("sm"),g=S(()=>j.reduce((l,r)=>l.concat(r.children),[]).filter(l=>![""].includes(l.name))),{t:c}=V.useI18n(),o=[...oe],{changeLocale:d,currentLocale:u}=te(),m=ce(),A=P(0),h=P(0),B=S(()=>h.value===A.value?"":"priceup");let I=0;function f(l){d(l)}function k(l){if(l>0n){let r=Ce(l);const v=r.indexOf(".");r.length>v+4&&(r=r.substring(0,v+4)),h.value=Number(r)}setTimeout(()=>{A.value=h.value},1e3)}return ie(()=>{m.getPoolAndPrice().then(([,,,l])=>{k(l)}),m.on(m.getEvent("SyncPrice"),(l,r,v,E,$)=>{const C=$.blockNumber*1e3+$.transactionIndex;C>I&&(k(E),I=C)})}),(l,r)=>{const v=K,E=w("RouterLink"),$=ae,C=H,X=me,Y=fe,Z=ve,q=w("w3m-button"),J=G;return n(),x("div",Pe,[t(J,{justify:"space-between",align:"center",class:"nav"},{default:e(()=>[t(v,{size:0},{default:e(()=>[Ue,y("span",ze,[L(" RUNE314 "),y("span",{class:F(["price",B.value])}," $"+R(h.value),3)])]),_:1}),t(v,null,{default:e(()=>[p(s)?M("",!0):(n(),a(v,{key:0,size:30,style:{"margin-right":"2rem"}},{default:e(()=>[(n(!0),x(U,null,z(g.value,i=>(n(),a(E,{key:i.name,class:F(p(ne).currentRoute.value.name===i.name?"active nav-item":"nav-item"),to:{name:i.name}},{default:e(()=>{var O;return[L(R(p(c)((O=i.meta)==null?void 0:O.locale)),1)]}),_:2},1032,["class","to"]))),128))]),_:1})),t(Z,{trigger:"click",onSelect:f},{content:e(()=>[(n(),x(U,null,z(o,i=>t(Y,{key:i.value,value:i.value},{icon:e(()=>[de(t(X,null,null,512),[[pe,i.value===p(u)]])]),default:e(()=>[L(" "+R(i.label),1)]),_:2},1032,["value"])),64))]),default:e(()=>[t(C,{class:"nav-btn",type:"outline",shape:"circle"},{icon:e(()=>[t($)]),_:1})]),_:1}),p(s)?(n(),a(Be,{key:2,style:{"margin-left":"0.2rem"}})):(n(),a(q,{key:1,style:{"margin-left":"1rem"},size:"md",balance:!1,label:p(c)("connect")},null,8,["label"]))]),_:1})]),_:1})])}}});const Fe=D(Oe,[["__scopeId","data-v-396e0c25"]]),Te=_=>(Q("data-v-b8338931"),_=_(),W(),_),Ve=Te(()=>y("div",null,[y("div",{class:"rn-gradient-circle"}),y("div",{class:"rn-gradient-circle theme-pink"})],-1)),je=N({__name:"page-layout",setup(_){const b=se(),s=S(()=>b.getCacheList);return(g,c)=>{const o=w("router-view");return n(),a(o,null,{default:e(({Component:d,route:u})=>[t(ge,{name:"fade",mode:"out-in",appear:""},{default:e(()=>[(n(),a(ye,null,{default:e(()=>[u.meta.ignoreCache?(n(),a(T(d),{key:u.fullPath})):(n(),a(be,{key:1,include:s.value},[(n(),a(T(d),{key:u.fullPath}))],1032,["include"]))]),_:2},1024))]),_:2},1024),Ve]),_:1})}}});const Me=D(je,[["__scopeId","data-v-b8338931"]]),He=N({__name:"default-layout",setup(_){return(b,s)=>{const g=ke,c=xe,o=Le,d=G,u=we,m=he;return n(),a(m,{class:"layout"},{default:e(()=>[t(c,null,{default:e(()=>[t(g,{"offset-top":0},{default:e(()=>[t(Fe)]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(Me)]),_:1}),t(u,null,{default:e(()=>[t(d,{class:"footer",justify:"center",align:"center"},{default:e(()=>[L(" Copyright © 2024 RUNE314 . All rights reserved ")]),_:1})]),_:1})]),_:1})}}});const qe=D(He,[["__scopeId","data-v-17ed72a8"]]);export{qe as default};
