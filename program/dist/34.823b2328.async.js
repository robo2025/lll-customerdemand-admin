webpackJsonp([34],{1349:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getSolutionDetail=e.deleteSolution=e.checkSolution=e.queryAllSolutions=void 0;var u=n(81),r=a(u),o=n(196),s=a(o),i=(e.queryAllSolutions=function(){var t=(0,s.default)(r.default.mark(function t(e,n){var a;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.default.get("access_token"),t.abrupt("return",(0,d.default)(f.URL1+"/operation/solutions?offset="+e+"&limit="+n,{headers:{Authorization:a}}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),e.checkSolution=function(){var t=(0,s.default)(r.default.mark(function t(e,n){var a;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.default.get("access_token"),t.abrupt("return",(0,d.default)(f.URL1+"/operation/solutions/"+e+"/audit_status",{method:"put",headers:{Authorization:a},data:{status:n}}));case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),e.deleteSolution=function(){var t=(0,s.default)(r.default.mark(function t(e){var n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.default.get("access_token"),t.abrupt("return",(0,d.default)(f.URL1+"/operation/solutions/"+e,{method:"delete",headers:{Authorization:n}}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.getSolutionDetail=function(){var t=(0,s.default)(r.default.mark(function t(e){var n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.default.get("access_token"),t.abrupt("return",(0,d.default)(f.URL1+"/operation/solutions/"+e,{method:"get",headers:{Authorization:n}}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n(128)),l=a(i),c=n(321),d=a(c),f=n(127)},754:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),r=a(u),o=n(81),s=a(o),i=n(1349);e.default={namespace:"solution",state:{list:[],loading:!1,offset:0,limit:10,total:0,detail:{}},effects:{fetch:s.default.mark(function t(e,n){var a,u=e.offset,r=e.limit,o=n.call,l=n.put;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({type:"changeLoading",payload:!0});case 2:return t.next=4,o(i.queryAllSolutions,u,r);case 4:return a=t.sent,t.next=7,l({type:"saveAll",payload:a});case 7:return t.next=9,l({type:"changeLoading",payload:!1});case 9:case"end":return t.stop()}},t,this)}),fetchSolutionDetail:s.default.mark(function t(e,n){var a,u=e.solutionId,r=n.call,o=n.put;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({type:"changeLoading",payload:!0});case 2:return t.next=4,r(i.getSolutionDetail,u);case 4:return a=t.sent,t.next=7,o({type:"saveDetail",payload:a.data});case 7:return t.next=9,o({type:"changeLoading",payload:!1});case 9:case"end":return t.stop()}},t,this)}),setSolutionStatus:s.default.mark(function t(e,n){var a,u=e.solutionId,r=e.status,o=n.call,l=n.put;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({type:"changeLoading",payload:!0});case 2:return t.next=4,o(i.checkSolution,u,r);case 4:return a=t.sent,t.next=7,l({type:"changeStatus",solutionId:u,status:r});case 7:return t.next=9,l({type:"changeLoading",payload:!1});case 9:case"end":return t.stop()}},t,this)}),setDetailStatus:s.default.mark(function t(e,n){var a,u=e.solutionId,r=e.status,o=n.call,l=n.put;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({type:"changeLoading",payload:!0});case 2:return t.next=4,o(i.checkSolution,u,r);case 4:return a=t.sent,t.next=7,l({type:"changeStatus2",solutionId:u,status:r});case 7:return t.next=9,l({type:"changeLoading",payload:!1});case 9:case"end":return t.stop()}},t,this)}),removeSolution:s.default.mark(function t(e,n){var a,u=e.solutionId,r=n.call,o=n.put;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({type:"changeLoading",payload:!0});case 2:return t.next=4,r(i.deleteSolution,u);case 4:return a=t.sent,t.next=7,o({type:"remove",solutionId:u});case 7:return t.next=9,o({type:"changeLoading",payload:!1});case 9:case"end":return t.stop()}},t,this)})},reducers:{saveAll:function(t,e){return(0,r.default)({},t,{list:e.payload.data,total:e.payload.headers["x-content-total"]>>0,offset:e.offset>>0,limit:e.limit>>0})},saveDetail:function(t,e){return(0,r.default)({},t,{detail:e.payload})},changeStatus:function(t,e){return(0,r.default)({},t,{list:t.list.map(function(t){return t.id===e.solutionId>>0?(t.status=e.status,t):t})})},changeStatus2:function(t,e){return(0,r.default)({},t,{detail:(0,r.default)({},t.detail,{solution:(0,r.default)({},t.detail.solution,{status:e.status})})})},remove:function(t,e){return(0,r.default)({},t,{list:t.list.map(function(t){return t.id!==e.solutionId>>0})})},changeLoading:function(t,e){return(0,r.default)({},t,{loading:e.payload})}}},t.exports=e.default}});