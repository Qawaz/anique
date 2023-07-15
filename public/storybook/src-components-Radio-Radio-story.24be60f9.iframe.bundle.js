/*! For license information please see src-components-Radio-Radio-story.24be60f9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[718],{"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>newStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}))},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/lib/src/components/Radio/Radio.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultRadioButton:()=>DefaultRadioButton,DisabledRadioButton:()=>DisabledRadioButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_story});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),generateUniqueID=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaRadio=(0,react.forwardRef)((({id,className,label,name,value,checked,onChange,onFocus,onBlur,disabled,helpText},ref)=>{const uniqueID=(0,generateUniqueID.f)(),_id=id||`Ursa-RadioButtonInput-${uniqueID}`,labelID=`Ursa-RadioButtonLabel-${uniqueID}`,helpTextID=`Ursa-RadioButtonHelpText-${uniqueID}`;return(0,jsx_runtime.jsxs)("div",{className:`Ursa-RadioButtonContainer ${className||""}`,children:[(0,jsx_runtime.jsxs)("span",{className:"Ursa-RadioButton",children:[(0,jsx_runtime.jsx)("input",{id:_id,className:"Ursa-RadioButtonInput",ref,name,type:"radio",value:value??(label&&label.toLowerCase()),checked,disabled,onChange,onFocus,onBlur,"aria-checked":checked,"aria-labelledby":labelID,"aria-describedby":helpTextID}),(0,jsx_runtime.jsx)("label",{id:labelID,className:"Ursa-RadioButtonLabel",htmlFor:_id,children:label})]}),helpText&&(0,jsx_runtime.jsx)("p",{id:helpTextID,className:"Ursa-RadioButtonHelpText",children:helpText})]})})),Radio=(0,emotion_styled_browser_esm.Z)(UrsaRadio)((({theme:{color,fontSize}})=>`\n   \n    & > .Ursa-RadioButton {\n      display: inline-flex;\n      align-items: center;\n\n      & > input[type="radio"].Ursa-RadioButtonInput {\n        flex: 1 1 auto;\n        font-size: ${fontSize["--ursa-font-size-5"]};\n        width: 1.2em;\n        height: 1.2em;\n        accent-color: ${color["--ursa-accent-color"]};\n        cursor: pointer;\n      }\n  \n      & > label.Ursa-RadioButtonLabel {\n        flex: 1 1 auto;\n        font-size: ${fontSize["--ursa-font-size-5"]};\n        padding-left: 10px;\n        cursor: pointer;\n      }\n    }\n\n    & > .Ursa-RadioButtonHelpText {\n      padding-left: calc(2 * 1.2rem);\n      color: ${color["--ursa-text-secondary"]}\n    }\n  `));var Stack=__webpack_require__("./src/lib/src/components/Stack/Stack.tsx");const Radio_story={title:"Components/Radio",component:Radio},Template=()=>{const[value,setValue]=(0,react.useState)(""),handleChange=(0,react.useCallback)((e=>{const{value}=e.target;setValue(value)}),[value]);return(0,jsx_runtime.jsxs)(Stack.K,{vertical:!0,children:[(0,jsx_runtime.jsx)(Radio,{name:"payment_method",label:"Prepaid",value:"prepaid",checked:"prepaid"===value,onChange:handleChange,helpText:"Orders made by paying by cash, credit or debit cards, wallets, UPI"}),(0,jsx_runtime.jsx)(Radio,{name:"payment_method",label:"COD",value:"cod",checked:"cod"===value,onChange:handleChange,helpText:"Cash on Delivery orders"})]})};Template.displayName="Template";const DisabledTemplate=()=>{const[value,setValue]=(0,react.useState)("s"),handleChange=(0,react.useCallback)((e=>{const{value,disabled}=e.target;!disabled&&setValue(value)}),[value]);return(0,jsx_runtime.jsxs)(Stack.K,{children:[(0,jsx_runtime.jsx)(Radio,{name:"sizes",label:"S",value:"s",checked:"s"===value,onChange:handleChange}),(0,jsx_runtime.jsx)(Radio,{name:"sizes",label:"M",value:"m",checked:"m"===value,onChange:handleChange}),(0,jsx_runtime.jsx)(Radio,{name:"sizes",label:"L",value:"l",checked:"l"===value,onChange:handleChange}),(0,jsx_runtime.jsx)(Radio,{name:"sizes",label:"XL",value:"xl",checked:!1,disabled:!0,onChange:handleChange}),(0,jsx_runtime.jsx)(Radio,{name:"sizes",label:"XXL",value:"xxl",checked:!1,disabled:!0,onChange:handleChange})]})};DisabledTemplate.displayName="DisabledTemplate";const DefaultRadioButton=Template.bind({});DefaultRadioButton.args={};const DisabledRadioButton=DisabledTemplate.bind({});DisabledRadioButton.args={},DefaultRadioButton.parameters={...DefaultRadioButton.parameters,docs:{...DefaultRadioButton.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<string>(\'\');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {\n    const {\n      value\n    } = e.target;\n    setValue(value);\n  }, [value]);\n  return <Stack vertical>\r\n      <Radio name="payment_method" label="Prepaid" value="prepaid" checked={value === \'prepaid\'} onChange={handleChange} helpText="Orders made by paying by cash, credit or debit cards, wallets, UPI" />\r\n      <Radio name="payment_method" label="COD" value="cod" checked={value === \'cod\'} onChange={handleChange} helpText="Cash on Delivery orders" />\r\n    </Stack>;\n}',...DefaultRadioButton.parameters?.docs?.source}}},DisabledRadioButton.parameters={...DisabledRadioButton.parameters,docs:{...DisabledRadioButton.parameters?.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<string>(\'s\');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {\n    const {\n      value,\n      disabled\n    } = e.target;\n    !disabled && setValue(value);\n  }, [value]);\n  return <Stack>\r\n      <Radio name="sizes" label="S" value="s" checked={value === \'s\'} onChange={handleChange} />\r\n      <Radio name="sizes" label="M" value="m" checked={value === \'m\'} onChange={handleChange} />\r\n      <Radio name="sizes" label="L" value="l" checked={value === \'l\'} onChange={handleChange} />\r\n      <Radio name="sizes" label="XL" value="xl" checked={false} disabled onChange={handleChange} />\r\n      <Radio name="sizes" label="XXL" value="xxl" checked={false} disabled onChange={handleChange} />\r\n    </Stack>;\n}',...DisabledRadioButton.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultRadioButton","DisabledRadioButton"]},"./src/lib/src/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaStackItem=({className,children})=>(0,jsx_runtime.jsx)("div",{className:`Ursa-StackItem ${className||""}`,children});UrsaStackItem.displayName="UrsaStackItem";const Item=(0,emotion_styled_browser_esm.Z)(UrsaStackItem)((({vertical=!1,wrap=!0,justify="start",align="center",spacing="normal",fill=!1})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex-grow: ${fill?1:0};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"2px":"tight"===spacing?"5px":"loose"===spacing?"15px":"extraLoose"===spacing?"20px":"10px"};\n    `));var useTestId=__webpack_require__("./src/lib/src/utilities/useTestId.ts");const UnstyledStack=({className,children})=>{const testid=(0,useTestId.I)("test-stack");return(0,jsx_runtime.jsx)("div",{className:`Ursa-Stack ${className||""}`,...testid,children})};UnstyledStack.displayName="UnstyledStack";const Stack=(0,react.memo)((0,emotion_styled_browser_esm.Z)(UnstyledStack)((({vertical=!1,wrap=!0,justify="start",align=""+(vertical?"start":"center"),spacing="normal"})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex: ${"evenly"===justify?"1 1 auto":"0 1 auto"};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"0.125rem":"tight"===spacing?"0.375rem":"loose"===spacing?"1rem":"extraLoose"===spacing?"1.25rem":"0.75rem"};\n        width: 100%;\n        height: 100%;\n        white-space: nowrap;\n    `)));Stack.Item=Item},"./src/lib/src/utilities/generateUniqueID.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>generateUniqueID});const generateUniqueID=prefix=>`${prefix?prefix+"-":""}${(10*Math.random()+1).toString(16).replace(".","")}`},"./src/lib/src/utilities/useTestId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useTestId});const useTestId=id=>({})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);