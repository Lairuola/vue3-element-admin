import{a4 as e,a5 as a,b as l,g as s,y as o,o as r,a6 as u,a7 as n,a as d,w as t,$ as i,R as p,G as c,N as m,a8 as v,P as g,a9 as f}from"./vue.60be4da5.js";import{S as w}from"./element-plus.0a622d7a.js";v("data-v-2dc44de4");const y={class:"login-wrap"},_={class:"login-content"},b=n("div",{class:"login-title"},"系统登录",-1),V=n("i",{class:"el-icon-s-custom"},null,-1),h={class:"login-btn"},k=g("登录"),C=n("p",{class:"login-tips"},"用户名: admin 密码: 123",-1),j=n("p",{class:"login-tips"},"用户名: editor 密码: 456",-1);f();const q={setup(v){const g=e(),f=a(),q=l(!1),x=l(null),K=l(!0),U=l("password"),G=s({username:"",password:""}),I=s({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),N=()=>{K.value?U.value="text":U.value="password",K.value=!K.value},P=async()=>{x.value.validate((e=>{e?(q.value=!0,f.dispatch("user/login",G).then((()=>{g.push("/")})).finally((()=>{q.value=!1}))):w.error("请输入用户名和密码")}))};return(e,a)=>{const l=o("el-input"),s=o("el-form-item"),v=o("el-button"),g=o("el-form");return r(),u("div",y,[n("div",_,[b,d(g,{ref:x,class:"login-form",model:i(G),rules:i(I),"status-icon":""},{default:t((()=>[d(s,{prop:"username"},{default:t((()=>[d(l,{modelValue:i(G).username,"onUpdate:modelValue":a[0]||(a[0]=e=>i(G).username=e),placeholder:"用户名"},{prepend:t((()=>[V])),_:1},8,["modelValue"])])),_:1}),d(s,{prop:"password"},{default:t((()=>[d(l,{modelValue:i(G).password,"onUpdate:modelValue":a[1]||(a[1]=e=>i(G).password=e),placeholder:"密码",type:U.value,onKeyup:p(P,["enter"])},{prepend:t((()=>[c(n("i",{class:"el-icon-lock",onClick:N},null,512),[[m,K.value]]),c(n("i",{class:"el-icon-unlock",onClick:N},null,512),[[m,!K.value]])])),_:1},8,["modelValue","type","onKeyup"])])),_:1}),n("div",h,[d(v,{type:"primary",loading:q.value,onClick:P},{default:t((()=>[k])),_:1},8,["loading"])]),C,j])),_:1},8,["model","rules"])])])}},__scopeId:"data-v-2dc44de4"};export{q as default};