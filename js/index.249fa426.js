(function(){"use strict";var t={9900:function(t,e,n){var a=n(144),i=n(998),s=n(704),o=n(6190),r=n(4324),l=n(5495),c=n(3059),u=n(3687),m=function(){var t=this,e=t._self._c;return e(i.Z,{staticStyle:{"background-color":"#cae3de","background-image":"linear-gradient(130deg, #cae3de 40%, #b4bce7 100%)"}},[e(s.Z,{attrs:{app:"",color:"blue-grey lighten-1",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("router-link",{attrs:{to:"/about"}},[e(l.Z,{staticClass:"shrink",attrs:{alt:"Vuetify Logo",contain:"",src:n(6949),transition:"scale-transition",width:"50"}})],1),e("h2",{staticClass:"shrink hidden-sm-and-down"},[t._v("To-Do List ")])],1),e(u.Z),e("router-link",{attrs:{to:t.redirect}},[e(o.Z,{attrs:{href:"javascript:void(0)",target:"",color:"blue-grey"}},[e("span",{staticClass:"mr-1 text-sm-body-2"},[t._v(t._s(t.quoteLink))]),e(r.Z,[t._v("mdi-open-in-app")])],1)],1),t.textLink?e(o.Z,{staticClass:"ml-2",attrs:{href:"javascript:void(0)",color:"blue-grey"},on:{click:t.changePage}},[e("span",{staticClass:"mr-1 text-sm-body-2"},[t._v(t._s(t.textLink))]),e(r.Z,[t._v("mdi-open-in-app")])],1):t._e()],1),e(c.Z,[e("router-view")],1)],1)},d=[],h=(n(7658),{name:"App",data:()=>({onLogin:!1,textLink:"",quoteLink:"quotes",redirect:"/albo"}),computed:{nameVal(){return this.$store.state.nameVal}},watch:{"$route.path":{handler(t){"/login"===t?(this.textLink="",this.redirect="/albo",this.quoteLink="albo"):"/home"===t?(this.textLink="completati",this.redirect="/albo",this.quoteLink="albo"):"/completati"===t?(this.textLink="aggiungi",this.redirect="/albo",this.quoteLink="albo"):"/albo"===t?this.nameVal?this.textLink="aggiungi":(this.quoteLink="Log In",this.redirect="/",this.textLink=""):"/about"===t&&(this.nameVal?(this.textLink="aggiungi",this.quoteLink="albo",this.redirect="/albo"):(this.textLink="",this.quoteLink="Log In",this.redirect="/")),this.onLogin=""===t},immediate:!0}},methods:{changePage(){"completati"===this.textLink?this.$router.push("/completati"):"aggiungi"===this.textLink&&this.$router.push("/home")}},beforeMount(){this.nameVal&&this.onLogin&&this.$router.push("/home")}}),p=h,f=n(1001),g=(0,f.Z)(p,m,d,!1,null,null,null),k=g.exports,v=n(8345),b=function(){var t=this,e=t._self._c;return e("TODOHome")},C=[],y=n(266),_=n(2118),Z=n(1713),x=n(7808),L=function(){var t=this,e=t._self._c;return e(_.Z,{attrs:{fluid:""}},[e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(y.Z,{staticClass:"text-center max-min-width-list",attrs:{cols:"5"}},[e("div",{staticClass:"d-flex align-center"},[e(x.Z,{attrs:{label:t.nameVal?"Task":"Error Login",disabled:!t.nameVal,"hide-details":"auto",autofocus:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToList.apply(null,arguments)}},model:{value:t.taskVal,callback:function(e){t.taskVal=e},expression:"taskVal"}}),e(o.Z,{on:{click:t.addToList}},[e(r.Z,[t._v("mdi-note-plus")])],1)],1),e("Account"),t.todoList.length>0?e(y.Z,{staticClass:"mt-6"},t._l(t.reversedList,(function(t){return e("Task",{key:t.id,attrs:{item:t}})})),1):e("p",{staticClass:"mt-5 text-h5"},[t._v("No tasks here")])],1)],1)],1)},T=[],P=n(9582),w=function(){var t=this,e=t._self._c;return e(P.Z,{staticClass:"c-flex justify-center align-center mb-10",class:{completed:t.item.completed},attrs:{disabled:!t.nameVal,color:t.item.completed?"light-green lighten-4":"yellow lighten-5"}},[e(Z.Z,{staticClass:"ml-2 mb-1",attrs:{justify:"start",align:"center"}},[e(o.Z,{staticClass:"shrink mr-4 mt-1",class:{buttonCompleted:t.item.completed},attrs:{small:""},on:{click:function(e){return t.changeIsCompleted(t.item)}}},[e(r.Z,{attrs:{color:"green lighten-2"}},[t._v("mdi-check-"+t._s(t.item.completed?"bold":"outline"))])],1),e("span",{staticClass:"mt-1",class:{userColor:t.item.name===t.nameVal}},[t._v(t._s(t.item.name))])],1),e(Z.Z,{staticClass:"ml-5 mb-2 mr-5 mt-4",attrs:{justify:"start",align:"center"}},[t.item.editing?e(x.Z,{attrs:{autofocus:""},on:{blur:function(e){return t.updateEditableContent(t.item)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateEditableContent(t.item)}},model:{value:t.item.task,callback:function(e){t.$set(t.item,"task",e)},expression:"item.task"}}):e("span",{staticClass:"text-body-1",class:{lineThrough:t.item.completed},attrs:{spellcheck:"false"}},[t._v(t._s(t.item.task))])],1),e(Z.Z,{staticClass:"ml-2 mr-2 mt-2 mr-2",attrs:{justify:"end",align:"center"}},[e("span",{staticClass:"mb-2 text-body-2"},[t._v("Created: "+t._s(t.item.date))])]),e(Z.Z,{staticClass:"ml-1 mt-2",attrs:{justify:"start",align:"center"}},[e(o.Z,{staticClass:"mb-2 ml-1 mr-2",attrs:{small:""},on:{click:function(e){return t.toggleContentEditable(t.item)}}},[e(r.Z,[t._v("mdi-"+t._s(t.item.editing?"check-underline-circle":"pen"))])],1),e(o.Z,{staticClass:"mb-1",attrs:{small:""},on:{click:function(e){return t.deleteTask(t.item.id)}}},[e(r.Z,{attrs:{color:"red darken-4"}},[t._v("mdi-delete")])],1)],1)],1)},O=[],V={computed:{nameVal(){return this.$store.state.nameVal},todoList(){return this.$store.state.todoList},reversedList(){return this.todoList.slice().reverse()}},methods:{logout(){this.$store.dispatch("updateUser",""),this.$router.push("/")},deleteTask(t){this.$store.dispatch("removeTodoItem",t)},updateEditableContent(t){t.editing=!1,this.$store.dispatch("updateTodoItemProperty",{itemId:t.id,property:"task",value:t.task})},toggleContentEditable(t){t.editing=!t.editing,this.$store.dispatch("updateTodoItemProperty",{itemId:t.id,property:"task",value:t.task})},changeIsCompleted(t){this.$store.dispatch("updateTodoItemProperty",{itemId:t.id,property:"completed",value:!t.completed})}}},I={name:"Task",props:["item"],mixins:[V],data:()=>({})},j=I,$=(0,f.Z)(j,w,O,!1,null,null,null),E=$.exports,A=function(){var t=this,e=t._self._c;return e(Z.Z,{staticClass:"mt-2 ml-1",attrs:{justify:"start",align:"center"}},[e(r.Z,{attrs:{size:"40"}},[t._v(" mdi-account-circle"+t._s(t.nameVal?"":"-outline")+" ")]),t.nameVal?e("p",{staticClass:"ml-1 text-h5 mt-4"},[t._v(" "+t._s(t.nameVal)+" "),e("a",{staticClass:"ml-1 caption",on:{click:t.logout}},[t._v("Log Out")])]):e("p",{staticClass:"ml-1 text-h6 mt-3"},[e("router-link",{attrs:{to:"/"}},[t._v("Log In")])],1)],1)},M=[],S={name:"Account",mixins:[V],data:()=>({})},q=S,N=(0,f.Z)(q,A,M,!1,null,null,null),D=N.exports,H=n(9791),U=n(7632),F={name:"TODOHome",mixins:[V],components:{Account:D,Task:E},data:()=>({taskVal:""}),methods:{addToList(){const t=this.taskVal.trim(),e=new Date,n=(0,H.Z)(e,"dd MMM HH:mm");t&&(this.$store.dispatch("addTodoItem",{id:(0,U.Z)(),name:this.nameVal,task:t,date:n,completed:!1,editing:!1}),this.taskVal="")}}},W=F,J=(0,f.Z)(W,L,T,!1,null,null,null),R=J.exports,z={name:"Home",components:{TODOHome:R}},B=z,G=(0,f.Z)(B,b,C,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t._self._c;return e("PageCompleted")},X=[],Y=n(4525),tt=n(5200),et=n(381),nt=function(){var t=this,e=t._self._c;return e(_.Z,{attrs:{fluid:""}},[e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(y.Z,{staticClass:"text-center max-min-width-list",attrs:{cols:"5"}},[e(Z.Z,{staticClass:"d-flex align-center justify-center"},[e(x.Z,{attrs:{label:t.nameVal?"Cerca":"Error Login",disabled:!t.nameVal||!t.reversedListIsCompleted.length>0,"hide-details":"auto"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchToList.apply(null,arguments)}},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})],1),e(Z.Z,[e(et.Z,{attrs:{items:t.nameList,label:t.nameVal?"Nome":"Error Login",disabled:!t.nameVal||!t.reversedListIsCompleted.length>0},scopedSlots:t._u([{key:"item",fn:function({item:n,attrs:a,on:i}){return[e(Y.Z,t._g(t._b({},"v-list-item",a,!1),i),[e(tt.V9,{attrs:{id:a["aria-labelledby"]},domProps:{textContent:t._s(n)}})],1)]}}]),model:{value:t.nameOnTask,callback:function(e){t.nameOnTask=e},expression:"nameOnTask"}})],1),e("Account"),t.reversedListIsCompleted.length>0?e(y.Z,{staticClass:"mt-6"},t._l(t.searchOnList,(function(t){return e("Task",{key:t.id,attrs:{item:t}})})),1):e("p",{staticClass:"mt-5 text-h5"},[t._v("No completed tasks")])],1)],1)],1)},at=[],it={name:"PageCompleted",mixins:[V],components:{Account:D,Task:E},computed:{reversedListIsCompleted(){return this.reversedList.filter((t=>t.completed))},searchOnList(){return this.reversedListIsCompleted.filter((t=>{const e=t.name===this.nameOnTask,n=t.name.toLowerCase().includes(this.searchVal.toLowerCase())||t.task.toLowerCase().includes(this.searchVal.toLowerCase());return this.nameOnTask?e&&n:n}))},nameList(){return this.reversedListIsCompleted.map((t=>t.name))}},data:()=>({searchVal:"",nameOnTask:""})},st=it,ot=(0,f.Z)(st,nt,at,!1,null,"a4b4acb6",null),rt=ot.exports,lt={name:"Completed",components:{PageCompleted:rt}},ct=lt,ut=(0,f.Z)(ct,Q,X,!1,null,null,null),mt=ut.exports,dt=function(){var t=this,e=t._self._c;return e("PageLogin")},ht=[],pt=n(5125),ft=function(){var t=this,e=t._self._c;return e(_.Z,{staticStyle:{"align-items":"center"},attrs:{fluid:"","fill-height":""}},[e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(y.Z,{staticClass:"text-center max-min-width",attrs:{cols:"5"}},[e(pt.Z,{attrs:{validate:""}},[e(x.Z,{staticClass:"text-h6",attrs:{label:"Nome","hide-details":"auto",autofocus:"",required:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.nameLogin,callback:function(e){t.nameLogin=e},expression:"nameLogin"}}),e(u.Z,{staticClass:"mt-4"}),e(o.Z,{on:{click:t.login}},[t._v(" Accedi ")])],1)],1)],1)],1)},gt=[],kt={name:"PageLogin",computed:{nameVal(){return this.$store.state.nameVal}},data:()=>({nameLogin:""}),methods:{login(){this.nameLogin&&(this.$store.dispatch("updateUser",this.nameLogin),this.$router.push("/home"))}},mounted(){this.nameVal&&this.$router.push("/home")}},vt=kt,bt=(0,f.Z)(vt,ft,gt,!1,null,"5bb88f0f",null),Ct=bt.exports,yt={name:"Login",components:{PageLogin:Ct}},_t=yt,Zt=(0,f.Z)(_t,dt,ht,!1,null,null,null),xt=Zt.exports,Lt=function(){var t=this,e=t._self._c;return e("Page404")},Tt=[],Pt=function(){var t=this,e=t._self._c;return e(_.Z,{staticStyle:{"align-items":"center"},attrs:{fluid:"","fill-height":""}},[e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(y.Z,{staticClass:"text-center max-min-width",attrs:{cols:"10"}},[e("h1",{staticClass:"text-h2"},[t._v("Error 404")]),e("h3",{staticClass:"text-h5"},[t._v("Pagina non trovata")]),e("p",[t._v("La pagina che stai cercando non esiste.")]),e("router-link",{attrs:{to:"/"}},[t._v("Torna alla pagina di Log-In")])],1)],1)],1)},wt=[],Ot={name:"Page404",data:()=>({})},Vt=Ot,It=(0,f.Z)(Vt,Pt,wt,!1,null,null,null),jt=It.exports,$t={name:"NotFoundPage",components:{Page404:jt}},Et=$t,At=(0,f.Z)(Et,Lt,Tt,!1,null,null,null),Mt=At.exports,St=function(){var t=this,e=t._self._c;return e("PageAlbo")},qt=[],Nt=function(){var t=this,e=t._self._c;return e(_.Z,{attrs:{fluid:"","fill-height":""}},[e(Z.Z,{staticClass:"row justify-center align-center"},[t.isWorking?e(y.Z,{attrs:{cols:"30",md:"3"}},[e(Z.Z,{staticClass:"text-h6 justify-start mb-2 ml-1"},[e("span",[t._v("DATA: ")]),e("span",{staticClass:"ml-2 mr-1"},[t._v(" "+t._s(t.dataComic.day)+" -")]),e("span",{staticClass:"mr-1"},[t._v(t._s(t.dataComic.month)+" -")]),e("span",[t._v(t._s(t.dataComic.year))])]),e(Z.Z,{staticClass:"text-h6 justify-start mb-3 ml-1"},[e("span",[t._v("TITOLO:")]),e("span",{staticClass:"ml-1 mr-2"},[t._v(" "+t._s(t.dataComic.title))])]),e(Z.Z,[e(l.Z,{staticClass:"shrink",attrs:{relative:"",alt:t.dataComic.alt,contain:"",src:t.dataComic.img,transition:"scroll-x-transition",width:"830"}},[e("p",{staticClass:"text-h5 text-pos ml-4",attrs:{absolute:""}},[t._v("NUMERO: "+t._s(t.dataComic.num))]),e(o.Z,{staticClass:"absolute-center left-pos",attrs:{small:"",fab:""},on:{click:function(e){return t.changeComic("left")}}},[e(r.Z,{attrs:{color:"cyan lighten-2",large:""}},[t._v("mdi-chevron-left-circle-outline")])],1),e(o.Z,{staticClass:"absolute-center right-pos",attrs:{small:"",fab:""},on:{click:function(e){return t.changeComic("right")}}},[e(r.Z,{attrs:{color:"cyan lighten-2",large:""}},[t._v("mdi-chevron-right-circle-outline")])],1)],1)],1)],1):e(y.Z,{attrs:{cols:"30",md:"3"}},[e("p",[t._v(" There is a CORS Policy Problem that block the external resources. "),e("br"),t._v(" Click on a button inside "),e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.openCorsFix}},[t._v(" here ")]),t._v(" and reload this page! ")])])],1)],1)},Dt=[],Ht=n(6154),Ut={name:"PageAlbo",data:()=>({dataComic:{},numberComic:100,lastComic:null,isWorking:!1}),methods:{changeComic(t){if("right"==t){if(this.numberComic>=this.lastComic)return;this.numberComic++,this.fetchComic()}else{if(this.numberComic<=1)return;this.numberComic--,this.fetchComic()}},async fetchComic(){try{const t=await Ht.Z.get("https://cors-anywhere.herokuapp.com/http://xkcd.com/"+this.numberComic+"/info.0.json"),e=await Ht.Z.get("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json");this.lastComic=e.data.num;const n=t.data;this.dataComic={day:n.day,month:n.month,year:n.year,title:n.safe_title,num:n.num,img:n.img,alt:n.alt},this.isWorking=!0}catch(t){this.isWorking=!1,console.log(this.isWorking)}},openCorsFix(){window.open("https://cors-anywhere.herokuapp.com/http://xkcd.com/100/info.0.json","_blank","width=300,height=300")}},mounted(){this.fetchComic()}},Ft=Ut,Wt=(0,f.Z)(Ft,Nt,Dt,!1,null,"5d1ac818",null),Jt=Wt.exports,Rt={name:"Albo",components:{PageAlbo:Jt}},zt=Rt,Bt=(0,f.Z)(zt,St,qt,!1,null,null,null),Gt=Bt.exports;a.ZP.use(v.ZP);const Kt=[{path:"/",redirect:"/login"},{path:"/home",name:"home",component:K},{path:"/login",name:"login",component:xt},{path:"/completati",name:"completed",component:mt},{path:"/albo",name:"albo",component:Gt},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,3662))},{path:"*",name:"page404",component:Mt}],Qt=new v.ZP({routes:Kt,history:history});var Xt=Qt,Yt=n(629),te=n(4702);a.ZP.use(Yt.ZP);var ee=new Yt.ZP.Store({plugins:[(0,te.Z)()],state:{todoList:[{id:0,name:"Piero",task:"Comprare il latte",date:"15 May 16:45",completed:!0,editing:!1},{id:1,name:"Piero",task:"Impastare il pane",date:"31 May 14:45",completed:!0,editing:!1},{id:2,name:"Simone",task:"Dipingere Casa",date:"01 Jun 08:45",completed:!1,editing:!1},{id:3,name:"Michela",task:"Andare dal dottore",date:"03 Jun 08:15",completed:!1,editing:!1},{id:4,name:"Michela",task:"Costruire una casetta per il cane",date:"03 Jun 11:16",completed:!0,editing:!1}],nameVal:""},getters:{},mutations:{setUser(t,e){t.nameVal=e},addTodoItem(t,e){t.todoList.push(e)},removeTodoItem(t,e){const n=t.todoList.findIndex((t=>t.id===e));-1!==n&&t.todoList.splice(n,1)},updateTodoItemProperty(t,e){const{itemId:n,property:a,value:i}=e,s=t.todoList.find((t=>t.id===n));s&&(s[a]=i)}},actions:{updateUser({commit:t},e){t("setUser",e)},addTodoItem({commit:t},e){t("addTodoItem",e)},removeTodoItem({commit:t},e){t("removeTodoItem",e)},updateTodoItemProperty({commit:t},e){t("updateTodoItemProperty",e)}},modules:{}}),ne=n(1705);a.ZP.use(ne.Z);var ae=new ne.Z({});a.ZP.config.productionTip=!1,a.ZP.prototype.$http=Ht.Z,new a.ZP({router:Xt,store:ee,vuetify:ae,render:t=>t(k)}).$mount("#app")},6949:function(t,e,n){t.exports=n.p+"img/logo.8af06226.png"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.7e83a1ac.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="to-do:";n.l=function(a,i,s,o){if(t[a])t[a].push(i);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==e+s){r=m;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+s),r.src=a),t[a]=[i];var d=function(e,n){r.onerror=r.onload=null,clearTimeout(h);var i=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/TODO-APP/"}(),function(){var t={826:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var s=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=s);var o=n.p+n.u(e),r=new Error,l=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,i[1](r)}};n.l(o,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(e&&e(a);c<o.length;c++)s=o[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9900)}));a=n.O(a)})();
//# sourceMappingURL=index.249fa426.js.map