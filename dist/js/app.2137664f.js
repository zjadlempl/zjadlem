(function(t){function e(e){for(var r,n,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ed544fd5"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"9f77bda2"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"199c":function(t,e){},"1ebe":function(t,e,a){},"23be":function(t,e,a){"use strict";var r=a("199c"),n=a.n(r);e["default"]=n.a},"3dfd":function(t,e,a){"use strict";var r=a("6f88"),n=a("23be"),s=(a("5c0b"),a("2877")),o=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"4d31":function(t,e,a){"use strict";a("8e92")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("3dfd"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"tlo"}},[t._m(0),a("user-location")],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"naglow"}},[a("h1",{attrs:{id:"hello"}},[t._v("Wyszukaj restauracje w której jadłeś: ")])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"poleWyszukiwania"}},[a("b-form-input",{attrs:{list:"my-list-id",placeholder:"Podaj ulicę"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("datalist",{attrs:{id:"my-list-id"}},t._l(t.sizes,(function(e){return a("option",{key:e.id},[t._v(t._s(e))])})),0),a("div",{attrs:{id:"przyciski"}},[a("b-button",{attrs:{id:"buton",variant:"dark"}},[a("router-link",{attrs:{to:"/Browser",active:"Browser"==t.$route.name}},[t._v("Szukaj")])],1),a("div",{attrs:{id:"gpsLoc"}},[a("router-link",{attrs:{to:"/Browser",active:"Browser"==t.$route.name}},[a("b-icon",{attrs:{icon:"geo-alt-fill"},on:{click:t.locatorButtonPressed}})],1)],1)],1)],1)},u=[],l={name:"UserLocation",props:{},data:function(){return{address:"",lat:"",long:"",sizes:["Śmidowicza","Świętojańska","Gdańska","Młodego G"]}},methods:{locatorButtonPressed:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.lat=e.coords.latitude,t.long=e.coords.longitude,t.$store.state.cords.lat=t.lat,t.$store.state.cords.long=t.long}))}}},d=l,f=(a("8d22"),a("2877")),p=Object(f["a"])(d,c,u,!1,null,null,null),h=p.exports,b={name:"Home",metaInfo:{title:"Zjadłem.pl | Podziel się swoją opinią!"},components:{UserLocation:h},data:function(){return{text:"",long:"",lat:""}},methods:{}},v=b,m=(a("4d31"),Object(f["a"])(v,o,i,!1,null,"9f92a1dc",null)),g=m.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"browser"},[a("div",{attrs:{id:"tlo"}},[a("BrowserData")],1)])},w=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"browserData"}},[a("div",{staticClass:"panel"},[a("div",{staticClass:"tytul"},[a("div",[a("h2",[t._v(" Znaleziono "+t._s(this.$store.state.restauracje.length)+" Restauracji")])]),""!=t.lat?a("div",{attrs:{id:"cords"}},[a("h2",[t._v(" Twoja lokalizacja: "),a("i",[t._v(t._s(t.lat)+"E "+t._s(t.long)+"N")])])]):t._e()]),a("div",{staticClass:"pojemnik"},[a("div",{staticClass:"pojemnikDwa"},t._l(this.$store.state.restauracje,(function(e){return a("div",{key:e.index,staticClass:"restauracja",on:{mouseover:function(a){t.currentRestauracja=e.index,t.currentRestauracjaNazwa=e.Nazwa,t.currentRestauracjaOcena=e.Ocena,t.currentRestauracjaLogo=e.Logo,t.currentRestauracjaAdres=e.Adres,t.getDistanceFromLatLonInKm()}}},[a("div",{staticClass:"logoRestDiv"},[a("b-img",{staticClass:"logoRest",attrs:{src:e.Logo,fluid:""}})],1),a("div",{staticClass:"informacje"},[a("div",[t._v(t._s(e.Nazwa))]),a("div",[t._v("Kuchnia: "+t._s(e.Kuchnia))])])])})),0),a("div",{staticClass:"pojemnikDwa"},["brak"!=t.currentRestauracja?a("div",{staticClass:"informacjeRest"},[a("div",[a("p",{attrs:{id:"nazwaRest"}},[t._v(t._s(t.currentRestauracjaNazwa)+" ")]),a("div",{staticClass:"logoRestDivInfo"},[a("b-img",{staticClass:"logoRest",attrs:{src:t.currentRestauracjaLogo,fluid:""}})],1),a("p",{staticClass:"numbers"},[t._v("Odległość: "+t._s(t.dystans)+"km")]),a("div",{staticClass:"flex"},[t._v(" Średnia ocena:   "),a("div",{staticClass:"numbers",style:t.currentRestauracjaOcena>=9?{color:"#00aaff"}:[t.currentRestauracjaOcena>=7?{color:"green"}:t.currentRestauracjaOcena>=3?{color:"orange"}:{color:"red"}]},[t._v(" "+t._s(t.currentRestauracjaOcena)+" / 10 ")])])])]):t._e()])])])])},y=[],k=a("4f60"),C=(a("1862"),{apiKey:"AIzaSyB7PECrKv0hec-rYEGRZ9pwY2qjD1anjXA",authDomain:"zjadlempl.firebaseapp.com",projectId:"zjadlempl",storageBucket:"zjadlempl.appspot.com",messagingSenderId:"458619606689",appId:"1:458619606689:web:1a0a6f1949fa4e613202e0",measurementId:"G-LJB5883T1H"}),R=k["a"].initializeApp(C).firestore(),O=k["a"].firestore;O.TimeStamp,O.GeoPoint;R.settings({timestampsInSnapshots:!0});var z={name:"BrowserData",props:{},data:function(){return{currentRestauracja:"brak",currentRestauracjaNazwa:"brak",currentRestauracjaOcena:"brak",currentRestauracjaLogo:"brak",currentRestauracjaAdres:[],currentIndex:-1,kuchnia:null,latOkr:Math.round(1e3*this.$store.state.cords.lat)/1e3,longOkr:Math.round(1e3*this.$store.state.cords.long)/1e3,lat:this.$store.state.cords.lat,long:this.$store.state.cords.long,dystans:[]}},methods:{fetchData:function(){this.$store.state.cords.lat=10,this.$store.state.cords.long=10},onLoadRest:function(){var t={nazwa:this.nazwa,kuchnia:this.kuchnia,ocena:this.ocena,lokalizacja:this.lokalizacja,logo:this.logo};this.$store.dispatch("bindRestauracja",t),console.log(this.logo)},getDistanceFromLatLonInKm:function(){var t=this.lat,e=this.currentRestauracjaAdres.latitude,a=this.long,r=this.currentRestauracjaAdres.longitude,n=6371,s=3.14/180*(e-t),o=3.14/180*(r-a),i=Math.sin(s/2)*Math.sin(s/2)+Math.cos(3.14/180*t)*Math.cos(3.14/180*e)*Math.sin(o/2)*Math.sin(o/2),c=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)),u=n*c;this.dystans=Math.round(this.dystans=100*u)/100}},created:function(){this.$store.dispatch("bindRestauracja")}},x=z,$=(a("5af5"),Object(f["a"])(x,_,y,!1,null,null,null)),B=$.exports,L={name:"Browser",metaInfo:{title:"Zjadłem.pl | Przeglądaj restauracje"},components:{BrowserData:B},data:function(){return{value:"",context:null}},methods:{fetchData:function(){this.$store.state.cords.lat=10}},props:["lat","long"]},E=L,P=(a("727a"),Object(f["a"])(E,j,w,!1,null,"38ef6972",null)),A=P.exports;r["default"].use(s["a"]);var M=[{path:"/",name:"Home",component:g},{path:"/Browser",name:"Browser",component:A},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],S=new s["a"]({mode:"history",base:"/",routes:M}),D=S,I=a("cca8"),N=a("5f5b"),T=a("b1e0"),K=(a("f9e3"),a("2dd8"),a("5530")),q=a("2f62"),G=a("3317");r["default"].use(q["a"]);var H=new q["a"].Store({state:{events:[],cords:{lat:"",long:""},restauracje:[],restauracjeBeta:[],todos:[],error:"",id:null,nazwa:null,kuchnia:null,users:[]},getters:{},mutations:Object(K["a"])({},G["b"]),modules:{},actions:{bindRestauracja:Object(G["a"])((function(t){var e=t.bindFirestoreRef;return e("restauracje",R.collection("Restauracje"))}))}}),F=a("58ca");r["default"].config.productionTip=!1,r["default"].use(I["a"]),r["default"].use(F["a"]),r["default"].use(N["a"]),r["default"].use(T["a"]),new r["default"]({router:D,store:H,render:function(t){return t(n["default"])}}).$mount("#app")},"5af5":function(t,e,a){"use strict";a("1ebe")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6f88":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-card",{staticClass:"theCard",attrs:{"no-body":""}},[r("b-icon",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],staticClass:"butoSidebar invert",attrs:{icon:"justify","font-scale":"2"}}),r("b-sidebar",{attrs:{id:"sidebar-backdrop",backdrop:"","no-header":"",shadow:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hide;return[r("div",{staticClass:"sideber"},[r("div",{staticClass:"but"},[r("div",{attrs:{id:"logo"}},[r("img",{attrs:{src:a("cf05"),alt:"Responsive image"}})]),r("b-button",{staticClass:"tabButton ",attrs:{to:"/#/",active:"/#/"==t.$route.name}},[t._v(" Home ")]),r("b-button",{staticClass:"tabButton",attrs:{to:"/About",active:"About"==t.$route.name}},[r("a",[t._v("O nas")])]),r("b-button",{staticClass:"tabButton bold",on:{click:n}},[t._v(" Close ")])],1)])]}}])}),r("b-card-body",{staticClass:"text-center interior"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1)],1)},n=[]},"727a":function(t,e,a){"use strict";a("ae03")},"8d22":function(t,e,a){"use strict";a("e108")},"8e92":function(t,e,a){},"9c0c":function(t,e,a){},ae03:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.b2b3a909.png"},e108:function(t,e,a){}});
//# sourceMappingURL=app.2137664f.js.map