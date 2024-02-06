var z=Object.defineProperty;var G=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var A=(e,t,o)=>(G(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}})();function g(){}function D(e){return e()}function U(){return Object.create(null)}function $(e){e.forEach(D)}function H(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function w(e,t){e.appendChild(t)}function W(e,t,o){e.insertBefore(t,o||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function M(){return X(" ")}function V(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function N(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Q(e){return Array.from(e.childNodes)}let k;function v(e){k=e}const h=[],B=[];let y=[];const P=[],Y=Promise.resolve();let C=!1;function Z(){C||(C=!0,Y.then(I))}function L(e){y.push(e)}const O=new Set;let m=0;function I(){if(m!==0)return;const e=k;do{try{for(;m<h.length;){const t=h[m];m++,v(t),ee(t.$$)}}catch(t){throw h.length=0,m=0,t}for(v(null),h.length=0,m=0;B.length;)B.pop()();for(let t=0;t<y.length;t+=1){const o=y[t];O.has(o)||(O.add(o),o())}y.length=0}while(h.length);for(;P.length;)P.pop()();C=!1,O.clear(),v(e)}function ee(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function te(e){const t=[],o=[];y.forEach(i=>e.indexOf(i)===-1?t.push(i):o.push(i)),o.forEach(i=>i()),y=t}const ne=new Set;function oe(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function re(e,t,o){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,o),L(()=>{const l=e.$$.on_mount.map(D).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...l):$(l),e.$$.on_mount=[]}),a.forEach(L)}function ae(e,t){const o=e.$$;o.fragment!==null&&(te(o.after_update),$(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(h.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,o,i,a,l,c=null,f=[-1]){const d=k;v(e);const n=e.$$={fragment:null,ctx:[],props:l,update:g,not_equal:a,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:U(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};c&&c(n.root);let r=!1;if(n.ctx=o?o(e,t.props||{},(u,s,...p)=>{const _=p.length?p[0]:s;return n.ctx&&a(n.ctx[u],n.ctx[u]=_)&&(!n.skip_bound&&n.bound[u]&&n.bound[u](_),r&&ie(e,u)),s}):[],n.update(),r=!0,$(n.before_update),n.fragment=i?i(n.ctx):!1,t.target){if(t.hydrate){const u=Q(t.target);n.fragment&&n.fragment.l(u),u.forEach(T)}else n.fragment&&n.fragment.c();t.intro&&oe(e.$$.fragment),re(e,t.target,t.anchor),I()}v(d)}class le{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){ae(this,1),this.$destroy=g}$on(t,o){if(!H(o))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const a=i.indexOf(o);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);var b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q={exports:{}};(function(e,t){(function(o,i){i()})(b,function(){function o(n,r){return typeof r>"u"?r={autoBom:!1}:typeof r!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\uFEFF",n],{type:n.type}):n}function i(n,r,u){var s=new XMLHttpRequest;s.open("GET",n),s.responseType="blob",s.onload=function(){d(s.response,r,u)},s.onerror=function(){console.error("could not download file")},s.send()}function a(n){var r=new XMLHttpRequest;r.open("HEAD",n,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function l(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(r)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof b=="object"&&b.global===b?b:void 0,f=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(n,r,u){var s=c.URL||c.webkitURL,p=document.createElement("a");r=r||n.name||"download",p.download=r,p.rel="noopener",typeof n=="string"?(p.href=n,p.origin===location.origin?l(p):a(p.href)?i(n,r,u):l(p,p.target="_blank")):(p.href=s.createObjectURL(n),setTimeout(function(){s.revokeObjectURL(p.href)},4e4),setTimeout(function(){l(p)},0))}:"msSaveOrOpenBlob"in navigator?function(n,r,u){if(r=r||n.name||"download",typeof n!="string")navigator.msSaveOrOpenBlob(o(n,u),r);else if(a(n))i(n,r,u);else{var s=document.createElement("a");s.href=n,s.target="_blank",setTimeout(function(){l(s)})}}:function(n,r,u,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof n=="string")return i(n,r,u);var p=n.type==="application/octet-stream",_=/constructor/i.test(c.HTMLElement)||c.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||p&&_||f)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var F=E.result;F=j?F:F.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=F:location=F,s=null},E.readAsDataURL(n)}else{var R=c.URL||c.webkitURL,S=R.createObjectURL(n);s?s.location=S:location.href=S,s=null,setTimeout(function(){R.revokeObjectURL(S)},4e4)}});c.saveAs=d.saveAs=d,e.exports=d})})(q);var fe=q.exports;function ue(e){let t,o,i,a,l,c,f,d;return{c(){t=x("main"),o=x("h1"),o.textContent="NovelAI font uploader for anon.",i=M(),a=x("p"),a.textContent="Upload a .theme file if your want to add font to an existing theme, or add font right away for default theme.",l=M(),c=x("input"),N(c,"type","file"),N(c,"accept",".naitheme, .ttf, .otf")},m(n,r){W(n,t,r),w(t,o),w(t,i),w(t,a),w(t,l),w(t,c),f||(d=V(c,"change",e[0]),f=!0)},p:g,i:g,o:g,d(n){n&&T(t),f=!1,d()}}}function de(e){let t=null;const o=c=>new Promise((f,d)=>{const n=new FileReader;n.readAsDataURL(c),n.onload=()=>f(n.result),n.onerror=d});async function i(c){if(t=c.target.files[0],t.name.endsWith(".naitheme")){a=await t.text(),l=t.name;return}let f=JSON.parse(a),d=await o(t);const n=t.name.split(".")[0];f.global+=`@font-face {font-family: '${n}';src: url(${d});}`,f.fonts.default=n,f.fonts.code=n,f.fonts.field=n,f.fonts.headings=n,f.fonts.selectedHeadings=n,f.fonts.selectedDefault=n;var r=new Blob([JSON.stringify(f)],{type:"text/plain;charset=utf-8"});fe.saveAs(r,l)}let a=`{
  "name": "NovelAI Dark",
  "fonts": {
    "default": "\\"Source Sans Pro\\", -apple-system, BlinkMacSystemFont, \\"Segoe UI\\",             \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif",
    "code": "\\"Source Code Pro\\", Menlo, Monaco, Consolas, \\"Courier New\\", monospace",
    "field": "\\"Source Sans Pro\\", -apple-system, BlinkMacSystemFont, \\"Segoe UI\\",             \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif",
    "headings": "\\"Eczar\\"",
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
