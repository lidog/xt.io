import{ac as Q,aY as W,ad as x,aZ as X,B as P,bf as ee,Z as R,bg as se,a as N,K as p,bh as L,aw as ne,P as oe,aG as te,aH as ae,o as m,a0 as C,w as k,a3 as re,a1 as O,a2 as g,u as a,ab as le,a8 as T,ao as H,a9 as ie,a6 as ce,c as F,a7 as ue,F as de,b7 as pe,b as V,aI as me,ba as fe,aa as ge,bi as ye,bj as ve,bk as be,H as Ce,bl as _,G as D,bm as U,aS as E,bn as $,C as he,bo as Te}from"./index.c537ef80.js";import{E as we}from"./index.1f1d4874.js";const Z=["success","info","warning","error"],l=X({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:P?document.body:void 0}),Se=Q({customClass:{type:String,default:l.customClass},center:{type:Boolean,default:l.center},dangerouslyUseHTMLString:{type:Boolean,default:l.dangerouslyUseHTMLString},duration:{type:Number,default:l.duration},icon:{type:W,default:l.icon},id:{type:String,default:l.id},message:{type:x([String,Object,Function]),default:l.message},onClose:{type:x(Function),required:!1},showClose:{type:Boolean,default:l.showClose},type:{type:String,values:Z,default:l.type},offset:{type:Number,default:l.offset},zIndex:{type:Number,default:l.zIndex},grouping:{type:Boolean,default:l.grouping},repeatNum:{type:Number,default:l.repeatNum}}),Ne={destroy:()=>!0},c=ee([]),ke=s=>{const n=c.findIndex(t=>t.id===s),e=c[n];let r;return n>0&&(r=c[n-1]),{current:e,prev:r}},Ee=s=>{const{prev:n}=ke(s);return n?n.vm.exposed.bottom.value:0},Me=(s,n)=>c.findIndex(r=>r.id===s)>0?20:n,Be=["id"],Ie=["innerHTML"],ze=R({name:"ElMessage"}),xe=R({...ze,props:Se,emits:Ne,setup(s,{expose:n}){const e=s,{Close:r}=ye,{ns:t,zIndex:u}=se("message"),{currentZIndex:i,nextZIndex:d}=u,f=N(),v=N(!1),b=N(0);let w;const G=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),j=p(()=>{const o=e.type;return{[t.bm("icon",o)]:o&&L[o]}}),M=p(()=>e.icon||L[e.type]||""),q=p(()=>Ee(e.id)),B=p(()=>Me(e.id,e.offset)+q.value),K=p(()=>b.value+B.value),Y=p(()=>({top:`${B.value}px`,zIndex:i.value}));function S(){e.duration!==0&&({stop:w}=ve(()=>{h()},e.duration))}function I(){w==null||w()}function h(){v.value=!1}function J({code:o}){o===be.esc&&h()}return ne(()=>{S(),d(),v.value=!0}),oe(()=>e.repeatNum,()=>{I(),S()}),te(document,"keydown",J),ae(f,()=>{b.value=f.value.getBoundingClientRect().height}),n({visible:v,bottom:K,close:h}),(o,z)=>(m(),C(fe,{name:a(t).b("fade"),onBeforeLeave:o.onClose,onAfterLeave:z[0]||(z[0]=De=>o.$emit("destroy")),persisted:""},{default:k(()=>[re(O("div",{id:o.id,ref_key:"messageRef",ref:f,class:g([a(t).b(),{[a(t).m(o.type)]:o.type&&!o.icon},a(t).is("center",o.center),a(t).is("closable",o.showClose),o.customClass]),style:le(a(Y)),role:"alert",onMouseenter:I,onMouseleave:S},[o.repeatNum>1?(m(),C(a(we),{key:0,value:o.repeatNum,type:a(G),class:g(a(t).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),a(M)?(m(),C(a(H),{key:1,class:g([a(t).e("icon"),a(j)])},{default:k(()=>[(m(),C(ie(a(M))))]),_:1},8,["class"])):T("v-if",!0),ce(o.$slots,"default",{},()=>[o.dangerouslyUseHTMLString?(m(),F(de,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),O("p",{class:g(a(t).e("content")),innerHTML:o.message},null,10,Ie)],2112)):(m(),F("p",{key:0,class:g(a(t).e("content"))},ue(o.message),3))]),o.showClose?(m(),C(a(H),{key:2,class:g(a(t).e("closeBtn")),onClick:pe(h,["stop"])},{default:k(()=>[V(a(r))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,Be),[[me,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Le=ge(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Oe=1;const A=s=>{const n=!s||D(s)||U(s)||E(s)?{message:s}:s,e={...l,...n};if(!e.appendTo)e.appendTo=document.body;else if(D(e.appendTo)){let r=document.querySelector(e.appendTo);he(r)||(r=document.body),e.appendTo=r}return e},He=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Fe=({appendTo:s,...n},e)=>{const r=`message_${Oe++}`,t=n.onClose,u=document.createElement("div"),i={...n,id:r,onClose:()=>{t==null||t(),He(b)},onDestroy:()=>{$(null,u)}},d=V(Le,i,E(i.message)||U(i.message)?{default:E(i.message)?i.message:()=>i.message}:null);d.appContext=e||y._context,$(d,u),s.appendChild(u.firstElementChild);const f=d.component,b={id:r,vnode:d,vm:f,handler:{close:()=>{f.exposed.visible.value=!1}},props:d.component.props};return b},y=(s={},n)=>{if(!P)return{close:()=>{}};if(Ce(_.max)&&c.length>=_.max)return{close:()=>{}};const e=A(s);if(e.grouping&&c.length){const t=c.find(({vnode:u})=>{var i;return((i=u.props)==null?void 0:i.message)===e.message});if(t)return t.props.repeatNum+=1,t.props.type=e.type,t.handler}const r=Fe(e,n);return c.push(r),r.handler};Z.forEach(s=>{y[s]=(n={},e)=>{const r=A(n);return y({...r,type:s},e)}});function _e(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=_e;y._context=null;const Re=Te(y,"$message");export{Re as E};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTg5MDVjNDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9tZXNzYWdlL3NyYy9tZXNzYWdlLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9tZXNzYWdlL3NyYy9pbnN0YW5jZS5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVzc2FnZS9zcmMvbWVzc2FnZTIubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL21lc3NhZ2Uvc3JjL21ldGhvZC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0ICcuLi8uLi8uLi91dGlscy9pbmRleC5tanMnO1xuaW1wb3J0IHsgbXV0YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3R5cGVzY3JpcHQubWpzJztcbmltcG9ydCB7IGJ1aWxkUHJvcHMsIGRlZmluZVByb3BUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL3Byb3BzL3J1bnRpbWUubWpzJztcbmltcG9ydCB7IGljb25Qcm9wVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Z1ZS9pY29uLm1qcyc7XG5cbmNvbnN0IG1lc3NhZ2VUeXBlcyA9IFtcInN1Y2Nlc3NcIiwgXCJpbmZvXCIsIFwid2FybmluZ1wiLCBcImVycm9yXCJdO1xuY29uc3QgbWVzc2FnZURlZmF1bHRzID0gbXV0YWJsZSh7XG4gIGN1c3RvbUNsYXNzOiBcIlwiLFxuICBjZW50ZXI6IGZhbHNlLFxuICBkYW5nZXJvdXNseVVzZUhUTUxTdHJpbmc6IGZhbHNlLFxuICBkdXJhdGlvbjogM2UzLFxuICBpY29uOiB2b2lkIDAsXG4gIGlkOiBcIlwiLFxuICBtZXNzYWdlOiBcIlwiLFxuICBvbkNsb3NlOiB2b2lkIDAsXG4gIHNob3dDbG9zZTogZmFsc2UsXG4gIHR5cGU6IFwiaW5mb1wiLFxuICBvZmZzZXQ6IDE2LFxuICB6SW5kZXg6IDAsXG4gIGdyb3VwaW5nOiBmYWxzZSxcbiAgcmVwZWF0TnVtOiAxLFxuICBhcHBlbmRUbzogaXNDbGllbnQgPyBkb2N1bWVudC5ib2R5IDogdm9pZCAwXG59KTtcbmNvbnN0IG1lc3NhZ2VQcm9wcyA9IGJ1aWxkUHJvcHMoe1xuICBjdXN0b21DbGFzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuY3VzdG9tQ2xhc3NcbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuY2VudGVyXG4gIH0sXG4gIGRhbmdlcm91c2x5VXNlSFRNTFN0cmluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogbWVzc2FnZURlZmF1bHRzLmRhbmdlcm91c2x5VXNlSFRNTFN0cmluZ1xuICB9LFxuICBkdXJhdGlvbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuZHVyYXRpb25cbiAgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6IGljb25Qcm9wVHlwZSxcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuaWNvblxuICB9LFxuICBpZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuaWRcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIHR5cGU6IGRlZmluZVByb3BUeXBlKFtcbiAgICAgIFN0cmluZyxcbiAgICAgIE9iamVjdCxcbiAgICAgIEZ1bmN0aW9uXG4gICAgXSksXG4gICAgZGVmYXVsdDogbWVzc2FnZURlZmF1bHRzLm1lc3NhZ2VcbiAgfSxcbiAgb25DbG9zZToge1xuICAgIHR5cGU6IGRlZmluZVByb3BUeXBlKEZ1bmN0aW9uKSxcbiAgICByZXF1aXJlZDogZmFsc2VcbiAgfSxcbiAgc2hvd0Nsb3NlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBtZXNzYWdlRGVmYXVsdHMuc2hvd0Nsb3NlXG4gIH0sXG4gIHR5cGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsdWVzOiBtZXNzYWdlVHlwZXMsXG4gICAgZGVmYXVsdDogbWVzc2FnZURlZmF1bHRzLnR5cGVcbiAgfSxcbiAgb2Zmc2V0OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG1lc3NhZ2VEZWZhdWx0cy5vZmZzZXRcbiAgfSxcbiAgekluZGV4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IG1lc3NhZ2VEZWZhdWx0cy56SW5kZXhcbiAgfSxcbiAgZ3JvdXBpbmc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IG1lc3NhZ2VEZWZhdWx0cy5ncm91cGluZ1xuICB9LFxuICByZXBlYXROdW06IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogbWVzc2FnZURlZmF1bHRzLnJlcGVhdE51bVxuICB9XG59KTtcbmNvbnN0IG1lc3NhZ2VFbWl0cyA9IHtcbiAgZGVzdHJveTogKCkgPT4gdHJ1ZVxufTtcblxuZXhwb3J0IHsgbWVzc2FnZURlZmF1bHRzLCBtZXNzYWdlRW1pdHMsIG1lc3NhZ2VQcm9wcywgbWVzc2FnZVR5cGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXNzYWdlLm1qcy5tYXBcbiIsImltcG9ydCB7IHNoYWxsb3dSZWFjdGl2ZSB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGluc3RhbmNlcyA9IHNoYWxsb3dSZWFjdGl2ZShbXSk7XG5jb25zdCBnZXRJbnN0YW5jZSA9IChpZCkgPT4ge1xuICBjb25zdCBpZHggPSBpbnN0YW5jZXMuZmluZEluZGV4KChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgPT09IGlkKTtcbiAgY29uc3QgY3VycmVudCA9IGluc3RhbmNlc1tpZHhdO1xuICBsZXQgcHJldjtcbiAgaWYgKGlkeCA+IDApIHtcbiAgICBwcmV2ID0gaW5zdGFuY2VzW2lkeCAtIDFdO1xuICB9XG4gIHJldHVybiB7IGN1cnJlbnQsIHByZXYgfTtcbn07XG5jb25zdCBnZXRMYXN0T2Zmc2V0ID0gKGlkKSA9PiB7XG4gIGNvbnN0IHsgcHJldiB9ID0gZ2V0SW5zdGFuY2UoaWQpO1xuICBpZiAoIXByZXYpXG4gICAgcmV0dXJuIDA7XG4gIHJldHVybiBwcmV2LnZtLmV4cG9zZWQuYm90dG9tLnZhbHVlO1xufTtcbmNvbnN0IGdldE9mZnNldE9yU3BhY2UgPSAoaWQsIG9mZnNldCkgPT4ge1xuICBjb25zdCBpZHggPSBpbnN0YW5jZXMuZmluZEluZGV4KChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuaWQgPT09IGlkKTtcbiAgcmV0dXJuIGlkeCA+IDAgPyAyMCA6IG9mZnNldDtcbn07XG5cbmV4cG9ydCB7IGdldEluc3RhbmNlLCBnZXRMYXN0T2Zmc2V0LCBnZXRPZmZzZXRPclNwYWNlLCBpbnN0YW5jZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluc3RhbmNlLm1qcy5tYXBcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCB3YXRjaCwgb3BlbkJsb2NrLCBjcmVhdGVCbG9jaywgVHJhbnNpdGlvbiwgdW5yZWYsIHdpdGhDdHgsIHdpdGhEaXJlY3RpdmVzLCBjcmVhdGVFbGVtZW50Vk5vZGUsIG5vcm1hbGl6ZUNsYXNzLCBub3JtYWxpemVTdHlsZSwgY3JlYXRlQ29tbWVudFZOb2RlLCByZXNvbHZlRHluYW1pY0NvbXBvbmVudCwgcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcsIEZyYWdtZW50LCB3aXRoTW9kaWZpZXJzLCBjcmVhdGVWTm9kZSwgdlNob3cgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlVGltZW91dEZuLCB1c2VFdmVudExpc3RlbmVyLCB1c2VSZXNpemVPYnNlcnZlciB9IGZyb20gJ0B2dWV1c2UvY29yZSc7XG5pbXBvcnQgJy4uLy4uLy4uL3V0aWxzL2luZGV4Lm1qcyc7XG5pbXBvcnQgJy4uLy4uLy4uL2NvbnN0YW50cy9pbmRleC5tanMnO1xuaW1wb3J0IHsgRWxCYWRnZSB9IGZyb20gJy4uLy4uL2JhZGdlL2luZGV4Lm1qcyc7XG5pbXBvcnQgJy4uLy4uL2NvbmZpZy1wcm92aWRlci9pbmRleC5tanMnO1xuaW1wb3J0IHsgRWxJY29uIH0gZnJvbSAnLi4vLi4vaWNvbi9pbmRleC5tanMnO1xuaW1wb3J0IHsgbWVzc2FnZVByb3BzLCBtZXNzYWdlRW1pdHMgfSBmcm9tICcuL21lc3NhZ2UubWpzJztcbmltcG9ydCB7IGdldExhc3RPZmZzZXQsIGdldE9mZnNldE9yU3BhY2UgfSBmcm9tICcuL2luc3RhbmNlLm1qcyc7XG5pbXBvcnQgX2V4cG9ydF9zZmMgZnJvbSAnLi4vLi4vLi4vX3ZpcnR1YWwvcGx1Z2luLXZ1ZV9leHBvcnQtaGVscGVyLm1qcyc7XG5pbXBvcnQgeyBUeXBlQ29tcG9uZW50cywgVHlwZUNvbXBvbmVudHNNYXAgfSBmcm9tICcuLi8uLi8uLi91dGlscy92dWUvaWNvbi5tanMnO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29tcG9uZW50U2V0dGluZ3MgfSBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXIvc3JjL2hvb2tzL3VzZS1nbG9iYWwtY29uZmlnLm1qcyc7XG5pbXBvcnQgeyBFVkVOVF9DT0RFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2FyaWEubWpzJztcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImlkXCJdO1xuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlubmVySFRNTFwiXTtcbmNvbnN0IF9fZGVmYXVsdF9fID0gZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJFbE1lc3NhZ2VcIlxufSk7XG5jb25zdCBfc2ZjX21haW4gPSAvKiBAX19QVVJFX18gKi8gZGVmaW5lQ29tcG9uZW50KHtcbiAgLi4uX19kZWZhdWx0X18sXG4gIHByb3BzOiBtZXNzYWdlUHJvcHMsXG4gIGVtaXRzOiBtZXNzYWdlRW1pdHMsXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlIH0pIHtcbiAgICBjb25zdCBwcm9wcyA9IF9fcHJvcHM7XG4gICAgY29uc3QgeyBDbG9zZSB9ID0gVHlwZUNvbXBvbmVudHM7XG4gICAgY29uc3QgeyBucywgekluZGV4IH0gPSB1c2VHbG9iYWxDb21wb25lbnRTZXR0aW5ncyhcIm1lc3NhZ2VcIik7XG4gICAgY29uc3QgeyBjdXJyZW50WkluZGV4LCBuZXh0WkluZGV4IH0gPSB6SW5kZXg7XG4gICAgY29uc3QgbWVzc2FnZVJlZiA9IHJlZigpO1xuICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpO1xuICAgIGNvbnN0IGhlaWdodCA9IHJlZigwKTtcbiAgICBsZXQgc3RvcFRpbWVyID0gdm9pZCAwO1xuICAgIGNvbnN0IGJhZGdlVHlwZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnR5cGUgPyBwcm9wcy50eXBlID09PSBcImVycm9yXCIgPyBcImRhbmdlclwiIDogcHJvcHMudHlwZSA6IFwiaW5mb1wiKTtcbiAgICBjb25zdCB0eXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gcHJvcHMudHlwZTtcbiAgICAgIHJldHVybiB7IFtucy5ibShcImljb25cIiwgdHlwZSldOiB0eXBlICYmIFR5cGVDb21wb25lbnRzTWFwW3R5cGVdIH07XG4gICAgfSk7XG4gICAgY29uc3QgaWNvbkNvbXBvbmVudCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmljb24gfHwgVHlwZUNvbXBvbmVudHNNYXBbcHJvcHMudHlwZV0gfHwgXCJcIik7XG4gICAgY29uc3QgbGFzdE9mZnNldCA9IGNvbXB1dGVkKCgpID0+IGdldExhc3RPZmZzZXQocHJvcHMuaWQpKTtcbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiBnZXRPZmZzZXRPclNwYWNlKHByb3BzLmlkLCBwcm9wcy5vZmZzZXQpICsgbGFzdE9mZnNldC52YWx1ZSk7XG4gICAgY29uc3QgYm90dG9tID0gY29tcHV0ZWQoKCkgPT4gaGVpZ2h0LnZhbHVlICsgb2Zmc2V0LnZhbHVlKTtcbiAgICBjb25zdCBjdXN0b21TdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB0b3A6IGAke29mZnNldC52YWx1ZX1weGAsXG4gICAgICB6SW5kZXg6IGN1cnJlbnRaSW5kZXgudmFsdWVcbiAgICB9KSk7XG4gICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgIGlmIChwcm9wcy5kdXJhdGlvbiA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgKHsgc3RvcDogc3RvcFRpbWVyIH0gPSB1c2VUaW1lb3V0Rm4oKCkgPT4ge1xuICAgICAgICBjbG9zZSgpO1xuICAgICAgfSwgcHJvcHMuZHVyYXRpb24pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJUaW1lcigpIHtcbiAgICAgIHN0b3BUaW1lciA9PSBudWxsID8gdm9pZCAwIDogc3RvcFRpbWVyKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBrZXlkb3duKHsgY29kZSB9KSB7XG4gICAgICBpZiAoY29kZSA9PT0gRVZFTlRfQ09ERS5lc2MpIHtcbiAgICAgICAgY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgIG5leHRaSW5kZXgoKTtcbiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlO1xuICAgIH0pO1xuICAgIHdhdGNoKCgpID0+IHByb3BzLnJlcGVhdE51bSwgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgc3RhcnRUaW1lcigpO1xuICAgIH0pO1xuICAgIHVzZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIFwia2V5ZG93blwiLCBrZXlkb3duKTtcbiAgICB1c2VSZXNpemVPYnNlcnZlcihtZXNzYWdlUmVmLCAoKSA9PiB7XG4gICAgICBoZWlnaHQudmFsdWUgPSBtZXNzYWdlUmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9KTtcbiAgICBleHBvc2Uoe1xuICAgICAgdmlzaWJsZSxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGNsb3NlXG4gICAgfSk7XG4gICAgcmV0dXJuIChfY3R4LCBfY2FjaGUpID0+IHtcbiAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soVHJhbnNpdGlvbiwge1xuICAgICAgICBuYW1lOiB1bnJlZihucykuYihcImZhZGVcIiksXG4gICAgICAgIG9uQmVmb3JlTGVhdmU6IF9jdHgub25DbG9zZSxcbiAgICAgICAgb25BZnRlckxlYXZlOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQpID0+IF9jdHguJGVtaXQoXCJkZXN0cm95XCIpKSxcbiAgICAgICAgcGVyc2lzdGVkOiBcIlwiXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IHdpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIHdpdGhEaXJlY3RpdmVzKGNyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICAgICAgICBpZDogX2N0eC5pZCxcbiAgICAgICAgICAgIHJlZl9rZXk6IFwibWVzc2FnZVJlZlwiLFxuICAgICAgICAgICAgcmVmOiBtZXNzYWdlUmVmLFxuICAgICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcbiAgICAgICAgICAgICAgdW5yZWYobnMpLmIoKSxcbiAgICAgICAgICAgICAgeyBbdW5yZWYobnMpLm0oX2N0eC50eXBlKV06IF9jdHgudHlwZSAmJiAhX2N0eC5pY29uIH0sXG4gICAgICAgICAgICAgIHVucmVmKG5zKS5pcyhcImNlbnRlclwiLCBfY3R4LmNlbnRlciksXG4gICAgICAgICAgICAgIHVucmVmKG5zKS5pcyhcImNsb3NhYmxlXCIsIF9jdHguc2hvd0Nsb3NlKSxcbiAgICAgICAgICAgICAgX2N0eC5jdXN0b21DbGFzc1xuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBzdHlsZTogbm9ybWFsaXplU3R5bGUodW5yZWYoY3VzdG9tU3R5bGUpKSxcbiAgICAgICAgICAgIHJvbGU6IFwiYWxlcnRcIixcbiAgICAgICAgICAgIG9uTW91c2VlbnRlcjogY2xlYXJUaW1lcixcbiAgICAgICAgICAgIG9uTW91c2VsZWF2ZTogc3RhcnRUaW1lclxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jdHgucmVwZWF0TnVtID4gMSA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2sodW5yZWYoRWxCYWRnZSksIHtcbiAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICB2YWx1ZTogX2N0eC5yZXBlYXROdW0sXG4gICAgICAgICAgICAgIHR5cGU6IHVucmVmKGJhZGdlVHlwZSksXG4gICAgICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyh1bnJlZihucykuZShcImJhZGdlXCIpKVxuICAgICAgICAgICAgfSwgbnVsbCwgOCwgW1widmFsdWVcIiwgXCJ0eXBlXCIsIFwiY2xhc3NcIl0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICB1bnJlZihpY29uQ29tcG9uZW50KSA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2sodW5yZWYoRWxJY29uKSwge1xuICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhbdW5yZWYobnMpLmUoXCJpY29uXCIpLCB1bnJlZih0eXBlQ2xhc3MpXSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhyZXNvbHZlRHluYW1pY0NvbXBvbmVudCh1bnJlZihpY29uQ29tcG9uZW50KSkpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMVxuICAgICAgICAgICAgfSwgOCwgW1wiY2xhc3NcIl0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sICgpID0+IFtcbiAgICAgICAgICAgICAgIV9jdHguZGFuZ2Vyb3VzbHlVc2VIVE1MU3RyaW5nID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJwXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKHVucmVmKG5zKS5lKFwiY29udGVudFwiKSlcbiAgICAgICAgICAgICAgfSwgdG9EaXNwbGF5U3RyaW5nKF9jdHgubWVzc2FnZSksIDMpKSA6IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKEZyYWdtZW50LCB7IGtleTogMSB9LCBbXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29tbWVudFZOb2RlKFwiIENhdXRpb24gaGVyZSwgbWVzc2FnZSBjb3VsZCd2ZSBiZWVuIGNvbXByb21pc2VkLCBuZXZlciB1c2UgdXNlcidzIGlucHV0IGFzIG1lc3NhZ2UgXCIpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKHVucmVmKG5zKS5lKFwiY29udGVudFwiKSksXG4gICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF9jdHgubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIG51bGwsIDEwLCBfaG9pc3RlZF8yKVxuICAgICAgICAgICAgICBdLCAyMTEyKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2N0eC5zaG93Q2xvc2UgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHVucmVmKEVsSWNvbiksIHtcbiAgICAgICAgICAgICAga2V5OiAyLFxuICAgICAgICAgICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3ModW5yZWYobnMpLmUoXCJjbG9zZUJ0blwiKSksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHdpdGhNb2RpZmllcnMoY2xvc2UsIFtcInN0b3BcIl0pXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IHdpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVZOb2RlKHVucmVmKENsb3NlKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDFcbiAgICAgICAgICAgIH0sIDgsIFtcImNsYXNzXCIsIFwib25DbGlja1wiXSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgIF0sIDQ2LCBfaG9pc3RlZF8xKSwgW1xuICAgICAgICAgICAgW3ZTaG93LCB2aXNpYmxlLnZhbHVlXVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAzXG4gICAgICB9LCA4LCBbXCJuYW1lXCIsIFwib25CZWZvcmVMZWF2ZVwiXSk7XG4gICAgfTtcbiAgfVxufSk7XG52YXIgTWVzc2FnZUNvbnN0cnVjdG9yID0gLyogQF9fUFVSRV9fICovIF9leHBvcnRfc2ZjKF9zZmNfbWFpbiwgW1tcIl9fZmlsZVwiLCBcIi9ob21lL3J1bm5lci93b3JrL2VsZW1lbnQtcGx1cy9lbGVtZW50LXBsdXMvcGFja2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL3NyYy9tZXNzYWdlLnZ1ZVwiXV0pO1xuXG5leHBvcnQgeyBNZXNzYWdlQ29uc3RydWN0b3IgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVzc2FnZTIubWpzLm1hcFxuIiwiaW1wb3J0IHsgaXNWTm9kZSwgcmVuZGVyLCBjcmVhdGVWTm9kZSB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBpc0NsaWVudCwgaXNOdW1iZXIgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0ICcuLi8uLi8uLi91dGlscy9pbmRleC5tanMnO1xuaW1wb3J0ICcuLi8uLi9jb25maWctcHJvdmlkZXIvaW5kZXgubWpzJztcbmltcG9ydCBNZXNzYWdlQ29uc3RydWN0b3IgZnJvbSAnLi9tZXNzYWdlMi5tanMnO1xuaW1wb3J0IHsgbWVzc2FnZURlZmF1bHRzLCBtZXNzYWdlVHlwZXMgfSBmcm9tICcuL21lc3NhZ2UubWpzJztcbmltcG9ydCB7IGluc3RhbmNlcyB9IGZyb20gJy4vaW5zdGFuY2UubWpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0Z1bmN0aW9uIH0gZnJvbSAnQHZ1ZS9zaGFyZWQnO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdHlwZXMubWpzJztcbmltcG9ydCB7IGRlYnVnV2FybiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Vycm9yLm1qcyc7XG5pbXBvcnQgeyBtZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnLXByb3ZpZGVyL3NyYy9jb25maWctcHJvdmlkZXIubWpzJztcblxubGV0IHNlZWQgPSAxO1xuY29uc3Qgbm9ybWFsaXplT3B0aW9ucyA9IChwYXJhbXMpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9ICFwYXJhbXMgfHwgaXNTdHJpbmcocGFyYW1zKSB8fCBpc1ZOb2RlKHBhcmFtcykgfHwgaXNGdW5jdGlvbihwYXJhbXMpID8geyBtZXNzYWdlOiBwYXJhbXMgfSA6IHBhcmFtcztcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAuLi5tZXNzYWdlRGVmYXVsdHMsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBpZiAoIW5vcm1hbGl6ZWQuYXBwZW5kVG8pIHtcbiAgICBub3JtYWxpemVkLmFwcGVuZFRvID0gZG9jdW1lbnQuYm9keTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhub3JtYWxpemVkLmFwcGVuZFRvKSkge1xuICAgIGxldCBhcHBlbmRUbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9ybWFsaXplZC5hcHBlbmRUbyk7XG4gICAgaWYgKCFpc0VsZW1lbnQoYXBwZW5kVG8pKSB7XG4gICAgICBkZWJ1Z1dhcm4oXCJFbE1lc3NhZ2VcIiwgXCJ0aGUgYXBwZW5kVG8gb3B0aW9uIGlzIG5vdCBhbiBIVE1MRWxlbWVudC4gRmFsbGluZyBiYWNrIHRvIGRvY3VtZW50LmJvZHkuXCIpO1xuICAgICAgYXBwZW5kVG8gPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICBub3JtYWxpemVkLmFwcGVuZFRvID0gYXBwZW5kVG87XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59O1xuY29uc3QgY2xvc2VNZXNzYWdlID0gKGluc3RhbmNlKSA9PiB7XG4gIGNvbnN0IGlkeCA9IGluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgaWYgKGlkeCA9PT0gLTEpXG4gICAgcmV0dXJuO1xuICBpbnN0YW5jZXMuc3BsaWNlKGlkeCwgMSk7XG4gIGNvbnN0IHsgaGFuZGxlciB9ID0gaW5zdGFuY2U7XG4gIGhhbmRsZXIuY2xvc2UoKTtcbn07XG5jb25zdCBjcmVhdGVNZXNzYWdlID0gKHsgYXBwZW5kVG8sIC4uLm9wdGlvbnMgfSwgY29udGV4dCkgPT4ge1xuICBjb25zdCBpZCA9IGBtZXNzYWdlXyR7c2VlZCsrfWA7XG4gIGNvbnN0IHVzZXJPbkNsb3NlID0gb3B0aW9ucy5vbkNsb3NlO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlkLFxuICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgIHVzZXJPbkNsb3NlID09IG51bGwgPyB2b2lkIDAgOiB1c2VyT25DbG9zZSgpO1xuICAgICAgY2xvc2VNZXNzYWdlKGluc3RhbmNlKTtcbiAgICB9LFxuICAgIG9uRGVzdHJveTogKCkgPT4ge1xuICAgICAgcmVuZGVyKG51bGwsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9O1xuICBjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKE1lc3NhZ2VDb25zdHJ1Y3RvciwgcHJvcHMsIGlzRnVuY3Rpb24ocHJvcHMubWVzc2FnZSkgfHwgaXNWTm9kZShwcm9wcy5tZXNzYWdlKSA/IHtcbiAgICBkZWZhdWx0OiBpc0Z1bmN0aW9uKHByb3BzLm1lc3NhZ2UpID8gcHJvcHMubWVzc2FnZSA6ICgpID0+IHByb3BzLm1lc3NhZ2VcbiAgfSA6IG51bGwpO1xuICB2bm9kZS5hcHBDb250ZXh0ID0gY29udGV4dCB8fCBtZXNzYWdlLl9jb250ZXh0O1xuICByZW5kZXIodm5vZGUsIGNvbnRhaW5lcik7XG4gIGFwcGVuZFRvLmFwcGVuZENoaWxkKGNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIGNvbnN0IHZtID0gdm5vZGUuY29tcG9uZW50O1xuICBjb25zdCBoYW5kbGVyID0ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICB2bS5leHBvc2VkLnZpc2libGUudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIGlkLFxuICAgIHZub2RlLFxuICAgIHZtLFxuICAgIGhhbmRsZXIsXG4gICAgcHJvcHM6IHZub2RlLmNvbXBvbmVudC5wcm9wc1xuICB9O1xuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuY29uc3QgbWVzc2FnZSA9IChvcHRpb25zID0ge30sIGNvbnRleHQpID0+IHtcbiAgaWYgKCFpc0NsaWVudClcbiAgICByZXR1cm4geyBjbG9zZTogKCkgPT4gdm9pZCAwIH07XG4gIGlmIChpc051bWJlcihtZXNzYWdlQ29uZmlnLm1heCkgJiYgaW5zdGFuY2VzLmxlbmd0aCA+PSBtZXNzYWdlQ29uZmlnLm1heCkge1xuICAgIHJldHVybiB7IGNsb3NlOiAoKSA9PiB2b2lkIDAgfTtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT3B0aW9ucyhvcHRpb25zKTtcbiAgaWYgKG5vcm1hbGl6ZWQuZ3JvdXBpbmcgJiYgaW5zdGFuY2VzLmxlbmd0aCkge1xuICAgIGNvbnN0IGluc3RhbmNlMiA9IGluc3RhbmNlcy5maW5kKCh7IHZub2RlOiB2bSB9KSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKChfYSA9IHZtLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogX2EubWVzc2FnZSkgPT09IG5vcm1hbGl6ZWQubWVzc2FnZTtcbiAgICB9KTtcbiAgICBpZiAoaW5zdGFuY2UyKSB7XG4gICAgICBpbnN0YW5jZTIucHJvcHMucmVwZWF0TnVtICs9IDE7XG4gICAgICBpbnN0YW5jZTIucHJvcHMudHlwZSA9IG5vcm1hbGl6ZWQudHlwZTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTIuaGFuZGxlcjtcbiAgICB9XG4gIH1cbiAgY29uc3QgaW5zdGFuY2UgPSBjcmVhdGVNZXNzYWdlKG5vcm1hbGl6ZWQsIGNvbnRleHQpO1xuICBpbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gIHJldHVybiBpbnN0YW5jZS5oYW5kbGVyO1xufTtcbm1lc3NhZ2VUeXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gIG1lc3NhZ2VbdHlwZV0gPSAob3B0aW9ucyA9IHt9LCBhcHBDb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIG1lc3NhZ2UoeyAuLi5ub3JtYWxpemVkLCB0eXBlIH0sIGFwcENvbnRleHQpO1xuICB9O1xufSk7XG5mdW5jdGlvbiBjbG9zZUFsbCh0eXBlKSB7XG4gIGZvciAoY29uc3QgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzKSB7XG4gICAgaWYgKCF0eXBlIHx8IHR5cGUgPT09IGluc3RhbmNlLnByb3BzLnR5cGUpIHtcbiAgICAgIGluc3RhbmNlLmhhbmRsZXIuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbm1lc3NhZ2UuY2xvc2VBbGwgPSBjbG9zZUFsbDtcbm1lc3NhZ2UuX2NvbnRleHQgPSBudWxsO1xuXG5leHBvcnQgeyBjbG9zZUFsbCwgbWVzc2FnZSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXRob2QubWpzLm1hcFxuIiwiaW1wb3J0ICcuLi8uLi91dGlscy9pbmRleC5tanMnO1xuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi9zcmMvbWV0aG9kLm1qcyc7XG5leHBvcnQgeyBtZXNzYWdlRGVmYXVsdHMsIG1lc3NhZ2VFbWl0cywgbWVzc2FnZVByb3BzLCBtZXNzYWdlVHlwZXMgfSBmcm9tICcuL3NyYy9tZXNzYWdlLm1qcyc7XG5pbXBvcnQgeyB3aXRoSW5zdGFsbEZ1bmN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvdnVlL2luc3RhbGwubWpzJztcblxuY29uc3QgRWxNZXNzYWdlID0gd2l0aEluc3RhbGxGdW5jdGlvbihtZXNzYWdlLCBcIiRtZXNzYWdlXCIpO1xuXG5leHBvcnQgeyBFbE1lc3NhZ2UsIEVsTWVzc2FnZSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOlsibWVzc2FnZVR5cGVzIiwibWVzc2FnZURlZmF1bHRzIiwibXV0YWJsZSIsImlzQ2xpZW50IiwibWVzc2FnZVByb3BzIiwiYnVpbGRQcm9wcyIsImljb25Qcm9wVHlwZSIsImRlZmluZVByb3BUeXBlIiwibWVzc2FnZUVtaXRzIiwiaW5zdGFuY2VzIiwic2hhbGxvd1JlYWN0aXZlIiwiZ2V0SW5zdGFuY2UiLCJpZCIsImlkeCIsImluc3RhbmNlIiwiY3VycmVudCIsInByZXYiLCJnZXRMYXN0T2Zmc2V0IiwiZ2V0T2Zmc2V0T3JTcGFjZSIsIm9mZnNldCIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX19kZWZhdWx0X18iLCJkZWZpbmVDb21wb25lbnQiLCJfc2ZjX21haW4iLCJfX3Byb3BzIiwiZXhwb3NlIiwicHJvcHMiLCJDbG9zZSIsIlR5cGVDb21wb25lbnRzIiwibnMiLCJ6SW5kZXgiLCJ1c2VHbG9iYWxDb21wb25lbnRTZXR0aW5ncyIsImN1cnJlbnRaSW5kZXgiLCJuZXh0WkluZGV4IiwibWVzc2FnZVJlZiIsInJlZiIsInZpc2libGUiLCJoZWlnaHQiLCJzdG9wVGltZXIiLCJiYWRnZVR5cGUiLCJjb21wdXRlZCIsInR5cGVDbGFzcyIsInR5cGUiLCJUeXBlQ29tcG9uZW50c01hcCIsImljb25Db21wb25lbnQiLCJsYXN0T2Zmc2V0IiwiYm90dG9tIiwiY3VzdG9tU3R5bGUiLCJzdGFydFRpbWVyIiwidXNlVGltZW91dEZuIiwiY2xvc2UiLCJjbGVhclRpbWVyIiwia2V5ZG93biIsImNvZGUiLCJFVkVOVF9DT0RFIiwib25Nb3VudGVkIiwid2F0Y2giLCJ1c2VFdmVudExpc3RlbmVyIiwidXNlUmVzaXplT2JzZXJ2ZXIiLCJfY3R4IiwiX2NhY2hlIiwib3BlbkJsb2NrIiwiY3JlYXRlQmxvY2siLCJUcmFuc2l0aW9uIiwidW5yZWYiLCIkZXZlbnQiLCJ3aXRoQ3R4Iiwid2l0aERpcmVjdGl2ZXMiLCJjcmVhdGVFbGVtZW50Vk5vZGUiLCJub3JtYWxpemVDbGFzcyIsIm5vcm1hbGl6ZVN0eWxlIiwiRWxCYWRnZSIsImNyZWF0ZUNvbW1lbnRWTm9kZSIsIkVsSWNvbiIsInJlc29sdmVEeW5hbWljQ29tcG9uZW50IiwicmVuZGVyU2xvdCIsImNyZWF0ZUVsZW1lbnRCbG9jayIsIkZyYWdtZW50IiwidG9EaXNwbGF5U3RyaW5nIiwid2l0aE1vZGlmaWVycyIsImNyZWF0ZVZOb2RlIiwidlNob3ciLCJNZXNzYWdlQ29uc3RydWN0b3IiLCJfZXhwb3J0X3NmYyIsInNlZWQiLCJub3JtYWxpemVPcHRpb25zIiwicGFyYW1zIiwib3B0aW9ucyIsImlzU3RyaW5nIiwiaXNWTm9kZSIsImlzRnVuY3Rpb24iLCJub3JtYWxpemVkIiwiYXBwZW5kVG8iLCJpc0VsZW1lbnQiLCJjbG9zZU1lc3NhZ2UiLCJoYW5kbGVyIiwiY3JlYXRlTWVzc2FnZSIsImNvbnRleHQiLCJ1c2VyT25DbG9zZSIsImNvbnRhaW5lciIsInJlbmRlciIsInZub2RlIiwibWVzc2FnZSIsInZtIiwiaXNOdW1iZXIiLCJtZXNzYWdlQ29uZmlnIiwiaW5zdGFuY2UyIiwiX2EiLCJhcHBDb250ZXh0IiwiY2xvc2VBbGwiLCJFbE1lc3NhZ2UiLCJ3aXRoSW5zdGFsbEZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoia2NBTUEsTUFBTUEsRUFBZSxDQUFDLFVBQVcsT0FBUSxVQUFXLE9BQU8sRUFDckRDLEVBQWtCQyxFQUFRLENBQzlCLFlBQWEsR0FDYixPQUFRLEdBQ1IseUJBQTBCLEdBQzFCLFNBQVUsSUFDVixLQUFNLE9BQ04sR0FBSSxHQUNKLFFBQVMsR0FDVCxRQUFTLE9BQ1QsVUFBVyxHQUNYLEtBQU0sT0FDTixPQUFRLEdBQ1IsT0FBUSxFQUNSLFNBQVUsR0FDVixVQUFXLEVBQ1gsU0FBVUMsRUFBVyxTQUFTLEtBQU8sTUFDdkMsQ0FBQyxFQUNLQyxHQUFlQyxFQUFXLENBQzlCLFlBQWEsQ0FDWCxLQUFNLE9BQ04sUUFBU0osRUFBZ0IsV0FDMUIsRUFDRCxPQUFRLENBQ04sS0FBTSxRQUNOLFFBQVNBLEVBQWdCLE1BQzFCLEVBQ0QseUJBQTBCLENBQ3hCLEtBQU0sUUFDTixRQUFTQSxFQUFnQix3QkFDMUIsRUFDRCxTQUFVLENBQ1IsS0FBTSxPQUNOLFFBQVNBLEVBQWdCLFFBQzFCLEVBQ0QsS0FBTSxDQUNKLEtBQU1LLEVBQ04sUUFBU0wsRUFBZ0IsSUFDMUIsRUFDRCxHQUFJLENBQ0YsS0FBTSxPQUNOLFFBQVNBLEVBQWdCLEVBQzFCLEVBQ0QsUUFBUyxDQUNQLEtBQU1NLEVBQWUsQ0FDbkIsT0FDQSxPQUNBLFFBQ04sQ0FBSyxFQUNELFFBQVNOLEVBQWdCLE9BQzFCLEVBQ0QsUUFBUyxDQUNQLEtBQU1NLEVBQWUsUUFBUSxFQUM3QixTQUFVLEVBQ1gsRUFDRCxVQUFXLENBQ1QsS0FBTSxRQUNOLFFBQVNOLEVBQWdCLFNBQzFCLEVBQ0QsS0FBTSxDQUNKLEtBQU0sT0FDTixPQUFRRCxFQUNSLFFBQVNDLEVBQWdCLElBQzFC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
