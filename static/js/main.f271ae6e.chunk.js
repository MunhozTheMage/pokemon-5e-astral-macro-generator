(this["webpackJsonppokemon-5e-astral-macro-generator"]=this["webpackJsonppokemon-5e-astral-macro-generator"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(13),o=n.n(l),r=n(11),j=n(30),i=n(126),b=n(121),s=n(120),u=n(123),O=n(133),v=n(124),x=n(130),d=n(125),h=n(131),m=n(134),g=n(129),f=n(128),p=n(132),C=n(127),y=n(122),D=n(4),S=function(e){var t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],l=n[1];return{value:c,onChange:Object(a.useCallback)((function(e){return l(e.target.value)}),[l])}},T=function(e){var t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],l=n[1];return{value:c,onChange:Object(a.useCallback)((function(e,t){return l(t)}),[l])}},N=function(e){return Object(D.jsx)(i.a,Object(r.a)({fullWidth:!0,style:{marginBottom:"20px"},variant:"outlined"},e))},k=function(e){return Object(D.jsx)(b.a,Object(r.a)({style:{marginBottom:"20px"},variant:"contained",color:"primary"},e))};var R=function(){var e=function(e){var t=Object(a.useState)(0),n=Object(j.a)(t,2),c=n[0],l=n[1];return{value:c,next:function(){return l((function(e){return e+1}))},prev:function(){return l((function(e){return e-1}))},setValue:l}}(),t=e.value,n=e.next,c=e.prev,l=e.setValue,o=T("Typeless"),i=[T("None"),T("None")],b=S(""),R=S(""),P=S(""),F=S(""),w=S(""),I=S(""),M={default:S(""),onFive:S(""),onTen:S(""),onSeventeen:S("")},L=S("STR"),A=S(""),B=function(e){var t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],l=n[1];return{checked:c,onChange:Object(a.useCallback)((function(e){return l(e.target.checked)}),[l])}}(!1),W=Object(a.useMemo)((function(){return["Typeless","Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Steel","Water"]}),[]),E=Object(a.useMemo)((function(){return["None","STR","DEX","CON","INT","WIS","CHA"]}),[]),H=Object(a.useCallback)((function(e){return function(t){return t===e&&"None"!==e}}),[]);return Object(D.jsx)("div",{className:"App",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",margin:"0",padding:"0",border:"0"},children:Object(D.jsx)(s.a,{elevation:3,style:{width:"min(680px, 50vw)",padding:"15px 35px"},children:Object(D.jsxs)(u.a,{container:!0,spacing:2,children:[Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsxs)(O.a,{activeStep:t,alternativeLabel:!0,children:[Object(D.jsx)(v.a,{children:Object(D.jsx)(x.a,{children:"Basic Info"})}),Object(D.jsx)(v.a,{children:Object(D.jsx)(x.a,{children:"Description"})}),Object(D.jsx)(v.a,{children:Object(D.jsx)(x.a,{children:"Damage and DC"})}),Object(D.jsx)(v.a,{children:Object(D.jsx)(x.a,{children:"Result"})})]})}),0===t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(f.a,Object(r.a)(Object(r.a)({},o),{},{options:W,renderInput:function(e){return Object(D.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{label:"Type",variant:"outlined"}))}}))}),Object(D.jsx)(u.a,{item:!0,xs:i[0].value===E[0]?12:6,children:Object(D.jsx)(f.a,Object(r.a)(Object(r.a)({},i[0]),{},{options:E,getOptionDisabled:H(i[1].value),renderInput:function(e){return Object(D.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{label:"Move Power",variant:"outlined"}))}}))}),i[0].value===E[0]?"None"!==i[1].value&&i[1].onChange(void 0,"None"):Object(D.jsx)(u.a,{item:!0,xs:6,children:Object(D.jsx)(f.a,Object(r.a)(Object(r.a)({},i[1]),{},{disabled:i[0].value===E[0],options:E,getOptionDisabled:H(i[0].value),renderInput:function(e){return Object(D.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{label:"Move Power",variant:"outlined"}))}}))}),Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Move Time"},b))}),Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({type:"number",label:"PP"},R))}),Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Duration"},P))}),Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Range"},F))})]}),1===t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Description",multiline:!0,rows:8},w))}),Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"At higher levels",multiline:!0,rows:3},I))})]}),2===t&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Damage"},M.default))}),Object(D.jsx)(u.a,{item:!0,xs:4,children:Object(D.jsx)(N,Object(r.a)({label:"Damage (Lv.5)"},M.onFive))}),Object(D.jsx)(u.a,{item:!0,xs:4,children:Object(D.jsx)(N,Object(r.a)({label:"Damage (Lv.10)"},M.onTen))}),Object(D.jsx)(u.a,{item:!0,xs:4,children:Object(D.jsx)(N,Object(r.a)({label:"Damage (Lv.17)"},M.onSeventeen))}),Object(D.jsx)(u.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center"},children:Object(D.jsx)(d.a,{control:Object(D.jsx)(h.a,Object(r.a)(Object(r.a)({},B),{},{color:"primary"})),label:"Requires Saving Throw?"})}),B.checked&&Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsxs)(m.a,Object(r.a)(Object(r.a)({},L),{},{row:!0,style:{display:"flex",justifyContent:"center"},children:[Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"STR",control:Object(D.jsx)(g.a,{color:"primary"}),label:"STR"}),Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"CON",control:Object(D.jsx)(g.a,{color:"primary"}),label:"CON"}),Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"DEX",control:Object(D.jsx)(g.a,{color:"primary"}),label:"DEX"}),Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"INT",control:Object(D.jsx)(g.a,{color:"primary"}),label:"INT"}),Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"WIS",control:Object(D.jsx)(g.a,{color:"primary"}),label:"WIS"}),Object(D.jsx)(d.a,{labelPlacement:"bottom",value:"CHA",control:Object(D.jsx)(g.a,{color:"primary"}),label:"CHA"})]}))})]}),3===t&&Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(u.a,{item:!0,xs:12,children:Object(D.jsx)(N,Object(r.a)({label:"Result",multiline:!0,rows:12},A))})}),Object(D.jsxs)(u.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"space-between"},children:[t>0&&t<3&&Object(D.jsx)(k,{onClick:c,children:"Back"}),t<2&&Object(D.jsx)(k,{onClick:n,children:"Next"}),2===t&&Object(D.jsx)(k,{onClick:function(){var e="";console.log(w),console.log(I);var t=function(e){return Object(p.a)(/\r?\n|\r/g," ",e).split(" ").map((function(e){return Object(C.a)(/^\d+$/,Object(y.a)(e))?"{".concat(Object(y.a)(e),"}"):Object(y.a)(e)})).join(" ")},a=function(e){return{None:"None",DEX:"DexMod",STR:"StrMod",CON:"ConMod",INT:"IntMod",WIS:"WisMod",CHA:"ChaMod"}[e]},c="None"===i[0].value?"0":"None"===i[1].value?a(i[0].value):"".concat(a(i[0].value)," > ").concat(a(i[1].value)," ? ").concat(a(i[0].value)," : ").concat(a(i[1].value));e+="Type: ".concat(o.value,"\n"),e+="Move Power: ".concat(i[0].value+("None"===i[1].value?"":"/"+i[1].value),"\n"),e+=""===Object(y.a)(b.value)?"":"Move Time: ".concat(b.value,"\n"),e+="PP: ".concat(""===Object(y.a)(R.value)?"Unlimited":R.value,"\n"),e+=""===Object(y.a)(b.value)?"":"Duration: ".concat(P.value,"\n"),e+=""===Object(y.a)(b.value)?"":"Range: ".concat(F.value,"\n"),e+="\n",e+=t(w.value),e+="\n\n",e+=t(I.value),e+="\n\n",e+=Object.values(M).some((function(e){return""===Object(y.a)(e.value)}))?"":"Attack Roll: {!(1d20) + (".concat(c,") + Prof}\n"),e+=Object.values(M).some((function(e){return""===Object(y.a)(e.value)}))?"":"Adv./Dis. Attack Roll: !!(1d20 + {".concat(c,"} + {Prof})\n"),e+="\n",e+=""===Object(y.a)(M.default.value)?"":"Damage Roll: !!(".concat(Object(y.a)(M.default.value)," + {").concat(c,"})\n"),e+=""===Object(y.a)(M.default.value)?"":"Critical Damage Roll: !!(".concat(Object(y.a)(M.default.value),")\n"),e+="\n",e+=""===Object(y.a)(M.onFive.value)?"":"Damage Roll Lv.5: !!(".concat(Object(y.a)(M.onFive.value)," + {").concat(c,"})\n"),e+=""===Object(y.a)(M.onFive.value)?"":"Critical Damage Roll Lv.5: !!(".concat(Object(y.a)(M.onFive.value),")\n"),e+="\n",e+=""===Object(y.a)(M.onTen.value)?"":"Damage Roll Lv.10: !!(".concat(Object(y.a)(M.onTen.value)," + {").concat(c,"})\n"),e+=""===Object(y.a)(M.onTen.value)?"":"Critical Damage Roll Lv.10: !!(".concat(Object(y.a)(M.onTen.value),")\n"),e+="\n",e+=""===Object(y.a)(M.onSeventeen.value)?"":"Damage Roll Lv.17: !!(".concat(Object(y.a)(M.onSeventeen.value)," + {").concat(c,"})\n"),e+=""===Object(y.a)(M.onSeventeen.value)?"":"Critical Damage Roll Lv.17: !!(".concat(Object(y.a)(M.onSeventeen.value),")\n"),e+="\n",e+=B.checked?"".concat(L.value," Saving Throw DC: {8 + Prof + (").concat(c,")}\n"):"",e+="\n",e+="Typeless"===o.value?"":"".concat(o.value," type Pok\xe9mons can add their STAB to the damage: {Stab}"),A.onChange({target:{value:e}}),n()},children:"Finish"}),3===t&&Object(D.jsx)(k,{onClick:function(){if(window.confirm("Creating another macro will erase the current one, do you want to proceed?")){var e=function(e){return{target:{value:e}}};o.onChange(void 0,"Typeless"),i[0].onChange(void 0,"None"),i[1].onChange(void 0,"None"),b.onChange(e("")),R.onChange(e("")),P.onChange(e("")),F.onChange(e("")),w.onChange(e("")),I.onChange(e("")),M.default.onChange(e("")),M.onFive.onChange(e("")),M.onTen.onChange(e("")),M.onSeventeen.onChange(e("")),L.onChange(e("STR")),A.onChange(e("")),B.onChange({target:{checked:!1}}),l(0)}},children:"Create Another"})]})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),l(e),o(e)}))};n(78);o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(R,{})}),document.getElementById("root")),P()}},[[79,1,2]]]);
//# sourceMappingURL=main.f271ae6e.chunk.js.map