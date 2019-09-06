(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);document,window;var r=t.$,o=(t.Template7,t.utils),a=t.device,s=t.support,n=t.Class,l=(t.Modal,t.ConstructorMethods),i=(t.ModalMethods,function(t){function e(e,o){t.call(this,{},[e]);var n=this,l=r(o),i=l.find(".ptr-preloader");n.$el=l,n.el=l[0],n.app=e,n.bottom=n.$el.hasClass("ptr-bottom"),n.useModulesParams({});var p,c,d,u="md"===e.theme,f="ios"===e.theme,h="aurora"===e.theme;n.done=function(){return(u?i:l).transitionEnd(function(){l.removeClass("ptr-transitioning ptr-pull-up ptr-pull-down ptr-closing"),l.trigger("ptr:done"),n.emit("local::done ptrDone",l[0])}),l.removeClass("ptr-refreshing").addClass("ptr-transitioning ptr-closing"),n},n.refresh=function(){return l.hasClass("ptr-refreshing")?n:(l.addClass("ptr-transitioning ptr-refreshing"),l.trigger("ptr:refresh",n.done),n.emit("local::refresh ptrRefresh",l[0],n.done),n)},n.mousewheel="true"===l.attr("data-ptr-mousewheel");var g,m,v,b,w,C,M,T,y,P,x,E,H,R={},D=!1,$=!1,S=!1,X=0,Y=!1,B=l.parents(".page");if((B.find(".navbar").length>0||B.parents(".view").children(".navbars").length>0)&&(Y=!0),B.hasClass("no-navbar")&&(Y=!1),!n.bottom&&B.hasClass("page-with-navbar-large")){var I=e.navbar.getElByPage(B[0]);I&&r(I).hasClass("navbar-large-transparent")&&l.addClass("ptr-with-navbar-large-transparent")}function _(t){if(c){if("android"!==a.os)return;if("targetTouches"in t&&t.targetTouches.length>1)return}l.hasClass("ptr-refreshing")||r(t.target).closest(".sortable-handler, .ptr-ignore, .card-expandable.card-opened").length||(d=!1,T=!1,c=!0,g=void 0,w=void 0,"touchstart"===t.type&&(p=t.targetTouches[0].identifier),R.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,R.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY)}function k(t){if(c){var e,s,f;if("touchmove"===t.type){if(p&&t.touches)for(var h=0;h<t.touches.length;h+=1)t.touches[h].identifier===p&&(f=t.touches[h]);f||(f=t.targetTouches[0]),e=f.pageX,s=f.pageY}else e=t.pageX,s=t.pageY;if(e&&s)if(void 0===g&&(g=!!(g||Math.abs(s-R.y)>Math.abs(e-R.x))),g){if(b=l[0].scrollTop,!d){var E;if(l.removeClass("ptr-transitioning"),y=l[0].scrollHeight,P=l[0].offsetHeight,n.bottom&&(x=y-P),b>y)return void(c=!1);var H=r(t.target).closest(".ptr-watch-scroll");if(H.length&&H.each(function(t,e){e!==o&&e.scrollHeight>e.offsetHeight&&"auto"===r(e).css("overflow")&&(!n.bottom&&e.scrollTop>0||n.bottom&&e.scrollTop<e.scrollHeight-e.offsetHeight)&&(E=!0)}),E)return void(c=!1);M&&(C=l.attr("data-ptr-distance")).indexOf("%")>=0&&(C=y*parseInt(C,10)/100),X=l.hasClass("ptr-refreshing")?C:0,$=!(y!==P&&"ios"===a.os&&!u),S=!1}d=!0,m=s-R.y,void 0===w&&(n.bottom?b!==x:0!==b)&&(w=!0),(n.bottom?m<0&&b>=x||b>x:m>0&&b<=0||b<0)?("ios"===a.os&&parseInt(a.osVersion.split(".")[0],10)>7&&(n.bottom||0!==b||w||($=!0),n.bottom&&b===x&&!w&&($=!0)),$||!n.bottom||u||(l.css("-webkit-overflow-scrolling","auto"),l.scrollTop(x),S=!0),($||S)&&(t.cancelable&&t.preventDefault(),v=(n.bottom?-1*Math.pow(Math.abs(m),.85):Math.pow(m,.85))+X,u?i.transform("translate3d(0,"+v+"px,0)").find(".ptr-arrow").transform("rotate("+(Math.abs(m)/66*180+100)+"deg)"):n.bottom?l.children().transform("translate3d(0,"+v+"px,0)"):l.transform("translate3d(0,"+v+"px,0)")),($||S)&&Math.pow(Math.abs(m),.85)>C||!$&&Math.abs(m)>=2*C?(D=!0,l.addClass("ptr-pull-up").removeClass("ptr-pull-down")):(D=!1,l.removeClass("ptr-pull-up").addClass("ptr-pull-down")),T||(l.trigger("ptr:pullstart"),n.emit("local::pullStart ptrPullStart",l[0]),T=!0),l.trigger("ptr:pullmove",{event:t,scrollTop:b,translate:v,touchesDiff:m}),n.emit("local::pullMove ptrPullMove",l[0],{event:t,scrollTop:b,translate:v,touchesDiff:m})):(T=!1,l.removeClass("ptr-pull-up ptr-pull-down"),D=!1)}else c=!1}}function L(t){return"touchend"===t.type&&t.changedTouches&&t.changedTouches.length>0&&p&&t.changedTouches[0].identifier!==p?(c=!1,g=!1,d=!1,void(p=null)):c&&d?(v&&(l.addClass("ptr-transitioning"),v=0),u?i.transform("").find(".ptr-arrow").transform(""):n.bottom?l.children().transform(""):l.transform(""),$||!n.bottom||u||l.css("-webkit-overflow-scrolling",""),D?(l.addClass("ptr-refreshing"),l.trigger("ptr:refresh",n.done),n.emit("local::refresh ptrRefresh",l[0],n.done)):l.removeClass("ptr-pull-down"),c=!1,d=!1,void(T&&(l.trigger("ptr:pullend"),n.emit("local::pullEnd ptrPullEnd",l[0])))):(c=!1,void(d=!1))}Y||n.bottom||l.addClass("ptr-no-navbar"),l.attr("data-ptr-distance")?M=!0:u?C=66:f?C=44:h&&(C=38);var O=!0,j=0;function V(){O=!0,H=!1,j=0,v&&(l.addClass("ptr-transitioning"),v=0),u?i.transform("").find(".ptr-arrow").transform(""):n.bottom?l.children().transform(""):l.transform(""),D?(l.addClass("ptr-refreshing"),l.trigger("ptr:refresh",n.done),n.emit("local::refresh ptrRefresh",l[0],n.done)):l.removeClass("ptr-pull-down"),T&&(l.trigger("ptr:pullend"),n.emit("local::pullEnd ptrPullEnd",l[0]))}function q(t){if(O){var e=t.deltaX,a=t.deltaY;if(!(Math.abs(e)>Math.abs(a)||l.hasClass("ptr-refreshing")||r(t.target).closest(".sortable-handler, .ptr-ignore, .card-expandable.card-opened").length)){if(clearTimeout(E),b=l[0].scrollTop,!H){var s;if(l.removeClass("ptr-transitioning"),y=l[0].scrollHeight,P=l[0].offsetHeight,n.bottom&&(x=y-P),b>y)return void(O=!1);var p=r(t.target).closest(".ptr-watch-scroll");if(p.length&&p.each(function(t,e){e!==o&&e.scrollHeight>e.offsetHeight&&"auto"===r(e).css("overflow")&&(!n.bottom&&e.scrollTop>0||n.bottom&&e.scrollTop<e.scrollHeight-e.offsetHeight)&&(s=!0)}),s)return void(O=!1);M&&(C=l.attr("data-ptr-distance")).indexOf("%")>=0&&(C=y*parseInt(C,10)/100)}d=!0,m=j-=a,void 0===w&&(n.bottom?b!==x:0!==b)&&(w=!0),(n.bottom?m<0&&b>=x||b>x:m>0&&b<=0||b<0)?(t.cancelable&&t.preventDefault(),v=m,Math.abs(v)>C&&(v=C+Math.pow(Math.abs(v)-C,.7),n.bottom&&(v=-v)),u?i.transform("translate3d(0,"+v+"px,0)").find(".ptr-arrow").transform("rotate("+(Math.abs(m)/66*180+100)+"deg)"):n.bottom?l.children().transform("translate3d(0,"+v+"px,0)"):l.transform("translate3d(0,"+v+"px,0)"),Math.abs(v)>C?(D=!0,l.addClass("ptr-pull-up").removeClass("ptr-pull-down")):(D=!1,l.removeClass("ptr-pull-up").addClass("ptr-pull-down")),T||(l.trigger("ptr:pullstart"),n.emit("local::pullStart ptrPullStart",l[0]),T=!0),l.trigger("ptr:pullmove",{event:t,scrollTop:b,translate:v,touchesDiff:m}),n.emit("local::pullMove ptrPullMove",l[0],{event:t,scrollTop:b,translate:v,touchesDiff:m})):(T=!1,l.removeClass("ptr-pull-up ptr-pull-down"),D=!1),E=setTimeout(V,300)}}}return B.length&&l.length?(l[0].f7PullToRefresh=n,n.attachEvents=function(){var t=!!s.passiveListener&&{passive:!0};l.on(e.touchEvents.start,_,t),e.on("touchmove:active",k),e.on("touchend:passive",L),n.mousewheel&&!n.bottom&&l.on("wheel",q)},n.detachEvents=function(){var t=!!s.passiveListener&&{passive:!0};l.off(e.touchEvents.start,_,t),e.off("touchmove:active",k),e.off("touchend:passive",L),n.mousewheel&&!n.bottom&&l.off("wheel",q)},n.useModules(),n.init(),n):n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.init=function(){this.attachEvents()},e.prototype.destroy=function(){var t=this;t.emit("local::beforeDestroy ptrBeforeDestroy",t),t.$el.trigger("ptr:beforedestroy"),delete t.el.f7PullToRefresh,t.detachEvents(),o.deleteProps(t),t=null},e}(n)),p={name:"pullToRefresh",create:function(){var t=this;t.ptr=o.extend(l({defaultSelector:".ptr-content",constructor:i,app:t,domProp:"f7PullToRefresh"}),{done:function(e){var r=t.ptr.get(e);if(r)return r.done()},refresh:function(e){var r=t.ptr.get(e);if(r)return r.refresh()}})},static:{PullToRefresh:i},on:{tabMounted:function(t){var e=this,o=r(t),a=o.find(".ptr-content");o.is(".ptr-content")&&a.add(o),a.each(function(t,r){e.ptr.create(r)})},tabBeforeRemove:function(t){var e=r(t),o=this,a=e.find(".ptr-content");e.is(".ptr-content")&&a.add(e),a.each(function(t,e){o.ptr.destroy(e)})},pageInit:function(t){var e=this;t.$el.find(".ptr-content").each(function(t,r){e.ptr.create(r)})},pageBeforeRemove:function(t){var e=this;t.$el.find(".ptr-content").each(function(t,r){e.ptr.destroy(r)})}}};if(e){if(t.prototype.modules&&t.prototype.modules[p.name])return;t.use(p),t.instance&&(t.instance.useModuleParams(p,t.instance.params),t.instance.useModule(p))}return p}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))