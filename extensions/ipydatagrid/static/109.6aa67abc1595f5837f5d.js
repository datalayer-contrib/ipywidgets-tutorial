"use strict";(self.webpackChunkipydatagrid=self.webpackChunkipydatagrid||[]).push([[109],{8419:(t,n,r)=>{r.d(n,{H:()=>o,L:()=>e});class e extends Map{constructor(t,n=l){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(f(this,t))}has(t){return super.has(f(this,t))}set(t,n){return super.set(i(this,t),n)}delete(t){return super.delete(u(this,t))}}class o extends Set{constructor(t,n=l){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const n of t)this.add(n)}has(t){return super.has(f(this,t))}add(t){return super.add(i(this,t))}delete(t){return super.delete(u(this,t))}}function f({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):r}function i({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):(t.set(e,r),r)}function u({_intern:t,_key:n},r){const e=n(r);return t.has(e)&&(r=t.get(r),t.delete(e)),r}function l(t){return null!==t&&"object"==typeof t?t.valueOf():t}},109:(t,n,r)=>{function e(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function o(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function f(t){let n,r,f;function u(t,e,o=0,f=t.length){if(o<f){if(0!==n(e,e))return f;do{const n=o+f>>>1;r(t[n],e)<0?o=n+1:f=n}while(o<f)}return o}return 2!==t.length?(n=e,r=(n,r)=>e(t(n),r),f=(n,r)=>t(n)-r):(n=t===e||t===o?t:i,r=t,f=t),{left:u,center:function(t,n,r=0,e=t.length){const o=u(t,n,r,e-1);return o>r&&f(t[o-1],n)>-f(t[o],n)?o-1:o},right:function(t,e,o=0,f=t.length){if(o<f){if(0!==n(e,e))return f;do{const n=o+f>>>1;r(t[n],e)<=0?o=n+1:f=n}while(o<f)}return o}}}function i(){return 0}function u(t){return null===t?NaN:+t}r.r(n),r.d(n,{Adder:()=>A,InternMap:()=>k.L,InternSet:()=>k.H,ascending:()=>e,bin:()=>tt,bisect:()=>h,bisectCenter:()=>a,bisectLeft:()=>c,bisectRight:()=>s,bisector:()=>f,count:()=>d,cross:()=>v,cumsum:()=>g,descending:()=>o,deviation:()=>w,difference:()=>Ot,disjoint:()=>Ct,every:()=>Tt,extent:()=>b,fcumsum:()=>_,filter:()=>qt,flatGroup:()=>T,flatRollup:()=>j,fsum:()=>x,greatest:()=>bt,greatestIndex:()=>At,group:()=>S,groupSort:()=>D,groups:()=>E,histogram:()=>tt,index:()=>L,indexes:()=>I,intersection:()=>Pt,least:()=>Mt,leastIndex:()=>wt,map:()=>Ht,max:()=>nt,maxIndex:()=>st,mean:()=>ct,median:()=>at,merge:()=>ht,min:()=>rt,minIndex:()=>dt,mode:()=>pt,nice:()=>Z,pairs:()=>yt,permute:()=>P,quantile:()=>ft,quantileSorted:()=>it,quickselect:()=>et,range:()=>vt,rank:()=>gt,reduce:()=>Lt,reverse:()=>It,rollup:()=>q,rollups:()=>H,scan:()=>xt,shuffle:()=>_t,shuffler:()=>kt,some:()=>jt,sort:()=>R,subset:()=>Dt,sum:()=>Nt,superset:()=>Ut,thresholdFreedmanDiaconis:()=>ut,thresholdScott:()=>lt,thresholdSturges:()=>$,tickIncrement:()=>X,tickStep:()=>Y,ticks:()=>W,transpose:()=>St,union:()=>Gt,variance:()=>M,zip:()=>Ft});const l=f(e),s=l.right,c=l.left,a=f(u).center,h=s;function d(t,n){let r=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&++r;else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(o=+o)>=o&&++r}return r}function p(t){return 0|t.length}function y(t){return!(t>0)}function m(t){return"object"!=typeof t||"length"in t?t:Array.from(t)}function v(...t){const n="function"==typeof t[t.length-1]&&function(t){return n=>t(...n)}(t.pop()),r=(t=t.map(m)).map(p),e=t.length-1,o=new Array(e+1).fill(0),f=[];if(e<0||r.some(y))return f;for(;;){f.push(o.map(((n,r)=>t[r][n])));let i=e;for(;++o[i]===r[i];){if(0===i)return n?f.map(n):f;o[i--]=0}}}function g(t,n){var r=0,e=0;return Float64Array.from(t,void 0===n?t=>r+=+t||0:o=>r+=+n(o,e++,t)||0)}function M(t,n){let r,e=0,o=0,f=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(r=n-o,o+=r/++e,f+=r*(n-o));else{let i=-1;for(let u of t)null!=(u=n(u,++i,t))&&(u=+u)>=u&&(r=u-o,o+=r/++e,f+=r*(u-o))}if(e>1)return f/(e-1)}function w(t,n){const r=M(t,n);return r?Math.sqrt(r):r}function b(t,n){let r,e;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=e=n):(r>n&&(r=n),e<n&&(e=n)));else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(void 0===r?f>=f&&(r=e=f):(r>f&&(r=f),e<f&&(e=f)))}return[r,e]}class A{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let e=0;e<this._n&&e<32;e++){const o=n[e],f=t+o,i=Math.abs(t)<Math.abs(o)?t-(f-o):o-(f-t);i&&(n[r++]=i),t=f}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n,r,e,o=this._n,f=0;if(o>0){for(f=t[--o];o>0&&(n=f,r=t[--o],f=n+r,e=r-(f-n),!e););o>0&&(e<0&&t[o-1]<0||e>0&&t[o-1]>0)&&(r=2*e,n=f+r,r==n-f&&(f=n))}return f}}function x(t,n){const r=new A;if(void 0===n)for(let n of t)(n=+n)&&r.add(n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&r.add(o)}return+r}function _(t,n){const r=new A;let e=-1;return Float64Array.from(t,void 0===n?t=>r.add(+t||0):o=>r.add(+n(o,++e,t)||0))}var k=r(8419);function N(t){return t}function S(t,...n){return C(t,N,N,n)}function E(t,...n){return C(t,Array.from,N,n)}function F(t,n){for(let r=1,e=n.length;r<e;++r)t=t.flatMap((t=>t.pop().map((([n,r])=>[...t,n,r]))));return t}function T(t,...n){return F(E(t,...n),n)}function j(t,n,...r){return F(H(t,n,...r),r)}function q(t,n,...r){return C(t,N,n,r)}function H(t,n,...r){return C(t,Array.from,n,r)}function L(t,...n){return C(t,N,O,n)}function I(t,...n){return C(t,Array.from,O,n)}function O(t){if(1!==t.length)throw new Error("duplicate key");return t[0]}function C(t,n,r,e){return function t(o,f){if(f>=e.length)return r(o);const i=new k.L,u=e[f++];let l=-1;for(const t of o){const n=u(t,++l,o),r=i.get(n);r?r.push(t):i.set(n,[t])}for(const[n,r]of i)i.set(n,t(r,f));return n(i)}(t,0)}function P(t,n){return Array.from(n,(n=>t[n]))}function R(t,...n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");t=Array.from(t);let[r]=n;if(r&&2!==r.length||n.length>1){const e=Uint32Array.from(t,((t,n)=>n));return n.length>1?(n=n.map((n=>t.map(n))),e.sort(((t,r)=>{for(const e of n){const n=z(e[t],e[r]);if(n)return n}}))):(r=t.map(r),e.sort(((t,n)=>z(r[t],r[n])))),P(t,e)}return t.sort(U(r))}function U(t=e){if(t===e)return z;if("function"!=typeof t)throw new TypeError("compare is not a function");return(n,r)=>{const e=t(n,r);return e||0===e?e:(0===t(r,r))-(0===t(n,n))}}function z(t,n){return(null==t||!(t>=t))-(null==n||!(n>=n))||(t<n?-1:t>n?1:0)}function D(t,n,r){return(2!==n.length?R(q(t,n,r),(([t,n],[r,o])=>e(n,o)||e(t,r))):R(S(t,r),(([t,r],[o,f])=>n(r,f)||e(t,o)))).map((([t])=>t))}var G=Array.prototype,B=G.slice;function J(t){return()=>t}G.map;var K=Math.sqrt(50),Q=Math.sqrt(10),V=Math.sqrt(2);function W(t,n,r){var e,o,f,i,u=-1;if(r=+r,(t=+t)==(n=+n)&&r>0)return[t];if((e=n<t)&&(o=t,t=n,n=o),0===(i=X(t,n,r))||!isFinite(i))return[];if(i>0){let r=Math.round(t/i),e=Math.round(n/i);for(r*i<t&&++r,e*i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)*i}else{i=-i;let r=Math.round(t*i),e=Math.round(n*i);for(r/i<t&&++r,e/i>n&&--e,f=new Array(o=e-r+1);++u<o;)f[u]=(r+u)/i}return e&&f.reverse(),f}function X(t,n,r){var e=(n-t)/Math.max(0,r),o=Math.floor(Math.log(e)/Math.LN10),f=e/Math.pow(10,o);return o>=0?(f>=K?10:f>=Q?5:f>=V?2:1)*Math.pow(10,o):-Math.pow(10,-o)/(f>=K?10:f>=Q?5:f>=V?2:1)}function Y(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),o=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),f=e/o;return f>=K?o*=10:f>=Q?o*=5:f>=V&&(o*=2),n<t?-o:o}function Z(t,n,r){let e;for(;;){const o=X(t,n,r);if(o===e||0===o||!isFinite(o))return[t,n];o>0?(t=Math.floor(t/o)*o,n=Math.ceil(n/o)*o):o<0&&(t=Math.ceil(t*o)/o,n=Math.floor(n*o)/o),e=o}}function $(t){return Math.ceil(Math.log(d(t))/Math.LN2)+1}function tt(){var t=N,n=b,r=$;function e(e){Array.isArray(e)||(e=Array.from(e));var o,f,i,u=e.length,l=new Array(u);for(o=0;o<u;++o)l[o]=t(e[o],o,e);var s=n(l),c=s[0],a=s[1],d=r(l,c,a);if(!Array.isArray(d)){const t=a,r=+d;if(n===b&&([c,a]=Z(c,a,r)),(d=W(c,a,r))[0]<=c&&(i=X(c,a,r)),d[d.length-1]>=a)if(t>=a&&n===b){const t=X(c,a,r);isFinite(t)&&(t>0?a=(Math.floor(a/t)+1)*t:t<0&&(a=(Math.ceil(a*-t)+1)/-t))}else d.pop()}for(var p=d.length;d[0]<=c;)d.shift(),--p;for(;d[p-1]>a;)d.pop(),--p;var y,m=new Array(p+1);for(o=0;o<=p;++o)(y=m[o]=[]).x0=o>0?d[o-1]:c,y.x1=o<p?d[o]:a;if(isFinite(i)){if(i>0)for(o=0;o<u;++o)null!=(f=l[o])&&c<=f&&f<=a&&m[Math.min(p,Math.floor((f-c)/i))].push(e[o]);else if(i<0)for(o=0;o<u;++o)if(null!=(f=l[o])&&c<=f&&f<=a){const t=Math.floor((c-f)*i);m[Math.min(p,t+(d[t]<=f))].push(e[o])}}else for(o=0;o<u;++o)null!=(f=l[o])&&c<=f&&f<=a&&m[h(d,f,0,p)].push(e[o]);return m}return e.value=function(n){return arguments.length?(t="function"==typeof n?n:J(n),e):t},e.domain=function(t){return arguments.length?(n="function"==typeof t?t:J([t[0],t[1]]),e):n},e.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?J(B.call(t)):J(t),e):r},e}function nt(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r<n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r<o||void 0===r&&o>=o)&&(r=o)}return r}function rt(t,n){let r;if(void 0===n)for(const n of t)null!=n&&(r>n||void 0===r&&n>=n)&&(r=n);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&(r>o||void 0===r&&o>=o)&&(r=o)}return r}function et(t,n,r=0,e=t.length-1,o){for(o=void 0===o?z:U(o);e>r;){if(e-r>600){const f=e-r+1,i=n-r+1,u=Math.log(f),l=.5*Math.exp(2*u/3),s=.5*Math.sqrt(u*l*(f-l)/f)*(i-f/2<0?-1:1);et(t,n,Math.max(r,Math.floor(n-i*l/f+s)),Math.min(e,Math.floor(n+(f-i)*l/f+s)),o)}const f=t[n];let i=r,u=e;for(ot(t,r,n),o(t[e],f)>0&&ot(t,r,e);i<u;){for(ot(t,i,u),++i,--u;o(t[i],f)<0;)++i;for(;o(t[u],f)>0;)--u}0===o(t[r],f)?ot(t,r,u):(++u,ot(t,u,e)),u<=n&&(r=u+1),n<=u&&(e=u-1)}return t}function ot(t,n,r){const e=t[n];t[n]=t[r],t[r]=e}function ft(t,n,r){if(t=Float64Array.from(function*(t,n){if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(yield n);else{let r=-1;for(let e of t)null!=(e=n(e,++r,t))&&(e=+e)>=e&&(yield e)}}(t,r)),e=t.length){if((n=+n)<=0||e<2)return rt(t);if(n>=1)return nt(t);var e,o=(e-1)*n,f=Math.floor(o),i=nt(et(t,f).subarray(0,f+1));return i+(rt(t.subarray(f+1))-i)*(o-f)}}function it(t,n,r=u){if(e=t.length){if((n=+n)<=0||e<2)return+r(t[0],0,t);if(n>=1)return+r(t[e-1],e-1,t);var e,o=(e-1)*n,f=Math.floor(o),i=+r(t[f],f,t);return i+(+r(t[f+1],f+1,t)-i)*(o-f)}}function ut(t,n,r){return Math.ceil((r-n)/(2*(ft(t,.75)-ft(t,.25))*Math.pow(d(t),-1/3)))}function lt(t,n,r){return Math.ceil((r-n)*Math.cbrt(d(t))/(3.49*w(t)))}function st(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r<n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r<f||void 0===r&&f>=f)&&(r=f,e=o);return e}function ct(t,n){let r=0,e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,e+=n);else{let o=-1;for(let f of t)null!=(f=n(f,++o,t))&&(f=+f)>=f&&(++r,e+=f)}if(r)return e/r}function at(t,n){return ft(t,.5,n)}function ht(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}function dt(t,n){let r,e=-1,o=-1;if(void 0===n)for(const n of t)++o,null!=n&&(r>n||void 0===r&&n>=n)&&(r=n,e=o);else for(let f of t)null!=(f=n(f,++o,t))&&(r>f||void 0===r&&f>=f)&&(r=f,e=o);return e}function pt(t,n){const r=new k.L;if(void 0===n)for(let n of t)null!=n&&n>=n&&r.set(n,(r.get(n)||0)+1);else{let e=-1;for(let o of t)null!=(o=n(o,++e,t))&&o>=o&&r.set(o,(r.get(o)||0)+1)}let e,o=0;for(const[t,n]of r)n>o&&(o=n,e=t);return e}function yt(t,n=mt){const r=[];let e,o=!1;for(const f of t)o&&r.push(n(e,f)),e=f,o=!0;return r}function mt(t,n){return[t,n]}function vt(t,n,r){t=+t,n=+n,r=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+r;for(var e=-1,o=0|Math.max(0,Math.ceil((n-t)/r)),f=new Array(o);++e<o;)f[e]=t+e*r;return f}function gt(t,n=e){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");let r=Array.from(t);const o=new Float64Array(r.length);2!==n.length&&(r=r.map(n),n=e);const f=(t,e)=>n(r[t],r[e]);let i,u;return Uint32Array.from(r,((t,n)=>n)).sort(n===e?(t,n)=>z(r[t],r[n]):U(f)).forEach(((t,n)=>{const r=f(t,void 0===i?t:i);r>=0?((void 0===i||r>0)&&(i=t,u=n),o[t]=u):o[t]=NaN})),o}function Mt(t,n=e){let r,o=!1;if(1===n.length){let f;for(const i of t){const t=n(i);(o?e(t,f)<0:0===e(t,t))&&(r=i,f=t,o=!0)}}else for(const e of t)(o?n(e,r)<0:0===n(e,e))&&(r=e,o=!0);return r}function wt(t,n=e){if(1===n.length)return dt(t,n);let r,o=-1,f=-1;for(const e of t)++f,(o<0?0===n(e,e):n(e,r)<0)&&(r=e,o=f);return o}function bt(t,n=e){let r,o=!1;if(1===n.length){let f;for(const i of t){const t=n(i);(o?e(t,f)>0:0===e(t,t))&&(r=i,f=t,o=!0)}}else for(const e of t)(o?n(e,r)>0:0===n(e,e))&&(r=e,o=!0);return r}function At(t,n=e){if(1===n.length)return st(t,n);let r,o=-1,f=-1;for(const e of t)++f,(o<0?0===n(e,e):n(e,r)>0)&&(r=e,o=f);return o}function xt(t,n){const r=wt(t,n);return r<0?void 0:r}const _t=kt(Math.random);function kt(t){return function(n,r=0,e=n.length){let o=e-(r=+r);for(;o;){const e=t()*o--|0,f=n[o+r];n[o+r]=n[e+r],n[e+r]=f}return n}}function Nt(t,n){let r=0;if(void 0===n)for(let n of t)(n=+n)&&(r+=n);else{let e=-1;for(let o of t)(o=+n(o,++e,t))&&(r+=o)}return r}function St(t){if(!(o=t.length))return[];for(var n=-1,r=rt(t,Et),e=new Array(r);++n<r;)for(var o,f=-1,i=e[n]=new Array(o);++f<o;)i[f]=t[f][n];return e}function Et(t){return t.length}function Ft(){return St(arguments)}function Tt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(!n(e,++r,t))return!1;return!0}function jt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");let r=-1;for(const e of t)if(n(e,++r,t))return!0;return!1}function qt(t,n){if("function"!=typeof n)throw new TypeError("test is not a function");const r=[];let e=-1;for(const o of t)n(o,++e,t)&&r.push(o);return r}function Ht(t,n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");if("function"!=typeof n)throw new TypeError("mapper is not a function");return Array.from(t,((r,e)=>n(r,e,t)))}function Lt(t,n,r){if("function"!=typeof n)throw new TypeError("reducer is not a function");const e=t[Symbol.iterator]();let o,f,i=-1;if(arguments.length<3){if(({done:o,value:r}=e.next()),o)return;++i}for(;({done:o,value:f}=e.next()),!o;)r=n(r,f,++i,t);return r}function It(t){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).reverse()}function Ot(t,...n){t=new k.H(t);for(const r of n)for(const n of r)t.delete(n);return t}function Ct(t,n){const r=n[Symbol.iterator](),e=new k.H;for(const n of t){if(e.has(n))return!1;let t,o;for(;({value:t,done:o}=r.next())&&!o;){if(Object.is(n,t))return!1;e.add(t)}}return!0}function Pt(t,...n){t=new k.H(t),n=n.map(Rt);t:for(const r of t)for(const e of n)if(!e.has(r)){t.delete(r);continue t}return t}function Rt(t){return t instanceof k.H?t:new k.H(t)}function Ut(t,n){const r=t[Symbol.iterator](),e=new Set;for(const t of n){const n=zt(t);if(e.has(n))continue;let o,f;for(;({value:o,done:f}=r.next());){if(f)return!1;const t=zt(o);if(e.add(t),Object.is(n,t))break}}return!0}function zt(t){return null!==t&&"object"==typeof t?t.valueOf():t}function Dt(t,n){return Ut(n,t)}function Gt(...t){const n=new k.H;for(const r of t)for(const t of r)n.add(t);return n}}}]);