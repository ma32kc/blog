(function(){"use strict";var t={300:function(t,o,e){var s=e(963),n=e(252),a=e(577);const l={class:"blog"},i=(0,n.Uk)("загрузить"),r=(0,n.Uk)("Создать пост"),c={key:1},d={class:"blog__pages"},u=["onClick"];function p(t,o,e,s,p,v){const g=(0,n.up)("blog-button"),h=(0,n.up)("blog-select"),m=(0,n.up)("blog-input"),f=(0,n.up)("blog-form"),_=(0,n.up)("blog-modal"),b=(0,n.up)("blog-list");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",l,[(0,n.Wm)(g,{onClick:v.fetchPosts,class:"download-btn"},{default:(0,n.w5)((()=>[i])),_:1},8,["onClick"]),(0,n.Wm)(g,{onClick:v.showModal},{default:(0,n.w5)((()=>[r])),_:1},8,["onClick"]),(0,n.Wm)(h,{value:p.selectedSort,"onUpdate:value":o[0]||(o[0]=t=>p.selectedSort=t),options:p.sortOptions},null,8,["value","options"]),(0,n.Wm)(m,{value:p.searchQuery,"onUpdate:value":o[1]||(o[1]=t=>p.searchQuery=t),placeholder:"Поиск"},null,8,["value"]),(0,n.Wm)(_,{show:p.modalVisible,"onUpdate:show":o[2]||(o[2]=t=>p.modalVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{newPost:p.post,onCreate:v.createPost,onModify:v.modifyPost},null,8,["newPost","onCreate","onModify"])])),_:1},8,["show"]),p.loading?((0,n.wg)(),(0,n.iD)("div",c,"Загрузка...")):((0,n.wg)(),(0,n.j4)(b,{key:0,posts:v.searchedAndSortedPosts,onRemove:v.removePost,onRedact:v.redactPost},null,8,["posts","onRemove","onRedact"])),(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.totalPages,(t=>((0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["blog__page",{blog__page_active:p.page===t}]),key:t,onClick:o=>v.changePage(t)},(0,a.zw)(t),11,u)))),128))])])])}var v=e(669),g=e.n(v),h={data(){return{posts:[],post:{},createdPost:{},modalVisible:!1,loading:!1,selectedSort:"",sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По описанию"}],searchQuery:"",page:1,limit:10,totalPages:0}},methods:{createPost(t){this.posts.push(t),this.modalVisible=!1},redactPost(t){this.modalVisible=!0,this.post=t},modifyPost(t){this.posts.forEach(((o,e)=>{o.id===t.id&&(this.posts[e]=t)})),this.modalVisible=!1},removePost(t){confirm("уверены?")&&(this.posts=this.posts.filter((o=>o.id!==t.id)))},showModal(){this.post={},this.modalVisible=!0},changePage(t){this.page=t},async fetchPosts(t){try{this.loading=!0;const o=await g().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(o.headers["x-total-count"]/this.limit);const e=o.data;this.posts=e,t.target.remove()}catch(t){console.log(t)}finally{this.loading=!1}}},computed:{sortedPosts(){return[...this.posts].sort(((t,o)=>t[this.selectedSort]?.localeCompare(o[this.selectedSort])))},searchedAndSortedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{page(){this.fetchPosts()}}},m=e(744);const f=(0,m.Z)(h,[["render",p]]);var _=f;const b={class:"blog__btn"};function w(t,o,e,s,a,l){return(0,n.wg)(),(0,n.iD)("button",b,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var y={name:"BlogButton"};const k=(0,m.Z)(y,[["render",w],["__scopeId","data-v-1fcc73c2"]]);var P=k;const C=t=>((0,n.dD)("data-v-c7480f0c"),t=t(),(0,n.Cn)(),t),D={key:0},O=C((()=>(0,n._)("h2",null,"Список постов",-1))),I={class:"blog__list"},W={key:1},j=C((()=>(0,n._)("h2",null,"Постов нет",-1))),M=[j];function B(t,o,e,a,l,i){const r=(0,n.up)("blog-item");return e.posts.length>0?((0,n.wg)(),(0,n.iD)("div",D,[O,(0,n._)("div",I,[(0,n.Wm)(s.W3,{name:"blog__list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.posts,(o=>((0,n.wg)(),(0,n.j4)(r,{post:o,key:o.id,onRemove:e=>t.$emit("remove",o),onRedact:e=>t.$emit("redact",o)},null,8,["post","onRemove","onRedact"])))),128))])),_:1})])])):((0,n.wg)(),(0,n.iD)("div",W,M))}var U={name:"BlogList",props:{posts:{type:Array,required:!0}}};const S=(0,m.Z)(U,[["render",B],["__scopeId","data-v-c7480f0c"]]);var $=S;const R={class:"blog__item"},Z={class:"blog__top"},V={class:"blog__left"},x={class:"blog__title"},z={class:"blog__body"},A={class:"blog__right"},Q=(0,n.Uk)("редактировать"),q=(0,n.Uk)("удалить"),E={class:"blog__bottom"},H=(0,n.Uk)("читать полностью");function K(t,o,e,s,l,i){const r=(0,n.up)("blog-button");return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",Z,[(0,n._)("div",V,[(0,n._)("div",x,(0,a.zw)(e.post.title),1),(0,n._)("div",z,(0,a.zw)(e.post.body),1)]),(0,n._)("div",A,[(0,n.Wm)(r,{onClick:o[0]||(o[0]=o=>t.$emit("redact",e.post))},{default:(0,n.w5)((()=>[Q])),_:1}),(0,n.Wm)(r,{onClick:o[1]||(o[1]=o=>t.$emit("remove",e.post))},{default:(0,n.w5)((()=>[q])),_:1})])]),(0,n._)("div",E,[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[H])),_:1})])])}var L={name:"BlogItem",props:{post:{type:Object,required:!0}}};const Y=(0,m.Z)(L,[["render",K],["__scopeId","data-v-7c0f7d49"]]);var F=Y;const T=(0,n.Uk)("Создать"),N=(0,n.Uk)("редактировать");function G(t,o,e,a,l,i){const r=(0,n.up)("BlogInput"),c=(0,n.up)("BlogButton");return(0,n.wg)(),(0,n.iD)("form",{class:"blog__form",onSubmit:o[2]||(o[2]=(0,s.iM)((()=>{}),["prevent"]))},[(0,n.Wm)(r,{class:"blog__input",value:l.post.title,"onUpdate:value":o[0]||(o[0]=t=>l.post.title=t),placeholder:"Заголовок"},null,8,["value"]),(0,n.Wm)(r,{class:"blog__input",value:l.post.body,"onUpdate:value":o[1]||(o[1]=t=>l.post.body=t),placeholder:"Описание"},null,8,["value"]),void 0===l.post.id?((0,n.wg)(),(0,n.j4)(c,{key:0,onClick:i.createPost},{default:(0,n.w5)((()=>[T])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(c,{key:1,onClick:i.redactPost},{default:(0,n.w5)((()=>[N])),_:1},8,["onClick"]))],32)}var J={name:"BlogForm",props:{newPost:{type:Object}},data(){return{post:{id:this.newPost.id,title:this.newPost.title,body:this.newPost.body}}},methods:{createPost(){console.log(this.post),this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}},redactPost(){this.$emit("modify",this.post)}}};const X=(0,m.Z)(J,[["render",G],["__scopeId","data-v-78537c24"]]);var tt=X;const ot=["value"];function et(t,o,e,s,a,l){return(0,n.wg)(),(0,n.iD)("input",{value:e.value,onInput:o[0]||(o[0]=(...t)=>l.updateInput&&l.updateInput(...t)),class:"blog__input",type:"text"},null,40,ot)}var st={name:"BlogInput",props:{value:[String,Number]},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const nt=(0,m.Z)(st,[["render",et],["__scopeId","data-v-30161c6b"]]);var at=nt;function lt(t,o,e,a,l,i){return e.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"blog__modal",onClick:o[1]||(o[1]=(0,s.iM)(((...t)=>i.hideModal&&i.hideModal(...t)),["stop"]))},[(0,n._)("div",{class:"modal__content",onClick:o[0]||(o[0]=(0,s.iM)((()=>{}),["stop"]))},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var it={name:"BlogModal",props:{show:{type:Boolean,default:!1}},methods:{hideModal(){this.$emit("update:show",!1)}}};const rt=(0,m.Z)(it,[["render",lt],["__scopeId","data-v-262d2eea"]]);var ct=rt;const dt=t=>((0,n.dD)("data-v-9e98a718"),t=t(),(0,n.Cn)(),t),ut=["value"],pt=dt((()=>(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1))),vt=["value"];function gt(t,o,e,s,l,i){return(0,n.wg)(),(0,n.iD)("select",{class:"blog__select",value:e.value,onChange:o[0]||(o[0]=(...t)=>i.changeOption&&i.changeOption(...t))},[pt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.value,value:t.value},(0,a.zw)(t.name),9,vt)))),128))],40,ut)}var ht={name:"BlogSelect",props:{value:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:value",t.target.value)}}};const mt=(0,m.Z)(ht,[["render",gt],["__scopeId","data-v-9e98a718"]]);var ft=mt,_t=[P,$,F,tt,at,ct,ft];const bt=(0,s.ri)(_);_t.forEach((t=>{bt.component(t.name,t)})),bt.mount("#app")}},o={};function e(s){var n=o[s];if(void 0!==n)return n.exports;var a=o[s]={exports:{}};return t[s](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(o,s,n,a){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var i=!0,r=0;r<s.length;r++)(!1&a||l>=a)&&Object.keys(e.O).every((function(t){return e.O[t](s[r])}))?s.splice(r--,1):(i=!1,a<l&&(l=a));if(i){t.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,s){var n,a,l=s[0],i=s[1],r=s[2],c=0;if(l.some((function(o){return 0!==t[o]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(r)var d=r(e)}for(o&&o(s);c<l.length;c++)a=l[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},s=self["webpackChunkblog"]=self["webpackChunkblog"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(300)}));s=e.O(s)})();
//# sourceMappingURL=app.02b01308.js.map