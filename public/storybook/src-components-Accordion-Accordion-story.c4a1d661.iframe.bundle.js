/*! For license information please see src-components-Accordion-Accordion-story.c4a1d661.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[661],{"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>newStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}))},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/lib/src/components/Accordion/Accordion.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicAccordion:()=>BasicAccordion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_story});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),UnstyledButton=__webpack_require__("./src/lib/src/components/UnstyledButton/UnstyledButton.tsx"),Icon=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgChevronUpMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M15 13a.997.997 0 0 1-.707-.293L10 8.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414l5-5a.999.999 0 0 1 1.414 0l5 5A.999.999 0 0 1 15 13z",fill:"#5C5F62"})});SvgChevronUpMinor.displayName="SvgChevronUpMinor";const ChevronUpMinor=SvgChevronUpMinor,SvgChevronDownMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M10 14a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L10 11.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5A.997.997 0 0 1 10 14z",fill:"#5C5F62"})});SvgChevronDownMinor.displayName="SvgChevronDownMinor";const ChevronDownMinor=SvgChevronDownMinor,StyledAccordionHeader=emotion_styled_browser_esm.Z.h4((({theme:{color}})=>`\n    .Ursa-AccordionHeader {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        text-align: left;\n        font-weight: bold;\n        align-items: center;\n        cursor: pointer;\n        padding: 0.25rem;\n        border-bottom: 1px solid ${color["--ursa-border-primary"]};\n\n        & > span.Ursa-AccordionLabelText {\n            flex-grow: 1;\n            padding: 1.25rem 0.625rem;\n        }\n    }\n    `)),AccordionHeader=({id,active,label,onClick})=>(0,jsx_runtime.jsx)(StyledAccordionHeader,{className:"Ursa-AccordionHeaderContainer",children:(0,jsx_runtime.jsxs)(UnstyledButton.k,{id,className:"Ursa-AccordionHeader",onClick,ariaExpanded:active,ariaControls:`${id}-label`,"data-active":active,children:[(0,jsx_runtime.jsx)("span",{className:"Ursa-AccordionLabelText",children:label}),(0,jsx_runtime.jsx)(Icon.J,{source:active?ChevronUpMinor:ChevronDownMinor})]})});AccordionHeader.displayName="AccordionHeader";const UrsaAccordionPanel=({id,className,children,active,ariaLabelledBy})=>(0,jsx_runtime.jsx)("div",{id,className:`Ursa-AccordionPanel ${className||""}`,"aria-labelledby":ariaLabelledBy,"aria-hidden":!active,children});UrsaAccordionPanel.displayName="UrsaAccordionPanel";const AccordionPanel=(0,emotion_styled_browser_esm.Z)(UrsaAccordionPanel)((({theme:{color},active})=>`\n        display: ${active?"flex":"none"};\n        color: ${color["--ursa-text-primary"]};\n        padding: 1.25rem 0.625rem;\n        opacity: 0;\n        animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n        -moz-animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n        -o-animation: fadeIn 0.2s ease-in-out 0.1s forwards;\n\n        @keyframes fadeIn {\n        from { opacity: 0 }\n        to { opacity: 1 }\n        }\n        @-moz-keyframes fadeIn {\n        from { opacity: 0; }\n        to   { opacity: 1; }\n        }\n        @-o-keyframes fadeIn {\n        from { opacity: 0; }\n        to   { opacity: 1; }\n        }\n    `)),Accordion=({className,items})=>{const[data,setData]=(0,react.useState)(items?.map((item=>({...item,active:item.active??!1})))??[]);return(0,jsx_runtime.jsx)("div",{className:`Ursa-AccordionGroup ${className||""}`,children:data?.map((({id,label,content,active},indx)=>(0,jsx_runtime.jsxs)("div",{className:"Ursa-AccordionItem",children:[(0,jsx_runtime.jsx)(AccordionHeader,{id,label,active,onClick:()=>(indx=>setData((prev=>prev.map(((item,i)=>({...item,active:indx===i?!item.active:item.active}))))))(indx)}),(0,jsx_runtime.jsx)(AccordionPanel,{id:`${id}-label`,ariaLabelledBy:id,active,children:content})]},indx)))})};Accordion.displayName="Accordion";const itemsData=[{id:"orders",label:"Orders",content:(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi id provident delectus repudiandae quo error praesentium sunt, aut facilis!"})},{id:"shipments",label:"Shipments",content:(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi id provident delectus repudiandae quo error praesentium sunt, aut facilis!"})},{id:"payments",label:"Payments",content:(0,jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi id provident delectus repudiandae quo error praesentium sunt, aut facilis!"})}],Accordion_story={title:"Components/Accordion",component:Accordion,decorators:[Story=>(0,jsx_runtime.jsx)(Story,{})]},Template=({items,...args})=>(0,jsx_runtime.jsx)(Accordion,{items:itemsData,...args});Template.displayName="Template";const BasicAccordion=Template.bind({});BasicAccordion.parameters={...BasicAccordion.parameters,docs:{...BasicAccordion.parameters?.docs,source:{originalSource:"({\n  items,\n  ...args\n}) => <Accordion items={itemsData} {...args} />",...BasicAccordion.parameters?.docs?.source}}};const __namedExportsOrder=["BasicAccordion"]},"./src/lib/src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const COLORS_WITH_BACKDROPS=["success","info","warning","alert"],UrsaIcon=({source:IconSVGComponent,color,size,backdrop,accessibilityLabel,className,onClick})=>{let sourceType,testid="icon";"function"==typeof IconSVGComponent?sourceType="function":"placeholder"===IconSVGComponent?(sourceType="placeholder",testid+="-placeholder"):(sourceType="external",testid+="-external"),testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.I)(testid),backdrop&&color&&COLORS_WITH_BACKDROPS.includes(color);const _id=(0,_utilities__WEBPACK_IMPORTED_MODULE_4__.f)("Ursa-Icon"),iconMarkup={function:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconSVGComponent,{className:"Ursa-IconSVG",focusable:"false","aria-hidden":"true",...testid}),placeholder:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"Ursa-IconPlaceholder",...testid}),external:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"Ursa-IconSVG",src:`data:image/svg+xml;utf8,${IconSVGComponent}`,alt:"","aria-hidden":"true",...testid})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{id:_id,className:`Ursa-Icon ${className||""}`,onClick,children:iconMarkup[sourceType]})};UrsaIcon.displayName="UrsaIcon";const Icon=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(UrsaIcon)((({theme:{color,fontSize},color:IconColor,bgColor,size})=>{const computedProps={size:"1rem"};switch(size){case"small":computedProps.size=fontSize["--ursa-font-size-3"];break;case"medium":computedProps.size=fontSize["--ursa-font-size-6"];break;case"large":computedProps.size=fontSize["--ursa-font-size-7"];break;default:computedProps.size=fontSize["--ursa-font-size-5"]}return{display:"block",height:computedProps.size,width:computedProps.size,maxHeight:"100%",maxWidth:"100%",svg:{fill:IconColor?color[IconColor]:"currentColor",backgroundColor:bgColor?color[bgColor]:"none"},"&:hover":{color:"auto",backgroundColor:"auto"}}}))},"./src/lib/src/components/UnstyledButton/UnstyledButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>UnstyledButton});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const UnstyledButton=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)((({id,name,children,className,url,external,download,submit,disabled,loading,pressed,role,ariaLabel,ariaControls,ariaExpanded,ariaDescribedBy,ariaChecked,ariaPressed,onClick,onFocus,onBlur,onKeyDown,onKeyPress,onKeyUp,onMouseEnter,onTouchStart,...otherProps})=>{let buttonMarkup;const commonProps={id,className,"aria-label":ariaLabel},interactiveProps={...commonProps,role,onClick,onFocus,onBlur,onMouseEnter,onTouchStart};return buttonMarkup=url?disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{...commonProps,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{...interactiveProps,href:url,...otherProps,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{...interactiveProps,name,type:submit?"submit":"button",disabled,"aria-busy":!!loading||void 0,"aria-controls":ariaControls,"aria-expanded":ariaExpanded,"aria-describedby":ariaDescribedBy,"aria-checked":ariaChecked,"aria-pressed":pressed,onKeyDown,onKeyUp,onKeyPress,...otherProps,children}),buttonMarkup}))((({theme:{color,fontSize}})=>`\n        background: none;\n        color: ${color["--ursa-text-primary"]};\n        border: 0;\n        padding: 0;\n        margin: 0;\n        text-decoration: none;\n        font-size: ${fontSize["--ursa-font-size-5"]};\n    `))},"./src/lib/src/utilities/generateUniqueID.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>generateUniqueID});const generateUniqueID=prefix=>`${prefix?prefix+"-":""}${(10*Math.random()+1).toString(16).replace(".","")}`},"./src/lib/src/utilities/useTestId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useTestId});const useTestId=id=>({})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);