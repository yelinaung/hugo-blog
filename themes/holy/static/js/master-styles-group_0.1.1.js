class s{pos=0;len=0;constructor(s){this.src=s,this.len=s.length}findNext(s){for(;this.pos<this.len;){const t=this.src[this.pos];if(s.includes(t))return t;this.pos++}}parseString(){for(;this.pos<this.len;){if("\\"!==this.findNext(["'","\\"]))return;this.pos++,this.pos++}}}class t extends s{lex(){let s="";const t=()=>{for(;this.pos<this.len;){switch(this.findNext(["'",";","}"])){case"'":this.pos++,this.parseString();break;case";":case"}":return}this.pos++}};if("{"!=this.src[0]&&"}"==this.src[this.len-1]){if(!(()=>{for(;this.pos<this.len;){switch(this.findNext(["'","{"])){case"'":this.pos++,this.parseString();break;case"{":return s=this.src.substring(0,this.pos),!0}this.pos++}return!1})())return}this.pos++;let e=this.pos;const i=(s,r)=>{const n=[];for(;this.pos<this.len;)switch(this.findNext(["'",";","}","{"])){case"'":this.pos++,this.parseString(),this.pos++;break;case";":if(this.pos+1<this.len&&"_"==this.src[this.pos+1]){const s=this.src.substring(e,this.pos++);s.length>0&&n.push(s),e=this.pos+1}this.pos++;break;case"}":const o=this.src.substring(e,this.pos++);if(o.length>0&&n.push(o),!r){if(!s){const e=this.pos;t(),s=this.src.substring(e,this.pos)}return{styles:n,selector:s}}return{styles:n,selector:s||this.src.substring(this.pos)};case"{":let c="";this.pos!=e&&(c=this.src.substring(e,this.pos)),this.pos++,e=this.pos;const h=i(c,!1);h&&n.push(h),e=this.pos;break;default:this.pos++}};return i(s,!0)}}var e=function(s){if("{"==s[0]||"}"==s[s.length-1]){return new t(s).lex()}};class i extends s{lex(){for(;this.pos<this.len;)switch(this.findNext(["'","@"])){case"'":this.pos++,this.parseString(),this.pos++;break;case"@":return{selector:this.src.substring(0,this.pos),at:this.src.substring(this.pos)};default:this.pos++}}}const r=(s,t)=>s.styles.reduce(((e,n)=>{const o="@"==(c=s.selector)[0]?{selector:"",at:c}:c.includes("@")&&new i(c).lex()||{selector:c,at:""};var c;if(t&&(o.selector+=t.selector,o.at+=t.at),"string"==typeof n){const s=function(s){if("@"==s[0]||!s.includes("@"))return{style:s,at:""};const t=new i(s).lex();return t?{style:t.selector,at:t.at}:{style:s,at:""}}(n);return e.concat(s.style+o.selector+s.at+o.at)}return e.concat(r(n,o))}),[]);var n=r;const o=new WeakMap,c=s=>{const t=o.get(s)||{};for(const e in t)if(!s.classList.contains(e)){const i=n(t[e]);delete t[e],o.set(s,t),s.classList.remove(...i)}s.classList.forEach((i=>{if(!t[i]){const r=e(i);if(void 0!==r){t[i]=r,o.set(s,t);const e=n(r).filter((t=>!s.classList.contains(t)));s.classList.add(...e)}}}))},h=new MutationObserver((s=>{s.forEach((function(s){switch(s.type){case"childList":s.addedNodes.forEach((s=>s instanceof Element&&c(s)));break;case"attributes":s.target instanceof Element&&"class"===s.attributeName&&c(s.target)}}))}));var a,l;document.querySelectorAll("[class]").forEach((s=>{c(s)})),a=document.documentElement,(l={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["class"]})&&l.subtree&&a.querySelectorAll("[class]").forEach((s=>{c(s)})),h.observe(a,l);
//# sourceMappingURL=index.js.map
