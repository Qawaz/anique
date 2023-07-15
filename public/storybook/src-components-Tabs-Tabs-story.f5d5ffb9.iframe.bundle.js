/*! For license information please see src-components-Tabs-Tabs-story.f5d5ffb9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[682],{"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>newStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}))},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/lib/src/components/Tabs/Tabs.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTabs:()=>DefaultTabs,VerticalTabs:()=>VerticalTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_story});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaTab=(0,react.forwardRef)((({id,label,selected,className,index,onClick,onKeyUp},ref)=>(0,jsx_runtime.jsx)("li",{className:`Ursa-TabHeadItem ${selected?"selected":""} ${className||""}`,role:"presentation",children:(0,jsx_runtime.jsx)("button",{className:"Ursa-Tab",id,ref,type:"button",role:"tab","aria-label":label,"aria-selected":selected?"true":"false","aria-controls":`${id}-panel`,onClick:()=>onClick(index),onKeyUp,tabIndex:selected?0:-1,"data-index":index,children:(0,jsx_runtime.jsx)("span",{className:"Ursa-TabTitle",children:label})})}))),Tab=(0,emotion_styled_browser_esm.Z)(UrsaTab)((({theme:{color},layout,selected})=>`\n      display: flex;\n      cursor: pointer;\n      margin: 0;\n      padding: 0;\n      color: ${selected?color["--ursa-text-primary"]:color["--ursa-text-secondary"]};\n      \n  \n      .Ursa-Tab {\n          all: unset;\n          cursor: pointer;\n          margin: 0;\n          padding: ${"vertical"===layout?"0.75em 1.5em":"0.6em 1.5em"};\n          width: 100%;\n          font-weight: bold;\n          z-index: 2;\n          border-bottom: ${"vertical"===layout?"0":`0.3em solid ${selected?color["--ursa-btn-primary"]:"transparent"}`};\n          border-left: ${"vertical"===layout?`0.3em solid ${selected?color["--ursa-btn-primary"]:"transparent"}`:"0"};\n          transition-property: color, border-bottom, border-left;\n          transition-duration: 0.15s;\n          transition-timing-function: ease-in-out;\n      }\n      &:hover {\n          color: ${color["--ursa-text-primary"]};\n  \n          .Ursa-Tab {\n            padding: ${"vertical"===layout?"0.75em 1.5em":"0.6em 1.5em"};\n            border-bottom: ${"vertical"===layout?"0":`0.3em solid ${!selected&&color["--ursa-text-secondary"]}`};\n            border-left: ${"vertical"===layout?`0.3em solid ${!selected&&color["--ursa-text-secondary"]}`:"0"};\n          }\n      }\n      `)),UrsaTabPanel=({id,ariaLabelledBy,children,className})=>(0,jsx_runtime.jsx)("div",{className:`Ursa-TabPanel ${className||""}`,id,role:"tabpanel","aria-labelledby":ariaLabelledBy,tabIndex:"show"===className?0:-1,children});UrsaTabPanel.displayName="UrsaTabPanel";const TabPanel=(0,emotion_styled_browser_esm.Z)(UrsaTabPanel)((({className})=>`\n        display: ${className?.includes("hidden")?"none":"flex"};\n        flex-grow: 1;\n        flex-flow: row wrap;\n        padding: 0.75em 1.5em;\n        opacity: 0;\n        animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n        -moz-animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n        -o-animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n\n        @keyframes fadeIn {\n          from { opacity: 0 }\n          to { opacity: 1 }\n        }\n        @-moz-keyframes fadeIn {\n          from { opacity: 0; }\n          to   { opacity: 1; }\n        }\n        @-o-keyframes fadeIn {\n          from { opacity: 0; }\n          to   { opacity: 1; }\n        }\n    `)),UrsaTabs=({className,items,layout})=>{const startingTabIndex=(0,react.useMemo)((()=>{const indx=items.findIndex((item=>item.selected));return indx>=0?indx:0}),[items]),[data,setData]=(0,react.useState)(items.map(((item,index)=>({...item,selected:index===startingTabIndex})))??[]),tabRef=(0,react.useRef)([]),toggleActive=(0,react.useCallback)((indx=>{setData((prev=>prev.map(((item,i)=>({...item,selected:indx===i}))))),tabRef.current[indx].focus()}),[]),switchTab=(target,direction)=>{const{dataset:{index}}=target,i=parseInt(index);let switchIndx;if("backwards"===direction)switchIndx=0===i?data.length-1:i-1;else switchIndx=i===data.length-1?0:i+1;toggleActive(switchIndx)},handleKeyUp=(0,react.useCallback)((e=>{switch(e.key){case"ArrowRight":"vertical"!==layout&&switchTab(e.target,"forwards");break;case"ArrowLeft":"vertical"!==layout&&switchTab(e.target,"backwards");break;case"ArrowDown":"vertical"===layout&&switchTab(e.target,"forwards");break;case"ArrowUp":"vertical"===layout&&switchTab(e.target,"backwards");break;case"Home":tabRef.current[0].click();break;case"End":tabRef.current.at(-1)?.click()}}),[]);return(0,jsx_runtime.jsxs)("div",{className:`Ursa-Tabs ${className||""}`,children:[(0,jsx_runtime.jsx)("ul",{className:"Ursa-TabsHead",role:"tablist",children:data?.map((({id,label,selected},indx)=>(0,jsx_runtime.jsx)(Tab,{id,ref:tab=>tabRef.current[indx]=tab,label,selected,layout,index:indx,onClick:()=>selected?null:toggleActive(indx),onKeyUp:handleKeyUp},indx)))}),(0,jsx_runtime.jsx)("div",{className:"Ursa-TabContent",children:data?.map((({id,content,selected},indx)=>(0,jsx_runtime.jsx)(TabPanel,{id:`${id}-panel`,className:selected?"show":"hidden",ariaLabelledBy:id,children:content},indx)))})]})};UrsaTabs.displayName="UrsaTabs";const Tabs=(0,emotion_styled_browser_esm.Z)(UrsaTabs)((({layout})=>`\n    display: flex;\n    flex-direction: ${"vertical"===layout?"row":"column"};\n    align-items: flex-start;\n    justify-items: flex-start;\n    gap: 0.25rem;\n\n    .Ursa-TabsHead {\n      display: flex;\n      flex-direction: ${"vertical"===layout?"column":"row"};\n    }\n  `)),Tabs_story={title:"Components/Tabs",component:Tabs},itemsData=[{id:"overview",label:"Overview",content:(0,jsx_runtime.jsx)("div",{children:"This is the Overview Tab"}),selected:!0},{id:"transactions",label:"Transactions",content:(0,jsx_runtime.jsx)("div",{children:"This is the Transactions Tab"})},{id:"comments",label:"Comments",content:(0,jsx_runtime.jsx)("div",{children:"This is the Comments Tab"})}],Template=({items,...args})=>(0,jsx_runtime.jsx)(Tabs,{...args,items:itemsData});Template.displayName="Template";const DefaultTabs=Template.bind({}),VerticalTabs=Template.bind({});VerticalTabs.args={layout:"vertical"},DefaultTabs.parameters={...DefaultTabs.parameters,docs:{...DefaultTabs.parameters?.docs,source:{originalSource:"({\n  items,\n  ...args\n}) => <Tabs {...args} items={itemsData} />",...DefaultTabs.parameters?.docs?.source}}},VerticalTabs.parameters={...VerticalTabs.parameters,docs:{...VerticalTabs.parameters?.docs,source:{originalSource:"({\n  items,\n  ...args\n}) => <Tabs {...args} items={itemsData} />",...VerticalTabs.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultTabs","VerticalTabs"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);