import{d as c,i as f,r as m,j as p,b as v,k as y,l as g,m as k,p as b,u as S,o as h,f as C,t as V}from"./vue.esm-bundler.24f4f1e5.js";const B=c({__name:"ASelect",props:{type:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},label:{type:String,required:!0},direction:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:d}){const i=e;c({name:"ASelect"});const{checked:a,disabled:t}=f(i),l=m(a.value),n=()=>l.value=!l.value;p(()=>a.value,()=>!a.value&&l.value||a.value&&!l.value?n():"");const o=()=>t.value&&a.value?s():!a.value&&t.value?"":s(),s=async()=>{n(),d("update:checked",l.value)};return(r,u)=>(h(),v("li",{class:b({[`select-${e.type}`]:e.type!==null,active:l.value,disabled:S(t),rtl:e.direction===null?e.type==="switch":e.direction==="rtl"}),onClick:o},[y("a",{href:"#",onClick:u[0]||(u[0]=k(()=>{},["prevent"]))},[g(r.$slots,"default",{},()=>[C(V(e.label),1)])])],2))}});B.__docgenInfo={exportName:"default",displayName:"ASelect",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!0},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:checked"}],slots:[{name:"default"}]};export{B as _};
//# sourceMappingURL=ASelect.610bf0f6.js.map
