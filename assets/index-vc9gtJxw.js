var z=Object.defineProperty;var G=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var A=(e,t,o)=>(G(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function y(){}function D(e){return e()}function R(){return Object.create(null)}function $(e){e.forEach(D)}function H(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function w(e,t){e.appendChild(t)}function W(e,t,o){e.insertBefore(t,o||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function U(){return X(" ")}function V(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function N(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Q(e){return Array.from(e.childNodes)}let L;function v(e){L=e}const h=[],B=[];let F=[];const P=[],Y=Promise.resolve();let C=!1;function Z(){C||(C=!0,Y.then(I))}function M(e){F.push(e)}const O=new Set;let m=0;function I(){if(m!==0)return;const e=L;do{try{for(;m<h.length;){const t=h[m];m++,v(t),ee(t.$$)}}catch(t){throw h.length=0,m=0,t}for(v(null),h.length=0,m=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const o=F[t];O.has(o)||(O.add(o),o())}F.length=0}while(h.length);for(;P.length;)P.pop()();C=!1,O.clear(),v(e)}function ee(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function te(e){const t=[],o=[];F.forEach(i=>e.indexOf(i)===-1?t.push(i):o.push(i)),o.forEach(i=>i()),F=t}const ne=new Set;function oe(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function re(e,t,o){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,o),M(()=>{const l=e.$$.on_mount.map(D).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...l):$(l),e.$$.on_mount=[]}),r.forEach(M)}function ae(e,t){const o=e.$$;o.fragment!==null&&(te(o.after_update),$(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(h.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,o,i,r,l,c=null,f=[-1]){const d=L;v(e);const n=e.$$={fragment:null,ctx:[],props:l,update:y,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:R(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};c&&c(n.root);let a=!1;if(n.ctx=o?o(e,t.props||{},(u,s,...p)=>{const _=p.length?p[0]:s;return n.ctx&&r(n.ctx[u],n.ctx[u]=_)&&(!n.skip_bound&&n.bound[u]&&n.bound[u](_),a&&ie(e,u)),s}):[],n.update(),a=!0,$(n.before_update),n.fragment=i?i(n.ctx):!1,t.target){if(t.hydrate){const u=Q(t.target);n.fragment&&n.fragment.l(u),u.forEach(T)}else n.fragment&&n.fragment.c();t.intro&&oe(e.$$.fragment),re(e,t.target,t.anchor),I()}v(d)}class le{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){ae(this,1),this.$destroy=y}$on(t,o){if(!H(o))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const r=i.indexOf(o);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);var b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q={exports:{}};(function(e,t){(function(o,i){i()})(b,function(){function o(n,a){return typeof a>"u"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\uFEFF",n],{type:n.type}):n}function i(n,a,u){var s=new XMLHttpRequest;s.open("GET",n),s.responseType="blob",s.onload=function(){d(s.response,a,u)},s.onerror=function(){console.error("could not download file")},s.send()}function r(n){var a=new XMLHttpRequest;a.open("HEAD",n,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function l(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(a)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof b=="object"&&b.global===b?b:void 0,f=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(n,a,u){var s=c.URL||c.webkitURL,p=document.createElement("a");a=a||n.name||"download",p.download=a,p.rel="noopener",typeof n=="string"?(p.href=n,p.origin===location.origin?l(p):r(p.href)?i(n,a,u):l(p,p.target="_blank")):(p.href=s.createObjectURL(n),setTimeout(function(){s.revokeObjectURL(p.href)},4e4),setTimeout(function(){l(p)},0))}:"msSaveOrOpenBlob"in navigator?function(n,a,u){if(a=a||n.name||"download",typeof n!="string")navigator.msSaveOrOpenBlob(o(n,u),a);else if(r(n))i(n,a,u);else{var s=document.createElement("a");s.href=n,s.target="_blank",setTimeout(function(){l(s)})}}:function(n,a,u,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof n=="string")return i(n,a,u);var p=n.type==="application/octet-stream",_=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||p&&_||f)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var g=E.result;g=k?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=g:location=g,s=null},E.readAsDataURL(n)}else{var j=c.URL||c.webkitURL,S=j.createObjectURL(n);s?s.location=S:location.href=S,s=null,setTimeout(function(){j.revokeObjectURL(S)},4e4)}});c.saveAs=d.saveAs=d,e.exports=d})})(q);var fe=q.exports;function ue(e){let t,o,i,r,l,c,f,d;return{c(){t=x("main"),o=x("h1"),o.textContent="NovelAI font uploader for anon.",i=U(),r=x("p"),r.textContent="Upload a .theme file if your want to add font to an existing theme, or add font right away for default theme.",l=U(),c=x("input"),N(c,"type","file"),N(c,"accept",".naitheme, .ttf, .otf")},m(n,a){W(n,t,a),w(t,o),w(t,i),w(t,r),w(t,l),w(t,c),f||(d=V(c,"change",e[0]),f=!0)},p:y,i:y,o:y,d(n){n&&T(t),f=!1,d()}}}function de(e){let t=null;const o=c=>new Promise((f,d)=>{const n=new FileReader;n.readAsDataURL(c),n.onload=()=>f(n.result),n.onerror=d});async function i(c){if(t=c.target.files[0],t.name.endsWith(".naitheme")){r=await t.text(),console.log(r),l=t.name;return}let f=JSON.parse(r),d=await o(t);f.global+=`@font-face {font-family: 'MyFontFamily';src: url(${d});}`,f.fonts.default="MyFontFamily",f.fonts.code="MyFontFamily",f.fonts.field="MyFontFamily",f.fonts.headings="MyFontFamily",f.fonts.selectedHeadings="MyFontFamily",f.fonts.selectedDefault="MyFontFamily";var n=new Blob([JSON.stringify(f)],{type:"text/plain;charset=utf-8"});fe.saveAs(n,l)}let r=`{
  "name": "NovelAI Dark",
  "fonts": {
    "default": ""Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",             "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif",
    "code": ""Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace",
    "field": ""Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",             "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif",
    "headings": ""Eczar"",
    "selectedHeadings": "Eczar",
    "selectedDefault": "Source Sans Pro"
  },
  "colors": {
    "bg0": "#0E0F21",
    "bg1": "#13152C",
    "bg2": "#191B31",
    "bg3": "#22253F",
    "textHeadings": "#F5F3C2",
    "textMain": "#FFFFFF",
    "textHeadingsOptions": [
      "#F5F3C2",
      "#EC56A7",
      "#75CF67",
      "#9773FF"
    ],
    "textMainOptions": [
      "#FFFFFF",
      "#E7FFE9",
      "#FFF9C8",
      "#A5C9FF"
    ],
    "textDisabled": "#FFFFFFA0",
    "textPlaceholder": "#FFFFFF77",
    "warning": "#FF7878",
    "textHighlight": "rgba(255, 120, 120, 0.4)",
    "textPrompt": "#F5F3C2",
    "textUser": "#9CDCFF",
    "textEdit": "#F4C7FF",
    "textAI": "#FFFFFF"
  },
  "breakpoints": {
    "mobile": "1200px",
    "desktop": "1600px"
  },
  "transitions": {
    "interactive": "0.08s ease-in-out"
  },
  "global": ""
}`,l="NovelAI Dark.naitheme";return[i]}class pe extends le{constructor(t){super(),se(this,t,de,ue,J,{})}}new pe({target:document.getElementById("app")});
