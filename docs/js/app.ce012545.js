(function(e){function t(t){for(var o,n,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},r={app:0},s=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},"4a46":function(e,t,a){"use strict";var o=a("5cae"),r=a.n(o);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],n=(a("034f"),a("2877")),i={},c=Object(n["a"])(i,r,s,!1,null,null,null),l=c.exports,d=a("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[e._m(0),a("div",{staticClass:"row justify-content-center bg-baige"},[a("div",{staticClass:"col-11"},[a("div",{staticClass:"row justify-content-between",class:{"flex-column":e.$mq<3}},[e._m(1),e._m(2),e._m(3)])])]),a("div",{staticClass:"row justify-content-center py-3"},[a("map-box",{staticClass:"w-75",attrs:{trackUser:e.triggerGeolocate}})],1),e.scanQR?a("div",{staticClass:"py-3"},[a("QRCodeScanner",{on:{exitCamera:e.exitCamera}})],1):a("div",{staticClass:"position-relative fade-in"},[a("p",{staticClass:"hide-after-geolocate m-0 text-right action",on:{click:function(t){e.triggerGeolocate=!0}}},[a("i",[e._v("enable geolocation")])]),a("img",{staticClass:"hide-after-geolocate arrow action",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiRy0kSH769Iw-XyVSH4jluiG3WTsju09u8Yh6nQZ1-Xs2XzQ"},on:{click:function(t){e.triggerGeolocate=!0}}}),a("p",{staticClass:"hide-after-geolocate my-2 text-secondary border-left border-top text-right w-50"},[e._v("or")]),a("div",{staticClass:"text-center my-3 action border-left border-bottom",on:{click:function(t){e.scanQR=!0}}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/gruhn/vue-qrcode-reader/master/.github/logo.png",height:"30px",alt:"qr-code"}}),a("div",{staticClass:"text-link-green m-0",domProps:{innerHTML:e._s(e.qrMessage)}})])]),e._m(4)])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carousel slide row",attrs:{id:"home-carousel","data-interval":"4800","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#home-carousel","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#home-carousel","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#home-carousel","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner position-relative"},[a("div",{staticClass:"caro-text-container h-100 position-absolute w-100 d-flex justify-content-center align-items-center"},[a("h2",{staticClass:"caro-text"},[e._v("Your Southern Idaho")])]),a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://usercontent1.hubstatic.com/14396242_f520.jpg",height:"400px"}})]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://d36tnp772eyphs.cloudfront.net/blogs/1/2015/04/loftus-hot-springs-940x627.jpg",height:"400px"}})]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmgDvn5FPFCLD9G0ao-VgvovNEl588WLfc1vmVOjDLTrVYjx-",height:"400px"}})])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#home-carousel",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#home-carousel",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[e._v("Next")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header-container"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://croplogic.com/cl/wp-content/uploads/2019/03/CL_Product-Feature_495x400_staff_01.jpg"}}),a("h4",{staticClass:"centered"},[e._v("Recreate Outdoors")])]),a("div",{staticClass:"card-body text-center"},[a("p",{staticClass:"text-black"},[e._v("\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore hic sed maiores quo!\n                "),a("a",{staticClass:"text-link-green",attrs:{href:"#"}},[e._v("Explore areas.")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"card card2"},[a("div",{staticClass:"card-header-container"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://croplogic.com/cl/wp-content/uploads/2019/04/CL_Product-Feature_495x400_realTime_03.jpg"}}),a("h4",{staticClass:"centered"},[e._v("Fill Your Belly")])]),a("div",{staticClass:"card-body text-center"},[a("p",{staticClass:"text-black"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe et beatae rerum?\n                "),a("a",{staticClass:"text-link-green",attrs:{href:"#"}},[e._v("Find out more.")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"card card3"},[a("div",{staticClass:"card-header-container"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://croplogic.com/cl/wp-content/uploads/2019/01/CL_Product-Feature_495x400_Sam-Kniveton.jpg"}}),a("h4",{staticClass:"centered"},[e._v("Your Community")])]),a("div",{staticClass:"card-body text-center"},[a("p",{staticClass:"text-black"},[e._v("\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit?\n                "),a("a",{staticClass:"text-link-green",attrs:{href:"#"}},[e._v("View our team member stories here.")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"row py-3 bg-link-green align-items-center justify-content-end"},[a("p",{staticClass:"text-dark m-0"},[e._v("porter wilcox 2019")])])}],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-box position-relative",attrs:{id:"map-box"}},[a("div",{staticClass:"map-overlay"},[a("button",{staticClass:"btn btn-light ml-2 mt-2",attrs:{"aria-label":"toggle menu","data-target":".directions-collapsable","data-toggle":"collapse"},on:{click:function(t){e.collapseCount++}}},[e.collapseCount%2?a("i",{staticClass:"fas fa-bars"}):a("i",{staticClass:"fas fa-times"})]),e._m(0)])])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"directions-collapsable collapse text-white"},[a("h2",[e._v("Use the line draw tool (top-left) to get step by step directions for where you want to go!")])])}],h=a("e192"),f=a.n(h),v=a("6ee6"),y=a.n(v),b=(a("bdd0"),a("a2bb")),C=a.n(b);a("bbe2");const w="pk.eyJ1IjoiaWFtcG9ydGVyIiwiYSI6ImNrMHBmd2hqYTA0cHIzbXBoMDhyeWFrbTAifQ.pXNhzNQWYK-0aP8h78VzEg";var x=a("bc3a"),_=a.n(x);let k,j=new f.a.Popup,M=new f.a.NavigationControl({showZoom:!1}),q=new y.a({displayControlsDefault:!1,controls:{line_string:!0,trash:!0},styles:[{id:"gl-draw-line",type:"line",filter:["all",["==","$type","LineString"],["!=","mode","static"]],layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#438EE4","line-dasharray":[.2,2],"line-width":4,"line-opacity":.7}},{id:"gl-draw-polygon-and-line-vertex-halo-active",type:"circle",filter:["all",["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":8,"circle-color":"#FFF"}},{id:"gl-draw-polygon-and-line-vertex-active",type:"circle",filter:["all",["==","meta","vertex"],["==","$type","Point"],["!=","mode","static"]],paint:{"circle-radius":5,"circle-color":"#438EE4"}}]}),L=new f.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}),S=(new C.a({accessToken:w}),new _.a.create({baseURL:"https://api.mapbox.com/matching/v5/mapbox/",timeout:3e3}));var F={name:"map-box",mounted(){k=this.initMap(),k.on("load",()=>{this.genMapLayers(),this.initMapControls(),this.initMapIconsPopup()}),k.on("draw.create",this.updateRoute),k.on("draw.update",this.updateRoute)},props:["trackUser"],data(){return{collapseCount:1,features:{outdoors:{type:"FeatureCollection",features:[{type:"Feature",properties:{Name:"Shoshone Falls",Address:"4155 Shoshone Falls Grade, Twin Falls, ID 83301"},geometry:{type:"Point",coordinates:[-114.40064,42.59507]}},{type:"Feature",properties:{Name:"Twin Falls City Park",Address:"400 Shoshone St E, Twin Falls, ID 83301"},geometry:{type:"Point",coordinates:[-114.4659,42.5582]}}]},foodAndDrink:{type:"FeatureCollection",features:[{type:"Feature",properties:{Name:"Koto Brewing Co",Address:"156 Main Ave W, Twin Falls, ID 83301"},geometry:{type:"Point",coordinates:[-114.47104,42.55655]}},{type:"Feature",properties:{Name:"The Anchor Bistro",Address:"334 Blue Lakes Blvd N, Twin Falls, ID 83301"},geometry:{type:"Point",coordinates:[-114.46031,42.56786]}}]}}}},computed:{centerOfMap(){return this.$store.state.center}},methods:{initMap(e=!1){return new f.a.Map({container:"map-box",style:"mapbox://styles/mapbox/satellite-streets-v10",center:e||[-114.46028,42.56318],zoom:e?15:12,accessToken:w})},genMapLayers(){k.addLayer({id:"outdoors",type:"symbol",source:{type:"geojson",data:this.features.outdoors},layout:{"icon-image":"picnic-site-15","icon-allow-overlap":!0}}),k.addLayer({id:"food-and-drink",type:"symbol",source:{type:"geojson",data:this.features.foodAndDrink},layout:{"icon-image":"bar-15","icon-allow-overlap":!0}})},initMapControls(){k.addControl(L,"bottom-right"),L.on("geolocate",e=>{console.log({"im-the-pos":e}),k.getLayer("location")&&k.removeLayer("location"),document.querySelectorAll(".hide-after-geolocate").forEach(e=>e.classList.replace("hide-after-geolocate","d-none"))}),L.on("error",e=>alert(e.message)),k.addControl(M,"bottom-right"),k.addControl(q,"top-right")},initMapIconsPopup(){k.on("mousemove",(function(e){let t=k.queryRenderedFeatures(e.point,{layers:["outdoors","food-and-drink"]});if(!t.length)return void j.remove();let a=t[0];j.setLngLat(a.geometry.coordinates).setHTML(a.properties.Name).addTo(k)}))},updateRoute(){var e="driving",t=q.getAll(),a=t.features.length-1,o=t.features[a].geometry.coordinates,r=o.join(";"),s=[];o.forEach(e=>{s.push(25)}),this.getMatch(r,s,e)},async getMatch(e,t,a){var o=t.join(";"),r=a+"/"+e+"?geometries=geojson&radiuses="+o+"&steps=true&access_token="+w;try{let{data:{matchings:e}}=await S.get(r);if(!e.length)return;let t=e[0].geometry;this.addRoute(t),this.getInstructions(e[0])}catch(s){console.log(s)}},addRoute(e){k.getSource("route")?(k.removeLayer("route"),k.removeSource("route")):k.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:e}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#03AA46","line-width":8,"line-opacity":.8}})},getInstructions(e){for(var t=document.querySelector(".directions-collapsable"),a=e.legs,o=[],r=0;r<a.length;r++)for(var s=a[r].steps,n=0;n<s.length;n++)o.push("<br><li>"+s[n].maneuver.instruction);t.innerHTML="<br><h2>Trip duration: "+Math.floor(e.duration/60)+" min.</h2>"+o}},components:{},watch:{centerOfMap(e){e.length&&(k.addLayer({id:"location",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{Name:"Your location"},geometry:{type:"Point",coordinates:e}}]}},layout:{"icon-image":"marker-15","icon-allow-overlap":!0}}),k.flyTo({center:e,zoom:15,speed:1,curve:3,easing(e){return e}}))},trackUser(e){e&&L.trigger()}}},E=F,O=(a("4a46"),Object(n["a"])(E,m,g,!1,null,"2fcf5152",null)),P=O.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"qr-code-scanner"},[e.cameraDisplayLoading?a("div",{staticClass:"text-link-green w-100 text-center"},[a("i",{staticClass:"fas fa-spinner fa-5x fa-spin"}),a("p",[e._v("loading camera...")])]):e._e(),a("qrcode-stream",{staticClass:"h-100",on:{init:e.onInit,detect:e.onDetect}},[a("div",{staticClass:"qr-overlay-container w-100 h-100 flex-column d-none"},[a("div",{staticClass:"qr-overlay-inner-container h-50 d-flex align-items-center"},[a("div",{staticClass:"qr-overlay-corner-border qr-b-1"}),a("div",{staticClass:"qr-overlay-corner-border qr-b-2"})]),a("div",{staticClass:"qr-overlay-inner-container h-50 d-flex align-items-center"},[a("div",{staticClass:"qr-overlay-corner-border qr-b-3"}),a("div",{staticClass:"qr-overlay-corner-border qr-b-4"})])])])],1)},A=[],N={name:"qr-code-scanner",props:[],data(){return{cameraDisplayLoading:!0}},computed:{},methods:{async onInit(e){try{await e,this.cameraDisplayLoading=!1,document.querySelector(".qr-overlay-container").classList.replace("d-none","d-flex")}catch(t){alert(t.message),"NotAllowedError"===t.name||"NotFoundError"===t.name||"NotSupportedError"===t.name||"NotReadableError"===t.name||"OverconstrainedError"===t.name||t.name}},async onDetect(e){try{let{imageData:a,content:o,location:r}=await e;if(console.log({imageData:a,content:o,location:r}),o=JSON.parse(o),2===o.length&&o.every((e,t)=>{let a=0==t?-180:-90;return e>=a&&e<=Math.abs(a)}))try{this.$store.dispatch("setCenter",o),this.$emit("exitCamera")}catch(t){console.log(t)}document.querySelector(".qr-overlay-container").classList.replace("d-flex","d-none")}catch(t){console.log(t)}}},components:{}},I=N,$=(a("b638"),Object(n["a"])(I,T,A,!1,null,null,null)),R=$.exports,D={name:"home",data(){return{scanQR:!1,triggerGeolocate:!1,qrMessage:'<p class="h-underline">scan to locate current position on map</p>'}},methods:{exitCamera(){this.scanQR=!1,this.qrMessage=["AWESOME","SWEET","GOT IT"][Math.floor(3*Math.random())]+"!<p style='font-size: xx-small' class='h-underline'>scan another</p>",setTimeout(()=>{let e=document.querySelectorAll(".hide-after-geolocate");3===e.length&&e[2].classList.replace("hide-after-geolocate","d-none")},100)}},components:{MapBox:P,QRCodeScanner:R}},G=D,Q=(a("cccb"),Object(n["a"])(G,u,p,!1,null,null,null)),B=Q.exports;o["a"].use(d["a"]);var H=new d["a"]({routes:[{path:"/",name:"home",component:B}]}),Y=a("2f62");o["a"].use(Y["a"]);var z=new Y["a"].Store({state:{center:[]},mutations:{setCenter(e,t){e.center=t}},actions:{setCenter({commit:e},t){e("setCenter",t)}}}),W=a("9483");Object(W["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var U=a("660e"),X=a("9a3e");a("aeef");o["a"].config.productionTip=!1,o["a"].use(X["default"]),o["a"].use(U["a"],{breakpoints:{1:576,2:768,3:992,4:1024,5:1200}}),new o["a"]({router:H,store:z,render:function(e){return e(l)}}).$mount("#app")},"5cae":function(e,t,a){},"64a9":function(e,t,a){},b638:function(e,t,a){"use strict";var o=a("be26"),r=a.n(o);r.a},be26:function(e,t,a){},cccb:function(e,t,a){"use strict";var o=a("d563"),r=a.n(o);r.a},d563:function(e,t,a){}});
//# sourceMappingURL=app.ce012545.js.map