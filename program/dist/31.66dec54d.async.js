webpackJsonp([31],{1207:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=l(3),s=a(c),n=l(191),i=a(n),d=l(301),u=a(d);l(305);var o=l(1),r=a(o),f=l(51),m=a(f),p=l(1208),_=a(p),g=l(1209),v=a(g);t.default=function(e){var t=e.className,l=e.linkElement,a=void 0===l?"a":l,c=e.type,n=e.title,d=e.desc,f=e.img,p=e.actions,g=(0,u.default)(e,["className","linkElement","type","title","desc","img","actions"]),E=c in _.default?c:"404",y=(0,m.default)(v.default.exception,t);return r.default.createElement("div",(0,s.default)({className:y},g),r.default.createElement("div",{className:v.default.imgBlock},r.default.createElement("div",{className:v.default.imgEle,style:{backgroundImage:"url("+(f||_.default[E].img)+")"}})),r.default.createElement("div",{className:v.default.content},r.default.createElement("h1",null,n||_.default[E].title),r.default.createElement("div",{className:v.default.desc},d||_.default[E].desc),r.default.createElement("div",{className:v.default.actions},p||(0,o.createElement)(a,{to:"/",href:"/"},r.default.createElement(i.default,{type:"primary"},"\u8fd4\u56de\u9996\u9875")))))},e.exports=t.default},1208:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}};t.default=a,e.exports=t.default},1209:function(e,t){e.exports={exception:"exception___3o7hV",imgBlock:"imgBlock___3N3er",imgEle:"imgEle___2D7IB",content:"content___3W3RZ",desc:"desc___30yr8",actions:"actions___3vYCx"}},774:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c=l(1),s=a(c),n=l(126),i=l(1207),d=a(i);t.default=function(){return s.default.createElement(d.default,{type:"403",style:{minHeight:500,height:"80%"},linkElement:n.Link})},e.exports=t.default}});