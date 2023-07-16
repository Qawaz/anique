"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[4392],{"./src/lib/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Spinner=__webpack_require__("./src/lib/src/components/Spinner/Spinner.tsx");var useTestId=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),Icon=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgCaretUpMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{fill:"#5C5F62",d:"M6.902 12h6.196c.751 0 1.172-.754.708-1.268L10.708 7.3c-.36-.399-1.055-.399-1.416 0l-3.098 3.433C5.73 11.246 6.151 12 6.902 12Z"})});SvgCaretUpMinor.displayName="SvgCaretUpMinor";const CaretUpMinor=SvgCaretUpMinor;var SelectMinor=__webpack_require__("./src/lib/src/icons/SelectMinor.tsx");const SvgCaretDownMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{fill:"#5C5F62",d:"M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"})});SvgCaretDownMinor.displayName="SvgCaretDownMinor";const CaretDownMinor=SvgCaretDownMinor;var Popover=__webpack_require__("./src/lib/src/components/Popover/Popover.tsx"),ActionList=__webpack_require__("./src/lib/src/components/ActionList/ActionList.tsx"),Invisible=__webpack_require__("./src/lib/src/components/Invisible/Invisible.tsx");const ButtonContainer=emotion_styled_browser_esm.Z.div`
  display: inline-flex;
`,AniqueButton=(0,react.forwardRef)((({children,id,name,className,url,disabled,external,download,submit,loading,pressed,role,ariaLabel,ariaControls,ariaExpanded,ariaDescribedBy,ariaChecked,ariaPressed,onClick,onFocus,onBlur,onKeyDown,onKeyPress,onKeyUp,onMouseEnter,onTouchStart,onPointerDown,icon,iconOnly,upload,uploadOptions,disclosure,connectedDisclosure,primary,outline,alert,plain,size="medium"},ref)=>{const classes=`Anique-Button ${className??""}`,[disclosureActive,setDisclosureActive]=(0,react.useState)(!1),inputRef=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(()=>upload?inputRef.current:buttonRef.current));const toggleDisclosure=(0,react.useCallback)((()=>setDisclosureActive((prev=>!prev))),[]),handleUploadButton=(0,react.useCallback)((event=>{event.preventDefault(),uploadOptions?.onChange?.(event)}),[uploadOptions?.onChange]),commonProps={id,className:classes,"aria-label":ariaLabel},childMarkup="string"==typeof children?(0,jsx_runtime.jsx)("span",{className:"Anique-ButtonText",children}):children,linkProps={target:external?"_blank":void 0,rel:external?"noopener noreferrer":void 0},interactiveProps={...commonProps,role:role??"button",onClick:upload?()=>inputRef.current?.click():onClick,onFocus,onBlur,onMouseEnter,onTouchStart},accessibilityProps={"aria-busy":!!loading||void 0,"aria-controls":ariaControls,"aria-expanded":ariaExpanded,"aria-describedby":ariaDescribedBy,"aria-checked":ariaChecked,"aria-pressed":ariaPressed},iconSource="string"==typeof(x=icon)||"placeholder"===x||"function"==typeof x?(0,jsx_runtime.jsx)(Icon.J,{source:loading?"placeholder":icon}):icon;var x;let iconMarkup;iconSource&&(iconMarkup=iconOnly?iconSource:(0,jsx_runtime.jsxs)("span",{className:"Anique-ButtonIcon",children:[iconSource," ",childMarkup]}));const disclosureMarkup=disclosure?(0,jsx_runtime.jsx)(Icon.J,{className:"Anique-ButtonDisclosure",source:loading?"placeholder":(disclosure=>{switch(disclosure){case"up":return CaretUpMinor;case"select":return SelectMinor.Z;default:return CaretDownMinor}})(disclosure),size:"large"}):void 0;let connectedDisclosureMarkup;if(connectedDisclosure){const{disabled,ariaLabel,actions}=connectedDisclosure,connectedDisclosureTrigger=(0,jsx_runtime.jsx)("button",{type:"button",className:`Anique-ConnectedDisclosure ${classes}`,"aria-disabled":disabled,"aria-label":ariaLabel??"Button Actions","aria-describedBy":ariaDescribedBy,"aria-checked":ariaChecked,onClick:toggleDisclosure,tabIndex:disabled?-1:void 0,children:(0,jsx_runtime.jsx)(Icon.J,{source:CaretDownMinor,size:"large"})});connectedDisclosureMarkup=(0,jsx_runtime.jsx)(Popover.J,{active:disclosureActive,trigger:connectedDisclosureTrigger,onClose:toggleDisclosure,children:(0,jsx_runtime.jsx)(ActionList.S,{items:actions,onActionAnyItem:toggleDisclosure})})}const buttonContent=loading?(0,jsx_runtime.jsx)(Spinner.$,{color:"white",size:"small"}):icon?iconMarkup:childMarkup;let buttonMarkup;buttonMarkup=url&&!upload?(0,jsx_runtime.jsxs)("a",{...Object.assign(linkProps,disabled?commonProps:{...interactiveProps,href:url}),children:[buttonContent,disclosureMarkup]}):(0,jsx_runtime.jsxs)("button",{...interactiveProps,name,type:submit?"submit":"button",ref:buttonRef,tabIndex:0,disabled,onKeyDown,onKeyPress,onKeyUp,onPointerDown,...accessibilityProps,children:[buttonContent,disclosureMarkup]});const uploadMarkup=upload?(0,jsx_runtime.jsx)(Invisible.u,{children:(0,jsx_runtime.jsx)("input",{type:"file",hidden:!0,"aria-hidden":"true",tabIndex:-1,ref:inputRef,name,onChange:handleUploadButton,multiple:uploadOptions?.allowMultiple,accept:uploadOptions?.accept,...(0,useTestId.I)("button-upload")})}):void 0;return(0,jsx_runtime.jsxs)(ButtonContainer,{className:"Anique-ButtonContainer",children:[buttonMarkup,connectedDisclosureMarkup,uploadMarkup]})})),Button=(0,emotion_styled_browser_esm.Z)(AniqueButton)((({theme:{color,fontSize},fullWidth,iconOnly,uppercase=!1,outline,url,primary,loading,alert,disclosure,disabled,textAlign="center"})=>{const ButtonTextColor=`${disabled?color.btnDisabled:!primary&&!alert||outline?alert?color.btnAlert:outline?alert?color.btnAlert:color.btnPrimary:color.textSecondary:"white"};`;return`\n  ${(url||disclosure)&&"\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  "};\n  width: ${fullWidth?"100%":"auto"};\n  min-width: ${iconOnly?"auto":"85px"};\n  padding: 0.875em 1.5em;\n  font-size: ${fontSize.fontSize3};\n  font-weight: bold;\n  text-transform: ${uppercase?"uppercase":"none"};\n  text-decoration: none;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 4px;\n  border-color: ${disabled?color.btnDisabled:alert?color.btnAlert:primary||outline?color.btnPrimary:color.borderPrimary};\n  background-color: ${disabled||outline?"transparent":alert?color.btnAlert:primary||loading?color.btnPrimary:"white"};\n  color: ${ButtonTextColor};\n  transition-property: color, background-color, box-shadow, border-color;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  \n  &:focus-visible {\n    outline: 2px solid transparent;\n    outline-offset: 1px;\n    transition: outline-color 0.2s linear;\n    outline-color: ${color.accentColor};\n  }\n\n  &:hover {\n    color: "auto";\n    background-color: ${disabled||outline?"transparent":alert?color.btnAlertHovered:primary||loading?color.btnPrimaryHovered:"#F8F8F8"};\n    border-color: ${disabled?color.btnDisabled:alert?color.btnAlertHovered:primary||outline||loading?color.btnPrimaryHovered:"auto"};\n    cursor: ${disabled?"auto":"pointer"};\n    box-shadow: ${(primary||alert||loading)&&!outline?"0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)":"none"};\n    white-space: nowrap;\n  }\n  .Anique-Icon {\n    margin: auto;\n  }\n  & > .Anique-Icon.Anique-ButtonDisclosure {\n    margin-left: 0.75rem;\n    margin-right: 0;\n    padding-right: 0;\n    padding-left: 0;\n  }\n  &.Anique-ConnectedDisclosure {\n    min-width: auto;\n    margin-left: 0.125rem;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n  }\n  .Anique-ButtonIcon {\n    display: inline-flex;\n    justify-content: ${"left"===textAlign?"flex-start":"right"===textAlign?"flex-end":"center"};\n    align-items: center;\n    gap: 0.5em;\n  }\n`}))},"./src/lib/src/components/Invisible/Invisible.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Invisible});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledInvisible=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.span`
  visibility: hidden !important;
  position: absolute !important;
  top: 0 !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  border: 0 !important;
  outline: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(50%) !important;
`,Invisible=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledInvisible,{className:"Anique-Invisible",children});Invisible.displayName="Invisible"},"./src/lib/src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),useOffsetPosition=__webpack_require__("./src/lib/src/utilities/useOffsetPosition.ts");const FOCUSABLE_ELEMENTS=["input","textarea","select","button","a","area"],getLastSibling=element=>element?element.nextElementSibling?getLastSibling(element.nextElementSibling):element:void 0,getFirstFocusableElement=element=>{if(!element)return;const tag=element.nodeName.toLowerCase(),tabIndex=element.getAttribute("tabindex");if(FOCUSABLE_ELEMENTS.includes(tag)||tabIndex&&parseInt(tabIndex)>=0)return element;for(const node of Array.from(element.childNodes))return getFirstFocusableElement(node)},getLastFocusableElement=element=>{if(!element)return;const tag=element.nodeName.toLowerCase(),tabIndex=element.getAttribute("tabindex");if(FOCUSABLE_ELEMENTS.includes(tag)||tabIndex&&parseInt(tabIndex)>=0){const lastSibling=getLastSibling(element.parentElement);return getFirstFocusableElement(lastSibling)}for(const node of Array.from(element.childNodes))return getLastFocusableElement(node)};var Portal=__webpack_require__("./src/lib/src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverContent=emotion_styled_browser_esm.Z.div((({theme:{color}})=>({position:"absolute",backgroundColor:color.bgPrimary,color:color.textPrimary,marginTop:"0.25rem",maxWidth:"20%",borderRadius:"0.625rem",zIndex:100,backfaceVisibility:"hidden",boxShadow:"0 4px 6px -1px rgb(0 0 0 / 7%), 0  2px 4px -2px rgb(0 0 0 / 7%)"}))),Popover=({trigger,children,active=!1,autofocusTarget="none",onClose})=>{const triggerRef=(0,react.useRef)(null),popoverRef=(0,react.useRef)(null),{top,left}=(0,useOffsetPosition.V)(triggerRef),clickHandler=(0,react.useCallback)((e=>{triggerRef.current?.contains(e.target)||active&&onClose?.()}),[onClose,active]),scrollHandler=(0,react.useCallback)((e=>{var element;!triggerRef.current||!active||(element=triggerRef.current).offsetTop>=0&&element.offsetTop<window.innerHeight||onClose?.()}),[active,onClose]);(0,react.useEffect)((()=>(document.addEventListener("click",clickHandler),()=>document.removeEventListener("click",clickHandler))),[clickHandler]),(0,react.useEffect)((()=>(document.addEventListener("scroll",scrollHandler),()=>document.removeEventListener("scroll",scrollHandler))),[scrollHandler]),(0,react.useEffect)((()=>{if(active&&popoverRef.current)switch(autofocusTarget){case"first":return getFirstFocusableElement(popoverRef.current)?.focus();case"last":return getLastFocusableElement(popoverRef.current)?.focus()}}),[active,autofocusTarget]);const closeOnEscape=(0,react.useCallback)((e=>{"Escape"===e.key&&active&&onClose?.()}),[active,onClose]),triggerMarkup=trigger?(0,react.cloneElement)(react.Children.only(trigger),{ref:triggerRef}):void 0,popoverMarkup=active?(0,jsx_runtime.jsx)(Portal.h,{idPrefix:"Anique-Popover",children:(0,jsx_runtime.jsx)(PopoverContent,{className:"Anique-PopoverContent",ref:popoverRef,style:{top:top+(triggerRef?.current).offsetHeight||0,left},children})}):void 0;return(0,jsx_runtime.jsxs)("div",{className:"Anique-PopoverWrapper",onKeyUp:closeOnEscape,children:[triggerMarkup,popoverMarkup]})};Popover.displayName="Popover"},"./src/lib/src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=({children,idPrefix})=>{const target=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let container=document.getElementById(idPrefix||"portal");return container||(container=document.createElement("div"),container.id=idPrefix||"portal",document.body.appendChild(container)),target.current&&container.appendChild(target.current),()=>{container?.childNodes.length&&(target.current&&container.removeChild(target.current),document.body.removeChild(container))}}),[idPrefix]);const uniqueID=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),portalID=idPrefix?.length>0?`${idPrefix}-${uniqueID}`:`portal-${uniqueID}`;return target.current||(target.current=document.createElement("div"),target.current.id=portalID),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,target.current)}},"./src/lib/src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AniqueStyledSpinner=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.svg`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,Spinner=({size="large",color="currentColor"})=>{const testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.I)("spinner"),spinnerSVGMarkup=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AniqueStyledSpinner,{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-icon":"spinner",...testid,width:"small"===size?"16":"32",height:"small"===size?"16":"32",fill:color,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"})});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"Anique-Spinner",children:spinnerSVGMarkup})};Spinner.displayName="Spinner"},"./src/lib/src/icons/SelectMinor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgSelectMinor=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"#5C5F62",d:"M7.676 9h4.648c.563 0 .879-.603.53-1.014L10.531 5.24a.708.708 0 0 0-1.062 0L7.145 7.986C6.798 8.397 7.113 9 7.676 9Zm4.648 2H7.676c-.563 0-.878.603-.53 1.014l2.323 2.746c.27.32.792.32 1.062 0l2.323-2.746c.349-.411.033-1.014-.53-1.014Z"})});SvgSelectMinor.displayName="SvgSelectMinor";const __WEBPACK_DEFAULT_EXPORT__=SvgSelectMinor},"./src/lib/src/utilities/useOffsetPosition.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>useOffsetPosition});var react=__webpack_require__("./node_modules/react/index.js");const useOffsetPosition=(htmlRef,offsetX=0,offsetY=0)=>{const[position,setPosition]=(0,react.useState)({top:0,left:0});return(0,react.useEffect)((()=>{const el=htmlRef.current;if(el){const{top,left}=(el=>{let left=0,top=0;for(;el&&!isNaN(el.offsetLeft)&&!isNaN(el.offsetTop);)left+=el.offsetLeft-el.scrollLeft,top+=el.offsetTop-el.scrollTop,el=el.offsetParent;return{top,left}})(el);setPosition({top:top+offsetY,left:left+offsetX})}}),[]),{htmlRef,top:position.top,left:position.left}}}}]);
//# sourceMappingURL=4392.edc303ab.iframe.bundle.js.map