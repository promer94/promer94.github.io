webpackJsonp([0x67ef26645b2a,60335399758886],{158:function(e,t){e.exports={layoutContext:{}}},238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),i=o(a),s=n(243),l=o(s),u=n(158),c=o(u);t.default=function(e){return i.default.createElement(l.default,r({},e,c.default))},e.exports=t.default},126:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Eloquent Code",description:"A personal blog",siteUrl:"https://yixuanxu.club/blog",author:"YixuanXu",twitter:"YixuanXu",adsense:""},pathPrefix:"/",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Eloquent Code",short_name:"Eloquent Code",description:"My personal blog",homepage_url:"https://yixuanxu.club",start_url:"/public",background_color:"#fff",theme_color:"#673ab7",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(t,"/")},333:function(e,t){},334:function(e,t){},331:function(e,t,n){var o;!function(r,a){o=function(){return a(r)}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))}(this,function(e){"use strict";var t,n,o,r,a,i,s,l,u,c,f={},d=function(){},p=function(){return"querySelectorAll"in document},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},g=function(e){var t=e.offsetWidth,n=e.offsetHeight,o=0,r=0;do isNaN(e.offsetTop)||(o+=e.offsetTop),isNaN(e.offsetLeft)||(r+=e.offsetLeft);while(null!==(e=e.offsetParent));return{width:t,height:n,top:o,left:r}},h=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}},y=function(e){return e!==window?{x:e.scrollLeft+g(e).left,y:e.scrollTop+g(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}},b=function(e){return null===e.offsetParent},v=function(e){if(b(e))return!1;var t=g(e),o=h(n),r=y(n),a=t.width,f=t.height,d=t.top,p=t.left,m=d+f,v=p+a,w=function(){var e=d+f*i,t=v-a*i,n=m-f*i,g=p+a*i,h=r.y+s,y=r.x-l+o.width,b=r.y-u+o.height,w=r.x+c;return e<b&&n>h&&g<y&&t>w};return w()},w=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},o))};return f.init=function(e){e=e||{};var t=function(e,t){return parseInt(e||t,10)},f=function(e,t){return parseFloat(e||t)};n=e.container||window,r="undefined"==typeof e.reset||e.reset,a="undefined"==typeof e.handheld||e.handheld,o=t(e.throttle,250),i=f(e.elemCushion,.15),s=t(e.offsetTop,0),l=t(e.offsetRight,0),u=t(e.offsetBottom,0),c=t(e.offsetLeft,0),d=e.callback||d,p()?(m()&&a||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",w,!1),n.addEventListener("scroll",w,!1),n.addEventListener("resize",w,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&w()}),n.attachEvent("onscroll",w),n.attachEvent("onresize",w))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,o=0;o<n;o++)e=t[o],v(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,d(e,"visible")):r===!0?(e.setAttribute("data-emergence","hidden"),e.className=e.className,d(e,"reset")):r===!1&&d(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",w,!1),n.removeEventListener("resize",w,!1)):(n.detachEvent("onscroll",w),n.detachEvent("onresize",w)),clearTimeout(t)},f})},335:function(e,t){},336:function(e,t){},241:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=o(s),u=n(17),c=o(u),f=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return l.default.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},l.default.createElement("div",{className:"container"},l.default.createElement(c.default,{className:"text-center",to:"/"},l.default.createElement("h1",{className:"navbar-brand mb-0"},n)),l.default.createElement("div",{className:"navbar-nav-scroll"},l.default.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},l.default.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/",className:"nav-link"},"Home")),l.default.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/profile/",className:"nav-link"},"Profile")))),l.default.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(l.default.Component);t.default=f,e.exports=t.default},422:function(e,t){},243:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(1),u=o(l),c=n(17),f=(o(c),n(126)),d=n(241),p=o(d),m=n(331),g=o(m);n(422),n(333),n(336),n(334),n(335);var h=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){g.default.init()},t.prototype.componentDidUpdate=function(){g.default.init()},t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return u.default.createElement("div",null,u.default.createElement(p.default,s({title:f.siteMetadata.title},this.props)),t())},t}(u.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-b32cbe62285682ba058a.js.map