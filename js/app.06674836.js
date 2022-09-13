(function(){"use strict";var e={6754:function(e,t,r){var o=r(9242),n=r(3396);function a(e,t,r,o,a,s){const c=(0,n.up)("main-headers"),i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n.Wm)(i)],64)}const s={class:"header"},c=(0,n.Uk)("My cataloge"),i={class:"header__menu"},u={class:"header__menu__item"},l=(0,n.Uk)(" Products "),d={class:"header__menu__item"},p=(0,n.Uk)(" Categories ");function m(e,t,r,o,a,m){const g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(g,{to:{name:"home"},class:"header__logo"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n._)("ul",i,[(0,n._)("li",u,[(0,n.Wm)(g,{to:{name:"products"},class:"header__menu_item__link"},{default:(0,n.w5)((()=>[l])),_:1})]),(0,n._)("li",d,[(0,n.Wm)(g,{to:{name:"categories",params:{category:" "}},class:"header__menu_item__link"},{default:(0,n.w5)((()=>[p])),_:1})])])])}var g={name:"MainHeaders"},_=r(89);const v=(0,_.Z)(g,[["render",m],["__scopeId","data-v-7d975d28"]]);var h=v,f={name:"App",components:{MainHeaders:h}};const w=(0,_.Z)(f,[["render",a]]);var C=w,b=r(2483);const y={class:"home"};function D(e,t,r,o,a,s){const c=(0,n.up)("banner");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(c)])}var P=r.p+"img/bannerCatalog.da3ed58e.jpg";const k=e=>((0,n.dD)("data-v-62e14f66"),e=e(),(0,n.Cn)(),e),W={class:"banner"},O=k((()=>(0,n._)("img",{class:"banner__img",src:P,alt:""},null,-1))),x=k((()=>(0,n._)("h1",{class:"banner__title"},"Welcome to my Store",-1))),Z=k((()=>(0,n._)("div",{class:"banner__copy"},[(0,n._)("p",{class:"banner__copy__text"}," In this small web app i will be able see a product list and practice with vue router, cicle of life of the component and data charge the server ")],-1))),H=[O,x,Z];function I(e,t,r,o,a,s){return(0,n.wg)(),(0,n.iD)("div",W,H)}var M={name:"Banner"};const j=(0,_.Z)(M,[["render",I],["__scopeId","data-v-62e14f66"]]);var T=j,F={name:"HomeView",components:{Banner:T}};const L=(0,_.Z)(F,[["render",D]]);var Y=L;const z=e=>((0,n.dD)("data-v-c8d83896"),e=e(),(0,n.Cn)(),e),B={class:"grid-container"},K={class:"grid-x grid-margin-x"},U=z((()=>(0,n._)("h1",{class:"cell title"},"List of products",-1)));function V(e,t,r,o,a,s){const c=(0,n.up)("top-products");return(0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("div",K,[U,(0,n.Wm)(c)])])}const $={class:"cell grid-x grid-margin-x"};function S(e,t,r,o,a,s){const c=(0,n.up)("v-card-products");return(0,n.wg)(),(0,n.iD)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.products,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"cell small-6 medium-4 large-3",key:e.id},[(0,n.Wm)(c,{img:e.main_image,name:e.name,price:parseFloat(e.price),rute:{}},null,8,["img","name","price"])])))),128))])}var q=r(1998),A=r.n(q);const E={topProducts(){return A().get("https://servicios.neunapp.com/api/tienda/productos/lista/")},filterCategorie(e){return A().get("https://servicios.neunapp.com/api/tienda/productos/lista/?"+e)},getProductsById(e){return A().get("https://servicios.neunapp.com/api/tienda/producto/"+e)}};var N=E,G=r(7139);const J={class:"products"},Q=["src"],R={class:"products__price"};function X(e,t,r,o,a,s){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",J,[(0,n._)("img",{src:r.img,class:"products__img"},null,8,Q),(0,n.Wm)(c,{to:r.rute,class:"products__name"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,G.zw)(r.name),1)])),_:1},8,["to"]),(0,n._)("p",R,(0,G.zw)(r.price),1)])}var ee={name:"VCardProducts",props:{img:String,name:String,price:Number,rute:Object}};const te=(0,_.Z)(ee,[["render",X],["__scopeId","data-v-c3256398"]]);var re=te,oe={name:"TopProducts",components:{VCardProducts:re},data(){return{products:[]}},methods:{chargeProduct(){N.topProducts().then((e=>{this.products=e.data.results}))}},beforeMount(){this.chargeProduct(),console.log(this.products)}};const ne=(0,_.Z)(oe,[["render",S]]);var ae=ne,se={name:"ProductsPage",components:{TopProducts:ae}};const ce=(0,_.Z)(se,[["render",V],["__scopeId","data-v-c8d83896"]]);var ie=ce;const ue={class:"grid-container"},le={class:"grid-x grid-margin"},de={class:"cell small-12 medium-2 large-3"},pe={class:"cell small-12 medium-10 large-9"};function me(e,t,r,o,a,s){const c=(0,n.up)("the-list-categories"),i=(0,n.up)("the-list-color"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",ue,[(0,n._)("div",le,[(0,n._)("div",de,[(0,n.Wm)(c)]),(0,n._)("div",pe,[(0,n.Wm)(i),(0,n.Wm)(u)])])])}const ge={class:"cell grid-container"},_e={class:"list"};function ve(e,t,r,o,a,s){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ge,[(0,n._)("ul",_e,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.listOfCategories,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.id,class:"list__item"},[(0,n.Wm)(c,{to:{name:"categories",params:{category:e.name_unique}},class:"list__item__link"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,G.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])}const he={categories(){return A().get("https://servicios.neunapp.com/api/tienda/categorias/lista/")}};var fe=he,we={name:"TheListCategories",data(){return{listOfCategories:[]}},methods:{chargeCategories(){fe.categories().then((e=>{this.listOfCategories=e.data}))}},beforeMount(){this.chargeCategories()}};const Ce=(0,_.Z)(we,[["render",ve],["__scopeId","data-v-5166fb30"]]);var be=Ce;const ye={class:"cell"},De={class:"list"};function Pe(e,t,r,o,a,s){return(0,n.wg)(),(0,n.iD)("div",ye,[(0,n._)("ul",De,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.liColor,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"list__item",key:e.id},[(0,n._)("a",{href:"#",class:"list__item__color",style:(0,G.j5)({background:e.value})},null,4)])))),128))])])}const ke={listColor(){return A().get("https://servicios.neunapp.com/api/tienda/colores/lista/")}};var We=ke,Oe={name:"TheListColor",data(){return{liColor:[]}},methods:{getColors(){We.listColor().then((e=>{this.liColor=e.data}))}},beforeMount(){this.getColors()}};const xe=(0,_.Z)(Oe,[["render",Pe],["__scopeId","data-v-2590b79b"]]);var Ze=xe,He={name:"CategoriesPage",components:{TheListCategories:be,TheListColor:Ze}};const Ie=(0,_.Z)(He,[["render",me]]);var Me=Ie;function je(e,t,r,o,a,s){const c=(0,n.up)("products-for-categories");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(c)])}const Te={class:"cell grid-x grid-margin-x"};function Fe(e,t,r,o,a,s){const c=(0,n.up)("v-card-products");return(0,n.wg)(),(0,n.iD)("div",Te,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.productCat,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"cell small-6 medium-4 large-3",key:e.id},[(0,n.Wm)(c,{img:e.main_image,name:e.name,price:parseFloat(e.price),rute:{name:"detail-prodcuts",params:{id:e.id}}},null,8,["img","name","price","rute"])])))),128))])}var Le={name:"ProductsForCategoriesPage",components:{VCardProducts:re},data(){return{productCat:[]}},watch:{"$route.params.category"(){this.getProductsForCategoríes()}},methods:{"getProductsForCategoríes"(){let e="category="+this.$route.params.category;N.filterCategorie(e).then((e=>{this.productCat=e.data.results}))}},beforeMount(){this.getProductsForCategoríes()}};const Ye=(0,_.Z)(Le,[["render",Fe]]);var ze=Ye,Be={name:"ProductsForCategoriesPage",components:{ProductsForCategories:ze}};const Ke=(0,_.Z)(Be,[["render",je]]);var Ue=Ke;const Ve={class:"grid-x"};function $e(e,t,r,o,a,s){const c=(0,n.up)("product-detail");return(0,n.wg)(),(0,n.iD)("div",Ve,[(0,n.Wm)(c)])}const Se=e=>((0,n.dD)("data-v-c672d7da"),e=e(),(0,n.Cn)(),e),qe={key:0,class:"grid-x grid-margin-x product"},Ae={class:"cell small-12 medium-7"},Ee=["src"],Ne={class:"product__imgs"},Ge=["src"],Je=["src"],Qe={class:"cell small-12 medium-5"},Re={class:"product__title"},Xe={class:"product__categories"},et=Se((()=>(0,n._)("h3",{class:"product__titlec"},"Colors",-1))),tt={class:"product__colors"},rt={class:"product__price"},ot={class:"cell small-12"},nt=["innerHTML"];function at(e,t,r,o,a,s){return a.product?((0,n.wg)(),(0,n.iD)("div",qe,[(0,n._)("div",Ae,[(0,n._)("img",{class:"product__img",src:a.product.main_image},null,8,Ee),(0,n._)("div",Ne,[(0,n._)("img",{class:"product__imgs__img",src:a.product.second_image},null,8,Ge),(0,n._)("img",{class:"product__imgs__img",src:a.product.third_image},null,8,Je)])]),(0,n._)("div",Qe,[(0,n._)("h3",Re,(0,G.zw)(a.product.name),1),(0,n._)("p",Xe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.product.category,(e=>((0,n.wg)(),(0,n.iD)("span",{key:e.id,class:"product__categories__categorie"},(0,G.zw)(e.name),1)))),128))]),et,(0,n._)("p",tt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.product.colors,(e=>((0,n.wg)(),(0,n.iD)("span",{key:e.id,style:(0,G.j5)({background:e.value}),class:"product__colors__color"},null,4)))),128))]),(0,n._)("p",rt,"$ "+(0,G.zw)(a.product.price),1)]),(0,n._)("div",ot,[(0,n._)("p",{class:"product__description",innerHTML:a.product.description},null,8,nt)])])):(0,n.kq)("",!0)}var st={name:"ProductDetail",data(){return{product:null}},methods:{getProductById(){N.getProductsById(this.$route.params.id).then((e=>{null!==e&&(this.product=e.data)}))}},beforeMount(){this.getProductById()}};const ct=(0,_.Z)(st,[["render",at],["__scopeId","data-v-c672d7da"]]);var it=ct,ut={name:"DetailPageProducts",components:{ProductDetail:it}};const lt=(0,_.Z)(ut,[["render",$e]]);var dt=lt;const pt=[{path:"/",name:"home",component:Y},{path:"/products",name:"products",component:ie},{path:"/categories",component:Me,children:[{path:":category",name:"categories",component:Ue},{path:"/product-detail/:id",name:"detail-prodcuts",component:dt}]}],mt=(0,b.p7)({history:(0,b.PO)("/store/"),routes:pt});var gt=mt;(0,o.ri)(C).use(gt).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],a=e[l][2];for(var c=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(c=!1,a<s&&(s=a));if(c){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/store/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],c=o[1],i=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(i)var l=i(r)}for(t&&t(o);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self["webpackChunkvue_proyect_cataloge"]=self["webpackChunkvue_proyect_cataloge"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(6754)}));o=r.O(o)})();
//# sourceMappingURL=app.06674836.js.map