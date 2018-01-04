(function(h,q){Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){if(null==this)throw new TypeError;var d=Object(this),e=d.length>>>0;if(0===e)return-1;var c=0;0<arguments.length&&(c=Number(arguments[1]),c!=c?c=0:0!=c&&(Infinity!=c&&-Infinity!=c)&&(c=(0<c||-1)*Math.floor(Math.abs(c))));if(c>=e)return-1;for(c=0<=c?c:Math.max(e-Math.abs(c),0);c<e;c++)if(c in d&&d[c]===a)return c;return-1});var r=h.browser.msie,u=r&&"6.0"==h.browser.version,m=Object.prototype.toString,n=function(a){return a&&
"[object Object]"===m.call(a)&&"isPrototypeOf"in a},p=Array.isArray||function(a){return"[object Array]"===m.call(a)},v,B=/[\s|,]+/;v=function(a,b){if(a&&"[object Function]"===m.call(b))for(var a=a.split(B),d=0,e=a.length,c=a[d];d<e&&!1!==b.call(c,c,d);c=a[++d]);};var w=function(a){if(null==a||"object"!=typeof a)return a;var b=new a.constructor,d;for(d in a)a[d]!==a&&(b[d]=w(a[d]));return b},s=function(a){return"[object String]"!==m.call(a)?a:a.charAt(0).toUpperCase()+a.slice(1)},t=!1,C=/xyz/.test(function(){xyz})?
/\bparent\b/:/.*/,k=function(){};k.extend=function(a){function b(){!t&&this.init&&this.init.apply(this,arguments)}var d=this.prototype;t=!0;var e=new this;t=!1;for(var c in a)e[c]="function"==typeof a[c]&&"function"==typeof d[c]&&C.test(a[c])?function(a,b){return function(){var c=this.parent;this.parent=d[a];var e=b.apply(this,arguments);this.parent=c;return e}}(c,a[c]):p(a[c])?a[c].slice():n(a[c])||"[object Function]"===m.call(a[c])?w(a[c]):a[c];b.prototype=e;b.prototype.constructor=b;b.extend=arguments.callee;
return b};var k=k.extend({name:"",guid:null,_eventNames:"",init:function(a){var b=this;if(!n(a)||!a.element)throw new TypeError("\u53c2\u6570\u4e0d\u6b63\u786e");a=this.options=h.extend({},this.OPTIONS,a);this.guid=this.name.toUpperCase()+(new Date).getTime().toString(16);this.element=this.options.element.jquery?this.options.element:h(this.options.element);this.events={};v(this._eventNames,function(d){var d=s(d),e="before"+d,d="after"+d;a[e]&&b.bind(e,a[e]);a[d]&&b.bind(d,a[d])});return this},find:function(a,
b){return(b&&b.jquery?b:this.element).find("[data-"+this.name+"="+a+"]")},bind:function(a,b){a in this.events||(this.events[a]=[]);this.events[a].push(b);return this},trigger:function(a,b){if(a in this.events)for(var d=0,e;(e=this.events[a][d++])&&!1!==e.apply(this,b||[]););return this}}),x=k.extend({OPTIONS:{element:null,photos:[],photoWidth:100,photoHeight:75,currentClass:"current",disableClass:"disable",current:0,btnMinWidth:65,itemTemplate:'<li><i></i><a hideFocus="true" href="javascript:void(0);"><span><b>{index}</b>/<b>{total}</b></span><img /></a></li>'},
name:"slider",disabled:!1,_eventNames:"show updateThumbListPosition",_width:0,_itemWidth:0,_totalWidth:0,_visibleWidth:0,_visibleSize:0,_itemsScrollWidth:0,_total:0,_current:-1,_draging:!1,init:function(a){this.parent(a);p(this.options.photos)||(this.options.photos=[]);this._width=this.element.innerWidth();this._control=this.find("control");this._bar=this.find("bar");this._items=this.find("items");this._itemsLeft=this.find("items-left");this._itemsRight=this.find("items-right");this._total=this.options.photos.length;
this._btn=this.find("btn");this.render();return this},render:function(){var a=this,b=this.options,d=this._items.empty().show(),e=b.photos.length;h.each(b.photos,function(c,f){var l=a.renderItem(c,f.thumb||f,e).attr("data-slider-index",c);l.find("a,img").css({width:b.photoWidth,height:b.photoHeight});l.find("img").attr("src",f.thumb||f).attr("alt",f.note||"");l.click(function(){a.show(c);return!1}).appendTo(d);l.width(l.find(">a").outerWidth());a._itemWidth||(a._itemWidth=l.outerWidth(!0))});this._totalWidth=
this._itemWidth*e;d.css("width",this._totalWidth).show();this._visibleWidth=d.parent().innerWidth();this._visibleSize=Math.floor(this._visibleWidth/this._itemWidth);this._itemsScrollWidth=Math.max(0,Math.max(this._total-this._visibleSize,0)*this._itemWidth-this._visibleWidth%this._itemWidth);if(this._total>this._visibleSize){var c,f=function(){c&&clearInterval(c)},g=function(){var b=Math.abs(parseInt(d.css("left"))),b=Math.max(0,Math.ceil(b-Math.ceil(13*a._itemWidth/250)));a.updateThumbListPosition(-1*
b);0===b&&f()},j=function(){var b=Math.abs(parseInt(d.css("left"))),b=Math.min(a._itemsScrollWidth,Math.ceil(b+Math.ceil(13*a._itemWidth/250)));a.updateThumbListPosition(-1*b);b===a._itemsScrollWidth&&f()};this._itemsLeft.bind("mousedown",function(){f();c=setInterval(g,13)});this._itemsLeft.bind("mouseup",function(){f()});this._itemsRight.bind("mousedown",function(){f();c=setInterval(j,13)});this._itemsRight.bind("mouseup",function(){f()});this.bind("beforeUpdateThumbListPosition",function(c){c=Math.abs(c);
0===c?(a._itemsLeft.addClass(b.disableClass),c!==a._itemsScrollWidth&&a._itemsRight.removeClass(b.disableClass)):c===a._itemsScrollWidth?(0!==c&&a._itemsLeft.removeClass(b.disableClass),a._itemsRight.addClass(b.disableClass)):(a._itemsLeft.removeClass(b.disableClass),a._itemsRight.removeClass(b.disableClass))})}else this._itemsLeft.addClass(b.disableClass),this._itemsRight.addClass(b.disableClass);this.show(b.current||0);this._bar&&this._bar.length&&this.renderScrollbar();return this},renderItem:function(a,
b,d){var e=this.options.itemTemplate,a={index:a+1,src:b,total:d},c,a=n(a)?a:{};for(c in a)a.hasOwnProperty(c)&&(e=e.replace(RegExp("{"+c+"}","gm"),a[c]||""));return h(e)},renderScrollbar:function(){var a=this,b,d,e=this._btn,c=e.parent(),f=c.innerWidth(),g=Math.max(this.options.btnMinWidth,Math.floor(f*(this._total>this._visibleSize?(this._visibleSize||1)/(this._total||1):1))),j=f-g||1,i=this._itemsScrollWidth;e.width(g);if(this._total<=this._visibleSize)return this;this.bind("afterUpdateThumbListPosition",
function(b,c){a.updateScrollbarPosition(Math.max(0,Math.min(Math.floor(Math.abs(b)/i*j),j)),c)});e.bind("mousedown.slider",function(c){var f=e.position(),g=h(document);a._draging&&g.trigger("mouseup.slider");a._draging=!0;b=f.left;d=c.pageX;g.bind("mousemove.slider",function(c){if(a._draging){var e=b+c.clientX-d,e=Math.max(0,Math.min(e,j));a.updateThumbListPosition(-1*Math.floor(e/j*i));c.preventDefault()}});g.bind("selectstart.slider",function(){return!1});g.bind("mouseup.slider",function(){g.unbind(".slider");
a._draging=!1});c.preventDefault()});c.bind("mousedown",function(b){var b=b.pageX-c.position().left,d=e.position().left,f=d;b<d?f=d-g:b>d+g&&(f=d+g);f=Math.max(0,Math.min(f,j));a.updateThumbListPosition(-1*Math.floor(f/j*i),!0)});return this},show:function(a,b){var d=this.options,e=this._items,c=e.children().eq(a);if(this.disabled||!c.length||a===this._current)return!1;!b&&this.trigger("beforeShow",[a]);e.children().eq(this._current).removeClass(d.currentClass);c.addClass(d.currentClass);d=this._total;
e=this._visibleSize;c=Math.ceil(e/2);d>e&&this.updateThumbListPosition(-1*Math.min(this._itemsScrollWidth,this._itemWidth*(a<c?0:d-(a+1)<c?d-e:a+1-c)),!0);this._current=a;!b&&this.trigger("afterShow",[a]);return this},updateScrollbarPosition:function(a,b){this._btn.stop(!0,!0);b?this._btn.animate({left:a}):this._btn.css("left",a);return this},updateThumbListPosition:function(a,b){this.trigger("beforeUpdateThumbListPosition",[a,b]);this._items.stop(!0,!0);b?this._items.animate({left:a}):this._items.css("left",
a);this.trigger("afterUpdateThumbListPosition",[a,b]);return this}}),y=k.extend({OPTIONS:{element:null,total:0,visible:9,current:0,currentClass:"current",center:!1},name:"pager",_current:0,_total:1,_eventNames:"prev next jumpTo show",init:function(a){this.parent(a);a=this.options;this._prev=this.find("prev");this._next=this.find("next");this._items=this.find("items").empty();this._total=a.total||1;this.render(a.current||1);return this},render:function(a){var b=this;this._prev.click(function(){b.prev();
return!1});this._next.click(function(){b.next();return!1});this.jumpTo(a);return this},renderItems:function(a){var b=this,d=this.options,e=Math.floor((d.visible-1)/2),c=this._total,f=Math.max(1,Math.min(a-e,c-d.visible+1)),e=Math.min(c,Math.max(a+e,f+d.visible-1));this._items.empty();for(1!==f&&h('<li data-pager-index="1"><a href="javascript:void(0);" hideFocus="true">1 \u2026</a></li>').appendTo(this._items);f<=e;f++)h('<li data-pager-index="'+f+'"><a href="javascript:void(0);" hideFocus="true">'+
f+"</a></li>").appendTo(this._items);e!==c&&h('<li data-pager-index="'+c+'"><a href="javascript:void(0);" hideFocus="true">\u2026 '+c+"</a></li>").appendTo(this._items);this._items.children().click(function(a){var c=parseInt(h(this).attr("data-pager-index"));if(!c||c===b._current)return!1;b.jumpTo(c);a.preventDefault()});this._items.find("[data-pager-index="+a+"]").addClass(d.currentClass);d.center&&this.element.css({left:Math.floor((this.element.parent().innerWidth()-this.element.outerWidth())/2)});
return this},prev:function(){this.show(this._current-1,"prev");return this},next:function(){this.show(this._current+1,"next");return this},jumpTo:function(a){this.show(a,"jumpTo");return this},show:function(a,b){if(a===this._current)return this;b=s(b);this.trigger("beforeShow",[a,"before"+b]);if(0>=a||a>this._total)return!1;this.trigger("before"+b,[a]);this.renderItems(a);this._current=a;this.trigger("after"+b,[a]);this.trigger("afterShow",[a,"after"+b]);return this}}),z=k.extend({OPTIONS:{element:null,
photos:[],photoWidth:100,photoHeight:75,currentClass:"current",current:0,pagerHeight:50},name:"photolist",_width:0,_height:0,_itemWidth:0,_itemHeight:0,_rendered:!1,_pagesize:1,_totalPage:1,_current:0,_currentPage:1,_eventNames:"show hide select",init:function(a){this.parent(a);p(this.options.photos)||(this.options.photos=[]);a=this.options;this._items=this.find("items");this._current=a.current||0;this.element.is(":visible")&&this.render();return this},render:function(){var a=this,b=this.options,
d;this._width=this.element.innerWidth();this._height=this.element.innerHeight();this._items.empty();d=this.renderItem(b.photos[0],0);d.appendTo(this._items);this._itemWidth=d.outerWidth(!0);this._itemHeight=d.outerHeight(!0);d.remove();this._pagesize=Math.floor(this._width/this._itemWidth)*Math.floor((this._height-b.pagerHeight)/this._itemHeight);this._totalPage=Math.ceil(b.photos.length/this._pagesize);this._currentPage=Math.ceil(b.current/this._pagesize);this.pager=new y({element:this.find("pager"),
total:this._totalPage,current:this._currentPage,center:!0,afterShow:function(b){a.renderPage(b)}});this._rendered=!0;return this},renderItem:function(a,b){var d=this,e=h('<li><a href="javascript:void(0);" hideFocus="true"></a></li>');e.attr("data-photolist-index",b);e.find("a").css("background","#000 url("+(a.small||a.thumb)+") no-repeat center center").click(function(){d.select(b);return!1});return e},renderPage:function(a){var b=this,d=this.options,e=Math.max(0,a-1)*this._pagesize,a=d.photos.slice(e,
e+this._pagesize);this._items.empty();h.each(a,function(a,d){b.renderItem(d,e+a).appendTo(b._items);a===b._current&&b.select(a,!0)});return this},show:function(a){this.trigger("beforeShow",[a]);this.element.show();this._rendered||this.render();void 0!==a&&(a=parseInt(a),a!==this._current&&(this._current=a,this._currentPage=Math.ceil((a+1)/this._pagesize),this.pager.jumpTo(this._currentPage),this.select(a,!0)));this.trigger("afterShow",[a]);return this},hide:function(){this.trigger("beforeHide");this.element.hide();
this.trigger("afterHide");return this},select:function(a,b){var d=this._items.find("[data-photolist-index="+a+"]");if(!d.length)return!1;!b&&this.trigger("beforeSelect",[a,d]);d.siblings().removeClass(this.options.currentClass);d.addClass(this.options.currentClass);!b&&this.trigger("afterSelect",[a,d]);return this}}),A=k.extend({OPTIONS:{element:null,photos:[],preload:1,autoslide:!1,interval:5E3,keyboard:!0,scrollIntoView:!0,minHeight:500,maxWidth:0,hashPageParam:"p",startIndex:0,refresh:!1,smallWidth:100,
smallHeight:75,smallCurrentClass:"current",thumbWidth:100,thumbHeight:75,thumbCurrentClass:"current"},name:"gallery",_eventNames:"prev next jumpTo show slide stop resize",_width:0,_height:0,_current:-1,_total:0,_playing:!1,_sliding:!1,_hasPrev:!1,_hasNext:!1,_hashParamRegexp:null,_playInterval:null,init:function(a){var b=this;this.parent(a);p(this.options.photos)||(this.options.photos=[]);a=this.options;this._total=a.photos.length;this._loading=this.find("loading").hide();this._counterNow=this.find("counter-now");
this._counterTotal=this.find("counter-total");this._photo=this.find("photo-items").empty();this._width=this._photo.innerWidth();this._photoDescription=this.find("photo-description");this._photoPrev=this.find("photo-prev");this._photoNext=this.find("photo-next");this._content=this.find("content");this._footer=this.find("footer");this._end=this.find("end").hide();this._replay=this.find("replay");this.find("slider").length&&(this.slider=new x({element:this.find("slider"),photos:a.photos,photoWidth:a.thumbWidth,
photoHeight:a.thumbHeight,currentClass:a.thumbCurrentClass}));this._total&&this.find("photolist").length&&(this.photolist=new z({element:this.find("photolist"),photos:a.photos,photoWidth:a.smallWidth||a.thumbWidth,photoHeight:a.smallHeight||a.thumbHeight,currentClass:a.smallCurrentClass||a.thumbCurrentClass,afterSelect:function(a){b.jumpTo(a);b.photolist.hide()}}));this._autoplay=this.find("auto-play");this._autostop=this.find("auto-stop").hide();this._viewList=this.find("view-list");this._viewOrigin=
this.find("view-origin");this._overlay=this.find("overlay");this.render();return this},render:function(){var a=this,b=this.options,d=Math.floor(this._width/2),e=this._photo,c=this._photoPrev.width(d),f=c.find("a").hide(),d=this._photoNext.width(d),g=d.find("a").hide(),j=this._loading,i=this.slider;b.minHeight&&(e.css({"min-height":b.minHeight}),u&&e.css({height:b.minHeight}));i&&(i.bind("afterShow",function(b){a.jumpTo(b)}),i.element.bind("mousedown",function(){a._playing&&a.stop()}));b.scrollIntoView&&
h("html, body").animate({scrollTop:this.element.offset().top},1500);this.bind("beforeLoadImage",function(){j.show()});this.bind("afterLoadImage",function(){j.hide()});this.bind("afterShow",function(b){a._hasPrev=a._hasNext=!0;0===b&&(a._hasPrev=!1,f.stop(!0,!0).fadeOut());if(b===a._total-(a._end&&a._end.length?0:1))a._hasNext=!1,g.stop(!0,!0).fadeOut()});c.click(function(){a._playing&&a.stop();a.prev();return!1});d.click(function(){a._playing&&a.stop();a.next();return!1});c.hover(function(){f.stop(!0,
!0);a._hasPrev&&f.is(":hidden")&&f.fadeIn()},function(){f.stop(!0,!0);f.is(":visible")&&f.fadeOut()});d.hover(function(){g.stop(!0,!0);a._hasNext&&g.is(":hidden")&&g.fadeIn()},function(){g.stop(!0,!0);g.is(":visible")&&g.fadeOut()});this.bind("afterShow",function(b){a._counterNow.html(b+1);a._viewOrigin.attr("href",a.options.photos[b].orig||a.options.photos[b].big)});if(this._end.length){var D=Math.floor((this._photo.parent().innerHeight()-this._end.height())/2),l=-2*this._end.height();this._end.css({left:Math.floor((this._photo.parent().innerWidth()-
this._end.width())/2),top:l}).hide();var k=function(){a._end.animate({top:l},function(){a._end.hide()})};this.find("end-close",this._end).click(function(){k();return!1});this.bind("beforeShow",function(b){b===a._total?a._end.show().animate({top:D}):k()})}this.bind("beforeShow",function(b){b===a._total&&a.stop()});!b.refresh&&(b.preload=parseInt(b.preload))&&this.bind("afterShow",function(c){a.preload(b.photos.slice(c+1,c+1+b.preload));a.preload(b.photos.slice(Math.max(0,c-b.preload),c))});!b.refresh&&
b.hashPageParam?(this._hashParamRegexp=RegExp("\\b"+b.hashPageParam+"=(\\d+)\\b","i"),this.bind("afterShow",function(b){var c=location.hash;location.hash=c.match(a._hashParamRegexp)?c.replace(a._hashParamRegexp,function(){return a.options.hashPageParam+"="+(b+1)}):(c?c+"&":"")+a.options.hashPageParam+"="+(b+1)}),this.jumpTo(Math.max(0,parseInt((location.hash.match(this._hashParamRegexp)||[])[1]||1)-1))):this.jumpTo(b.startIndex?Math.max(0,b.startIndex-1):0);b.keyboard&&h(document).bind("keydown",
function(b){if(!b.ctrlKey&&!b.shiftKey&&!b.altKey&&!h(b.originalTarget).is(":input"))switch(b.keyCode){case 37:case 72:a.prev();b.preventDefault();break;case 39:case 74:a.next(),b.preventDefault()}});this._autoplay.click(function(){a.slide();return!1});this._autostop.click(function(){a.stop();return!1});this.bind("beforeSlide",function(){a._autoplay.hide();a._autostop.css("display","")});this.bind("afterStop",function(){a._autoplay.css("display","");a._autostop.hide()});this._replay.click(function(){a.jumpTo(0);
return!1});this._viewList.click(function(){a.photolist&&a.photolist.show(a._current)});this._counterTotal.html(this._total);setTimeout(function(){a._content.css("visibility","visible");a._footer.css("visibility","visible");a._overlay.hide()},500);return this},renderPhoto:function(a,b,d,e){var c=this.options,a=h("<img />").attr("src",a.big||a).attr("data-gallery",b);c.maxWidth&&d>c.maxWidth||d>this._width?a.css({left:0,width:c.maxWidth?Math.min(this._width,c.maxWidth):this._width}):a.css("left",Math.floor((this._width-
d)/2));c.minHeight&&e<c.minHeight&&a.css("top",Math.floor((c.minHeight-e)/2));return a},resizeTrigger:function(a,b){var d=this.options,e=a,e=b;if(d.maxWidth&&a>d.maxWidth||a>this._width)e=d.maxWidth?Math.min(this._width,d.maxWidth):this._width,e=Math.ceil(b*(e/a));d.minHeight&&e<d.minHeight&&(e=d.minHeight);this._photoPrev.height(e);this._photoNext.height(e)},preload:function(){var a=[],b=[];return function(d){var e=this,c;if(d&&p(d))for(;c=d.shift();)-1===b.indexOf(c)&&a.push(c);a.length&&e.loadImage(a.shift(),
{slient:!0,success:function(a){-1===b.indexOf(a)&&b.push(a);e.preload()},error:function(a){-1===b.indexOf(a)&&b.push(a);e.preload()}})}}(),loadImage:function(){var a={};return function(b,d){if(!b)return!1;var e=this,c=b.big||b,f,g,d=n(d)?d:{};a[c]?"loading"===a[c].state?(d.success&&a[c].success.push(d.success),d.error&&a[c].error.push(d.error)):"loaded"===a[c].state?d.success&&d.success.call(b,b,a[c].width,a[c].height):d.error&&d.error.call(b,b):(a[c]={state:"loading",success:[],error:[]},d.success&&
a[c].success.push(d.success),d.error&&a[c].error.push(d.error),!d.slient&&this.trigger("beforeLoadImage",[b]),g=function(){var g;a[c].state="loaded";a[c].error=[];a[c].width=this.width;a[c].height=this.height;for(!d.slient&&e.trigger("afterLoadImage",[b,this.width,this.height]);(g=a[c].success.shift())&&!1!==g.call(this,b,a[c].width,a[c].height););f=f.onload=f.onerror=null},f=new Image,f.src=c,f.complete?g.call(f):(f.onerror=function(){var g;a[c].state="error";a[c].success=[];for(!d.slient&&e.trigger("afterLoadImage",
[b]);(g=a[c].error.shift())&&!1!==g.call(this,b););f=f.onload=f.onerror=null},f.onload=g))}}(),prev:function(){this.show(this._current-1,"prev");return this},next:function(){this.show(this._current+1,"next");return this},jumpTo:function(a){this.show(a,"jumpTo")},show:function(a,b){function d(c,d){i.siblings(":visible").stop(!0,!0);if(u){var e=i.parent();i.remove().appendTo(e)}r&&f.slider&&f.slider.element&&(f.slider.element.get(0).className=f.slider.element.get(0).className);f._photoDescription.html(f.options.photos[a].note||
"");i.stop(!0,!0).hide().fadeIn("fast",function(){f.resizeTrigger(c,d);r&&f.slider&&f.slider.element&&(f.slider.element.get(0).className=f.slider.element.get(0).className);f._current=a;f.trigger("after"+b,[a]);f.trigger("afterShow",[a,"after"+b]);f.slider&&(f.slider.disabled=!1);f._sliding=!1})}function e(a){f.find(g,h).stop(!0,!0).fadeOut("fast",function(){a()})}function c(a,b){-1===g?d(a,b):e(function(){d(a,b)})}var f=this,g=this._current,h=this._photo,i;if(this._sliding||a===g)return!1;b=s(b);
this.trigger("beforeShow",[a,"before"+b]);this.slider&&this.slider.show(a,!0);if(0>a||a>this._total-1)return!1;if(-1<g&&f.options.refresh)window.location.href=f.options.photos[a].url;else return this._sliding=!0,this.slider&&(this.slider.disabled=!0),this.trigger("before"+b,[a]),i=this.find(a,h),i.length?c(i.width(),i.height()):(this._loading.show(),this.loadImage(this.options.photos[a],{success:function(b,d,e){f._loading.hide();f.find(a,h).length||(i=f.renderPhoto(b,a,d,e).hide().appendTo(h));c(d,
e)},error:function(){f._loading.hide();e(function(){f.next()})}})),this},slide:function(){if(this._playing||!this._total)return!1;var a=this;this._playing=!0;this.trigger("beforeSlide",[this._current]);this._playInterval=setInterval(function(){a.next()},this.options.interval||3E3);this.trigger("afterSlide");return this},stop:function(){if(!this._playing)return!1;this.trigger("beforeStop",[this._current,this._playInterval]);this._playInterval&&clearTimeout(this._playInterval);this._playing=!1;this.trigger("afterStop",
[this._current]);return this}});q.Slider=x;q.Pager=y;q.PhotoList=z;q.Gallery=A;h.fn.gallery=function(a){return this.each(function(){a=n(a)?a:{};a.element=this;h(this).data("gallery",new A(a))})}})(jQuery,window.GALLERY_NAMESPACE||window);
