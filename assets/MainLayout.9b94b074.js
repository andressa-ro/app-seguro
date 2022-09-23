import{c as Ke,a as X,n as Ge,l as Je,d as Z,p as se,e as pe,s as ce,f as me,g as ve,h as Ze,i as Ae,r as g,j as c,k as et,o as tt,m as at,q as $e,t as _,u as lt,w as te,v as Ee,x as z,y as rt,z as ge,A as ze,B as ot,C as it,D as nt,_ as ut,E as st,F as Se,G as we,H as B,I as ct,J as vt,K as q,Q as Ce,L as dt,M as ee,N as de,O as He,R as ft}from"./index.c86804d0.js";import{Q as _e,a as ht,b as mt,c as bt,d as yt,e as pt,f as gt}from"./QLayout.0837f0a0.js";import{c as zt,u as St,a as wt,b as Ct,d as _t,e as qt,f as kt,Q as Mt,g as Ot,h as qe}from"./use-timeout.c16eeea0.js";import{u as Le,a as Qe,b as H}from"./format.eae10d4a.js";import{s as ke,a as Me}from"./scroll.a318b4d5.js";import{u as Tt}from"./user-store.7de37fee.js";const be={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Bt=Object.keys(be);be.all=!0;function Oe(e){const i={};for(const v of Bt)e[v]===!0&&(i[v]=!0);return Object.keys(i).length===0?be:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Te(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function fe(e,i,v){const y=me(e);let t,o=y.left-i.event.x,u=y.top-i.event.y,a=Math.abs(o),m=Math.abs(u);const r=i.direction;r.horizontal===!0&&r.vertical!==!0?t=o<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=u<0?"up":"down":r.up===!0&&u<0?(t="up",a>m&&(r.left===!0&&o<0?t="left":r.right===!0&&o>0&&(t="right"))):r.down===!0&&u>0?(t="down",a>m&&(r.left===!0&&o<0?t="left":r.right===!0&&o>0&&(t="right"))):r.left===!0&&o<0?(t="left",a<m&&(r.up===!0&&u<0?t="up":r.down===!0&&u>0&&(t="down"))):r.right===!0&&o>0&&(t="right",a<m&&(r.up===!0&&u<0?t="up":r.down===!0&&u>0&&(t="down")));let k=!1;if(t===void 0&&v===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,k=!0,t==="left"||t==="right"?(y.left-=o,a=0,o=0):(y.top-=u,m=0,u=0)}return{synthetic:k,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:y,direction:t,isFirst:i.event.isFirst,isFinal:v===!0,duration:Date.now()-i.event.time,distance:{x:a,y:m},offset:{x:o,y:u},delta:{x:y.left-i.event.lastX,y:y.top-i.event.lastY}}}}let Dt=0;var U=Ke({name:"touch-pan",beforeMount(e,{value:i,modifiers:v}){if(v.mouse!==!0&&X.has.touch!==!0)return;function y(o,u){v.mouse===!0&&u===!0?Ze(o):(v.stop===!0&&ce(o),v.prevent===!0&&pe(o))}const t={uid:"qvtp_"+Dt++,handler:i,modifiers:v,direction:Oe(v),noop:Ge,mouseStart(o){Te(o,t)&&Je(o)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(Te(o,t)){const u=o.target;Z(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,u){if(X.is.firefox===!0&&se(e,!0),t.lastEvt=o,u===!0||v.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const r=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&pe(r),o.cancelBubble===!0&&ce(r),Object.assign(r,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:r}}ce(o)}const{left:a,top:m}=me(o);t.event={x:a,y:m,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:m}},move(o){if(t.event===void 0)return;const u=me(o),a=u.left-t.event.x,m=u.top-t.event.y;if(a===0&&m===0)return;t.lastEvt=o;const r=t.event.mouse===!0,k=()=>{y(o,r),v.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),zt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),r===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{M(),h()},50):M()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&y(o,t.event.mouse);const{payload:h,synthetic:M}=fe(o,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&k(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=M===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&t.modifiers.mouseAllDir===!0){k(),t.event.detected=!0,t.move(o);return}const S=Math.abs(a),p=Math.abs(m);S!==p&&(t.direction.horizontal===!0&&S>p||t.direction.vertical===!0&&S<p||t.direction.up===!0&&S<p&&m<0||t.direction.down===!0&&S<p&&m>0||t.direction.left===!0&&S>p&&a<0||t.direction.right===!0&&S>p&&a>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,u){if(t.event!==void 0){if(ve(t,"temp"),X.is.firefox===!0&&se(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(fe(o===void 0?t.lastEvt:o,t).payload);const{payload:a}=fe(o===void 0?t.lastEvt:o,t,!0),m=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(m):m()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,v.mouse===!0&&Z(t,"main",[[e,"mousedown","mouseStart",`passive${v.mouseCapture===!0?"Capture":""}`]]),X.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${v.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const v=e.__qtouchpan;v!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&v.end(),v.handler=i.value),v.direction=Oe(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ve(i,"main"),ve(i,"temp"),X.is.firefox===!0&&se(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Be=["vertical","horizontal"],he={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},De={prevent:!0,mouse:!0,mouseAllDir:!0},Pe=e=>e>=250?50:Math.ceil(e/5);var Pt=Ae({name:"QScrollArea",props:{...Le,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:i,emit:v}){const y=g(!1),t=g(!1),o=g(!1),u={vertical:g(0),horizontal:g(0)},a={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:m}=Ee(),r=Qe(e,m.$q);let k,S;const p=g(null),h=c(()=>"q-scrollarea"+(r.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const n=a.vertical.size.value-u.vertical.value;if(n<=0)return 0;const s=H(a.vertical.position.value/n,0,1);return Math.round(s*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(e.visible===null?o.value:e.visible)!==!0&&y.value===!1&&t.value===!1||a.vertical.size.value<=u.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(u.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(H(u.vertical.value*u.vertical.value/a.vertical.size.value,Pe(u.vertical.value),u.vertical.value))),a.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const n=a.horizontal.size.value-u.horizontal.value;if(n<=0)return 0;const s=H(a.horizontal.position.value/n,0,1);return Math.round(s*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(e.visible===null?o.value:e.visible)!==!0&&y.value===!1&&t.value===!1||a.horizontal.size.value<=u.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(u.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(H(u.horizontal.value*u.horizontal.value/a.horizontal.size.value,Pe(u.horizontal.value),u.horizontal.value))),a.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const M=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),w=[[U,n=>{Y(n,"vertical")},void 0,{vertical:!0,...De}]],b=[[U,n=>{Y(n,"horizontal")},void 0,{horizontal:!0,...De}]];function V(){const n={};return Be.forEach(s=>{const f=a[s];n[s+"Position"]=f.position.value,n[s+"Percentage"]=f.percentage.value,n[s+"Size"]=f.size.value,n[s+"ContainerSize"]=u[s].value}),n}const R=et(()=>{const n=V();n.ref=m,v("scroll",n)},0);function W(n,s,f){if(Be.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?ke:Me)(p.value,s,f)}function I({height:n,width:s}){let f=!1;u.vertical.value!==n&&(u.vertical.value=n,f=!0),u.horizontal.value!==s&&(u.horizontal.value=s,f=!0),f===!0&&F()}function L({position:n}){let s=!1;a.vertical.position.value!==n.top&&(a.vertical.position.value=n.top,s=!0),a.horizontal.position.value!==n.left&&(a.horizontal.position.value=n.left,s=!0),s===!0&&F()}function ae({height:n,width:s}){a.horizontal.size.value!==s&&(a.horizontal.size.value=s,F()),a.vertical.size.value!==n&&(a.vertical.size.value=n,F())}function Y(n,s){const f=a[s];if(n.isFirst===!0){if(f.thumbHidden.value===!0)return;S=f.position.value,t.value=!0}else if(t.value!==!0)return;n.isFinal===!0&&(t.value=!1);const x=he[s],j=u[s].value,le=(f.size.value-j)/(j-f.thumbSize.value),G=n.distance[x.dist],re=S+(n.direction===x.dir?1:-1)*G*le;D(re,s)}function Q(n,s){const f=a[s];if(f.thumbHidden.value!==!0){const x=n[he[s].offset];if(x<f.thumbStart.value||x>f.thumbStart.value+f.thumbSize.value){const j=x-f.thumbSize.value/2;D(j/u[s].value*f.size.value,s)}f.ref.value!==null&&f.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function T(n){Q(n,"vertical")}function A(n){Q(n,"horizontal")}function F(){y.value===!0?clearTimeout(k):y.value=!0,k=setTimeout(()=>{y.value=!1},e.delay),e.onScroll!==void 0&&R()}function D(n,s){p.value[he[s].scroll]=n}function N(){o.value=!0}function K(){o.value=!1}let P=null;return tt(()=>{P={top:a.vertical.position.value,left:a.horizontal.position.value}}),at(()=>{if(P===null)return;const n=p.value;n!==null&&(Me(n,P.left),ke(n,P.top))}),$e(R.cancel),Object.assign(m,{getScrollTarget:()=>p.value,getScroll:V,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:W,setScrollPercentage(n,s,f){W(n,s*(a[n].size.value-u[n].value),f)}}),()=>_("div",{class:h.value,onMouseenter:N,onMouseleave:K},[_("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[_("div",{class:"q-scrollarea__content absolute",style:M.value},lt(i.default,[_(_e,{debounce:0,onResize:ae})])),_(ht,{axis:"both",onScroll:L})]),_(_e,{debounce:0,onResize:I}),_("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:T}),_("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),te(_("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),w),te(_("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),b)])}});const xe=150;var xt=Ae({name:"QDrawer",inheritAttrs:!1,props:{...St,...Le,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"on-layout","mini-state"],setup(e,{slots:i,emit:v,attrs:y}){const t=Ee(),{proxy:{$q:o}}=t,u=Qe(e,o),{preventBodyScroll:a}=kt(),{registerTimeout:m}=Ct(),r=it(nt,()=>{console.error("QDrawer needs to be child of QLayout")});let k,S,p;const h=g(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),M=c(()=>e.mini===!0&&h.value!==!0),w=c(()=>M.value===!0?e.miniWidth:e.width),b=g(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),V=c(()=>e.persistent!==!0&&(h.value===!0||x.value===!0));function R(l,d){if(ae(),l!==!1&&r.animate(),O(0),h.value===!0){const C=r.instances[P.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),$(1),r.isContainer.value!==!0&&a(!0)}else $(0),l!==!1&&ie(!1);m(()=>{l!==!1&&ie(!0),d!==!0&&v("show",l)},xe)}function W(l,d){Y(),l!==!1&&r.animate(),$(0),O(A.value*w.value),ne(),d!==!0&&m(()=>{v("hide",l)},xe)}const{show:I,hide:L}=_t({showing:b,hideOnRouteChange:V,handleShow:R,handleHide:W}),{addToHistory:ae,removeFromHistory:Y}=qt(b,L,V),Q={belowBreakpoint:h,hide:L},T=c(()=>e.side==="right"),A=c(()=>(o.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),F=g(0),D=g(!1),N=g(!1),K=g(w.value*A.value),P=c(()=>T.value===!0?"left":"right"),n=c(()=>b.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),s=c(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(T.value?"R":"L")>-1||o.platform.is.ios===!0&&r.isContainer.value===!0),f=c(()=>e.overlay===!1&&b.value===!0&&h.value===!1),x=c(()=>e.overlay===!0&&b.value===!0&&h.value===!1),j=c(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&D.value===!1?" hidden":"")),le=c(()=>({backgroundColor:`rgba(0,0,0,${F.value*.4})`})),G=c(()=>T.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),re=c(()=>T.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Fe=c(()=>{const l={};return r.header.space===!0&&G.value===!1&&(s.value===!0?l.top=`${r.header.offset}px`:r.header.space===!0&&(l.top=`${r.header.size}px`)),r.footer.space===!0&&re.value===!1&&(s.value===!0?l.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(l.bottom=`${r.footer.size}px`)),l}),je=c(()=>{const l={width:`${w.value}px`,transform:`translateX(${K.value}px)`};return h.value===!0?l:Object.assign(l,Fe.value)}),Ve=c(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Re=c(()=>`q-drawer q-drawer--${e.side}`+(N.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(s.value===!0||f.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(G.value===!0?" q-drawer--top-padding":""))),We=c(()=>{const l=o.lang.rtl===!0?e.side:P.value;return[[U,Ue,void 0,{[l]:!0,mouse:!0}]]}),Ie=c(()=>{const l=o.lang.rtl===!0?P.value:e.side;return[[U,ye,void 0,{[l]:!0,mouse:!0}]]}),Ne=c(()=>{const l=o.lang.rtl===!0?P.value:e.side;return[[U,ye,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Ye(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}z(h,l=>{l===!0?(k=b.value,b.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(b.value===!0?(O(0),$(0),ne()):I(!1))}),z(()=>e.side,(l,d)=>{r.instances[d]===Q&&(r.instances[d]=void 0,r[d].space=!1,r[d].offset=0),r.instances[l]=Q,r[l].size=w.value,r[l].space=f.value,r[l].offset=n.value}),z(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),z(()=>e.behavior+e.breakpoint,oe),z(r.isContainer,l=>{b.value===!0&&a(l!==!0),l===!0&&oe()}),z(r.scrollbarWidth,()=>{O(b.value===!0?0:void 0)}),z(n,l=>{E("offset",l)}),z(f,l=>{v("on-layout",l),E("space",l)}),z(T,()=>{O()}),z(w,l=>{O(),ue(e.miniToOverlay,l)}),z(()=>e.miniToOverlay,l=>{ue(l,w.value)}),z(()=>o.lang.rtl,()=>{O()}),z(()=>e.mini,()=>{e.modelValue===!0&&(Xe(),r.animate())}),z(M,l=>{v("mini-state",l)});function O(l){l===void 0?ge(()=>{l=b.value===!0?0:w.value,O(A.value*l)}):(r.isContainer.value===!0&&T.value===!0&&(h.value===!0||Math.abs(l)===w.value)&&(l+=A.value*r.scrollbarWidth.value),K.value=l)}function $(l){F.value=l}function ie(l){const d=l===!0?"remove":r.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Xe(){clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),N.value=!0,S=setTimeout(()=>{N.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ue(l){if(b.value!==!1)return;const d=w.value,C=H(l.distance.x,0,d);if(l.isFinal===!0){C>=Math.min(75,d)===!0?I():(r.animate(),$(0),O(A.value*d)),D.value=!1;return}O((o.lang.rtl===!0?T.value!==!0:T.value)?Math.max(d-C,0):Math.min(0,C-d)),$(H(C/d,0,1)),l.isFirst===!0&&(D.value=!0)}function ye(l){if(b.value!==!0)return;const d=w.value,C=l.direction===e.side,J=(o.lang.rtl===!0?C!==!0:C)?H(l.distance.x,0,d):0;if(l.isFinal===!0){Math.abs(J)<Math.min(75,d)===!0?(r.animate(),$(1),O(0)):L(),D.value=!1;return}O(A.value*J),$(H(1-J/d,0,1)),l.isFirst===!0&&(D.value=!0)}function ne(){a(!1),ie(!0)}function E(l,d){r.update(e.side,l,d)}function Ye(l,d){l.value!==d&&(l.value=d)}function ue(l,d){E("size",l===!0?e.miniWidth:d)}return r.instances[e.side]=Q,ue(e.miniToOverlay,w.value),E("space",f.value),E("offset",n.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),rt(()=>{v("on-layout",f.value),v("mini-state",M.value),k=e.showIfAbove===!0;const l=()=>{(b.value===!0?R:W)(!1,!0)};if(r.totalWidth.value!==0){ge(l);return}p=z(r.totalWidth,()=>{p(),p=void 0,b.value===!1&&e.showIfAbove===!0&&h.value===!1?I(!1):l()})}),$e(()=>{p!==void 0&&p(),clearTimeout(S),b.value===!0&&ne(),r.instances[e.side]===Q&&(r.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const l=[];h.value===!0&&(e.noSwipeOpen===!1&&l.push(te(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),We.value)),l.push(ze("div",{ref:"backdrop",class:j.value,style:le.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ne.value)));const d=M.value===!0&&i.mini!==void 0,C=[_("div",{...y,key:""+d,class:[Ve.value,y.class]},d===!0?i.mini():ot(i.default))];return e.elevated===!0&&b.value===!0&&C.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(ze("aside",{ref:"content",class:Re.value,style:je.value},C,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ie.value)),_("div",{class:"q-drawer-container"},l)}}});const At=st({name:"MainLayout",setup(){const e=g(!1),v=Tt().getUser,y=ct();function t(){y.push({name:"login"})}return{rightDrawerOpen:e,toggleRightDrawer(){e.value=!e.value},user:v,logout:t}}}),$t=He(" Cota\xE7\xE3o Seguro "),Et=He(" Logout "),Ht={class:"absolute-top bg-indigo-1 q-pa-lg text-black",style:{height:"100px"}},Lt={class:"text-weight-bold"};function Qt(e,i,v,y,t,o){const u=vt("router-view");return Se(),we(mt,{view:"hHh lpR lFf"},{default:B(()=>[q(pt,{elevated:"",class:"bg-primary text-white"},{default:B(()=>[q(bt,null,{default:B(()=>[q(Ce,{dense:"",flat:"",round:"",icon:"home",class:"q-mr-sm",to:"/"}),q(yt,null,{default:B(()=>[$t]),_:1}),q(Ce,{dense:"",flat:"",round:"",icon:"account_circle",size:"lg",onClick:e.toggleRightDrawer},null,8,["onClick"])]),_:1})]),_:1}),q(xt,{"show-if-above":"",modelValue:e.rightDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=a=>e.rightDrawerOpen=a),side:"right",bordered:""},{default:B(()=>[q(Pt,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:B(()=>[q(Mt,{padding:""},{default:B(()=>[te((Se(),we(Ot,{active:"",clickable:"",onClick:e.logout},{default:B(()=>[q(qe,{avatar:""},{default:B(()=>[q(dt,{name:"logout"})]),_:1}),q(qe,null,{default:B(()=>[Et]),_:1})]),_:1},8,["onClick"])),[[ft]])]),_:1})]),_:1}),ee("div",Ht,[ee("div",Lt,de(e.user.nome),1),ee("div",null,de(e.user.email),1),ee("div",null,de(e.user.telefone),1)])]),_:1},8,["modelValue"]),q(gt,null,{default:B(()=>[q(u)]),_:1})]),_:1})}var Xt=ut(At,[["render",Qt]]);export{Xt as default};
