var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){t.parentNode.removeChild(t)}let c;function l(t){c=t}const i=[],d=[],u=[],f=[],v=Promise.resolve();let g=!1;function p(t){u.push(t)}let m=!1;const h=new Set;function k(){if(!m){m=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];l(e),$(e.$$)}for(i.length=0;d.length;)d.pop()();for(let t=0;t<u.length;t+=1){const e=u[t];h.has(e)||(h.add(e),e())}u.length=0}while(i.length);for(;f.length;)f.pop()();g=!1,m=!1,h.clear()}}function $(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(p)}}const y=new Set;function b(t,e){-1===t.$$.dirty[0]&&(i.push(t),g||(g=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _(s,i,d,u,f,v,g=[-1]){const m=c;l(s);const h=i.props||{},$=s.$$={fragment:null,ctx:null,props:v,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:g};let _=!1;if($.ctx=d?d(s,h,(t,e,...n)=>{const r=n.length?n[0]:e;return $.ctx&&f($.ctx[t],$.ctx[t]=r)&&($.bound[t]&&$.bound[t](r),_&&b(s,t)),e}):[],$.update(),_=!0,r($.before_update),$.fragment=!!u&&u($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();i.intro&&((x=s.$$.fragment)&&x.i&&(y.delete(x),x.i(w))),function(t,n,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(n,s),p(()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(p)}(s,i.target,i.anchor),k()}var x,w;l(m)}function x(e){let n;return{c(){var t,e,r,o;t="main",n=document.createElement(t),n.innerHTML='<div class="mainImage svelte-1kak74g"><div class="head svelte-1kak74g"><div class="hair svelte-1kak74g"><div class="center-part svelte-1kak74g"></div> \n\t\t\t<div class="left-part svelte-1kak74g"></div> \n\t\t\t<div class="left-middle-part svelte-1kak74g"></div> \n\t\t\t<div class="left-down-part svelte-1kak74g"></div></div> \n\t\t<div class="eyebrows svelte-1kak74g"></div> \n\t\t<div class="eyes svelte-1kak74g"></div> \n\t\t<div class="nose svelte-1kak74g"></div> \n\t\t<div class="lips svelte-1kak74g"></div> \n\t\t<div class="neck svelte-1kak74g"></div></div></div>',e=n,r="class",null==(o="svelte-1kak74g")?e.removeAttribute(r):e.getAttribute(r)!==o&&e.setAttribute(r,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),_(this,t,null,x,s,{})}}({target:document.body,props:{}})}();
