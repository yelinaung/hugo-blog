!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@master/style")):"function"==typeof define&&define.amd?define(["@master/style"],t):"object"==typeof exports?exports["@master/styles"]=t(require("@master/style")):e["@master/styles"]=t(e["@master/style"])}(this,(function(e){return(()=>{"use strict";var t={955:(e,t,s)=>{s.d(t,{breakpoints:()=>breakpoints});const breakpoints={"3xs":360,"2xs":480,xs:600,sm:768,md:1024,lg:1280,xl:1440,"2xl":1600,"3xl":1920,"4xl":2560}},563:(e,t,s)=>{s.d(t,{colors:()=>colors});const colors={fade:{10:"f4f4f6",20:"c3c6cf",30:"a6abb8",40:"878d9f",50:"63697c",60:"4c515f",70:"363944",80:"24262d",90:"131518"},gray:{10:"f4f4f6",20:"c6c6c8",30:"aaaaac",40:"8d8d8f",50:"6a6a6c",60:"515153",70:"39393b",80:"242424",90:"151515"},brown:{10:"f8f3f1",20:"d8c2b8",30:"c4a394",40:"af836e",50:"8a604c",60:"6a4a3a",70:"4b3429",80:"31221b",90:"1c130f"},orange:{10:"fcf1e7",20:"efbd92",30:"e79855",40:"d5731e",50:"a15717",60:"7c4312",70:"582f0d",80:"3a1f08",90:"221205"},gold:{10:"fff3da",20:"ffba30",30:"e89a00",40:"c08000",50:"906000",60:"6e4900",70:"4e3400",80:"342300",90:"1e1400"},yellow:{10:"fff5ca",20:"f0c100",30:"d0a700",40:"ac8a00",50:"806700",60:"634f00",70:"473800",80:"2f2500",90:"1b1500"},grass:{10:"ebfad4",20:"92da1a",30:"7dbc17",40:"689c13",50:"4e750e",60:"3c5a0b",70:"2a4008",80:"1c2a05",90:"101803"},green:{10:"d5fde5",20:"0be561",30:"0ac553",40:"08a345",50:"067b34",60:"055f28",70:"03441d",80:"022d13",90:"011a0b"},beryl:{10:"c9ffee",20:"00e19c",30:"00c387",40:"00a170",50:"007954",60:"005d41",70:"00432f",80:"002b1f",90:"001912"},teal:{10:"c5fffb",20:"00ddce",30:"00bfb2",40:"009f94",50:"00776f",60:"005b55",70:"00413d",80:"002b28",90:"001918"},cyan:{10:"dff8ff",20:"3dd7ff",30:"00b9e9",40:"0099c1",50:"007391",60:"005973",70:"003f51",80:"002a35",90:"00181f"},sky:{10:"eaf6fe",20:"8ccefa",30:"4db3f7",40:"0b92ee",50:"086eb3",60:"065489",70:"043c61",80:"032841",90:"021726"},blue:{10:"edf4fe",20:"a5c7fd",30:"81acf3",40:"538cee",50:"175fe9",60:"1344c4",70:"0d318d",80:"09205e",90:"051338"},indigo:{10:"f1f2ff",20:"bfc2f4",30:"a1a5ee",40:"7d84e8",50:"5a5bd5",60:"4835cc",70:"332592",80:"24195e",90:"161031"},violet:{10:"f5f1ff",20:"d0bdfb",30:"b89bf9",40:"9e77f5",50:"7949e5",60:"641ed2",70:"491595",80:"310e63",90:"1f0839"},purple:{10:"f9f0ff",20:"dcbaf6",30:"ca96f1",40:"b56cec",50:"9832e4",60:"7719bd",70:"551287",80:"390c5b",90:"220736"},fuchsia:{10:"feefff",20:"f1b1f3",30:"ea86ed",40:"e04ee5",50:"b61cbb",60:"8e1691",70:"68105f",80:"470b3d",90:"2b0720"},pink:{10:"fff0f8",20:"f7b2d6",30:"f388c0",40:"ee52a3",50:"ca1473",60:"9d1059",70:"720c40",80:"4c082b",90:"2d0519"},crimson:{10:"fff1f4",20:"ffb1c6",30:"f58ba7",40:"ea5b82",50:"ce1a4b",60:"a20d35",70:"780522",80:"500317",90:"33020f"},red:{10:"fff1f1",20:"fdb3b5",30:"fa8b8d",40:"eb5f63",50:"d11a1e",60:"a60708",70:"780506",80:"530001",90:"350001"},black:"000000",white:"ffffff"}},34:t=>{t.exports=e}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var l=s[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{a.r(r),a.d(r,{Styles:()=>Styles,breakpoints:()=>breakpoints.breakpoints,colors:()=>colors.colors,init:()=>init});var e=a(34);const t=(...e)=>e.join("-"),s="border",l="radius",i="margin",n="padding",c="font",o=",",d="flow",y="template",h="column",u="columns",x="gap",f="row",p="rows",m="shadow",b="user",g="content",k="image",S="stroke",v="filter",w="blend",j="background",O="repeat",$="color",z="scroll",M="animation",N="direction",P="mode",q="behavior",V=t("overscroll",q),C="y",Z="x",T="height",W="width",X="max",Y="min",_="block",A="inline",B="flex",E="grid",F="transition",L="origin",R="delay",U="rotate",D="deg",G="timing-function",H="duration",I="display",J="hidden",K="box",Q="fill",ee="clip",te="none",se="text",ae="align",re="transform",le="vertical",ie="word",ne="space",ce="decoration",oe="break",de="size",ye="auto",he="line",ue="object",xe="position",fe="rem",pe="style",me="smoothing",be="antialiased",ge="spacing",ke=t("letter",ge),Se=t(X,W),ve=t(Y,W),we=t(X,T),je=t(Y,T),Oe="table",$e="list",ze="span",Me="justify",Ne="items",Pe="self",qe="place",Ve="type",Ce="offset",Ze="outline",Te="snap",We="shape",Xe="view",Ye="area",_e="start",Ae="blur",Be="drop",Ee={full:"100%",fit:t("fit",g),max:t(X,g),min:t(Y,g)};class Fe extends e.Style{}Fe.matches=/^f(ont)?:(thin|extralight|light|regular|medium|semibold|bold|extrabold|heavy)(?!;)/,Fe.key=t(c,"weight"),Fe.unit="",Fe.values={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,heavy:900};const Le="var(--font-";class Re extends e.Style{}Re.matches=/^f(ont)?:(mono|sans|serif)(?!;)/,Re.key=t(c,"family"),Re.values={mono:Le+"mono)",sans:Le+"sans)",serif:Le+"serif)"};class Ue extends e.Style{}Ue.matches=/^f(ont)?:([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$/,Ue.key=t(c,de);const De="top",Ge="bottom",He="left",Ie="right",Je="l",Ke="r",Qe="t",et="b",tt="x",st="y";class at extends e.Style{get props(){const e="m"===this.prefix[0]?i:n,s=t(e,He),a=t(e,Ie),r=t(e,De),l=t(e,Ge);switch(this.prefix[1]){case tt:return{[s]:this,[a]:this};case st:return{[r]:this,[l]:this};case Je:return{[s]:this};case Ke:return{[a]:this};case Qe:return{[r]:this};case et:return{[l]:this};default:return{[e]:this}}}get order(){return"p:"===this.prefix||"m:"===this.prefix?-1:0}}at.id="spacing",at.matches=/^[pm][xytblr]?:./;class rt extends e.Style{}rt.matches=/^w:./,rt.key=W,rt.values=Ee;class lt extends e.Style{}lt.matches=/^h:./,lt.key=T,lt.values=Ee;class it extends e.Style{}it.matches=/^min-w:./,it.key=ve,it.values=Ee;class nt extends e.Style{}nt.matches=/^min-h:./,nt.key=je,nt.values=Ee;class ct extends e.Style{}ct.matches=/^ls:./,ct.key=ke,ct.unit="em";const ot=t("subpixel",be),dt=t("-webkit-font",me),yt=t("-moz-osxfont",me);class ht extends e.Style{get props(){const e={};switch(this.value){case ot:e[dt]=e[yt]=Object.assign(Object.assign({},this),{value:ye});break;case be:e[dt]=Object.assign(Object.assign({},this),{value:be}),e[yt]=Object.assign(Object.assign({},this),{value:"grayscale"})}return e}}ht.id="fontSmoothing",ht.matches=/^f(ont)?:(antialiased|subpixel-antialiased)(?!;)/,ht.unit="";class ut extends e.Style{}ut.matches=/^f(ont)?:(normal|italic|oblique)(?!;)/,ut.key=t(c,pe),ut.unit="deg";class xt extends e.Style{}xt.matches=/^f(ont)?:(ordinal|slashed-zero|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions)(?!;)/,xt.key=t(c,"variant","numeric");class ft extends e.Style{}ft.matches=/^lh:./,ft.key=t(he,T),ft.unit="";class pt extends e.Style{}pt.matches=/^(object|obj):(contain|cover|fill|scale-down)/,pt.key=t(ue,"fit");class mt extends e.Style{}mt.matches=/^(object|obj):(top|bottom|right|left|center)/,mt.key=t(ue,xe);class bt extends e.Style{}bt.matches=/^t(ext)?:(justify|center|left|right|start|end)(?!;)/,bt.key=t(se,ae);class gt extends e.Style{constructor(){super(...arguments),this.order=-1}}gt.matches=/^t(ext)?:(underline|line-through|overline)/,gt.key=t(se,ce),gt.colorful=!0;class kt extends e.Style{}kt.matches=/^t(ext)?:(uppercase|lowercase|capitalize)(?!;)/,kt.key=t(se,re);class St extends e.Style{}St.matches=/^v:./,St.key=t(le,ae);class vt extends e.Style{get props(){return{overflow:Object.assign(Object.assign({},this),{value:J}),display:Object.assign(Object.assign({},this),{value:"-webkit-box"}),"overflow-wrap":Object.assign(Object.assign({},this),{value:t(oe,ie)}),"text-overflow":Object.assign(Object.assign({},this),{value:"ellipsis"}),"-webkit-box-orient":Object.assign(Object.assign({},this),{value:le}),"-webkit-line-clamp":this}}}vt.id="lines",vt.matches=/^lines:./,vt.unit="";class wt extends e.Style{}wt.matches=/^transform:((top|bottom|right|left|center)|\d)/,wt.key=t(re,L),wt.unit="px";class jt extends e.Style{}jt.matches=/^transform:(flat|preserve-3d)(?!;)/,jt.key=t(re,pe);class Ot extends e.Style{}Ot.matches=/^transform:(content|border|fill|stroke|view)(?!;)/,Ot.key=t(re,K),Ot.values={content:t(g,K),border:t(s,K),fill:t(Q,K),stroke:t(S,K),view:t(Xe,K)};class $t extends e.Style{get parseValue(){return this.value.replace(/(translate|scale|skew|rotate|perspective|matrix)(3d|[XYZ])?\((.*?)\)/g,((e,t,s,a)=>{let r,l;switch(t){case"translate":r=fe;break;case"skew":r=D;break;case U:"3d"===s&&(l=!0),r=D;break;default:return e}const i=a.split(",");return e.replace(a,i.map(((e,t)=>{if(l&&i.length-1!==t)return e;return Number.isNaN(+e)?e:e/(r===fe?16:1)+r})).join(","))}))}}$t.matches=/^(translate|scale|skew|rotate|perspective|matrix)(3d|[XYZ])?\(/,$t.key=re,$t.unit="";class zt extends e.Style{constructor(){super(...arguments),this.order=-1}}zt.symbol="~",zt.key=F;class Mt extends e.Style{}Mt.matches=/^~delay:./,Mt.key=t(F,R),Mt.unit="ms";class Nt extends e.Style{}Nt.matches=/^~duration:./,Nt.key=t(F,H),Nt.unit="ms";class Pt extends e.Style{}Pt.matches=/^~property:./,Pt.key=t(F,"property");class qt extends e.Style{}qt.matches=/^~easing:./,qt.key=t(F,G);class Vt extends e.Style{}Vt.matches=/^max-h:./,Vt.key=we,Vt.values=Ee;class Ct extends e.Style{}Ct.matches=/^max-w:./,Ct.key=Se,Ct.values=Ee;class Zt extends e.Style{}Zt.matches=/^d:./,Zt.key=I,Zt.semantics={hidden:te,hide:te,block:_,table:Oe,flex:B,contents:"contents","inline-block":t(A,_),"inline-flex":t(A,B),"inline-grid":t(A,E),"inline-table":t(A,Oe)};class Tt extends e.Style{}Tt.matches=/^box:(content|border)(?!;)/,Tt.key=t(K,"sizing"),Tt.values={content:t(g,K),border:t(s,K)};class Wt extends e.Style{}Wt.key="opacity",Wt.unit="";class Xt extends e.Style{}Xt.key="visibility",Xt.semantics={visible:"visible",invisible:J};class Yt extends e.Style{}Yt.key="clear";class _t extends e.Style{}_t.key="float";class At extends e.Style{}At.key="isolation",At.semantics={isolate:"isolate"};class Bt extends e.Style{get props(){switch(this.prefix.slice(-2,-1)){case Z:return{"overflow-x":this};case C:return{"overflow-y":this};default:return{overflow:this}}}get order(){switch(this.prefix.slice(-2,-1)){case Z:case C:return 0;default:return-1}}}Bt.id="overflow",Bt.matches=/^(overflow|ovf)(-x|-y)?:./;class Et extends e.Style{get props(){switch(this.prefix.slice(-2,-1)){case Z:return{[t(V,Z)]:this};case C:return{[t(V,C)]:this};default:return{[V]:this}}}}Et.id="overscrollBehavior",Et.matches=/^overscroll-behavior(?:-[xy])?:/;class Ft extends e.Style{}Ft.matches=/^z:./,Ft.key="z-index",Ft.unit="";class Lt extends e.Style{}Lt.matches=/^\@delay:./,Lt.key=t(M,R),Lt.unit="ms";class Rt extends e.Style{}Rt.matches=/^\@direction:./,Rt.key=t(M,N);class Ut extends e.Style{}Ut.matches=/^\@fill-mode:./,Ut.key=t(M,Q,P);class Dt extends e.Style{}Dt.matches=/^\@iteration-count:./,Dt.key=t(M,"iteration","count"),Dt.unit="";class Gt extends e.Style{}Gt.matches=/^\@name:./,Gt.key=t(M,"name");class Ht extends e.Style{}Ht.matches=/^\@play-state:./,Ht.key=t(M,"play-state");class It extends e.Style{}It.matches=/^\@easing:./,It.key=t(M,G);class Jt extends e.Style{constructor(){super(...arguments),this.order=-1}}Jt.symbol="@",Jt.key=M,Jt.unit="";function Kt(e,t,a=""){a&&(a="-"+a);const r="border-left"+a,l="border-right"+a,i="border-top"+a,n="border-bottom"+a;switch(/^b(order)?-?(.)?/.exec(e)[2]){case tt:return{[r]:t,[l]:t};case st:return{[i]:t,[n]:t};case Je:return{[r]:t};case Ke:return{[l]:t};case Qe:return{[i]:t};case et:return{[n]:t};default:return{[s+a]:t}}}class Qt extends e.Style{get props(){return Kt(this.prefix,this,$)}get order(){return this.prefix===t(s,$)+":"||"b:"===this.prefix||"border:"===this.prefix?-1:0}}Qt.id="borderColor",Qt.matches=/^border(-(left|right|top|bottom))?-color:./,Qt.colorStarts="b([xytblr]|(order(-(left|right|top|bottom))?))?:",Qt.colorful=!0;const es=t(s,De,He,l),ts=t(s,De,Ie,l),ss=t(s,Ge,He,l),as=t(s,Ge,Ie,l),rs=t(s,l),ls=[es,ts,ss,as];class is extends e.Style{get props(){var e;if(this.prefix){let e="";const t=this.prefix.split("-");if(t.length>1)for(let s=1;s<t.length-1;s++)e+=t[s][0];else e=this.prefix.slice(1,-1);switch(e){case Qe:return{[es]:this,[ts]:this};case"tl":case"lt":return{[es]:this};case"rt":case"tr":return{[ts]:this};case et:return{[ss]:this,[as]:this};case"bl":case"lb":return{[ss]:this};case"br":case"rb":return{[as]:this};case Je:return{[es]:this,[ss]:this};case Ke:return{[ts]:this,[as]:this};default:return{[rs]:this}}}const t=null===(e=this.prefix)||void 0===e?void 0:e.slice(0,-1);return{[ls.includes(t)?t:rs]:this}}get order(){return this.prefix===t(s,l)+":"||"r:"===this.prefix?-1:0}}is.id="borderRadius",is.matches=/^((r[tblr]?[tblr]?|border(-(top|bottom)-(left|right))?-radius):.)/,is.semantics={rounded:"1e9em",round:"50%"};class ns extends e.Style{get props(){return Kt(this.prefix,this,pe)}get order(){return this.prefix===t(s,pe)+":"||"b:"===this.prefix||"border:"===this.prefix?-1:0}}ns.id="borderStyle",ns.matches=/^(border(-(left|right|top|bottom))?-style:.|b([xytblr]|order(-(left|right|top|bottom))?)?:(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)(?!;))/;class cs extends e.Style{get props(){return Kt(this.prefix,this,W)}get order(){return this.prefix===t(s,W)+":"||"b:"===this.prefix||"border:"===this.prefix?-1:0}}cs.id="borderWidth",cs.matches=/^(border(-(left|right|top|bottom))?-width:.|b([xytblr]|order(-(left|right|top|bottom))?)?:(([0-9]|(max|min|calc|clamp)\(.*\))|(max|min|calc|clamp)\(.*\))((?!;).)*$)/;class os extends e.Style{get props(){return Kt(this.prefix,this)}get order(){return"border:"===this.prefix||"b:"===this.prefix?-2:-1}}os.id="border",os.matches=/^b([xytblr]?|order(-(left|right|top|bottom))?):./,os.colorful=!0;class ds extends e.Style{}ds.matches=/^(bg|background):(fixed|local|scroll)(?!;)/,ds.key=t(j,"attachment");class ys extends e.Style{}ys.key=t(j,w,P);class hs extends e.Style{get props(){return{"-webkit-background-clip":this,"background-clip":this}}}hs.matches=/^(bg|background):text(?!;)/,hs.key=t(j,ee);class us extends e.Style{}us.matches=/^(bg|background):transparent(?!;)/,us.colorStarts="(bg|background):",us.key=t(j,$),us.unit="",us.colorful=!0;class xs extends e.Style{}xs.matches=/^(bg|background):(content|border|padding)(?!;)/,xs.key=t(j,L),xs.values={content:t(g,K),border:t(s,K),padding:t(n,K)};class fs extends e.Style{}fs.matches=/^(bg|background):(top|bottom|right|left|center)(?!;)/,fs.key=t(j,xe),fs.unit="px";class ps extends e.Style{}ps.matches=/^(bg|background):(space|round|repeat|no-repeat|repeat-x|repeat-y)(?![;a-zA-Z])/,ps.key=t(j,O);class ms extends e.Style{}ms.matches=/^(bg|background):((auto|cover|contain)(?!;)|\.?\d((?!;).)*$)/,ms.key=t(j,de);class bs extends e.Style{}bs.matches=/^(bg|background):(url|linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|conic-gradient)\(.*\)((?!;).)*$/,bs.key=t(j,k);class gs extends e.Style{constructor(){super(...arguments),this.order=-1}}gs.matches=/^bg:./,gs.key=j,gs.colorful=!0;class ks extends e.Style{}ks.matches=/^blend:./,ks.key=t("mix",w,P);class Ss extends e.Style{}Ss.key=xe,Ss.values={abs:"absolute",rel:"relative"},Ss.semantics={static:"static",fixed:"fixed",abs:"absolute",rel:"relative",sticky:"sticky"};class vs extends e.Style{get props(){const e=this.prefix.slice(0,-1);switch(e){case De:case He:case Ie:case Ge:return{[e]:this};case"center":return{left:this,right:this,"margin-left":Object.assign(Object.assign({},this),{unit:""}),"margin-right":Object.assign(Object.assign({},this),{unit:""})};case"middle":return{top:this,bottom:this,"margin-top":Object.assign(Object.assign({},this),{unit:""}),"margin-bottom":Object.assign(Object.assign({},this),{unit:""})}}}}function ws(e,t){let s="",a=0;return function r(l,i){let n="";const c=i?t(i):"",o=()=>{n&&(s+=!c||Number.isNaN(+n)?n:+n/(c===fe?16:1)+c,n="")};for(;a<e.length;a++){const t=e[a];if(t===l&&("'"!==l||")"===e[a+1])){o(),s+=t;break}","===t||" "===t?(o(),s+=t):n||"'"!==t?n&&"("===t?(s+=n+t,a++,r(")",n),n=""):n+=t:(s+=t,a++,r(t),n="")}o()}(),s}vs.matches=/^(top|left|right|bottom|center|middle):./;class js extends e.Style{get props(){return{"backdrop-filter":this,"-webkit-backdrop-filter":this}}get parseValue(){return ws(this.value,(e=>{switch(e){case Ae:case t(Be,m):return fe;case t("hue",U):return D}return""}))}}js.matches=/^bd:./,js.key=t("backdrop",v);class Os extends e.Style{}Os.key=Q,Os.colorStarts="fill:",Os.colorful=!0;class $s extends e.Style{}$s.key=S,$s.colorful=!0;class zs extends e.Style{}zs.matches=/^stroke:([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$/,zs.key=t(S,W);class Ms extends e.Style{get parseValue(){return ws(this.value,(e=>{switch(e){case Ae:case t(Be,m):return fe;case t("hue",U):return D}return""}))}}Ms.matches=/^(blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(/,Ms.key=v;class Ns extends e.Style{}Ns.key="cursor";class Ps extends e.Style{}Ps.key=t("pointer","events");class qs extends e.Style{}qs.key="resize";class Vs extends e.Style{}Vs.key=t("touch","action");class Cs extends e.Style{get props(){return{"user-drag":this,"-webkit-user-drag":this}}}Cs.key=t(b,"drag");class Zs extends e.Style{get props(){return{"user-select":this,"-webkit-user-select":this}}}Zs.key=t(b,"select");class Ts extends e.Style{}Ts.matches=/^s(?:hadow)?:./,Ts.key=t(K,m),Ts.colorful=!0;class Ws extends e.Style{}Ws.key=t(se,m);class Xs extends e.Style{get props(){return{"font-size":this,"line-height":Object.assign(Object.assign({},this),{value:this.unit===fe?this.value+.375+this.unit:"calc("+this.value+this.unit+" + .375rem)",unit:""})}}}Xs.id="textSize",Xs.matches=/^t(ext)?:([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$/;class Ys extends e.Style{}Ys.key=t(ie,oe),Ys.unit="",Ys.semantics={"break-word":{"overflow-wrap":t(oe,ie),overflow:J}};class _s extends e.Style{get props(){return{[I]:Object.assign(Object.assign({},this),{value:E}),[t(E,y,u)]:Object.assign(Object.assign({},this),{value:"repeat("+this.value+o+Y+"max(0"+",1fr))"})}}}_s.matches=/^grid-cols:./,_s.key=t(E,u),_s.unit="";class As extends e.Style{get props(){return{[I]:Object.assign(Object.assign({},this),{value:E}),[t(E,ye,d)]:Object.assign(Object.assign({},this),{value:h}),[t(E,y,p)]:Object.assign(Object.assign({},this),{value:"repeat("+this.value+o+Y+"max(0"+",1fr))"})}}}As.key=t(E,p),As.unit="";class Bs extends e.Style{constructor(){super(...arguments),this.order=-1}get props(){switch(this.prefix[4]){case Z:return{[t(h,x)]:this};case C:return{[t(f,x)]:this};default:return{[x]:this}}}}Bs.id="gap",Bs.matches=/^gap(-x|-y)?:./;class Es extends e.Style{}Es.key=t(ie,ge);class Fs extends e.Style{get props(){return{["--"+this.prefix.slice(1,-1)]:this}}}Fs.id="variable",Fs.matches=/^\$.+:./,Fs.unit="";class Ls extends e.Style{}Ls.matches=/^aspect:./,Ls.key=t("aspect","ratio"),Ls.unit="",Ls.semantics={square:"1/1",video:"16/9"};class Rs extends e.Style{get props(){return{"box-decoration-break":this,"-webkit-box-decoration-break":this}}}Rs.matches=/^box:(slice|clone)(?!;)/,Rs.key=t(K,ce,oe);class Us extends e.Style{}Us.key=t(oe,"after");class Ds extends e.Style{}Ds.key=t(oe,"before");class Gs extends e.Style{}Gs.key=t(oe,"inside");class Hs extends e.Style{}Hs.key=t(B,"shrink"),Hs.unit="";class Is extends e.Style{}Is.matches=/^flex:((row|col|column)(-reverse)?)(?!;)/,Is.key=t(B,N),Is.values={col:h,"col-reverse":t(h,"reverse")};class Js extends e.Style{}Js.key=t(B,"grow"),Js.unit="";class Ks extends e.Style{}Ks.matches=/^flex:(wrap(-reverse)?|nowrap)(?!;)/,Ks.key=t(B,"wrap");class Qs extends e.Style{}Qs.key=t(B,"basis"),Qs.values=Ee;class ea extends e.Style{constructor(){super(...arguments),this.order=-1}}ea.key=B,ea.unit="";const ta="999999";class sa extends e.Style{}sa.matches=/^o:./,sa.key="order",sa.values={first:"-999999",last:ta},sa.unit="";class aa extends e.Style{constructor(){super(...arguments),this.order=-1}get parseValue(){return"span"===this.prefix.slice(-5,-1)&&"auto"!==this.value?"span "+this.value+"/"+"span "+this.value:this.value}}aa.matches=/^grid-col(-span)?:./,aa.key=t(E,h),aa.unit="";class ra extends e.Style{}ra.matches=/^col-span:./,ra.key=t(h,ze);class la extends e.Style{constructor(){super(...arguments),this.order=-1}get parseValue(){return"span"===this.prefix.slice(-5,-1)&&"auto"!==this.value?"span "+this.value+"/"+"span "+this.value:this.value}}la.matches=/^grid-row-span:./,la.key=t(E,f),la.unit="";class ia extends e.Style{}ia.matches=/^font-color:./,ia.colorStarts="f(ont)?:",ia.colorful=!0,ia.key=$,ia.unit="";class na extends e.Style{}na.matches=/^ac:./,na.key=t(ae,g);class ca extends e.Style{}ca.matches=/^ai:./,ca.key=t(ae,Ne);class oa extends e.Style{}oa.matches=/^as:./,oa.key=t(ae,Pe);class da extends e.Style{}da.matches=/^grid-auto-cols:./,da.key=t(E,ye,u),da.values={min:t(Y,g),max:t(X,g)};class ya extends e.Style{}ya.matches=/^grid-flow:./,ya.key=t(E,ye,d);class ha extends e.Style{}ha.key=t(E,ye,p),ha.values={min:t(Y,g),max:t(X,g)};class ua extends e.Style{}ua.matches=/^jc:./,ua.key=t(Me,g);class xa extends e.Style{}xa.matches=/^ji:./,xa.key=t(Me,Ne);class fa extends e.Style{}fa.matches=/^js:./,fa.key=t(Me,Pe);class pa extends e.Style{constructor(){super(...arguments),this.order=-1}}pa.key=t(qe,g);class ma extends e.Style{constructor(){super(...arguments),this.order=-1}}ma.key=t(qe,Ne);class ba extends e.Style{constructor(){super(...arguments),this.order=-1}}ba.key=t(qe,Pe);class ga extends e.Style{get props(){return{[this.prefix.slice(0,-1)]:this}}get order(){return"padding:"===this.prefix?-1:0}}ga.id="padding",ga.matches=/^padding(?:-(?:left|right|top|bottom))?:./;class ka extends e.Style{get props(){return{[this.prefix.slice(0,-1)]:this}}get order(){return"margin:"===this.prefix?-1:0}}ka.id="margin",ka.matches=/^margin(-(left|right|top|bottom))?:./;class Sa extends e.Style{}Sa.matches=/^(text-(overflow|ovf):.|t(ext)?:(ellipsis|clip)(?!;))/,Sa.key=t(se,"overflow");class va extends e.Style{}va.matches=/^list-style:(inside|outside)(?!;)/,va.key=t($e,pe,xe);class wa extends e.Style{}wa.matches=/^list-style:(none|disc|decimal)(?!;)/,wa.key=t($e,pe,Ve);class ja extends e.Style{constructor(){super(...arguments),this.order=-1}}ja.key=t($e,pe);class Oa extends e.Style{}Oa.key=t(se,ce,$),Oa.colorStarts="text-decoration:",Oa.colorful=!0;class $a extends e.Style{}$a.matches=/^t(ext)?:(solid|double|dotted|dashed|wavy)(?!;)/,$a.key=t(se,ce,pe);class za extends e.Style{}za.matches=/^text-decoration:(from-font(?!;)|([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$)/,za.key=t(se,ce,"thickness"),za.unit="em";class Ma extends e.Style{}Ma.key=t(se,"indent");class Na extends e.Style{}Na.key=g;class Pa extends e.Style{}Pa.key=t(Ze,$),Pa.colorStarts="outline:",Pa.colorful=!0;class qa extends e.Style{}qa.key=t(Ze,Ce);class Va extends e.Style{}Va.matches=/^outline:(none|dotted|dashed|solid|double|groove|ridge|inset|outset)(?!;)/,Va.key=t(Ze,pe);class Ca extends e.Style{}Ca.matches=/^outline:([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$/,Ca.key=t(Ze,W);class Za extends e.Style{constructor(){super(...arguments),this.order=-1}}Za.key=Ze;class Ta extends e.Style{}Ta.matches=/^b(order)?:(collapse|separate)(?!;)/,Ta.key=t(s,"collapse");class Wa extends e.Style{}Wa.key=t(s,ge);class Xa extends e.Style{}Xa.key=t(Oe,"layout");class Ya extends e.Style{}Ya.key=t("accent",$),Ya.colorStarts="accent:",Ya.colorful=!0;class _a extends e.Style{}_a.key="appearance";class Aa extends e.Style{}Aa.key=t("caret",$),Aa.matches=/^caret:transparent(?!;)/,Aa.colorStarts="caret:",Aa.colorful=!0;class Ba extends e.Style{}Ba.key=t(z,q);class Ea extends e.Style{get props(){if("m"!==this.prefix.slice(-3,-2))return{[this.prefix.replace(/-m(?!argin)/,"-margin").slice(0,-1)]:this};{const e=t(z,i)+"-",s=e+He,a=e+Ie,r=e+De,l=e+Ge;switch(this.prefix.slice(-2,-1)){case tt:return{[s]:this,[a]:this};case st:return{[r]:this,[l]:this};case Je:return{[s]:this};case Ke:return{[a]:this};case Qe:return{[r]:this};case et:return{[l]:this}}}}get order(){return this.prefix===t(z,i)+":"||this.prefix===t(z,"m:")?-1:0}}Ea.id="scrollMargin",Ea.matches=/^scroll-m([xytblr]|argin(-(top|bottom|left|right))?)?:./;class Fa extends e.Style{get props(){if("p"!==this.prefix.slice(-3,-2))return{[this.prefix.replace(/-p(?!adding)/,"-padding").slice(0,-1)]:this};{const e=t(z,n)+"-",s=e+He,a=e+Ie,r=e+De,l=e+Ge;switch(this.prefix.slice(-2,-1)){case tt:return{[s]:this,[a]:this};case st:return{[r]:this,[l]:this};case Je:return{[s]:this};case Ke:return{[a]:this};case Qe:return{[r]:this};case et:return{[l]:this}}}}get order(){return this.prefix===t(z,n)+":"||this.prefix===t(z,"p:")?-1:0}}Fa.id="scrollPadding",Fa.matches=/^scroll-p([xytblr]|adding(-(top|bottom|left|right))?)?:./;class La extends e.Style{}La.matches=/^scroll-snap:(start|end|center)/,La.key=t(z,Te,ae);class Ra extends e.Style{}Ra.matches=/^scroll-snap:(normal|always)(?!;)/,Ra.key=t(z,Te,"stop");class Ua extends e.Style{}Ua.matches=/^scroll-snap:(([xy]|block|inline|both)(;(proximity|mandatory))?)(?!;)/,Ua.key=t(z,Te,Ve);class Da extends e.Style{}Da.key="will-change";class Ga extends e.Style{}Ga.key=t(se,"underline",Ce);class Ha extends e.Style{get props(){return{[this.prefix.slice(0,-1)]:this}}}Ha.matches=/^(?:top|bottom|left|right):./,Ha.key="inset",Ha.semantics={center:{left:0,right:0,"margin-left":ye,"margin-right":ye},middle:{top:0,bottom:0,"margin-top":ye,"margin-bottom":ye}};class Ia extends e.Style{constructor(){super(...arguments),this.order=-1}}Ia.matches=/^(columns|cols):./,Ia.key=u,Ia.unit="";class Ja extends e.Style{}Ja.key=t("white",ne),Ja.unit="",Ja.semantics={"break-spaces":{"white-space":t(oe,ne)+"s"}};class Ka extends e.Style{}Ka.matches=/^t(ext)?:(mixed|upright|sideways-right|sideways|use-glyph-orientation)(?!;)/,Ka.key=t(se,"orientation");class Qa extends e.Style{}Qa.key=t("writing",P);class er extends e.Style{}er.key="contain";class tr extends e.Style{}tr.matches=/^\@duration:./,tr.key=t(M,H),tr.unit="ms";class sr extends e.Style{}sr.matches=/^t(ext)?:(optimizeSpeed|optimizeLegibility|geometricPrecision)(?!;)/,sr.key=t(se,"rendering");class ar extends e.Style{}ar.key=N;class rr extends e.Style{}rr.matches=/^t(ext)?:(none|underline|overline|line-through)(?!;)/,rr.key=t(se,ce,he);class lr extends e.Style{}lr.matches=/^grid-col-start:./,lr.key=t(E,h,_e),lr.unit="";class ir extends e.Style{}ir.matches=/^list-style:(url|linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|conic-gradient)\(.*\)((?!;).)*$/,ir.key=t($e,pe,k);class nr extends e.Style{}nr.matches=/^shape:((margin|content|border|padding)(?!;)|(inset|circle|ellipse|polygon|url|linear-gradient)\(.*\)((?!;).)*$)/,nr.key=t(We,"outside"),nr.values={content:t(g,K),border:t(s,K),padding:t(n,K),margin:t(i,K)};class cr extends e.Style{}cr.matches=/^shape:([0-9]|(max|min|calc|clamp)\(.*\))((?!;).)*$/,cr.key=t(We,i);class or extends e.Style{}or.key=t(We,k,"threshold"),or.unit="";class dr extends e.Style{}dr.matches=/^clip:./,dr.key=t(ee,"path"),dr.values={content:t(g,K),border:t(s,K),padding:t(n,K),margin:t(i,K),fill:t(Q,K),stroke:t(S,K),view:t(Xe,K)};class yr extends e.Style{constructor(){super(...arguments),this.order=-1}}yr.key=E;class hr extends e.Style{constructor(){super(...arguments),this.order=-1}}hr.matches=/^f:./,hr.key=c,hr.unit="",hr.colorful=!0;class ur extends e.Style{}ur.key="quotes";class xr extends e.Style{constructor(){super(...arguments),this.order=-1}}xr.key=t(E,y);class fr extends e.Style{}fr.key=t(E,f,_e),fr.unit="";class pr extends e.Style{}pr.key=t(E,y,Ye)+"s";class mr extends e.Style{}mr.matches=/^grid-template-cols:./,mr.key=t(E,y,u),mr.values={min:t(Y,g),max:t(X,g)};class br extends e.Style{}br.key=t(E,y,p),br.values={min:t(Y,g),max:t(X,g)};class gr extends e.Style{constructor(){super(...arguments),this.order=-1}}gr.key=t(E,Ye),gr.unit="";class kr extends e.Style{}kr.matches=/^grid-col-end:./,kr.key=t(E,h,"end"),kr.unit="";class Sr extends e.Style{}Sr.key=t(E,f,"end"),Sr.unit="";class vr extends e.Style{get props(){return{"mask-image":this,"-webkit-mask-image":this}}}vr.key=t("mask",k);class wr extends e.Style{get props(){return{"-webkit-text-fill-color":this}}}wr.id="textFillColor",wr.matches=/^text-fill-color:./,wr.colorStarts="text-fill:",wr.colorful=!0;class jr extends e.Style{get props(){return{"-webkit-text-stroke":this}}}jr.id="textStroke",jr.matches=/^text-stroke:./;class Or extends e.Style{get props(){return{"-webkit-text-stroke-width":this}}}Or.id="textStrokeWidth",Or.matches=/^text-stroke(:((thin|medium|thick)(?!;)|\.?\d((?!;).)*$)|-width:.)/;class $r extends e.Style{get props(){return{"-webkit-text-stroke-color":this}}}$r.id="textStrokeColor",$r.matches=/^text-stroke-color:./,$r.colorStarts="text-stroke:",$r.colorful=!0;class zr extends e.Style{}zr.key=t(S,"dasharray");class Mr extends e.Style{}Mr.key=t(S,"dash")+Ce;class Nr extends e.Style{}Nr.key="x",Nr.unit="";class Pr extends e.Style{}Pr.key="y",Pr.unit="";class qr extends e.Style{}qr.key="cx",qr.unit="";class Vr extends e.Style{}Vr.key="cy",Vr.unit="";class Cr extends e.Style{}Cr.key="rx",Cr.unit="";class Zr extends e.Style{}Zr.key="ry",Zr.unit="";class Tr extends e.Style{}Tr.key=t(s,k,"outset");class Wr extends e.Style{}Wr.matches=/^border-image:(?:stretch|repeat|round|space)(?:(?!;).)*$/,Wr.key=t(s,k,O);class Xr extends e.Style{}Xr.key=t(s,k,"slice"),Xr.unit="";class Yr extends e.Style{}Yr.matches=/^border-image:(?:url|linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|conic-gradient)\(.*\)(?:(?!;).)*$/,Yr.key=t(s,k,"source");class _r extends e.Style{}_r.matches=/^border-image:(?:\.?[0-9]|(max|min|calc|clamp)\(.*\))(?:(?!;).)*$/,_r.key=t(s,k,W);class Ar extends e.Style{}Ar.key=t(s,k),Ar.unit="";var colors=a(563),breakpoints=a(955);const Br="undefined"!=typeof window,Styles=[Fs,Fe,Re,ia,at,ka,ga,Ue,Qs,Ks,Js,Hs,Is,ea,Zt,rt,lt,it,nt,er,Na,ct,ht,ut,xt,hr,ft,pt,mt,bt,Oa,$a,za,rr,gt,Ga,Sa,Ka,kt,sr,Ma,St,Ia,Ja,Ha,vt,Vt,Ct,Tt,Wt,Xt,Yt,_t,At,Bt,Et,Ft,Ss,vs,Ns,Ps,qs,Vs,Ys,Es,Cs,Zs,Ws,Xs,wr,Or,$r,jr,Ts,Xa,Ot,jt,wt,$t,Pt,qt,Nt,Mt,zt,Lt,Rt,tr,Ut,Dt,Gt,Ht,It,Jt,Qt,is,ns,cs,Ta,Wa,os,Tr,Wr,Xr,Yr,_r,Ar,ds,ys,hs,us,xs,fs,ps,ms,bs,gs,ks,js,Ms,Os,zr,Mr,zs,$s,Nr,Pr,qr,Vr,Cr,Zr,lr,kr,aa,_s,fr,Sr,la,As,da,ya,ha,pr,mr,br,xr,gr,yr,Bs,sa,Gs,Ds,Us,Rs,Ls,ra,na,ca,oa,ua,xa,fa,pa,ma,ba,va,wa,ir,ja,Pa,qa,Va,Ca,Za,Ya,_a,Aa,Ba,Ea,Fa,La,Ra,Ua,Da,Qa,ar,nr,cr,or,dr,ur,vr],Er=Styles.get=e=>Styles.find((t=>{var s;return e===t.id||e===(null===(s=t.key)||void 0===s?void 0:s.replace(/-./g,(e=>e[1].toUpperCase())))||e===t.key}));function init(){if(Br){const t=new e.StyleSheet(document.head);e.StyleSheet.root=t,t.observe(document.documentElement)}}Styles.extend=(t,s,a=!0)=>{for(const e in s){const a=Er(e);if(a){const r=s[e];a.extend(t,r)}}a&&e.StyleSheet.refresh()},e.Style.extend("colors",colors.colors,!1),e.Style.extend("breakpoints",breakpoints.breakpoints,!1),e.StyleSheet.Styles.push(...Styles);Br&&(window.initMasterStyles=init,window.MasterStyles=Styles,window.MasterStylesManual||init())})(),r})()}));
