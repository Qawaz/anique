/*! For license information please see src-components-Link-Link-story.c5706bcc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[1938],{"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>newStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},newStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(tagName){newStyled[tagName]=newStyled(tagName)}))},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/lib/src/components/Link/Link.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchorObj:()=>AnchorObj,DefaultLink:()=>DefaultLink,ExternalAnchorComponent:()=>ExternalAnchorComponent,ExternalLink:()=>ExternalLink,MonochromeLink:()=>MonochromeLink,UnstyledLink:()=>UnstyledLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var ___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/components/Link/Link.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",component:___WEBPACK_IMPORTED_MODULE_3__.ee},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.rU,{...args});Template.displayName="Template";const AnchorObj={name:"Anchor",args:{underlined:!0,colored:!0,underlineOnHover:!1,href:"http://github.com/Qawaz/anique",children:"My Anchor Link"}},ExternalAnchorComponent=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Dx,{href:"https://github.com/Qawaz/anique",children:"My External Link"});ExternalAnchorComponent.displayName="ExternalAnchorComponent";const DefaultLink=Template.bind({});DefaultLink.args={url:"https://www.github.com/Qawaz/anique",children:"Visit the Anique Github page"};const ExternalLink=Template.bind({});ExternalLink.args={url:"https://www.github.com/Qawaz/anique",children:"Visit the Anique Github page",external:!0};const MonochromeLink=Template.bind({});MonochromeLink.args={url:"https://www.github.com/Qawaz/anique",children:"Visit the Anique Github page",monochrome:!0};const UnstyledLink=Template.bind({});UnstyledLink.args={url:"https://www.github.com/Qawaz/anique",children:"Visit the Anique Github page",unstyled:!0,external:!0},AnchorObj.parameters={...AnchorObj.parameters,docs:{...AnchorObj.parameters?.docs,source:{originalSource:'{\n  name: "Anchor",\n  args: {\n    underlined: true,\n    colored: true,\n    underlineOnHover: false,\n    href: "http://github.com/Qawaz/anique",\n    children: "My Anchor Link"\n  }\n}',...AnchorObj.parameters?.docs?.source}}},ExternalAnchorComponent.parameters={...ExternalAnchorComponent.parameters,docs:{...ExternalAnchorComponent.parameters?.docs,source:{originalSource:'() => {\n  return <ExternalAnchor href={"https://github.com/Qawaz/anique"}>My External Link</ExternalAnchor>;\n}',...ExternalAnchorComponent.parameters?.docs?.source}}},DefaultLink.parameters={...DefaultLink.parameters,docs:{...DefaultLink.parameters?.docs,source:{originalSource:"args => <Link {...args} />",...DefaultLink.parameters?.docs?.source}}},ExternalLink.parameters={...ExternalLink.parameters,docs:{...ExternalLink.parameters?.docs,source:{originalSource:"args => <Link {...args} />",...ExternalLink.parameters?.docs?.source}}},MonochromeLink.parameters={...MonochromeLink.parameters,docs:{...MonochromeLink.parameters?.docs,source:{originalSource:"args => <Link {...args} />",...MonochromeLink.parameters?.docs?.source}}},UnstyledLink.parameters={...UnstyledLink.parameters,docs:{...UnstyledLink.parameters?.docs,source:{originalSource:"args => <Link {...args} />",...UnstyledLink.parameters?.docs?.source}}};const __namedExportsOrder=["AnchorObj","ExternalAnchorComponent","DefaultLink","ExternalLink","MonochromeLink","UnstyledLink"]},"./src/lib/src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const COLORS_WITH_BACKDROPS=["success","info","warning","alert"],AniqueIcon=({source:IconSVGComponent,color,size,backdrop,accessibilityLabel,className,onClick})=>{let sourceType,testid="icon";"function"==typeof IconSVGComponent?sourceType="function":"placeholder"===IconSVGComponent?(sourceType="placeholder",testid+="-placeholder"):(sourceType="external",testid+="-external"),testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.I)(testid),backdrop&&color&&COLORS_WITH_BACKDROPS.includes(color);const _id=(0,_utilities__WEBPACK_IMPORTED_MODULE_4__.f)("Anique-Icon"),iconMarkup={function:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconSVGComponent,{className:"Anique-IconSVG",focusable:"false","aria-hidden":"true",...testid}),placeholder:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"Anique-IconPlaceholder",...testid}),external:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"Anique-IconSVG",src:`data:image/svg+xml;utf8,${IconSVGComponent}`,alt:"","aria-hidden":"true",...testid})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{id:_id,className:`Anique-Icon ${className||""}`,onClick,children:iconMarkup[sourceType]})};AniqueIcon.displayName="AniqueIcon";const Icon=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(AniqueIcon)((props=>{const{theme:{color,fontSize},color:IconColor,bgColor,size}=props,computedProps=(props.color,{size:"1rem"});switch(size){case"small":computedProps.size=fontSize.fontSize3;break;case"medium":computedProps.size=fontSize.fontSize6;break;case"large":computedProps.size=fontSize.fontSize7;break;default:computedProps.size=fontSize.fontSize5}return{display:"block",height:computedProps.size,width:computedProps.size,maxHeight:"100%",maxWidth:"100%",svg:{fill:IconColor?color[IconColor]:"currentColor",backgroundColor:bgColor?color[bgColor]:"none"},"&:hover":{color:"auto",backgroundColor:"auto"}}}))},"./src/lib/src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>Anchor,Dx:()=>ExternalAnchor,rU:()=>Link,Ho:()=>UnstyledLink});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgExternalSmallMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{fill:"#5C5F62",d:"M14 13v1a1 1 0 0 1-1 1H6c-.575 0-1-.484-1-1V7a1 1 0 0 1 1-1h1c1.037 0 1.04 1.5 0 1.5-.178.005-.353 0-.5 0v6h6V13c0-1 1.5-1 1.5 0zm-3.75-7.25A.75.75 0 0 1 11 5h4v4a.75.75 0 0 1-1.5 0V7.56l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H11a.75.75 0 0 1-.75-.75z"})});SvgExternalSmallMinor.displayName="SvgExternalSmallMinor";const ExternalSmallMinor=SvgExternalSmallMinor;var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const UnstyledAnchorTag=emotion_styled_browser_esm.Z.a((({theme:{color}})=>`\n    text-decoration: none;\n    color: ${color.textPrimary};\n  `)),Anchor=emotion_styled_browser_esm.Z.a`
  ${props=>{return color=props.theme.color,colored=props.colored??!0,underlined=props.underlined??!0,underlineOnHover=props.underlineOnHover??!0,emotion_react_browser_esm.iv`
  color: ${colored?color.linkPrimary:color.textPrimary};
  text-decoration: ${underlined?"underline":"none"};

  &:hover {
    text-decoration: ${underlineOnHover?"underline":"none"};
    ${colored&&emotion_react_browser_esm.iv`
      color: ${color.linkPrimaryHovered};
    `}
  }
`;var color,colored,underlined,underlineOnHover}}
`,ExternalAnchorTag=(0,emotion_styled_browser_esm.Z)(Anchor)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;function ExternalAnchor(props){return(0,jsx_runtime.jsx)("span",{className:props.className,id:props.id,children:(0,jsx_runtime.jsxs)(ExternalAnchorTag,{underlined:props.underlined,colored:props.colored,underlineOnHover:props.underlineOnHover,href:props.href,target:props.target??"_blank",referrerPolicy:props.referrerPolicy,download:props.download,children:[(0,jsx_runtime.jsx)("span",{children:props.children}),(0,jsx_runtime.jsx)(Icon.J,{source:ExternalSmallMinor,size:"large",color:"linkPrimary"})]})})}ExternalAnchor.displayName="ExternalAnchor";const UnstyledLink=(0,react.forwardRef)(((props,ref)=>{const{external,url,children,unstyled,...rest}=props,target=external?"_blank":void 0,rel=external?"noopener noreferrer":void 0;return(0,jsx_runtime.jsx)("span",{className:"Anique-LinkElement",children:(0,jsx_runtime.jsxs)(UnstyledAnchorTag,{className:"Anique-AnchorTag",ref,target,href:url,rel,"data-testid":"link",...rest,children:[(0,jsx_runtime.jsx)("span",{className:"Anique-LinkText",children}),external&&!unstyled&&"string"==typeof children&&(0,jsx_runtime.jsx)("span",{className:"Anique-LinkExternalIcon",children:(0,jsx_runtime.jsx)(Icon.J,{source:ExternalSmallMinor,size:"large",color:"linkPrimary"})})]})})})),Link=(0,emotion_styled_browser_esm.Z)(UnstyledLink)((({theme:{color},monochrome,unstyled})=>`\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        color: ${monochrome||unstyled?color.textPrimary:color.linkPrimary};\n        text-decoration: ${unstyled?"none":"underline"};\n        transition-property: color;\n        transition-duration: 3s;\n        transition-timing-function: ease-in-out;\n        &:hover {\n            color: ${monochrome||unstyled?color.textPrimary:color.linkPrimaryHovered};\n        }        \n    `))},"./src/lib/src/utilities/generateUniqueID.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>generateUniqueID});const generateUniqueID=prefix=>`${prefix?prefix+"-":""}${(10*Math.random()+1).toString(16).replace(".","")}`},"./src/lib/src/utilities/useTestId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useTestId});const useTestId=id=>({})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=src-components-Link-Link-story.c5706bcc.iframe.bundle.js.map