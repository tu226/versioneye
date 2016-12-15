!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t(require()):e.d3pie=t(e)}(this,function(){var e="d3pie",t="0.1.6",n=0,r={header:{title:{text:"",color:"#333333",fontSize:18,font:"arial"},subtitle:{text:"",color:"#666666",fontSize:14,font:"arial"},location:"top-center",titleSubtitlePadding:8},footer:{text:"",color:"#666666",fontSize:14,font:"arial",location:"left"},size:{canvasHeight:500,canvasWidth:500,pieInnerRadius:"0%",pieOuterRadius:null},data:{sortOrder:"none",ignoreSmallSegments:{enabled:!1,valueType:"percentage",value:null},smallSegmentGrouping:{enabled:!1,value:1,valueType:"percentage",label:"Other",color:"#cccccc"},content:[]},labels:{outer:{format:"label",hideWhenLessThanPercentage:null,pieDistance:30},inner:{format:"percentage",hideWhenLessThanPercentage:null},mainLabel:{color:"#333333",font:"arial",fontSize:10},percentage:{color:"#dddddd",font:"arial",fontSize:10,decimalPlaces:0},value:{color:"#cccc44",font:"arial",fontSize:10},lines:{enabled:!0,style:"curved",color:"segment"},truncation:{enabled:!1,length:30}},effects:{load:{effect:"default",speed:1e3},pullOutSegmentOnClick:{effect:"bounce",speed:300,size:10},highlightSegmentOnMouseover:!0,highlightLuminosity:-.2},tooltips:{enabled:!1,type:"placeholder",string:"",placeholderParser:null,styles:{fadeInSpeed:250,backgroundColor:"#000000",backgroundOpacity:.5,color:"#efefef",borderRadius:2,font:"arial",fontSize:10,padding:4}},misc:{colors:{background:null,segments:["#2484c1","#65a620","#7b6888","#a05d56","#961a1a","#d8d23a","#e98125","#d0743c","#635222","#6ada6a","#0c6197","#7d9058","#207f33","#44b9b0","#bca44a","#e4a14b","#a3acb2","#8cc3e9","#69a6f9","#5b388f","#546e91","#8bde95","#d2ab58","#273c71","#98bf6e","#4daa4b","#98abc5","#cc1010","#31383b","#006391","#c2643f","#b0a474","#a5a39c","#a9c2bc","#22af8c","#7fcecf","#987ac6","#3d3b87","#b77b1c","#c9c2b6","#807ece","#8db27c","#be66a2","#9ed3c6","#00644b","#005064","#77979f","#77e079","#9c73ab","#1f79a7"],segmentStroke:"#ffffff"},gradient:{enabled:!1,percentage:95,color:"#000000"},canvasPadding:{top:5,right:5,bottom:5,left:5},pieCenterOffset:{x:0,y:0},cssPrefix:null},callbacks:{onload:null,onMouseoverSegment:null,onMouseoutSegment:null,onClickSegment:null}},i={initialCheck:function(e){var t=e.cssPrefix,n=e.element,r=e.options;if(!window.d3||!window.d3.hasOwnProperty("version"))return console.error("d3pie error: d3 is not available"),!1;if(!(n instanceof HTMLElement||n instanceof SVGElement))return console.error("d3pie error: the first d3pie() param must be a valid DOM element (not jQuery) or a ID string."),!1;if(!/[a-zA-Z][a-zA-Z0-9_-]*$/.test(t))return console.error("d3pie error: invalid options.misc.cssPrefix"),!1;if(!o.isArray(r.data.content))return console.error("d3pie error: invalid config structure: missing data.content property."),!1;if(0===r.data.content.length)return console.error("d3pie error: no data supplied."),!1;for(var i=[],a=0;a<r.data.content.length;a++)"number"!=typeof r.data.content[a].value||isNaN(r.data.content[a].value)?console.log("not valid: ",r.data.content[a]):r.data.content[a].value<=0?console.log("not valid - should have positive value: ",r.data.content[a]):i.push(r.data.content[a]);return e.options.data.content=i,!0}},o={addSVGSpace:function(e){var t=e.element,n=e.options.size.canvasWidth,r=e.options.size.canvasHeight,i=e.options.misc.colors.background,o=d3.select(t).append("svg:svg").attr("width",n).attr("height",r);return"transparent"!==i&&o.style("background-color",function(){return i}),o},whenIdExists:function(e,t){var n=1,r=1e3,i=setInterval(function(){document.getElementById(e)&&(clearInterval(i),t()),n>r&&clearInterval(i),n++},1)},whenElementsExist:function(e,t){var n=1,r=1e3,i=setInterval(function(){for(var o=!0,a=0;a<e.length;a++)if(!document.getElementById(e[a])){o=!1;break}o&&(clearInterval(i),t()),n>r&&clearInterval(i),n++},1)},shuffleArray:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e},processObj:function(e,t,n){return"string"==typeof t?o.processObj(e,t.split("."),n):1===t.length&&void 0!==n?(e[t[0]]=n,e[t[0]]):0===t.length?e:o.processObj(e[t[0]],t.slice(1),n)},getDimensions:function(e){var t=document.getElementById(e),n=0,r=0;if(t){var i=t.getBBox();n=i.width,r=i.height}else console.log("error: getDimensions() "+e+" not found.");return{w:n,h:r}},rectIntersect:function(e,t){var n=t.x>e.x+e.w||t.x+t.w<e.x||t.y+t.h<e.y||t.y>e.y+e.h;return!n},getColorShade:function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",r=0;3>r;r++){var i=parseInt(e.substr(2*r,2),16);i=Math.round(Math.min(Math.max(0,i+i*t),255)).toString(16),n+=("00"+i).substr(i.length)}return n},initSegmentColors:function(e){for(var t=e.options.data.content,n=e.options.misc.colors.segments,r=[],i=0;i<t.length;i++)r.push(t[i].hasOwnProperty("color")?t[i].color:n[i]);return r},applySmallSegmentGrouping:function(e,t){var n;"percentage"===t.valueType&&(n=s.getTotalPieSize(e));for(var r=[],i=[],o=0,a=0;a<e.length;a++)if("percentage"===t.valueType){var u=e[a].value/n*100;if(u<=t.value){i.push(e[a]),o+=e[a].value;continue}e[a].isGrouped=!1,r.push(e[a])}else{if(e[a].value<=t.value){i.push(e[a]),o+=e[a].value;continue}e[a].isGrouped=!1,r.push(e[a])}return i.length&&r.push({color:t.color,label:t.label,value:o,isGrouped:!0,groupedData:i}),r},showPoint:function(e,t,n){e.append("circle").attr("cx",t).attr("cy",n).attr("r",2).style("fill","black")},isFunction:function(e){var t={};return e&&"[object Function]"===t.toString.call(e)},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},a=function(){var e,t,n,r,i,o,s=arguments[0]||{},u=1,l=arguments.length,c=!1,p=Object.prototype.toString,f=Object.prototype.hasOwnProperty,d={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object"},h={isFunction:function(e){return"function"===h.type(e)},isArray:Array.isArray||function(e){return"array"===h.type(e)},isWindow:function(e){return null!==e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null===e?String(e):d[p.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==h.type(e)||e.nodeType)return!1;try{if(e.constructor&&!f.call(e,"constructor")&&!f.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var t;for(t in e);return void 0===t||f.call(e,t)}};for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||h.isFunction(s)||(s={}),l===u&&(s=this,--u),u;l>u;u++)if(null!==(e=arguments[u]))for(t in e)n=s[t],r=e[t],s!==r&&(c&&r&&(h.isPlainObject(r)||(i=h.isArray(r)))?(i?(i=!1,o=n&&h.isArray(n)?n:[]):o=n&&h.isPlainObject(n)?n:{},s[t]=a(c,o,r)):void 0!==r&&(s[t]=r));return s},s={toRadians:function(e){return e*(Math.PI/180)},toDegrees:function(e){return e*(180/Math.PI)},computePieRadius:function(e){var t=e.options.size,n=e.options.misc.canvasPadding,r=t.canvasWidth-n.left-n.right,i=t.canvasHeight-n.top-n.bottom;"pie-center"!==e.options.header.location&&(i-=e.textComponents.headerHeight),e.textComponents.footer.exists&&(i-=e.textComponents.footer.h),i=0>i?0:i;var o,a,s=(i>r?r:i)/3;if(null!==t.pieOuterRadius)if(/%/.test(t.pieOuterRadius)){a=parseInt(t.pieOuterRadius.replace(/[\D]/,""),10),a=a>99?99:a,a=0>a?0:a;var u=i>r?r:i;if("none"!==e.options.labels.outer.format){var l=2*parseInt(e.options.labels.outer.pieDistance,10);u-l>0&&(u-=l)}s=Math.floor(u/100*a)/2}else s=parseInt(t.pieOuterRadius,10);/%/.test(t.pieInnerRadius)?(a=parseInt(t.pieInnerRadius.replace(/[\D]/,""),10),a=a>99?99:a,a=0>a?0:a,o=Math.floor(s/100*a)):o=parseInt(t.pieInnerRadius,10),e.innerRadius=o,e.outerRadius=s},getTotalPieSize:function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].value;return t},sortPieData:function(e){var t=e.options.data.content,n=e.options.data.sortOrder;switch(n){case"none":break;case"random":t=o.shuffleArray(t);break;case"value-asc":t.sort(function(e,t){return e.value<t.value?-1:1});break;case"value-desc":t.sort(function(e,t){return e.value<t.value?1:-1});break;case"label-asc":t.sort(function(e,t){return e.label.toLowerCase()>t.label.toLowerCase()?1:-1});break;case"label-desc":t.sort(function(e,t){return e.label.toLowerCase()<t.label.toLowerCase()?1:-1})}return t},getPieTranslateCenter:function(e){return"translate("+e.x+","+e.y+")"},calculatePieCenter:function(e){var t=e.options.misc.pieCenterOffset,n=e.textComponents.title.exists&&"pie-center"!==e.options.header.location,r=e.textComponents.subtitle.exists&&"pie-center"!==e.options.header.location,i=e.options.misc.canvasPadding.top;n&&r?i+=e.textComponents.title.h+e.options.header.titleSubtitlePadding+e.textComponents.subtitle.h:n?i+=e.textComponents.title.h:r&&(i+=e.textComponents.subtitle.h);var o=0;e.textComponents.footer.exists&&(o=e.textComponents.footer.h+e.options.misc.canvasPadding.bottom);var a=(e.options.size.canvasWidth-e.options.misc.canvasPadding.left-e.options.misc.canvasPadding.right)/2+e.options.misc.canvasPadding.left,s=(e.options.size.canvasHeight-o-i)/2+i;a+=t.x,s+=t.y,e.pieCenter={x:a,y:s}},rotate:function(e,t,n,r,i){i=i*Math.PI/180;var o=Math.cos,a=Math.sin,s=(e-n)*o(i)-(t-r)*a(i)+n,u=(e-n)*a(i)+(t-r)*o(i)+r;return{x:s,y:u}},translate:function(e,t,n,r){var i=s.toRadians(r);return{x:e+n*Math.sin(i),y:t-n*Math.cos(i)}},pointIsInArc:function(e,t,n){var r=n.innerRadius()(t),i=n.outerRadius()(t),o=n.startAngle()(t),a=n.endAngle()(t),s=e.x*e.x+e.y*e.y,u=Math.atan2(e.x,-e.y);return u=0>u?u+2*Math.PI:u,s>=r*r&&i*i>=s&&u>=o&&a>=u}},u={add:function(e,t,n){var r=u.getIncludes(n),i=e.options.labels,o=e.svg.insert("g","."+e.cssPrefix+"labels-"+t).attr("class",e.cssPrefix+"labels-"+t),a=o.selectAll("."+e.cssPrefix+"labelGroup-"+t).data(e.options.data.content).enter().append("g").attr("id",function(n,r){return e.cssPrefix+"labelGroup"+r+"-"+t}).attr("data-index",function(e,t){return t}).attr("class",e.cssPrefix+"labelGroup-"+t).style("opacity",0);r.mainLabel&&a.append("text").attr("id",function(n,r){return e.cssPrefix+"segmentMainLabel"+r+"-"+t}).attr("class",e.cssPrefix+"segmentMainLabel-"+t).text(function(e){var t=e.label;return i.truncation.enabled&&e.label.length>i.truncation.length&&(t=e.label.substring(0,i.truncation.length)+"..."),t}).style("font-size",i.mainLabel.fontSize+"px").style("font-family",i.mainLabel.font).style("fill",i.mainLabel.color),r.percentage&&a.append("text").attr("id",function(n,r){return e.cssPrefix+"segmentPercentage"+r+"-"+t}).attr("class",e.cssPrefix+"segmentPercentage-"+t).text(function(t,n){return l.getPercentage(e,n,e.options.labels.percentage.decimalPlaces)+"%"}).style("font-size",i.percentage.fontSize+"px").style("font-family",i.percentage.font).style("fill",i.percentage.color),r.value&&a.append("text").attr("id",function(n,r){return e.cssPrefix+"segmentValue"+r+"-"+t}).attr("class",e.cssPrefix+"segmentValue-"+t).text(function(e){return e.value}).style("font-size",i.value.fontSize+"px").style("font-family",i.value.font).style("fill",i.value.color)},positionLabelElements:function(e,t,n){u["dimensions-"+t]=[];var r=d3.selectAll("."+e.cssPrefix+"labelGroup-"+t);r.each(function(){var n=d3.select(this).selectAll("."+e.cssPrefix+"segmentMainLabel-"+t),r=d3.select(this).selectAll("."+e.cssPrefix+"segmentPercentage-"+t),i=d3.select(this).selectAll("."+e.cssPrefix+"segmentValue-"+t);u["dimensions-"+t].push({mainLabel:null!==n.node()?n.node().getBBox():null,percentage:null!==r.node()?r.node().getBBox():null,value:null!==i.node()?i.node().getBBox():null})});var i=5,o=u["dimensions-"+t];switch(n){case"label-value1":d3.selectAll("."+e.cssPrefix+"segmentValue-"+t).attr("dx",function(e,t){return o[t].mainLabel.width+i});break;case"label-value2":d3.selectAll("."+e.cssPrefix+"segmentValue-"+t).attr("dy",function(e,t){return o[t].mainLabel.height});break;case"label-percentage1":d3.selectAll("."+e.cssPrefix+"segmentPercentage-"+t).attr("dx",function(e,t){return o[t].mainLabel.width+i});break;case"label-percentage2":d3.selectAll("."+e.cssPrefix+"segmentPercentage-"+t).attr("dx",function(e,t){return o[t].mainLabel.width/2-o[t].percentage.width/2}).attr("dy",function(e,t){return o[t].mainLabel.height})}},computeLabelLinePositions:function(e){e.lineCoordGroups=[],d3.selectAll("."+e.cssPrefix+"labelGroup-outer").each(function(t,n){return u.computeLinePosition(e,n)})},computeLinePosition:function(e,t){var n,r,i,o,a=l.getSegmentAngle(t,e.options.data.content,e.totalSize,{midpoint:!0}),u=s.rotate(e.pieCenter.x,e.pieCenter.y-e.outerRadius,e.pieCenter.x,e.pieCenter.y,a),c=e.outerLabelGroupData[t].h/5,p=6,f=Math.floor(a/90),d=4;switch(2===f&&180===a&&(f=1),f){case 0:n=e.outerLabelGroupData[t].x-p-(e.outerLabelGroupData[t].x-p-u.x)/2,r=e.outerLabelGroupData[t].y+(u.y-e.outerLabelGroupData[t].y)/d,i=e.outerLabelGroupData[t].x-p,o=e.outerLabelGroupData[t].y-c;break;case 1:n=u.x+(e.outerLabelGroupData[t].x-u.x)/d,r=u.y+(e.outerLabelGroupData[t].y-u.y)/d,i=e.outerLabelGroupData[t].x-p,o=e.outerLabelGroupData[t].y-c;break;case 2:var h=e.outerLabelGroupData[t].x+e.outerLabelGroupData[t].w+p;n=u.x-(u.x-h)/d,r=u.y+(e.outerLabelGroupData[t].y-u.y)/d,i=e.outerLabelGroupData[t].x+e.outerLabelGroupData[t].w+p,o=e.outerLabelGroupData[t].y-c;break;case 3:var m=e.outerLabelGroupData[t].x+e.outerLabelGroupData[t].w+p;n=m+(u.x-m)/d,r=e.outerLabelGroupData[t].y+(u.y-e.outerLabelGroupData[t].y)/d,i=e.outerLabelGroupData[t].x+e.outerLabelGroupData[t].w+p,o=e.outerLabelGroupData[t].y-c}e.lineCoordGroups[t]="straight"===e.options.labels.lines.style?[{x:u.x,y:u.y},{x:i,y:o}]:[{x:u.x,y:u.y},{x:n,y:r},{x:i,y:o}]},addLabelLines:function(e){var t=e.svg.insert("g","."+e.cssPrefix+"pieChart").attr("class",e.cssPrefix+"lineGroups").style("opacity",0),n=t.selectAll("."+e.cssPrefix+"lineGroup").data(e.lineCoordGroups).enter().append("g").attr("class",e.cssPrefix+"lineGroup"),r=d3.svg.line().interpolate("basis").x(function(e){return e.x}).y(function(e){return e.y});n.append("path").attr("d",r).attr("stroke",function(t,n){return"segment"===e.options.labels.lines.color?e.options.colors[n]:e.options.labels.lines.color}).attr("stroke-width",1).attr("fill","none").style("opacity",function(t,n){var r=e.options.labels.outer.hideWhenLessThanPercentage,i=l.getPercentage(e,n,e.options.labels.percentage.decimalPlaces),o=null!==r&&r>i||""===e.options.data.content[n].label;return o?0:1})},positionLabelGroups:function(e,t){d3.selectAll("."+e.cssPrefix+"labelGroup-"+t).style("opacity",0).attr("transform",function(n,r){var i,u;if("outer"===t)i=e.outerLabelGroupData[r].x,u=e.outerLabelGroupData[r].y;else{var c=a(!0,{},e.pieCenter);if(e.innerRadius>0){var p=l.getSegmentAngle(r,e.options.data.content,e.totalSize,{midpoint:!0}),f=s.translate(e.pieCenter.x,e.pieCenter.y,e.innerRadius,p);c.x=f.x,c.y=f.y}var d=o.getDimensions(e.cssPrefix+"labelGroup"+r+"-inner"),h=d.w/2,m=d.h/4;i=c.x+(e.lineCoordGroups[r][0].x-c.x)/1.8,u=c.y+(e.lineCoordGroups[r][0].y-c.y)/1.8,i-=h,u+=m}return"translate("+i+","+u+")"})},fadeInLabelsAndLines:function(e){var t="default"===e.options.effects.load.effect?e.options.effects.load.speed:1;setTimeout(function(){var t="default"===e.options.effects.load.effect?400:1;d3.selectAll("."+e.cssPrefix+"labelGroup-outer").transition().duration(t).style("opacity",function(t,n){var r=e.options.labels.outer.hideWhenLessThanPercentage,i=l.getPercentage(e,n,e.options.labels.percentage.decimalPlaces);return null!==r&&r>i?0:1}),d3.selectAll("."+e.cssPrefix+"labelGroup-inner").transition().duration(t).style("opacity",function(t,n){var r=e.options.labels.inner.hideWhenLessThanPercentage,i=l.getPercentage(e,n,e.options.labels.percentage.decimalPlaces);return null!==r&&r>i?0:1}),d3.selectAll("g."+e.cssPrefix+"lineGroups").transition().duration(t).style("opacity",1),o.isFunction(e.options.callbacks.onload)&&setTimeout(function(){try{e.options.callbacks.onload()}catch(e){}},t)},t)},getIncludes:function(e){var t=!1,n=!1,r=!1;switch(e){case"label":t=!0;break;case"value":n=!0;break;case"percentage":r=!0;break;case"label-value1":case"label-value2":t=!0,n=!0;break;case"label-percentage1":case"label-percentage2":t=!0,r=!0}return{mainLabel:t,value:n,percentage:r}},computeOuterLabelCoords:function(e){e.svg.selectAll("."+e.cssPrefix+"labelGroup-outer").each(function(t,n){return u.getIdealOuterLabelPositions(e,n)}),u.resolveOuterLabelCollisions(e)},resolveOuterLabelCollisions:function(e){var t=e.options.data.content.length;u.checkConflict(e,0,"clockwise",t),u.checkConflict(e,t-1,"anticlockwise",t)},checkConflict:function(e,t,n,r){var i,a;if(!(1>=r)){var s=e.outerLabelGroupData[t].hs;if(!("clockwise"===n&&"right"!==s||"anticlockwise"===n&&"left"!==s)){var l="clockwise"===n?t+1:t-1,c=e.outerLabelGroupData[t],p=e.outerLabelGroupData[l],f={labelHeights:e.outerLabelGroupData[0].h,center:e.pieCenter,lineLength:e.outerRadius+e.options.labels.outer.pieDistance,heightChange:e.outerLabelGroupData[0].h+1};if("clockwise"===n){for(i=0;t>=i;i++)if(a=e.outerLabelGroupData[i],o.rectIntersect(a,p)){u.adjustLabelPos(e,l,c,f);break}}else for(i=r-1;i>=t;i--)if(a=e.outerLabelGroupData[i],o.rectIntersect(a,p)){u.adjustLabelPos(e,l,c,f);break}u.checkConflict(e,l,n,r)}}},adjustLabelPos:function(e,t,n,r){var i,o,a,s;s=n.y+r.heightChange,o=r.center.y-s,i=Math.sqrt(Math.abs(r.lineLength)>Math.abs(o)?r.lineLength*r.lineLength-o*o:o*o-r.lineLength*r.lineLength),a="right"===n.hs?r.center.x+i:r.center.x-i-e.outerLabelGroupData[t].w,e.outerLabelGroupData[t].x=a,e.outerLabelGroupData[t].y=s},getIdealOuterLabelPositions:function(e,t){var n=d3.select("#"+e.cssPrefix+"labelGroup"+t+"-outer").node().getBBox(),r=l.getSegmentAngle(t,e.options.data.content,e.totalSize,{midpoint:!0}),i=e.pieCenter.x,o=e.pieCenter.y-(e.outerRadius+e.options.labels.outer.pieDistance),a=s.rotate(i,o,e.pieCenter.x,e.pieCenter.y,r),u="right";r>180?(a.x-=n.width+8,u="left"):a.x+=8,e.outerLabelGroupData[t]={x:a.x,y:a.y,w:n.width,h:n.height,hs:u}}},l={create:function(e){var t=e.pieCenter,n=e.options.colors,r=e.options.effects.load,i=e.options.misc.colors.segmentStroke,o=e.svg.insert("g","#"+e.cssPrefix+"title").attr("transform",function(){return s.getPieTranslateCenter(t)}).attr("class",e.cssPrefix+"pieChart"),a=d3.svg.arc().innerRadius(e.innerRadius).outerRadius(e.outerRadius).startAngle(0).endAngle(function(t){return t.value/e.totalSize*2*Math.PI}),u=o.selectAll("."+e.cssPrefix+"arc").data(e.options.data.content).enter().append("g").attr("class",e.cssPrefix+"arc"),c=r.speed;"none"===r.effect&&(c=0),u.append("path").attr("id",function(t,n){return e.cssPrefix+"segment"+n}).attr("fill",function(t,r){var i=n[r];return e.options.misc.gradient.enabled&&(i="url(#"+e.cssPrefix+"grad"+r+")"),i}).style("stroke",i).style("stroke-width",1).transition().ease("cubic-in-out").duration(c).attr("data-index",function(e,t){return t}).attrTween("d",function(t){var n=d3.interpolate({value:0},t);return function(t){return e.arc(n(t))}}),e.svg.selectAll("g."+e.cssPrefix+"arc").attr("transform",function(t,n){var r=0;return n>0&&(r=l.getSegmentAngle(n-1,e.options.data.content,e.totalSize)),"rotate("+r+")"}),e.arc=a},addGradients:function(e){var t=e.svg.append("defs").selectAll("radialGradient").data(e.options.data.content).enter().append("radialGradient").attr("gradientUnits","userSpaceOnUse").attr("cx",0).attr("cy",0).attr("r","120%").attr("id",function(t,n){return e.cssPrefix+"grad"+n});t.append("stop").attr("offset","0%").style("stop-color",function(t,n){return e.options.colors[n]}),t.append("stop").attr("offset",e.options.misc.gradient.percentage+"%").style("stop-color",e.options.misc.gradient.color)},addSegmentEventHandlers:function(e){var t=d3.selectAll("."+e.cssPrefix+"arc,."+e.cssPrefix+"labelGroup-inner,."+e.cssPrefix+"labelGroup-outer");t.on("click",function(){var t,n=d3.select(this);if(n.attr("class")===e.cssPrefix+"arc")t=n.select("path");else{var r=n.attr("data-index");t=d3.select("#"+e.cssPrefix+"segment"+r)}var i=t.attr("class")===e.cssPrefix+"expanded";l.onSegmentEvent(e,e.options.callbacks.onClickSegment,t,i),"none"!==e.options.effects.pullOutSegmentOnClick.effect&&(i?l.closeSegment(e,t.node()):l.openSegment(e,t.node()))}),t.on("mouseover",function(){var t,n,r=d3.select(this);if(r.attr("class")===e.cssPrefix+"arc"?t=r.select("path"):(n=r.attr("data-index"),t=d3.select("#"+e.cssPrefix+"segment"+n)),e.options.effects.highlightSegmentOnMouseover){n=t.attr("data-index");var i=e.options.colors[n];t.style("fill",o.getColorShade(i,e.options.effects.highlightLuminosity))}e.options.tooltips.enabled&&(n=t.attr("data-index"),p.showTooltip(e,n));var a=t.attr("class")===e.cssPrefix+"expanded";l.onSegmentEvent(e,e.options.callbacks.onMouseoverSegment,t,a)}),t.on("mousemove",function(){p.moveTooltip(e)}),t.on("mouseout",function(){var t,n,r=d3.select(this);if(r.attr("class")===e.cssPrefix+"arc"?t=r.select("path"):(n=r.attr("data-index"),t=d3.select("#"+e.cssPrefix+"segment"+n)),e.options.effects.highlightSegmentOnMouseover){n=t.attr("data-index");var i=e.options.colors[n];e.options.misc.gradient.enabled&&(i="url(#"+e.cssPrefix+"grad"+n+")"),t.style("fill",i)}e.options.tooltips.enabled&&(n=t.attr("data-index"),p.hideTooltip(e,n));var o=t.attr("class")===e.cssPrefix+"expanded";l.onSegmentEvent(e,e.options.callbacks.onMouseoutSegment,t,o)})},onSegmentEvent:function(e,t,n,r){if(o.isFunction(t)){var i=parseInt(n.attr("data-index"),10);t({segment:n.node(),index:i,expanded:r,data:e.options.data.content[i]})}},openSegment:function(e,t){e.isOpeningSegment||(e.isOpeningSegment=!0,d3.selectAll("."+e.cssPrefix+"expanded").length>0&&l.closeSegment(e,d3.select("."+e.cssPrefix+"expanded").node()),d3.select(t).transition().ease(e.options.effects.pullOutSegmentOnClick.effect).duration(e.options.effects.pullOutSegmentOnClick.speed).attr("transform",function(t){var n=e.arc.centroid(t),r=n[0],i=n[1],o=Math.sqrt(r*r+i*i),a=parseInt(e.options.effects.pullOutSegmentOnClick.size,10);return"translate("+r/o*a+","+i/o*a+")"}).each("end",function(){e.currentlyOpenSegment=t,e.isOpeningSegment=!1,d3.select(this).attr("class",e.cssPrefix+"expanded")}))},closeSegment:function(e,t){d3.select(t).transition().duration(400).attr("transform","translate(0,0)").each("end",function(){d3.select(this).attr("class",""),e.currentlyOpenSegment=null})},getCentroid:function(e){var t=e.getBBox();return{x:t.x+t.width/2,y:t.y+t.height/2}},getSegmentAngle:function(e,t,n,r){var i,o=a({compounded:!0,midpoint:!1},r),s=t[e].value;if(o.compounded){i=0;for(var u=0;e>=u;u++)i+=t[u].value}"undefined"==typeof i&&(i=s);var l=i/n*360;if(o.midpoint){var c=s/n*360;l-=c/2}return l},getPercentage:function(e,t,n){var r=e.options.data.content[t].value/e.totalSize;return 0>=n?Math.round(100*r):(100*r).toFixed(n)}},c={offscreenCoord:-1e4,addTitle:function(e){e.svg.selectAll("."+e.cssPrefix+"title").data([e.options.header.title]).enter().append("text").text(function(e){return e.text}).attr({id:e.cssPrefix+"title","class":e.cssPrefix+"title",x:c.offscreenCoord,y:c.offscreenCoord}).attr("text-anchor",function(){var t;return t="top-center"===e.options.header.location||"pie-center"===e.options.header.location?"middle":"left"}).attr("fill",function(e){return e.color}).style("font-size",function(e){return e.fontSize+"px"}).style("font-family",function(e){return e.font})},positionTitle:function(e){var t,n=e.textComponents,r=e.options.header.location,i=e.options.misc.canvasPadding,o=e.options.size.canvasWidth,a=e.options.header.titleSubtitlePadding;t="top-left"===r?i.left:(o-i.right)/2+i.left,t+=e.options.misc.pieCenterOffset.x;var s=i.top+n.title.h;if("pie-center"===r)if(s=e.pieCenter.y,n.subtitle.exists){var u=n.title.h+a+n.subtitle.h;s=s-u/2+n.title.h}else s+=n.title.h/4;e.svg.select("#"+e.cssPrefix+"title").attr("x",t).attr("y",s)},addSubtitle:function(e){var t=e.options.header.location;e.svg.selectAll("."+e.cssPrefix+"subtitle").data([e.options.header.subtitle]).enter().append("text").text(function(e){return e.text}).attr("x",c.offscreenCoord).attr("y",c.offscreenCoord).attr("id",e.cssPrefix+"subtitle").attr("class",e.cssPrefix+"subtitle").attr("text-anchor",function(){var e;return e="top-center"===t||"pie-center"===t?"middle":"left"}).attr("fill",function(e){return e.color}).style("font-size",function(e){return e.fontSize+"px"}).style("font-family",function(e){return e.font})},positionSubtitle:function(e){var t,n=e.options.misc.canvasPadding,r=e.options.size.canvasWidth;t="top-left"===e.options.header.location?n.left:(r-n.right)/2+n.left,t+=e.options.misc.pieCenterOffset.x;var i=c.getHeaderHeight(e);e.svg.select("#"+e.cssPrefix+"subtitle").attr("x",t).attr("y",i)},addFooter:function(e){e.svg.selectAll("."+e.cssPrefix+"footer").data([e.options.footer]).enter().append("text").text(function(e){return e.text}).attr("x",c.offscreenCoord).attr("y",c.offscreenCoord).attr("id",e.cssPrefix+"footer").attr("class",e.cssPrefix+"footer").attr("text-anchor",function(){var t="left";return"bottom-center"===e.options.footer.location?t="middle":"bottom-right"===e.options.footer.location&&(t="left"),t}).attr("fill",function(e){return e.color}).style("font-size",function(e){return e.fontSize+"px"}).style("font-family",function(e){return e.font})},positionFooter:function(e){var t,n=e.options.footer.location,r=e.textComponents.footer.w,i=e.options.size.canvasWidth,o=e.options.size.canvasHeight,a=e.options.misc.canvasPadding;t="bottom-left"===n?a.left:"bottom-right"===n?i-r-a.right:i/2,e.svg.select("#"+e.cssPrefix+"footer").attr("x",t).attr("y",o-a.bottom)},getHeaderHeight:function(e){var t;if(e.textComponents.title.exists){var n=e.textComponents.title.h+e.options.header.titleSubtitlePadding+e.textComponents.subtitle.h;t="pie-center"===e.options.header.location?e.pieCenter.y-n/2+n:n+e.options.misc.canvasPadding.top}else if("pie-center"===e.options.header.location){var r=e.options.misc.canvasPadding.bottom+e.textComponents.footer.h;t=(e.options.size.canvasHeight-r)/2+e.options.misc.canvasPadding.top+e.textComponents.subtitle.h/2}else t=e.options.misc.canvasPadding.top+e.textComponents.subtitle.h;return t}},p={addTooltips:function(e){var t=e.svg.insert("g").attr("class",e.cssPrefix+"tooltips");t.selectAll("."+e.cssPrefix+"tooltip").data(e.options.data.content).enter().append("g").attr("class",e.cssPrefix+"tooltip").attr("id",function(t,n){return e.cssPrefix+"tooltip"+n}).style("opacity",0).append("rect").attr({rx:e.options.tooltips.styles.borderRadius,ry:e.options.tooltips.styles.borderRadius,x:-e.options.tooltips.styles.padding,opacity:e.options.tooltips.styles.backgroundOpacity}).style("fill",e.options.tooltips.styles.backgroundColor),t.selectAll("."+e.cssPrefix+"tooltip").data(e.options.data.content).append("text").attr("fill",function(){return e.options.tooltips.styles.color}).style("font-size",function(){return e.options.tooltips.styles.fontSize}).style("font-family",function(){return e.options.tooltips.styles.font}).text(function(t,n){var r=e.options.tooltips.string;return"caption"===e.options.tooltips.type&&(r=t.caption),p.replacePlaceholders(e,r,n,{label:t.label,value:t.value,percentage:l.getPercentage(e,n,e.options.labels.percentage.decimalPlaces)})}),t.selectAll("."+e.cssPrefix+"tooltip rect").attr({width:function(t,n){var r=o.getDimensions(e.cssPrefix+"tooltip"+n);return r.w+2*e.options.tooltips.styles.padding},height:function(t,n){var r=o.getDimensions(e.cssPrefix+"tooltip"+n);return r.h+2*e.options.tooltips.styles.padding},y:function(t,n){var r=o.getDimensions(e.cssPrefix+"tooltip"+n);return-(r.h/2)+1}})},showTooltip:function(e,t){var n=e.options.tooltips.styles.fadeInSpeed;p.currentTooltip===t&&(n=1),p.currentTooltip=t,d3.select("#"+e.cssPrefix+"tooltip"+t).transition().duration(n).style("opacity",function(){return 1}),p.moveTooltip(e)},moveTooltip:function(e){d3.selectAll("#"+e.cssPrefix+"tooltip"+p.currentTooltip).attr("transform",function(){var t=d3.mouse(this.parentNode),n=t[0]+e.options.tooltips.styles.padding+2,r=t[1]-2*e.options.tooltips.styles.padding-2;return"translate("+n+","+r+")"})},hideTooltip:function(e,t){d3.select("#"+e.cssPrefix+"tooltip"+t).style("opacity",function(){return 0}),d3.select("#"+e.cssPrefix+"tooltip"+p.currentTooltip).attr("transform",function(){var t=e.options.size.canvasWidth+1e3,n=e.options.size.canvasHeight+1e3;return"translate("+t+","+n+")"})},replacePlaceholders:function(e,t,n,r){o.isFunction(e.options.tooltips.placeholderParser)&&e.options.tooltips.placeholderParser(n,r);var i=function(){return function(){var e=arguments[1];return r.hasOwnProperty(e)?r[arguments[1]]:arguments[0]}};return t.replace(/\{(\w+)\}/g,i(r))}},f=function(u,l){if(this.element=u,"string"==typeof u){var c=u.replace(/^#/,"");this.element=document.getElementById(c)}var p={};a(!0,p,r,l),this.options=p,null!==this.options.misc.cssPrefix?this.cssPrefix=this.options.misc.cssPrefix:(this.cssPrefix="p"+n+"_",n++),i.initialCheck(this)&&(d3.select(this.element).attr(e,t),this.options.data.content=s.sortPieData(this),this.options.data.smallSegmentGrouping.enabled&&(this.options.data.content=o.applySmallSegmentGrouping(this.options.data.content,this.options.data.smallSegmentGrouping)),this.options.colors=o.initSegmentColors(this),this.totalSize=s.getTotalPieSize(this.options.data.content),d.call(this))};f.prototype.recreate=function(){this.options.data.content=s.sortPieData(this),this.options.data.smallSegmentGrouping.enabled&&(this.options.data.content=o.applySmallSegmentGrouping(this.options.data.content,this.options.data.smallSegmentGrouping)),this.options.colors=o.initSegmentColors(this),this.totalSize=s.getTotalPieSize(this.options.data.content),d.call(this)},f.prototype.redraw=function(){this.element.innerHTML="",d.call(this)},f.prototype.destroy=function(){this.element.innerHTML="",d3.select(this.element).attr(e,null)},f.prototype.getOpenSegment=function(){var e=this.currentlyOpenSegment;if(null!==e&&"undefined"!=typeof e){var t=parseInt(d3.select(e).attr("data-index"),10);return{element:e,index:t,data:this.options.data.content[t]}}return null},f.prototype.openSegment=function(e){e=parseInt(e,10),0>e||e>this.options.data.content.length-1||l.openSegment(this,d3.select("#"+this.cssPrefix+"segment"+e).node())},f.prototype.closeSegment=function(){var e=this.currentlyOpenSegment;e&&l.closeSegment(this,e)},f.prototype.updateProp=function(e,t){switch(e){case"header.title.text":var n=o.processObj(this.options,e);o.processObj(this.options,e,t),d3.select("#"+this.cssPrefix+"title").html(t),(""===n&&""!==t||""!==n&&""===t)&&this.redraw();break;case"header.subtitle.text":var r=o.processObj(this.options,e);o.processObj(this.options,e,t),d3.select("#"+this.cssPrefix+"subtitle").html(t),(""===r&&""!==t||""!==r&&""===t)&&this.redraw();break;case"callbacks.onload":case"callbacks.onMouseoverSegment":case"callbacks.onMouseoutSegment":case"callbacks.onClickSegment":case"effects.pullOutSegmentOnClick.effect":case"effects.pullOutSegmentOnClick.speed":case"effects.pullOutSegmentOnClick.size":case"effects.highlightSegmentOnMouseover":case"effects.highlightLuminosity":o.processObj(this.options,e,t);break;default:o.processObj(this.options,e,t),this.destroy(),this.recreate()}};var d=function(){this.svg=o.addSVGSpace(this),this.textComponents={headerHeight:0,title:{exists:""!==this.options.header.title.text,h:0,w:0},subtitle:{exists:""!==this.options.header.subtitle.text,h:0,w:0},footer:{exists:""!==this.options.footer.text,h:0,w:0}},this.outerLabelGroupData=[],this.textComponents.title.exists&&c.addTitle(this),this.textComponents.subtitle.exists&&c.addSubtitle(this),c.addFooter(this);var e=this;o.whenIdExists(this.cssPrefix+"footer",function(){c.positionFooter(e);var t=o.getDimensions(e.cssPrefix+"footer");e.textComponents.footer.h=t.h,e.textComponents.footer.w=t.w});var t=[];this.textComponents.title.exists&&t.push(this.cssPrefix+"title"),this.textComponents.subtitle.exists&&t.push(this.cssPrefix+"subtitle"),this.textComponents.footer.exists&&t.push(this.cssPrefix+"footer"),o.whenElementsExist(t,function(){if(e.textComponents.title.exists){var t=o.getDimensions(e.cssPrefix+"title");e.textComponents.title.h=t.h,e.textComponents.title.w=t.w}if(e.textComponents.subtitle.exists){var n=o.getDimensions(e.cssPrefix+"subtitle");e.textComponents.subtitle.h=n.h,e.textComponents.subtitle.w=n.w}if(e.textComponents.title.exists||e.textComponents.subtitle.exists){var r=0;e.textComponents.title.exists&&(r+=e.textComponents.title.h,e.textComponents.subtitle.exists&&(r+=e.options.header.titleSubtitlePadding)),e.textComponents.subtitle.exists&&(r+=e.textComponents.subtitle.h),e.textComponents.headerHeight=r}s.computePieRadius(e),s.calculatePieCenter(e),c.positionTitle(e),c.positionSubtitle(e),e.options.misc.gradient.enabled&&l.addGradients(e),
l.create(e),u.add(e,"inner",e.options.labels.inner.format),u.add(e,"outer",e.options.labels.outer.format),u.positionLabelElements(e,"inner",e.options.labels.inner.format),u.positionLabelElements(e,"outer",e.options.labels.outer.format),u.computeOuterLabelCoords(e),u.positionLabelGroups(e,"outer"),u.computeLabelLinePositions(e),e.options.labels.lines.enabled&&"none"!==e.options.labels.outer.format&&u.addLabelLines(e),u.positionLabelGroups(e,"inner"),u.fadeInLabelsAndLines(e),e.options.tooltips.enabled&&p.addTooltips(e),l.addSegmentEventHandlers(e)})};return f});