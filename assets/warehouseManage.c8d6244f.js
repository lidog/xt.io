import{o as r,a0 as w,w as t,a8 as T,c as y,F as I,au as $,u as f,b as e,d as h,a7 as H,E as N,r as p,P as W,a1 as E,be as q,a as V,ao as J,bU as K,a2 as A,a4 as k,ap as Q,s as X,bT as Y,bV as Z,bW as ee}from"./index.caaec19e.js";import{E as te}from"./el-dialog.4709ff88.js";import"./el-overlay.f569a575.js";import{E as S,a as ae,d as oe,_ as le}from"./drawer.ec4f297c.js";/* empty css                 */import{E as ne,a as se}from"./el-table-column.e37bcc19.js";import{E as j}from"./el-form-item.0ddc4bc9.js";import{E as D}from"./index.c652d3ac.js";import{E as F}from"./index.5d83252e.js";import{E as re}from"./index.0dce04ed.js";import"./event.7f578e92.js";const ue={__name:"editTable",props:{columnConfig:Array,tableData:Array,buttons:Array,selection:Boolean,sortableIndex:Array},emits:["toolsHandle"],setup(o,{emit:c}){const m=o,v=m.columnConfig.map((l,g)=>({key:g+1,label:l})),M=l=>c("toolsHandle",l);return(l,g)=>{const b=ne,x=j,a=N,i=se;return r(),w(i,{data:m.tableData,stripe:"",style:{width:"100%",height:"500px"}},{default:t(()=>[o.selection?(r(),w(b,{key:0,type:"selection",width:"55"})):T("",!0),(r(!0),y(I,null,$(f(v),(d,s)=>(r(),w(b,{sortable:o.sortableIndex&&o.sortableIndex.includes(s),label:d.label},{default:t(_=>[e(x,{modelValue:_.row[d.key],"onUpdate:modelValue":n=>_.row[d.key]=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["sortable","label"]))),256)),o.buttons&&o.buttons.length>0?(r(),w(b,{key:1,label:"\u64CD\u4F5C"},{default:t(()=>[(r(!0),y(I,null,$(o.buttons,(d,s)=>(r(),w(a,{type:"primary",link:"",onClick:_=>M(s),size:"small"},{default:t(()=>[h(H(d),1)]),_:2},1032,["onClick"]))),256))]),_:1})):T("",!0)]),_:1},8,["data"])}}},ce={class:"flex justify-end mb-2"},de={__name:"batchEdit",props:{printNumber:Number},emits:["cancel","minus"],setup(o,{emit:c}){const m=o,v=p(["\u6761\u7801\u7F16\u53F7","\u4EA7\u54C1\u7F16\u53F7","\u5E93\u5B58\u72B6\u6001","\u66F4\u65B0\u65E5\u671F","\u751F\u4EA7\u65E5\u671F","\u989C\u8272","\u6570\u91CF","\u5E93\u4F4D","\u6240\u5C5E\u6210\u54C1","\u7BB1\u53F7","\u64CD\u4F5C\u4EBA"]),M=new Array(100).fill(null).map(()=>({1:`${Math.floor(Math.random()*1e6)}`,2:`AM${Math.floor(Math.random()*1e4)}`,3:["\u5DF2\u5165\u5E93","\u5DF2\u51FA\u5E93"][Math.random()>.5?1:0],4:`2022/06/${Math.floor(Math.random()*30)}`,5:`2022/06/${Math.floor(Math.random()*30)}`,6:"DO",7:Math.floor(Math.random()*1e3+1),8:Math.floor(Math.random()*100+1),9:"S-F",10:Math.floor(Math.random()*1e3+1),11:"\u6210\u751F"}));let l=p([...M.slice(0,m.printNumber)]);W(()=>m.printNumber,a=>{l=p([...M.slice(0,a)])});const g=p([0,1,2,3,4,5,6,7]),b=()=>{D({type:"success",message:"\u4FEE\u6539\u6210\u529F"}),c("cancel")},x=a=>{a===0&&(D({type:"success",message:"\u5220\u9664\u6210\u529F"}),l.splice(0,1),c("minus"))};return(a,i)=>{const d=F,s=N,_=S;return r(),y(I,null,[E("div",ce,[e(d,null,{default:t(()=>[h("\u5171 "+H(m.printNumber)+" \u6761",1)]),_:1})]),e(ue,{selection:"",sortableIndex:g,"column-config":v,tableData:f(l),buttons:["\u53D6\u6D88\u7F16\u8F91"],onToolsHandle:x},null,8,["sortableIndex","column-config","tableData"]),e(_,{class:"flex items-center justify-end"},{default:t(()=>[e(s,{onClick:i[0]||(i[0]=n=>c("cancel"))},{default:t(()=>[h("\u53D6\u6D88")]),_:1}),e(s,{type:"primary",onClick:b},{default:t(()=>[h("\u786E\u8BA4\u4FEE\u6539")]),_:1})]),_:1})],64)}}};const me=o=>(Z("data-v-e7c2f13f"),o=o(),ee(),o),ie={class:"flex items-start justify-between pb-2"},_e={class:"filters flex-1"},fe={class:"mr-1 mb-1"},pe=me(()=>E("div",{class:"right"},null,-1)),be={__name:"warehouseManage",setup(o){const c=p(["\u6761\u7801\u7F16\u53F7","\u4EA7\u54C1\u7F16\u53F7","\u5E93\u5B58\u72B6\u6001","\u66F4\u65B0\u65E5\u671F","\u751F\u4EA7\u65E5\u671F","\u989C\u8272","\u6570\u91CF","\u5E93\u4F4D","\u6240\u5C5E\u6210\u54C1","\u7BB1\u53F7","\u64CD\u4F5C\u4EBA"]),m=new Array(100).fill(null).map(()=>({1:`${Math.floor(Math.random()*1e6)}`,2:`AM${Math.floor(Math.random()*1e4)}`,3:["\u5DF2\u5165\u5E93","\u5DF2\u51FA\u5E93"][Math.random()>.5?1:0],4:`2022/06/${Math.floor(Math.random()*30)}`,5:`2022/06/${Math.floor(Math.random()*30)}`,6:"DO",7:Math.floor(Math.random()*1e3+1),8:Math.floor(Math.random()*100+1),9:"S-F",10:Math.floor(Math.random()*1e3+1),11:"\u6210\u751F"}));let v=p([...m]);const M=p([0,1,2]);let l=V(!1);const g=p([...c]),b=()=>D({type:"success",message:"\u4FEE\u6539\u6210\u529F"}),x=()=>l.value=!0;let a=V(!1);const i=V(0),d=_=>i.value=_.length,s=V(!1);return(_,n)=>{const B=j,U=J,C=N,z=K,O=le,G=F,L=re,P=S,R=te;return r(),y(I,null,[E("div",ie,[E("div",{class:A(["flex items-start justify-between left",[s.value?"show":"close"]])},[E("div",_e,[(r(!0),y(I,null,$(c,u=>(r(),y("div",fe,[e(B,{placeholder:u},null,8,["placeholder"])]))),256))]),e(z,{style:{width:"125px"}},{default:t(()=>[e(C,{type:"primary",onClick:n[0]||(n[0]=u=>s.value=!s.value)},{default:t(()=>[e(U,{class:A([s.value?"up":"down"])},{default:t(()=>[e(f(Q))]),_:1},8,["class"])]),_:1}),e(C,{type:"primary",icon:f(X)},{default:t(()=>[h("\u67E5\u8BE2")]),_:1},8,["icon"])]),_:1})],2),pe]),e(O,null,{left:t(()=>[e(B,{class:"mr-2",placeholder:"\u626B\u7801\u7CBE\u51C6\u67E5\u770B\u5E93\u5B58",clearable:""},{append:t(()=>[e(C,{icon:f(Y)},null,8,["icon"])]),_:1})]),_:1}),e(G,null,{default:t(()=>[h("\u5E93\u5B58\u5217\u8868")]),_:1}),e(ae,{selection:"",sortableIndex:M,"column-config":c,tableData:f(v),buttons:["\u7F16\u8F91"],onToolsHandle:x,onSelected:d},null,8,["sortableIndex","column-config","tableData"]),e(P,{class:"flex items-center justify-end pr-0"},{default:t(()=>[e(L,{value:i.value},{default:t(()=>[e(C,{type:"primary",onClick:n[1]||(n[1]=u=>k(a)?a.value=!0:a=!0)},{default:t(()=>[h("\u6279\u91CF\u7F16\u8F91")]),_:1})]),_:1},8,["value"])]),_:1}),e(oe,{title:"\u7F16\u8F91\u5E93\u5B58",modelValue:f(l),"onUpdate:modelValue":n[2]||(n[2]=u=>k(l)?l.value=u:l=u),formItem:g,onSure:b},null,8,["modelValue","formItem"]),e(R,{modelValue:f(a),"onUpdate:modelValue":n[4]||(n[4]=u=>k(a)?a.value=u:a=u),title:"\u6279\u91CF\u7F16\u8F91\u5E93\u5B58",width:"95%",height:"90%"},{default:t(()=>[e(de,{printNumber:i.value,onCancel:n[3]||(n[3]=u=>k(a)?a.value=!1:a=!1)},null,8,["printNumber"])]),_:1},8,["modelValue"])],64)}}},ke=q(be,[["__scopeId","data-v-e7c2f13f"]]);export{ke as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FyZWhvdXNlTWFuYWdlLmM4ZDYyNDRmLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9lZGl0VGFibGUudnVlIiwiLi4vLi4vc3JjL3ZpZXdzL3dhcmVob3VzZS9iYXRjaEVkaXQudnVlIiwiLi4vLi4vc3JjL3ZpZXdzL3dhcmVob3VzZS93YXJlaG91c2VNYW5hZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGVsLXRhYmxlIDpkYXRhPVwicHJvcHMudGFibGVEYXRhXCIgc3RyaXBlIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNTAwcHhcIj5cbiAgICA8ZWwtdGFibGUtY29sdW1uIHR5cGU9XCJzZWxlY3Rpb25cIiB3aWR0aD1cIjU1XCIgdi1pZj1cInNlbGVjdGlvblwiIC8+XG4gICAgPGVsLXRhYmxlLWNvbHVtblxuICAgICAgdi1mb3I9XCIoY29sdW1uLCBpbmRleCkgaW4gY29sdW1uQ29uZmlnXCJcbiAgICAgIDpzb3J0YWJsZT1cInNvcnRhYmxlSW5kZXggJiYgc29ydGFibGVJbmRleC5pbmNsdWRlcyhpbmRleClcIlxuICAgICAgOmxhYmVsPVwiY29sdW1uLmxhYmVsXCJcbiAgICA+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PVwic2NvcGVcIj5cbiAgICAgIDxlbC1pbnB1dCB2LW1vZGVsPVwic2NvcGUucm93W2NvbHVtbi5rZXldXCIgPjwvZWwtaW5wdXQ+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8ZWwtdGFibGUtY29sdW1uIGxhYmVsPVwi5pON5L2cXCIgdi1pZj1cImJ1dHRvbnMgJiYgYnV0dG9ucy5sZW5ndGg+MFwiPiBcbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBidXR0b25zXCI+XG4gICAgICAgICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGxpbmsgQGNsaWNrPVwidG9vbHNIYW5kbGUoaW5kZXgpXCIgc2l6ZT1cInNtYWxsXCI+e3sgaXRlbSB9fTwvZWwtYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT4gIFxuICAgIDwvZWwtdGFibGUtY29sdW1uPlxuICA8L2VsLXRhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIGNvbHVtbkNvbmZpZzogQXJyYXksXG4gIHRhYmxlRGF0YTogQXJyYXksXG4gIGJ1dHRvbnM6IEFycmF5LFxuICBzZWxlY3Rpb246IEJvb2xlYW4sXG4gIHNvcnRhYmxlSW5kZXg6IEFycmF5LFxufSk7XG5jb25zdCBjb2x1bW5Db25maWcgPSBwcm9wcy5jb2x1bW5Db25maWcubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAga2V5OiBpbmRleCArIDEsXG4gIGxhYmVsOiBpdGVtLFxufSkpO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsndG9vbHNIYW5kbGUnXSk7XG5jb25zdCB0b29sc0hhbmRsZSA9IGluZGV4ID0+IGVtaXQoJ3Rvb2xzSGFuZGxlJywgaW5kZXgpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBtYi0yXCI+XG4gICAgPGVsLXRhZz7lhbEge3sgcHJvcHMucHJpbnROdW1iZXIgfX0g5p2hPC9lbC10YWc+XG4gIDwvZGl2PlxuICA8ZWRpdFRhYmxlXG4gICAgc2VsZWN0aW9uXG4gICAgOnNvcnRhYmxlSW5kZXg9XCJzb3J0YWJsZUluZGV4XCJcbiAgICA6Y29sdW1uLWNvbmZpZz1cImNvbHVtbkNvbmZpZ1wiXG4gICAgOnRhYmxlRGF0YT1cIl90YWJsZURhdGFcIlxuICAgIDpidXR0b25zPVwiWyflj5bmtojnvJbovpEnXVwiXG4gICAgQHRvb2xzSGFuZGxlPVwidG9vbHNIYW5kbGVcIlxuICAvPlxuICA8ZWwtZm9vdGVyIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICA8ZWwtYnV0dG9uIEBjbGljaz1cImVtaXQoJ2NhbmNlbCcpXCI+5Y+W5raIPC9lbC1idXR0b24+XG4gICAgPGVsLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInN1cmVcIj7noa7orqTkv67mlLk8L2VsLWJ1dHRvbj5cbiAgPC9lbC1mb290ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IGVkaXRUYWJsZSBmcm9tIFwiQC9jb21wb25lbnRzL2VkaXRUYWJsZS52dWVcIjtcbmltcG9ydCB7IHJlYWN0aXZlLCBkZWZpbmVFbWl0cywgZGVmaW5lUHJvcHMsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgRWxNZXNzYWdlIH0gZnJvbSBcImVsZW1lbnQtcGx1c1wiO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHByaW50TnVtYmVyOiBOdW1iZXIsXG59KTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbXCJjYW5jZWxcIiwgXCJtaW51c1wiXSk7XG5jb25zdCBjb2x1bW5Db25maWcgPSByZWFjdGl2ZShbXG4gIFwi5p2h56CB57yW5Y+3XCIsXG4gIFwi5Lqn5ZOB57yW5Y+3XCIsXG4gIFwi5bqT5a2Y54q25oCBXCIsXG4gIFwi5pu05paw5pel5pyfXCIsXG4gIFwi55Sf5Lqn5pel5pyfXCIsXG4gIFwi6aKc6ImyXCIsXG4gIFwi5pWw6YePXCIsXG4gIFwi5bqT5L2NXCIsXG4gIFwi5omA5bGe5oiQ5ZOBXCIsXG4gIFwi566x5Y+3XCIsXG4gIFwi5pON5L2c5Lq6XCIsXG5dKTtcbmNvbnN0IHRhYmxlRGF0YSA9IG5ldyBBcnJheSgxMDApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7XG4gIDE6IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApfWAsXG4gIDI6IGBBTSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApfWAsXG4gIDM6IFtg5bey5YWl5bqTYCwgYOW3suWHuuW6k2BdW01hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogMF0sXG4gIDQ6IGAyMDIyLzA2LyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApfWAsXG4gIDU6IGAyMDIyLzA2LyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApfWAsXG4gIDY6IFwiRE9cIixcbiAgNzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDEpLFxuICA4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxKSxcbiAgOTogXCJTLUZcIixcbiAgMTA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKSxcbiAgMTE6IFwi5oiQ55SfXCIsXG59KSk7XG5sZXQgX3RhYmxlRGF0YSA9IHJlYWN0aXZlKFsuLi50YWJsZURhdGEuc2xpY2UoMCwgcHJvcHMucHJpbnROdW1iZXIpXSk7XG53YXRjaChcbiAgKCkgPT4gcHJvcHMucHJpbnROdW1iZXIsXG4gICh2YWwpID0+IHtcbiAgICBfdGFibGVEYXRhID0gcmVhY3RpdmUoWy4uLnRhYmxlRGF0YS5zbGljZSgwLCB2YWwpXSk7XG4gIH1cbik7XG5jb25zdCBzb3J0YWJsZUluZGV4ID0gcmVhY3RpdmUoWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddKTtcbmNvbnN0IHN1cmUgPSAoKSA9PiB7XG4gIEVsTWVzc2FnZSh7IHR5cGU6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBcIuS/ruaUueaIkOWKn1wiIH0pO1xuICBlbWl0KFwiY2FuY2VsXCIpO1xufTtcbmNvbnN0IHRvb2xzSGFuZGxlID0gKHR5cGUpID0+IHtcbiAgaWYgKHR5cGUgPT09IDApIHtcbiAgICBFbE1lc3NhZ2UoeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogXCLliKDpmaTmiJDlip9cIiB9KTtcbiAgICBfdGFibGVEYXRhLnNwbGljZSgwLCAxKTtcbiAgICBlbWl0KFwibWludXNcIik7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwYi0yXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBsZWZ0XCJcbiAgICAgIDpjbGFzcz1cIlttb3JlID8gJ3Nob3cnIDogJ2Nsb3NlJ11cIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJzIGZsZXgtMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXItMSBtYi0xXCIgdi1mb3I9XCJpdGVtIGluIGNvbHVtbkNvbmZpZ1wiPlxuICAgICAgICAgIDxlbC1pbnB1dCA6cGxhY2Vob2xkZXI9XCJpdGVtXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxlbC1idXR0b24tZ3JvdXAgc3R5bGU9XCJ3aWR0aDogMTI1cHg7XCI+XG4gICAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJtb3JlID0gIW1vcmVcIj5cbiAgICAgICAgICA8ZWwtaWNvbiA6Y2xhc3M9XCJbbW9yZSA/ICd1cCcgOiAnZG93biddXCI+PEFycm93RG93biAvPjwvZWwtaWNvbj5cbiAgICAgICAgPC9lbC1idXR0b24+XG4gICAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiA6aWNvbj1cIlNlYXJjaFwiPuafpeivojwvZWwtYnV0dG9uPlxuICAgICAgPC9lbC1idXR0b24tZ3JvdXA+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8cGFnZUhlYWRlcj5cbiAgICA8dGVtcGxhdGUgI2xlZnQ+XG4gICAgICA8ZWwtaW5wdXQgY2xhc3M9XCJtci0yXCIgcGxhY2Vob2xkZXI9XCLmiavnoIHnsr7lh4bmn6XnnIvlupPlrZhcIiBjbGVhcmFibGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgIDxlbC1idXR0b24gOmljb249XCJGdWxsU2NyZWVuXCIgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZWwtaW5wdXQ+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9wYWdlSGVhZGVyPlxuICA8ZWwtdGFnPuW6k+WtmOWIl+ihqDwvZWwtdGFnPlxuICA8c2VsZlRhYmxlXG4gICAgc2VsZWN0aW9uXG4gICAgOnNvcnRhYmxlSW5kZXg9XCJzb3J0YWJsZUluZGV4XCJcbiAgICA6Y29sdW1uLWNvbmZpZz1cImNvbHVtbkNvbmZpZ1wiXG4gICAgOnRhYmxlRGF0YT1cIl90YWJsZURhdGFcIlxuICAgIDpidXR0b25zPVwiWyfnvJbovpEnXVwiXG4gICAgQHRvb2xzSGFuZGxlPVwidG9vbHNIYW5kbGVcIlxuICAgIEBzZWxlY3RlZD1cInNlbGVjdGVkXCJcbiAgLz5cbiAgPGVsLWZvb3RlciBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHByLTBcIj5cbiAgICA8ZWwtYmFkZ2UgOnZhbHVlPVwicHJpbnROdW1iZXJcIj5cbiAgICAgIDxlbC1idXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJkaWFsb2dUYWJsZVZpc2libGUgPSB0cnVlXCJcbiAgICAgICAgPuaJuemHj+e8lui+kTwvZWwtYnV0dG9uXG4gICAgICA+XG4gICAgPC9lbC1iYWRnZT5cbiAgPC9lbC1mb290ZXI+XG4gIDxkcmF3ZXJcbiAgICB0aXRsZT1cIue8lui+keW6k+WtmFwiXG4gICAgdi1tb2RlbD1cImRyYXdlckJvb2xlYW5cIlxuICAgIDpmb3JtSXRlbT1cImZvcm1JdGVtXCJcbiAgICBAc3VyZT1cInN1cmVcIlxuICAvPlxuICA8ZWwtZGlhbG9nXG4gICAgdi1tb2RlbD1cImRpYWxvZ1RhYmxlVmlzaWJsZVwiXG4gICAgdGl0bGU9XCLmibnph4/nvJbovpHlupPlrZhcIlxuICAgIHdpZHRoPVwiOTUlXCJcbiAgICBoZWlnaHQ9XCI5MCVcIlxuICA+XG4gICAgPGJhdGNoRWRpdFxuICAgICAgOnByaW50TnVtYmVyPVwicHJpbnROdW1iZXJcIlxuICAgICAgQGNhbmNlbD1cImRpYWxvZ1RhYmxlVmlzaWJsZSA9IGZhbHNlXCJcbiAgICAvPlxuICA8L2VsLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgc2VsZlRhYmxlIGZyb20gXCJAL2NvbXBvbmVudHMvc2VsZlRhYmxlLnZ1ZVwiO1xuaW1wb3J0IGJhdGNoRWRpdCBmcm9tIFwiLi9iYXRjaEVkaXQudnVlXCI7XG5pbXBvcnQgeyByZWFjdGl2ZSwgZGVmaW5lRW1pdHMsIGRlZmluZVByb3BzLCByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBFbE1lc3NhZ2UgfSBmcm9tIFwiZWxlbWVudC1wbHVzXCI7XG5pbXBvcnQgZHJhd2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZHJhd2VyLnZ1ZVwiO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiwgU2VhcmNoLCBBcnJvd0Rvd24gfSBmcm9tIFwiQGVsZW1lbnQtcGx1cy9pY29ucy12dWVcIjtcbmNvbnN0IGNvbHVtbkNvbmZpZyA9IHJlYWN0aXZlKFtcbiAgXCLmnaHnoIHnvJblj7dcIixcbiAgXCLkuqflk4HnvJblj7dcIixcbiAgXCLlupPlrZjnirbmgIFcIixcbiAgXCLmm7TmlrDml6XmnJ9cIixcbiAgXCLnlJ/kuqfml6XmnJ9cIixcbiAgXCLpopzoibJcIixcbiAgXCLmlbDph49cIixcbiAgXCLlupPkvY1cIixcbiAgXCLmiYDlsZ7miJDlk4FcIixcbiAgXCLnrrHlj7dcIixcbiAgXCLmk43kvZzkurpcIixcbl0pO1xuY29uc3QgdGFibGVEYXRhID0gbmV3IEFycmF5KDEwMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtcbiAgMTogYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCl9YCxcbiAgMjogYEFNJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCl9YCxcbiAgMzogW2Dlt7LlhaXlupNgLCBg5bey5Ye65bqTYF1bTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAwXSxcbiAgNDogYDIwMjIvMDYvJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCl9YCxcbiAgNTogYDIwMjIvMDYvJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCl9YCxcbiAgNjogXCJET1wiLFxuICA3OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwICsgMSksXG4gIDg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEpLFxuICA5OiBcIlMtRlwiLFxuICAxMDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDEpLFxuICAxMTogXCLmiJDnlJ9cIixcbn0pKTtcbmxldCBfdGFibGVEYXRhID0gcmVhY3RpdmUoWy4uLnRhYmxlRGF0YV0pO1xuY29uc3Qgc29ydGFibGVJbmRleCA9IHJlYWN0aXZlKFswLCAxLCAyXSk7XG5sZXQgZHJhd2VyQm9vbGVhbiA9IHJlZihmYWxzZSk7XG5jb25zdCBmb3JtSXRlbSA9IHJlYWN0aXZlKFsuLi5jb2x1bW5Db25maWddKTtcbmNvbnN0IHN1cmUgPSAoKSA9PiBFbE1lc3NhZ2UoeyB0eXBlOiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogXCLkv67mlLnmiJDlip9cIiB9KTtcbmNvbnN0IHRvb2xzSGFuZGxlID0gKCkgPT4gKGRyYXdlckJvb2xlYW4udmFsdWUgPSB0cnVlKTtcbmxldCBkaWFsb2dUYWJsZVZpc2libGUgPSByZWYoZmFsc2UpO1xuY29uc3QgcHJpbnROdW1iZXIgPSByZWYoMCk7XG5jb25zdCBzZWxlY3RlZCA9IChzZWxlY3Rpb24pID0+IChwcmludE51bWJlci52YWx1ZSA9IHNlbGVjdGlvbi5sZW5ndGgpO1xuY29uc3QgbW9yZSA9IHJlZihmYWxzZSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuLmxlZnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAmLnNob3cge1xuICAgIGhlaWdodDogMTA4cHg7XG4gIH1cbiAgJi5jbG9zZSB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG59XG4uZG93biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi51cCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5maWx0ZXJzIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJjb2x1bW5Db25maWciLCJwcm9wcyIsIml0ZW0iLCJpbmRleCIsInRvb2xzSGFuZGxlIiwiZW1pdCIsInJlYWN0aXZlIiwidGFibGVEYXRhIiwiX3RhYmxlRGF0YSIsIndhdGNoIiwidmFsIiwic29ydGFibGVJbmRleCIsInN1cmUiLCJFbE1lc3NhZ2UiLCJ0eXBlIiwiZHJhd2VyQm9vbGVhbiIsInJlZiIsImZvcm1JdGVtIiwiZGlhbG9nVGFibGVWaXNpYmxlIiwicHJpbnROdW1iZXIiLCJzZWxlY3RlZCIsInNlbGVjdGlvbiIsIm1vcmUiXSwibWFwcGluZ3MiOiJpMEJBK0JBQSxFQUFBQyxFQUFBLGFBQUEsSUFBQSxDQUFBQyxFQUFBQyxLQUFBLENBQ0EsSUFBQUEsRUFBQSxFQUNBLE1BQUFELENBQ0EsRUFBQSxFQUVBRSxFQUFBRCxHQUFBRSxFQUFBLGNBQUFGLENBQUEsdzRCQ1ZBSCxFQUFBTSxFQUFBLENBQ0EsMkJBQ0EsMkJBQ0EsMkJBQ0EsMkJBQ0EsMkJBQ0EsZUFDQSxlQUNBLGVBQ0EsMkJBQ0EsZUFDQSxvQkFDQSxDQUFBLEVBQ0FDLEVBQUEsSUFBQSxNQUFBLEdBQUEsRUFBQSxLQUFBLElBQUEsRUFBQSxJQUFBLEtBQUEsQ0FDQSxFQUFBLEdBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLEdBQUEsSUFDQSxFQUFBLEtBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLEdBQUEsSUFDQSxFQUFBLENBQUEscUJBQUEsb0JBQUEsRUFBQSxLQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsR0FDQSxFQUFBLFdBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLEVBQUEsSUFDQSxFQUFBLFdBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLEVBQUEsSUFDQSxFQUFBLEtBQ0EsRUFBQSxLQUFBLE1BQUEsS0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQ0EsRUFBQSxLQUFBLE1BQUEsS0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQ0EsRUFBQSxNQUNBLEdBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUNBLEdBQUEsY0FDQSxFQUFBLEVBQ0EsSUFBQUMsRUFBQUYsRUFBQSxDQUFBLEdBQUFDLEVBQUEsTUFBQSxFQUFBTixFQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQ0FRLEVBQ0EsSUFBQVIsRUFBQSxZQUNBUyxHQUFBLENBQ0FGLEVBQUFGLEVBQUEsQ0FBQSxHQUFBQyxFQUFBLE1BQUEsRUFBQUcsQ0FBQSxDQUFBLENBQUEsQ0FDQSxDQUNBLEVBQ0EsTUFBQUMsRUFBQUwsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQ0FNLEVBQUEsSUFBQSxDQUNBQyxFQUFBLENBQUEsS0FBQSxVQUFBLFFBQUEsMEJBQUEsQ0FBQSxFQUNBUixFQUFBLFFBQUEsQ0FDQSxFQUNBRCxFQUFBVSxHQUFBLENBQ0FBLElBQUEsSUFDQUQsRUFBQSxDQUFBLEtBQUEsVUFBQSxRQUFBLDBCQUFBLENBQUEsRUFDQUwsRUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUNBSCxFQUFBLE9BQUEsRUFFQSw2eEJDRUEsTUFBQUwsRUFBQU0sRUFBQSxDQUNBLDJCQUNBLDJCQUNBLDJCQUNBLDJCQUNBLDJCQUNBLGVBQ0EsZUFDQSxlQUNBLDJCQUNBLGVBQ0Esb0JBQ0EsQ0FBQSxFQUNBQyxFQUFBLElBQUEsTUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEVBQUEsSUFBQSxLQUFBLENBQ0EsRUFBQSxHQUFBLEtBQUEsTUFBQSxLQUFBLE9BQUEsRUFBQSxHQUFBLElBQ0EsRUFBQSxLQUFBLEtBQUEsTUFBQSxLQUFBLE9BQUEsRUFBQSxHQUFBLElBQ0EsRUFBQSxDQUFBLHFCQUFBLG9CQUFBLEVBQUEsS0FBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEdBQ0EsRUFBQSxXQUFBLEtBQUEsTUFBQSxLQUFBLE9BQUEsRUFBQSxFQUFBLElBQ0EsRUFBQSxXQUFBLEtBQUEsTUFBQSxLQUFBLE9BQUEsRUFBQSxFQUFBLElBQ0EsRUFBQSxLQUNBLEVBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUNBLEVBQUEsS0FBQSxNQUFBLEtBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUNBLEVBQUEsTUFDQSxHQUFBLEtBQUEsTUFBQSxLQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFDQSxHQUFBLGNBQ0EsRUFBQSxFQUNBLElBQUFDLEVBQUFGLEVBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUEsRUFDQSxNQUFBSSxFQUFBTCxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxFQUNBLElBQUFTLEVBQUFDLEVBQUEsRUFBQSxFQUNBLE1BQUFDLEVBQUFYLEVBQUEsQ0FBQSxHQUFBTixDQUFBLENBQUEsRUFDQVksRUFBQSxJQUFBQyxFQUFBLENBQUEsS0FBQSxVQUFBLFFBQUEsMEJBQUEsQ0FBQSxFQUNBVCxFQUFBLElBQUFXLEVBQUEsTUFBQSxHQUNBLElBQUFHLEVBQUFGLEVBQUEsRUFBQSxFQUNBLE1BQUFHLEVBQUFILEVBQUEsQ0FBQSxFQUNBSSxFQUFBQyxHQUFBRixFQUFBLE1BQUFFLEVBQUEsT0FDQUMsRUFBQU4sRUFBQSxFQUFBIn0=
