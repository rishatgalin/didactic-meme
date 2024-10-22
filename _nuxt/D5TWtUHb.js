import{d as h,t as u,v as m,x as e,J as M,r as k,K as d,L as x,M as W,N as C,_ as L,O as f,P as q,z as _,A as S,B as O,Q as P,y as j,R,S as V,o as D,T as le,U as ie,i as g,E as oe,V as re,W as ce,X as de,Y as ue}from"./7_IOXxyo.js";const pe={class:"b-spinner"},me={class:"b-spinner__circular",viewBox:"25 25 50 50"},_e=["stroke"],ve=h({__name:"Spinner",props:{width:{type:Number,default:24},color:{type:String,default:"white"}},setup(t){return(a,o)=>(u(),m("div",pe,[e("div",{class:"b-spinner__loader",style:M(`width: ${t.width}px`)},[(u(),m("svg",me,[e("circle",{class:"b-spinner__path",cx:"50",cy:"50",r:"20",fill:"none",stroke:t.color,"stroke-width":"5","stroke-miterlimit":"10"},null,8,_e)]))],4)]))}}),ge=h({__name:"Button",props:{variant:{type:String,default:"default"},borderRadius:{type:String,default:"default"},delay:Boolean},emits:["onClick"],setup(t,{emit:a}){const o=k(!1),n=t,l=a;function r(){n.delay?(o.value=!0,setTimeout(()=>{l("onClick"),o.value=!1},500)):l("onClick")}return(s,c)=>{const i=ve;return u(),m("button",{class:C(`v-${t.variant} br-${t.borderRadius}`),onClick:r},[d(o)?(u(),x(i,{key:0})):W(s.$slots,"default",{key:1},void 0,!0)],2)}}}),N=L(ge,[["__scopeId","data-v-9a65c9ad"]]),F=f("/app-logo.png"),fe={class:"b-main align-center"},be={class:"b-main__submit"},ke=h({__name:"Main",emits:["onSelect","onBack"],setup(t,{emit:a}){const o=a;function n(){o("onSelect")}return(l,r)=>{const s=N;return u(),m("div",fe,[r[3]||(r[3]=q('<img width="64" height="64" src="'+F+'" alt="" data-v-7ada6a80><h1 class="semibold" data-v-7ada6a80>Стань Королём В Постели</h1><ul class="b-main__content align-left" data-v-7ada6a80><li class="regular" data-v-7ada6a80><span class="semibold" data-v-7ada6a80>💡 Узнай о МТД:</span> Пойми мышцы тазового дна. Научись правильно выполнять упражнения Кегеля. </li><li class="regular" data-v-7ada6a80><span class="semibold" data-v-7ada6a80>🔍 Проверь свои МТД:</span> Проверь силу и контроль своих мышц тазового дна. </li><li class="regular" data-v-7ada6a80><span class="semibold" data-v-7ada6a80>💪 Начни выполнять упражнения Кегеля:</span> Следуй упражнениям Кегеля по личному плану, разработанному для укрепления МТД. </li><li class="regular" data-v-7ada6a80><span class="semibold" data-v-7ada6a80> 🌟 Поддержи Себя Дополнительными Инструментами: </span> Делай дыхательные упражнения и упражнения для тела. Участвуй в челленджах и улучшай свои знания с помощью нашего учебного центра. </li><li class="regular" data-v-7ada6a80><span class="semibold" data-v-7ada6a80>📈 Продолжай Совершенствоваться:</span> Отслеживай свой прогресс и продолжай укреплять силу и контроль мышц тазового дна день за днём. </li></ul>',3)),e("div",be,[r[1]||(r[1]=e("p",{class:"b-main__submit_users regular"}," 3+ Миллиона Пользователей По Всему Миру ",-1)),_(s,{variant:"submit",onOnClick:n},{default:S(()=>r[0]||(r[0]=[O(" Пройти опрос ")])),_:1}),r[2]||(r[2]=e("p",{class:"b-main__submit_rating regular"},"8K Оценки - 4.8/5",-1))])])}}}),ye=L(ke,[["__scopeId","data-v-7ada6a80"]]),he={class:"b-back"},$e=h({__name:"Back",emits:["onBack"],setup(t,{emit:a}){const o=a;function n(){o("onBack")}return(l,r)=>(u(),m("div",he,[e("span",{role:"button",onClick:r[0]||(r[0]=s=>n())})]))}}),Z=L($e,[["__scopeId","data-v-04b0b106"]]),G=f("/harvard-medical-school.png"),K=f("/mayo-clinic.png"),J=f("/healthline.png"),U=f("/nhs.png"),Y=f("/mens-health.png"),Se={class:"b-start align-center"},we={class:"b-start__options"},Ce={key:0,class:"regular align-left"},xe=h({__name:"Start",emits:["onSelect","onBack"],setup(t,{emit:a}){const o=k(null),n=k(!1),l=a;function r(){l("onBack")}function s(){if(o.value===null){n.value=!0;return}l("onSelect")}return(c,i)=>{const p=Z,v=N;return u(),m("div",Se,[_(p,{onOnBack:r}),i[8]||(i[8]=q('<img width="64" height="64" src="'+F+'" alt=""><div class="b-start__carousel_wrapper align-left"><span class="semibold">Упражнения Кегеля рекомендованы</span><div class="b-start__carousel"><div><div class="b-start__carousel_list"><div class="b-start__carousel_image"><img src="'+G+'" alt=""></div><div class="b-start__carousel_image"><img src="'+K+'" alt=""></div><div class="b-start__carousel_image"><img src="'+J+'" alt=""></div><div class="b-start__carousel_image"><img src="'+U+'" alt=""></div><div class="b-start__carousel_image"><img src="'+Y+'" alt=""></div></div></div></div></div>',2)),e("div",null,[i[7]||(i[7]=e("h2",{class:"semibold"},"Начните с выбора своей цели",-1)),e("div",we,[_(v,{class:C(["b-start__option",{"b-start__option--selected":d(o)===0}]),onOnClick:i[0]||(i[0]=b=>o.value=0)},{default:S(()=>i[3]||(i[3]=[e("span",{class:"b-start__option_content"},[e("span",{class:"b-start__option_icon"},[e("svg",{fill:"#d1262b",width:"24",height:"24",viewBox:"0 0 30 30"},[e("g",null,[e("path",{d:"M11.001,30l2.707-16.334H5L11.458,0l9.25,0.123L16.667,8H25L11.001,30z"})])])]),e("span",null,"Получите более интенсивные оргазмы")],-1)])),_:1},8,["class"]),_(v,{class:C(["b-start__option",{"b-start__option--selected":d(o)===1}]),onOnClick:i[1]||(i[1]=b=>o.value=1)},{default:S(()=>i[4]||(i[4]=[e("span",{class:"b-start__option_content"},[e("span",{class:"b-start__option_icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M22.7 13.5L20.7005 11.5L18.7 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.3019 3 18.1885 4.77814 19.7545 7.42909M12 7V12L15 14",stroke:"#d1262b","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),e("span",null,"Дольше продержаться во время секса")],-1)])),_:1},8,["class"]),_(v,{class:C(["b-start__option",{"b-start__option--selected":d(o)===2}]),onOnClick:i[2]||(i[2]=b=>o.value=2)},{default:S(()=>i[5]||(i[5]=[e("span",{class:"b-start__option_content"},[e("span",{class:"b-start__option_icon"},[e("svg",{width:"24",height:"24",viewBox:"0 0 512 512"},[e("path",{d:"M506.5,70L383.3,84.8c-4.1,0.5-5.8,5.5-2.9,8.4l36.7,36.7L277.3,269.6l-62.9-62.9c-3.9-3.9-10.1-3.8-14,0L1.4,405.7   c-1.9,1.9-1.9,5.1,0,7l27.8,27.9c1.9,1.9,5.1,1.9,7,0l171.1-171l62.9,62.9c3.9,3.8,10.1,3.8,14,0L452,164.8l36.7,36.7   c1.9,1.9,5.1,1.9,7,0c0.8-0.8,1.3-1.8,1.4-2.9L512,75.4C512.4,72.2,509.7,69.5,506.5,70z",fill:"#d1262b"})])]),e("span",null,"Получите более крепкие эрекции")],-1)])),_:1},8,["class"]),d(n)?(u(),m("p",Ce," Выберите один вариант ")):P("",!0)]),_(v,{variant:"submit",borderRadius:"ellipse",onOnClick:s,delay:d(o)!==null},{default:S(()=>i[6]||(i[6]=[O(" Начните сейчас ")])),_:1},8,["delay"])])])}}}),Be={class:"b-survey-page"},qe={class:"semibold"},Oe={class:"b-survey-page__options"},ze={key:0,style:{"margin-top":"36px"}},Ie={key:2,class:"b-survey-page__info align-left"},Me={class:"regular"},je=h({__name:"SurveyPage",props:{block:{type:Object,required:!0},page:Number},emits:["onSelect","onBack"],setup(t,{emit:a}){const o=a,n=k(new Set);function l(c){var i,p;(i=n.value)!=null&&i.has(c)?n.value.delete(c):(p=n.value)==null||p.add(c)}function r(){o("onSelect")}function s(){o("onBack")}return(c,i)=>{var b;const p=Z,v=N;return u(),m("div",Be,[_(p,{onOnBack:s}),e("h2",qe,j((b=t.block)==null?void 0:b.question),1),t.block.options?(u(),m("div",{key:0,class:C(["b-survey-page__options",{"one-line":t.block.options.length<=2}])},[(u(!0),m(R,null,V(t.block.options,(y,$)=>(u(),x(v,{key:$,delay:"",onOnClick:i[0]||(i[0]=z=>r())},{default:S(()=>[O(j(y),1)]),_:2},1024))),128))],2)):t.block.checkboxes?(u(),m(R,{key:1},[e("div",Oe,[(u(!0),m(R,null,V(t.block.checkboxes,(y,$)=>{var z;return u(),x(v,{class:C({"b-survey-page__checkbox-selected":(z=d(n))==null?void 0:z.has(y)}),key:$,onOnClick:E=>l(y)},{default:S(()=>[O(j(y),1)]),_:2},1032,["class","onOnClick"])}),128))]),d(n).size!==0?(u(),m("div",ze,[_(v,{variant:"submit",delay:"",borderRadius:"ellipse",onOnClick:i[1]||(i[1]=y=>r())},{default:S(()=>i[2]||(i[2]=[O(" Продолжить ")])),_:1})])):P("",!0)],64)):P("",!0),t.block.info?(u(),m("div",Ie,[e("p",Me,j(t.block.info),1)])):P("",!0)])}}}),Pe=L(je,[["__scopeId","data-v-25b94aab"]]),Le=Symbol.for("nuxt:client-only"),Ne=h({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:a,attrs:o}){const n=k(!1);return D(()=>{n.value=!0}),le(Le,!0),l=>{var i;if(n.value)return(i=a.default)==null?void 0:i.call(a);const r=a.fallback||a.placeholder;if(r)return r();const s=l.fallback||l.placeholder||"",c=l.fallbackTag||l.placeholderTag||"span";return m(c,o,s)}}}),Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0,0,256,256",width:"24",height:"24","fill-rule":"nonzero"},Re=["fill"],Te=h({__name:"CheckIcon",props:{color:{type:String,default:"white"}},setup(t){return(a,o)=>(u(),m("svg",Ae,[e("g",{fill:t.color,"fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{"mix-blend-mode":"normal"}},o[0]||(o[0]=[e("g",{transform:"scale(9.84615,9.84615)"},[e("path",{d:"M13,0.1875c-7.07422,0 -12.8125,5.73828 -12.8125,12.8125c0,7.07422 5.73828,12.8125 12.8125,12.8125c7.07422,0 12.8125,-5.73828 12.8125,-12.8125c0,-7.07422 -5.73828,-12.8125 -12.8125,-12.8125zM19.73438,9.03516l-6.87109,10.13281c-0.20312,0.30078 -0.52734,0.50391 -0.84766,0.50391c-0.32031,0 -0.67187,-0.17578 -0.89844,-0.39844l-4.03125,-4.03516c-0.27344,-0.27344 -0.27344,-0.72266 0,-0.99609l0.99609,-0.99609c0.27344,-0.27344 0.72266,-0.27344 0.99219,0l2.625,2.62109l5.70313,-8.41406c0.21875,-0.32031 0.66016,-0.40234 0.98047,-0.1875l1.16797,0.79297c0.31641,0.21484 0.40234,0.65625 0.18359,0.97656z"})],-1)]),8,Re)]))}});function Ee(){return Math.random().toString(16).substring(2)}var T=h({props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#00C58E"},stopColor:{type:String,required:!1,default:"#00E0A1"},innerStrokeColor:{type:String,required:!1,default:"#2F495E"},strokeWidth:{type:Number,required:!1,default:10},innerStrokeWidth:{type:Number,required:!1,default:10},strokeLinecap:{type:String,required:!1,default:"round"},animateSpeed:{type:Number,required:!1,default:1e3},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"},isClockwise:{type:Boolean,required:!1,default:!0}},setup(t){const a=ie({fx:.99,fy:.5,cx:.5,cy:.5,r:.65}),o=`rg-${Ee()}`,n=k(0),l=k(0),r=k(null),s=g(()=>t.diameter/2),c=g(()=>t.diameter-t.innerStrokeWidth*2),i=g(()=>Math.PI*c.value),p=g(()=>t.totalSteps===0?0:100/t.totalSteps),v=g(()=>p.value*t.completedSteps),b=g(()=>2*Math.PI/t.totalSteps),y=g(()=>100/t.fps),$=g(()=>t.animateSpeed/y.value),z=g(()=>b.value/$.value),E=g(()=>c.value/2),H=g(()=>({height:`${t.diameter}px`,width:`${t.diameter}px`})),X=g(()=>({height:`${t.diameter}px`,width:`${t.diameter}px`,strokeWidth:`${t.strokeWidth}px`,strokeDashoffset:n.value,transition:`stroke-dashoffset ${t.animateSpeed}ms ${t.timingFunc}`})),Q=g(()=>({height:`${t.diameter}px`,width:`${t.diameter}px`,strokeWidth:`${t.innerStrokeWidth}px`})),ee=g(()=>({width:`${c.value}px`}));oe(()=>[t.diameter,t.totalSteps,t.completedSteps,t.strokeWidth],ae,{immediate:!0});function te(w){const A=.5+.5*Math.cos(w),I=.5+.5*Math.sin(w);return{x:A,y:I}}function se(){const w=te(l.value);w.x&&w.y&&(a.fx=w.x,a.fy=w.y)}function ne(){return t.isClockwise?1:-1}function ae(){n.value=(100-v.value)/100*i.value*ne(),r.value&&clearInterval(r.value);const w=(t.completedSteps-1)*b.value;let B=(l.value-w)/z.value;const A=Math.abs(B-$.value)/$.value,I=B<$.value;r.value=setInterval(()=>{if(I&&B>=$.value||!I&&B<$.value){r.value&&clearInterval(r.value);return}l.value=w+z.value*B,se(),B+=I?A:-A},y.value)}return{gradientAnimation:r,innerCircleRadius:E,radialGradientId:o,strokeDashoffset:n,innerCircleStyle:ee,containerStyle:H,circumference:i,progressStyle:X,currentAngle:l,strokeStyle:Q,gradient:a,radius:s}}});const Ve=["width","height"],We=["id","fx","fy","cx","cy","r"],De=["stop-color"],Fe=["stop-color"],Ze=["r","cx","cy","stroke","stroke-dasharray","stroke-linecap"],Ge=["transform","r","cx","cy","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap"];function Ke(t,a,o,n,l,r){return u(),m("div",{class:"vrp__wrapper",style:M(t.containerStyle)},[e("div",{class:"vrp__inner",style:M(t.innerCircleStyle)},[W(t.$slots,"default")],4),(u(),m("svg",{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[e("defs",null,[e("radialGradient",{id:t.radialGradientId,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r},[e("stop",{offset:"30%","stop-color":t.startColor},null,8,De),e("stop",{offset:"100%","stop-color":t.stopColor},null,8,Fe)],8,We)]),e("circle",{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":t.strokeLinecap,style:M(t.strokeStyle)},null,12,Ze),e("circle",{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:`url('#${t.radialGradientId}')`,"stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":t.strokeLinecap,style:M(t.progressStyle)},null,12,Ge)],8,Ve))],4)}function Je(t,a){a===void 0&&(a={});var o=a.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var Ue=`
.vrp__wrapper[data-v-6a0cf1f6] {\r
  position: relative;
}
.vrp__inner[data-v-6a0cf1f6] {\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  left: 0;\r
  border-radius: 50%;\r
  margin: 0 auto;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;
}\r
`;Je(Ue);T.render=Ke;T.__scopeId="data-v-6a0cf1f6";var Ye=(()=>{const t=T;return t.install=a=>{a.component("RadialProgressBar",t)},t})();const He=window.setInterval,Xe={class:"p-progress"},Qe={class:"p-progress__circle"},et={class:"p-progress__circle_percent semibold"},tt={class:"p-progress__list"},st=h({__name:"Progress",emits:["onSelect"],setup(t,{emit:a}){let o;const n=k(0),l=a;function r(){setTimeout(()=>{l("onSelect")},1500)}return D(()=>{o=He(()=>{if(n.value===100){clearInterval(o),r();return}n.value++},60)}),(s,c)=>{const i=Ne,p=Te;return u(),m("div",Xe,[c[4]||(c[4]=e("h2",{class:"semibold align-center"},"Твоя личная программа создается",-1)),e("div",Qe,[_(i,null,{default:S(()=>[_(d(Ye),{diameter:200,strokeWidth:16,innerStrokeWidth:16,startColor:"#d1262b",stopColor:"#d1262b",innerStrokeColor:"rgba(255, 255, 255, 0.87)",completedSteps:d(n),totalSteps:100,animateSpeed:60},{default:S(()=>[e("span",et,j(d(n))+"%",1)]),_:1},8,["completedSteps"])]),_:1})]),e("ul",tt,[e("li",null,[_(p,{color:d(n)>=25?"#d1262b":"white"},null,8,["color"]),c[0]||(c[0]=e("span",{class:"regular"},"Анализ",-1))]),e("li",null,[_(p,{color:d(n)>=50?"#d1262b":"white"},null,8,["color"]),c[1]||(c[1]=e("span",{class:"regular"},"Выбор упражнений",-1))]),e("li",null,[_(p,{color:d(n)>=75?"#d1262b":"white"},null,8,["color"]),c[2]||(c[2]=e("span",{class:"regular"},"Планирование твоих тренировок",-1))]),e("li",null,[_(p,{color:d(n)>=100?"#d1262b":"white"},null,8,["color"]),c[3]||(c[3]=e("span",{class:"regular"},"ГОТОВО!",-1))])])])}}}),nt={class:"p-email align-center"},at={key:0,class:"align-left regular"},lt=h({__name:"Email",props:{email:{type:String}},emits:["onSelect"],setup(t,{emit:a}){const o=t,n=a,l=k((o==null?void 0:o.email)??""),r=k(!1),s=g(()=>{const p=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(l.value),v=l.value.split("@"),b=v[1]?v[1].split("."):[];return!(l.value.length>254||!p||v[0].length>64||b.some(y=>y.length>63))});function c(){if(r.value=!1,!s.value){r.value=!0;return}n("onSelect",l.value)}return(i,p)=>{const v=N;return u(),m("div",nt,[p[2]||(p[2]=e("h2",{class:"semibold"},"Твой персональный план готов!",-1)),p[3]||(p[3]=e("p",{class:"regular"}," Введи свой адрес электронной почты, чтобы узнать, как Kegel Men поможет тебе раскрыть весь свой потенциал и взять под контроль свое сексуальное здоровье. ",-1)),e("form",{onSubmit:ue(c,["prevent","stop"])},[re(e("input",{type:"email","onUpdate:modelValue":p[0]||(p[0]=b=>de(l)?l.value=b:null),placeholder:"Электронную почта"},null,512),[[ce,d(l)]]),d(r)?(u(),m("p",at,"Невалидный email")):P("",!0),_(v,{variant:"submit",borderRadius:"ellipse",delay:d(s),onOnClick:c},{default:S(()=>p[1]||(p[1]=[O(" Получить план ")])),_:1},8,["delay"])],32)])}}}),it={},ot={width:"24",height:"24",viewBox:"0,0,256,256"};function rt(t,a){return u(),m("svg",ot,a[0]||(a[0]=[e("g",{fill:"#208c3b","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none",style:{"mix-blend-mode":"normal"}},[e("g",{transform:"scale(5.12,5.12)"},[e("path",{d:"M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z"})])],-1)]))}const ct=L(it,[["render",rt]]),dt=f("/before.png"),ut=f("/after.png"),pt=f("/kegel-egzersizi-1.jpg"),mt=f("/reverse-lungesjpg-1688580224606827251797.webp"),_t=f("/breath.png"),vt=f("/dr-arnold-kegel-will-tighten-your-vagina-with-his-kegel-exercises.jpg"),gt=f("/imgonline-com-ua-Blur-PmayIt6CJrixkg.jpg"),ft=f("/imgonline-com-ua-Blur-MF8giCzDYXP4tylK.jpg"),bt=f("/imgonline-com-ua-Blur-vUrVsuTbZFJnjG.jpg"),kt={class:"p-payment"},yt={class:"b-payment__links"},ht={class:"b-payment__table"},$t={cellpadding:"0",cellspacing:"0",border:"0"},St={class:"regular"},wt={class:"b-payment__links"},Ct={class:"p-payment__submit container"},xt=h({__name:"Payment",props:{email:{type:String}},setup(t){const a=t,o=g(()=>[`https://buy.stripe.com/6oE7uc6d89xb7IY7sL?prefilled_email=${a.email}`,`https://buy.stripe.com/dR69CkcBw5gV3sIbJ2?prefilled_email=${a.email}`]),n=k(1);function l(){window.open(o.value[n.value])}return(r,s)=>{const c=ct,i=N;return u(),m("div",kt,[s[16]||(s[16]=q('<h2 class="semibold align-center">Твой персональный план Кегеля готов!</h2><p class="regular align-center"> Улучшите свое сексуальное здоровье с помощью научно доказанного и легкого в выполнении метода Кегеля </p><div class="p-payment__progress"><div><img src="'+dt+'" alt=""></div><div><img src="'+ut+'" alt=""></div></div>',3)),e("div",yt,[e("div",{class:C(["b-payment__links_card align-center",{"b-payment__links_card--selected":d(n)===0}]),onClick:s[0]||(s[0]=p=>n.value=0)},s[4]||(s[4]=[e("span",{class:"b-payment__links_card_details"},[e("span",{class:"regular"},"1 месяц"),e("p",{class:"regular"},"10$/месяц")],-1),e("span",{class:"b-payment__links_card_total semibold"},"10.00$",-1)]),2),e("div",{class:C(["b-payment__links_card align-center",{"b-payment__links_card--selected":d(n)===1}]),onClick:s[1]||(s[1]=p=>n.value=1)},s[5]||(s[5]=[q('<span class="b-payment__links_card_save medium"> Сэкономьте 50% </span><span class="b-payment__links_card_details"><span class="regular">6 месяцев</span><p class="regular">5$/месяц</p></span><span class="b-payment__links_card_total semibold">30.00$</span>',3)]),2)]),s[17]||(s[17]=q('<div class="p-payment__program"><h2 class="semibold">Что Ждет Вас В Вашем Плане?</h2><div class="p-payment__program_images"><div class="p-payment__program_images_item"><div><img width="100" height="100" style="object-fit:cover;object-position:center;" src="'+pt+'" alt=""></div><span class="medium align-center">Кегель</span></div><div class="p-payment__program_images_item"><div><img width="100" height="100" style="object-fit:cover;object-position:center;" src="'+mt+'" alt=""></div><span class="medium align-center">Фитнес</span></div><div class="p-payment__program_images_item"><div><img src="'+_t+'" alt=""></div><span class="medium align-center">Дыхание</span></div></div><div class="p-payment__program_list"><p> Ваша персональная программа, включающая упражнения на кегеле, фитнес и дыхательные упражнения, уже составлена. </p><p> Программа упражнений на кегеле уровня средний, включающая 3 сессии в день, была создана. Рекомендуем выполнять как минимум 2 сессии в день. </p><p> Сильные мышцы живота и ног увеличивают сексуальное желание и работоспособность. В вашу программу добавлены фитнес-упражнения начального уровня для укрепления этих групп мышц. </p><p> Правильный контроль снижает напряжение тела и ума, повышая концентрацию внимания на сексуальных результатах. В вашу программу добавлены дыхательные техники, созданные специально для вас. </p></div></div><div class="p-payment__author"><div class="p-payment__author_image"><img src="'+vt+'" alt=""></div><span class="regular align-center">Др. Арнольд Х. Кегель</span><ul><li class="regular"> Метод Кегеля является научно доказанным видом упражнений, который направлен на укрепление мышц тазового дна для предотвращения и лечения эректильной дисфункции, преждевременной эякуляции, улучшение оргазма и сексуальной производительности. </li><li class="regular"> Регулярно выполняя упражнения Кегеля, вы сможете дольше продержаться, иметь более твердую эрекцию и яркие оргазмы. </li></ul></div><div class="b-payment__recommends align-left"><h2 class="semibold">Упражнения Кегеля рекомендованы</h2><div class="b-payment__recommends_list align-center"><div class="b-payment__recommends_image"><img src="'+G+'" alt=""></div><div class="b-start__carousel_image"><img src="'+K+'" alt=""></div><div class="b-start__carousel_image"><img src="'+J+'" alt=""></div><div class="b-start__carousel_image"><img src="'+U+'" alt=""></div><div class="b-start__carousel_image"><img src="'+Y+'" alt=""></div></div></div>',3)),e("div",ht,[e("table",$t,[s[12]||(s[12]=e("thead",null,[e("tr",null,[e("th",{colspan:"2",class:"regular"},"Что вы получите при подписке")])],-1)),e("tbody",St,[e("tr",null,[s[6]||(s[6]=e("td",null,"Фитнем Упражнения",-1)),e("td",null,[_(c)])]),e("tr",null,[s[7]||(s[7]=e("td",null,"Тест на Мышцы Тазового Дна",-1)),e("td",null,[_(c)])]),e("tr",null,[s[8]||(s[8]=e("td",null,"Личный План Кегеля",-1)),e("td",null,[_(c)])]),e("tr",null,[s[9]||(s[9]=e("td",null,"Вызовы",-1)),e("td",null,[_(c)])]),e("tr",null,[s[10]||(s[10]=e("td",null,"Советы По Сексуальному Здоровью",-1)),e("td",null,[_(c)])]),e("tr",null,[s[11]||(s[11]=e("td",null,"Дыхательные Упражнения",-1)),e("td",null,[_(c)])])])])]),s[18]||(s[18]=q('<div class="p-payment__program"><h2 class="semibold">Советы и вызовы в сексуальной жизни</h2><div class="p-payment__program_images"><div class="p-payment__program_images_item"><div><img width="100" height="100" style="width:100%;object-fit:cover;object-position:center;" src="'+gt+'" alt=""></div></div><div class="p-payment__program_images_item"><div><img width="100" height="100" style="width:100%;object-fit:cover;object-position:center;" src="'+ft+'" alt=""></div></div><div class="p-payment__program_images_item"><div><img width="100" height="100" style="width:100%;object-fit:cover;object-position:center;" src="'+bt+'" alt=""></div></div></div><div class="p-payment__program_list"><p> Некоторые вредные привычки негативно влияют на сексуальное желание и производительность. Увеличьте пользу от упражнений Кегеля с помощью задач Kegel Men. </p><p> С помощью советов, основанных на научных исследованиях, вы можете улучшить свои результаты, лучше узнать своего партнера и разнообразить свою сексуальальную жизнь. </p></div></div>',1)),e("div",wt,[e("div",{class:C(["b-payment__links_card align-center",{"b-payment__links_card--selected":d(n)===0}]),onClick:s[2]||(s[2]=p=>n.value=0)},s[13]||(s[13]=[e("span",{class:"b-payment__links_card_details"},[e("span",{class:"regular"},"1 месяц"),e("p",{class:"regular"},"10$/месяц")],-1),e("span",{class:"b-payment__links_card_total semibold"},"10.00$",-1)]),2),e("div",{class:C(["b-payment__links_card align-center",{"b-payment__links_card--selected":d(n)===1}]),onClick:s[3]||(s[3]=p=>n.value=1)},s[14]||(s[14]=[q('<span class="b-payment__links_card_save medium"> Сэкономьте 50% </span><span class="b-payment__links_card_details"><span class="regular">6 месяцев</span><p class="regular">5$/месяц</p></span><span class="b-payment__links_card_total semibold">30.00$</span>',3)]),2)]),e("div",Ct,[_(i,{variant:"submit",borderRadius:"ellipse",onOnClick:l},{default:S(()=>s[15]||(s[15]=[O(" Продолжить ")])),_:1})])])}}}),Bt=[{question:"Выберите возрастной диапазон?",options:["18-30","31-55","55+"]},{question:"Выберите свой тип тела",options:["Худой","Нормальный","Атлетический","Избыточный вес"]},{question:"Слышали ли вы когда-нибудь о тренировке мышц тазового дна?",options:["Нет","Да"],info:"Мышцы тазового дна (ТД) – это мышцы, которые удерживают ваши репродуктивные органы, кишечник и мочевой пузырь. Они начинаются от основания пениса и поднимается к копчику. Эти упражнения используются для укрепления группы мышц (ТД)."},{question:"У тебя проблемы с эрекцией?",options:["Нет","Иногда","Часто","Всегда"]},{question:"Ты когда нибудь принимал таблетки для эрекции?",options:["Нет","Да"]},{question:"Испытываешь ли ты преждевременную эякуляцию?",options:["Нет","Иногда","Часто","Всегда"]},{question:"Как обстоят дела с вашим сексуальным желанием?",options:["Низкий","Среднее","Высокий","Очень высокий"]},{question:"Как ты оцениваешь удовольствие, которое ты получаешь от оргазма?",options:["Недоволеные","Умеренно удовлетворен","Очень удовлетворенный"]},{question:"Как ты оцениваешь качество своего сна?",options:["Низкий","Среднее","Высокий","Очень высокий"]},{question:"Какие из них вы считаете своими привычками?",checkboxes:["Никто из них","Курение","Слишком много алкоголя","Слишком много сахара","Нездоровая пища","Чрезмерное время работы за экраном"]},{question:"Как ты оцениваешь уровень своего стресса?",options:["Низкий","Среднее","Высокий"]},{question:"Ты принимаешь какие-нибудь антидепрессанты?",options:["Нет","Да"]},{question:"Как часто ты смотришь порно?",options:["Мин. один раз в день","3-4 раза в неделю","1-2 раза в месяц","Никогда"]},{question:"Чувствуете ли вы потребность в мочеиспускании в течение дня?",options:["Нет","Да"],info:"Частота мочеиспускания дает представление о силе мышц тазового дна и работе мочевого пузыря."},{question:"У тебя недержание мочи?",options:["Нет","Да"]},{question:"Регулярно ли ты испытываешь проблемы с пищеварением?",options:["Нет","Да"]},{question:"Испытываете ли вы запоры?",options:["Нет","Да"],info:"Наличие запоров дает представление о работе кишечника и напряжении мышц тазового дна."}],qt={class:"homepage"},Ot={class:"container"},It=h({__name:"index",setup(t){const a=k(0),o=k("");function n(s){o.value=s,l()}function l(){a.value++}function r(){a.value--}return(s,c)=>{const i=ye,p=xe,v=Pe,b=st,y=lt,$=xt;return u(),m("div",qt,[e("div",Ot,[d(a)===0?(u(),x(i,{key:0,onOnSelect:l})):d(a)===1?(u(),x(p,{key:1,onOnSelect:l,onOnBack:r})):d(a)>=2&&d(a)<=18?(u(),x(v,{key:2,block:d(Bt)[d(a)-2],page:d(a),onOnSelect:l,onOnBack:r},null,8,["block","page"])):d(a)===19?(u(),x(b,{key:3,onOnSelect:l})):d(a)===20?(u(),x(y,{key:4,email:d(o),onOnSelect:n},null,8,["email"])):(u(),x($,{key:5,email:d(o)},null,8,["email"]))])])}}});export{It as default};
