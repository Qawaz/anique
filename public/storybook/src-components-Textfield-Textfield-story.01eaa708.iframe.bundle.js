(self.webpackChunkanique=self.webpackChunkanique||[]).push([[927],{"./src/lib/src/components/Textfield/Textfield.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTextfield:()=>DefaultTextfield,Disabled:()=>Disabled,MonospacedFont:()=>MonospacedFont,MultilineField:()=>MultilineField,NumberWithPrefix:()=>NumberWithPrefix,Password_with_Errors:()=>Password_with_Errors,ReadOnly:()=>ReadOnly,RequiredEmail_with_LabelHidden:()=>RequiredEmail_with_LabelHidden,TextfieldSelectedOnFocus:()=>TextfieldSelectedOnFocus,TextfieldWithClearButton:()=>TextfieldWithClearButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Textfield__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./src/lib/src/components/Textfield/Textfield.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/yargs/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"components/Textfield",component:_Textfield__WEBPACK_IMPORTED_MODULE_4__.V},Template=({value,onChange,...args})=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value??""),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setInputValue(e.target.value)}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Textfield__WEBPACK_IMPORTED_MODULE_4__.V,{...args,value:inputValue,onChange:handleChange})};Template.displayName="Template";const ClearTemplate=({value,onClearButtonClick,onChange,...args})=>{const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value??"T-Shirt"),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setInputValue(e.target.value)}),[]),handleClearButtonClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>setInputValue("")),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Textfield__WEBPACK_IMPORTED_MODULE_4__.V,{value:inputValue,onChange:handleChange,clearButton:!0,onClearButtonClick:handleClearButtonClick,...args})};ClearTemplate.displayName="ClearTemplate";const DefaultTextfield=Template.bind({});DefaultTextfield.args={label:"Name",value:"Jayanta Samaddar"};const RequiredEmail_with_LabelHidden=Template.bind({});RequiredEmail_with_LabelHidden.args={type:"email",label:"Email",required:!0,labelHidden:!0,value:"jayanta@zenius.one"};const Password_with_Errors=Template.bind({});Password_with_Errors.args={name:"password",type:"password",label:"Password",togglePasswordIcon:!0,errors:["Password is invalid","Password must contain at least 1 upper case, numeric, and special character"]};const MultilineField=Template.bind({});MultilineField.args={label:"Description",multiline:!0,min:4,max:8};const MonospacedFont=Template.bind({});MonospacedFont.args={label:"Comments",multiline:!0,monospaced:!0,value:"Leave us a message..."};const Disabled=Template.bind({});Disabled.args={label:"Organization Name",disabled:!0,value:"Zenius"};const ReadOnly=Template.bind({});ReadOnly.args={label:"Organization Name",readOnly:!0,value:"Zenius"};const TextfieldSelectedOnFocus=Template.bind({});TextfieldSelectedOnFocus.args={label:"Organization Name",selectOnFocus:!0,value:"Zenius"};const TextfieldWithClearButton=ClearTemplate.bind({});TextfieldWithClearButton.args={label:"Tag"};const NumberWithPrefix=Template.bind({});NumberWithPrefix.args={label:"Amount",type:"number",min:0,prefix:"₹"},DefaultTextfield.parameters={...DefaultTextfield.parameters,docs:{...DefaultTextfield.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...DefaultTextfield.parameters?.docs?.source},description:{story:"Stories",...DefaultTextfield.parameters?.docs?.description}}},RequiredEmail_with_LabelHidden.parameters={...RequiredEmail_with_LabelHidden.parameters,docs:{...RequiredEmail_with_LabelHidden.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...RequiredEmail_with_LabelHidden.parameters?.docs?.source}}},Password_with_Errors.parameters={...Password_with_Errors.parameters,docs:{...Password_with_Errors.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...Password_with_Errors.parameters?.docs?.source}}},MultilineField.parameters={...MultilineField.parameters,docs:{...MultilineField.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...MultilineField.parameters?.docs?.source}}},MonospacedFont.parameters={...MonospacedFont.parameters,docs:{...MonospacedFont.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...MonospacedFont.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...ReadOnly.parameters?.docs?.source}}},TextfieldSelectedOnFocus.parameters={...TextfieldSelectedOnFocus.parameters,docs:{...TextfieldSelectedOnFocus.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...TextfieldSelectedOnFocus.parameters?.docs?.source}}},TextfieldWithClearButton.parameters={...TextfieldWithClearButton.parameters,docs:{...TextfieldWithClearButton.parameters?.docs,source:{originalSource:"({\n  value,\n  onClearButtonClick,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? 'T-Shirt');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  const handleClearButtonClick = useCallback(() => setInputValue(''), []);\n  return <Textfield value={inputValue} onChange={handleChange} clearButton={true} onClearButtonClick={handleClearButtonClick} {...args} />;\n}",...TextfieldWithClearButton.parameters?.docs?.source}}},NumberWithPrefix.parameters={...NumberWithPrefix.parameters,docs:{...NumberWithPrefix.parameters?.docs,source:{originalSource:"({\n  value,\n  onChange,\n  ...args\n}) => {\n  const [inputValue, setInputValue] = useState(value ?? '');\n  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {\n    setInputValue(e.target.value);\n  }, []);\n  return <Textfield {...args} value={inputValue} onChange={handleChange} />;\n}",...NumberWithPrefix.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultTextfield","RequiredEmail_with_LabelHidden","Password_with_Errors","MultilineField","MonospacedFont","Disabled","ReadOnly","TextfieldSelectedOnFocus","TextfieldWithClearButton","NumberWithPrefix"]},"./src/lib/src/components/Error/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Icon=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgAlertMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",fill:"#5C5F62"})});SvgAlertMinor.displayName="SvgAlertMinor";const AlertMinor=SvgAlertMinor;var generateUniqueID=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts");const StyledError=emotion_styled_browser_esm.Z.p((({theme:{color,font,fontSize}})=>`\n        display: inline-flex;\n        flex-flow: row wrap;\n        gap: 5px;\n        font-family: ${font["--ursa-font-primary"]};\n        font-size: ${fontSize["--ursa-font-size-3"]};\n        color: ${color["--ursa-btn-alert"]};\n    `)),Error=({id,children,className,icon})=>{const _id=id||(0,generateUniqueID.f)("error");return(0,jsx_runtime.jsxs)(StyledError,{id:_id,className:`Ursa-Error ${className||""}`,role:"alert",children:[icon&&(0,jsx_runtime.jsx)(Icon.J,{source:AlertMinor,color:"--ursa-btn-alert"}),(0,jsx_runtime.jsx)("span",{id:`${_id}-text`,className:"Ursa-ErrorText",children})]})};Error.displayName="Error"},"./src/lib/src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),_utilities__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const COLORS_WITH_BACKDROPS=["success","info","warning","alert"],UrsaIcon=({source:IconSVGComponent,color,size,backdrop,accessibilityLabel,className,onClick})=>{let sourceType,testid="icon";"function"==typeof IconSVGComponent?sourceType="function":"placeholder"===IconSVGComponent?(sourceType="placeholder",testid+="-placeholder"):(sourceType="external",testid+="-external"),testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.I)(testid),backdrop&&color&&COLORS_WITH_BACKDROPS.includes(color);const _id=(0,_utilities__WEBPACK_IMPORTED_MODULE_4__.f)("Ursa-Icon"),iconMarkup={function:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconSVGComponent,{className:"Ursa-IconSVG",focusable:"false","aria-hidden":"true",...testid}),placeholder:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"Ursa-IconPlaceholder",...testid}),external:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"Ursa-IconSVG",src:`data:image/svg+xml;utf8,${IconSVGComponent}`,alt:"","aria-hidden":"true",...testid})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{id:_id,className:`Ursa-Icon ${className||""}`,onClick,children:iconMarkup[sourceType]})};UrsaIcon.displayName="UrsaIcon";const Icon=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(UrsaIcon)((({theme:{color,fontSize},color:IconColor,bgColor,size})=>{const computedProps={size:"1rem"};switch(size){case"small":computedProps.size=fontSize["--ursa-font-size-3"];break;case"medium":computedProps.size=fontSize["--ursa-font-size-6"];break;case"large":computedProps.size=fontSize["--ursa-font-size-7"];break;default:computedProps.size=fontSize["--ursa-font-size-5"]}return{display:"block",height:computedProps.size,width:computedProps.size,maxHeight:"100%",maxWidth:"100%",svg:{fill:IconColor?color[IconColor]:"currentColor",backgroundColor:bgColor?color[bgColor]:"none"},"&:hover":{color:"auto",backgroundColor:"auto"}}}))},"./src/lib/src/components/Textfield/Textfield.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Textfield});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),generateUniqueID=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),Error=__webpack_require__("./src/lib/src/components/Error/Error.tsx"),Icon=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgHideMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M10 12a2 2 0 0 0 2-2c0-.178-.03-.348-.074-.512l5.781-5.781a.999.999 0 1 0-1.414-1.414l-2.61 2.61A7.757 7.757 0 0 0 10 4C4.388 4 2.163 9.399 2.071 9.628a1.017 1.017 0 0 0 0 .744c.054.133.835 2.011 2.582 3.561l-2.36 2.36a.999.999 0 1 0 1.414 1.414l5.781-5.781c.164.043.334.074.512.074zm-4-2a4 4 0 0 1 4-4c.742 0 1.432.208 2.025.561l-1.513 1.513A2.004 2.004 0 0 0 10 8a2 2 0 0 0-2 2c0 .178.031.347.074.511l-1.513 1.514A3.959 3.959 0 0 1 6 10zm10.145-3.144-2.252 2.252c.064.288.106.585.106.893a4 4 0 0 1-4 4 3.97 3.97 0 0 1-.89-.108l-1.682 1.68A7.903 7.903 0 0 0 10 16c5.613 0 7.837-5.399 7.928-5.629a1.004 1.004 0 0 0 0-.742c-.044-.111-.596-1.437-1.784-2.773z",fill:"#5C5F62"})});SvgHideMinor.displayName="SvgHideMinor";const HideMinor=SvgHideMinor,SvgViewMinor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M17.928 9.628C17.837 9.399 15.611 4 10 4S2.162 9.399 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.163 10.601 4.389 16 10 16s7.837-5.399 7.928-5.628a1.017 1.017 0 0 0 0-.744zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 .002 4.001A2 2 0 0 0 9.999 8z",fill:"#5C5F62"})});SvgViewMinor.displayName="SvgViewMinor";const ViewMinor=SvgViewMinor,SvgCircleCancelMajor=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{d:"M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm7.707-3.707a1 1 0 0 0-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 1 0 1.414 1.414L10 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414L11.414 10l2.293-2.293a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293z",fill:"#5C5F62"})});SvgCircleCancelMajor.displayName="SvgCircleCancelMajor";const CircleCancelMajor=SvgCircleCancelMajor,UrsaTextfield=(0,react.forwardRef)((({id:_id,name,value,className,type="text",label,placeholder,disabled,minLength,maxLength,min,max,pattern,errors,labelHidden,labelAction,multiline,placeholderOff,required,readOnly,onChange,onKeyUp,onFocus,onBlur,onClearButtonClick,autoFocus,autoComplete,spellCheck,selectOnFocus,clearButton,togglePasswordIcon,prefix,suffix},ref)=>{const[showPassword,setShowPassword]=(0,react.useState)(!1),[focus,setFocus]=(0,react.useState)(!1),Name=name?.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"_").toLowerCase(),id=_id||(0,generateUniqueID.f)("Ursa-Textfield"),_labelid=(0,generateUniqueID.f)("Ursa-TextfieldLabel"),inputRef=(0,react.useRef)(null),textAreaRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(()=>multiline?textAreaRef.current:inputRef.current)),(0,react.useEffect)((()=>{const target=(multiline?textAreaRef:inputRef).current;focus?target?.focus():target?.blur()}),[focus,multiline]);let typeParsed;if("password"===type)typeParsed=showPassword?"text":"password";else typeParsed=type;const textAreaProps={...{spellCheck}},elementProps={...{id,className:"Ursa-Input",ref:multiline?textAreaRef:inputRef,name:Name,type:multiline?void 0:typeParsed,disabled,autoFocus,autoComplete,placeholder:placeholderOff?void 0:placeholder||label,readOnly,required,pattern},minLength,maxLength,max,min,value,onChange,onKeyUp,onFocus:e=>{if(setFocus(!0),selectOnFocus){const target=multiline?textAreaRef.current:inputRef.current;target?.select()}onFocus&&onFocus(e)},onBlur:e=>{setFocus(!1),onBlur&&onBlur&&onBlur(e)},...{"aria-describedby":errors?.length?errors.map(((e,i)=>`${id}-${i+1}-error-text`)).join(" "):void 0,"aria-labelledby":_labelid,"aria-required":required||void 0}},prefixMarkup=prefix&&(0,jsx_runtime.jsx)("div",{className:"Ursa-TextfieldPrefix",id:`${id}-Prefix`,children:prefix}),textfieldMarkup=(0,react.createElement)(multiline?"textarea":"input",multiline?Object.assign(elementProps,textAreaProps):elementProps),toggleShowPasswordMarkup="password"===type&&togglePasswordIcon&&(0,jsx_runtime.jsx)(Icon.J,{className:"Ursa-PasswordShowHide",source:showPassword?HideMinor:ViewMinor,onClick:()=>setShowPassword((prev=>!prev))}),clearMarkup=clearButton&&""!==value&&"password"!==type&&(0,jsx_runtime.jsx)(Icon.J,{className:"Ursa-TextClearButton",source:CircleCancelMajor,onClick:()=>{onClearButtonClick&&onClearButtonClick(id),setFocus(!0)}});return(0,jsx_runtime.jsxs)("div",{className:`Ursa-TextfieldContainer ${className||""}`,children:[(0,jsx_runtime.jsxs)("div",{className:"Ursa-LabelContainer",children:[(0,jsx_runtime.jsx)("label",{id:_labelid,className:"Ursa-TextfieldLabel "+(labelHidden?"hidden":""),htmlFor:id,children:label}),labelAction&&(0,jsx_runtime.jsx)("div",{className:"Ursa-TextfieldLabelAction",children:labelAction})]}),(0,jsx_runtime.jsxs)("div",{className:"Ursa-Textfield","data-field":name,children:[prefixMarkup,textfieldMarkup,toggleShowPasswordMarkup,clearMarkup]}),errors?.length&&(0,jsx_runtime.jsx)("div",{id:`${id}-errors`,className:"Ursa-TextfieldErrors",children:errors.map(((error,indx)=>(0,jsx_runtime.jsx)(Error.j,{id:`${id}-${indx+1}-error`,children:error},indx)))})]})})),Textfield=(0,emotion_styled_browser_esm.Z)(UrsaTextfield)((({theme:{color,fontSize},uppercase,align="left",monospaced,multiline,prefix,suffix})=>`\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        width: 100%;\n        \n        .Ursa-LabelContainer {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n\n          & > .Ursa-TextfieldLabel {\n            font-size: ${fontSize["--ursa-font-size-4"]};\n          }\n        }\n\n        .Ursa-Textfield {\n          position: relative;\n          display: flex;\n          align-items: center;\n          gap: 0.375rem;\n          width: 100%;\n          padding-top: 0.375rem;\n          padding-bottom: 0.375rem;\n\n          & > .Ursa-TextfieldPrefix {\n            position: absolute;\n            left: 0.5rem;\n            color: ${color["--ursa-text-secondary"]}\n          }\n\n          & > .Ursa-Input {\n            width: 100%;\n            min-height: ${multiline?"6.75rem":"inherit"};\n            padding: 0.625rem;\n            padding-left: ${prefix&&"1.625rem"};\n            border: 1px solid ${color["--ursa-btn-disabled"]};\n            border-radius: 4px;\n            font-family: ${monospaced?"monospace":"inherit"};\n            font-size: ${fontSize["--ursa-font-size-4"]};\n            text-align: ${align};\n            text-transform: ${uppercase?"uppercase":"none"};\n            transition: outline 0.05s ease-in-out;\n            resize: none;\n\n            &:focus {\n              outline: 2px solid blue;\n              outline-offset: 0.1rem;\n            }\n          }\n\n          & > .Ursa-PasswordShowHide, .Ursa-TextClearButton {\n            cursor: pointer;\n            position: absolute;\n            right: 0.5rem;\n          }\n        }\n        \n        .Ursa-TextfieldErrors {\n          display: flex;\n          flex-direction: column;\n        }\n    `))},"./src/lib/src/utilities/generateUniqueID.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>generateUniqueID});const generateUniqueID=prefix=>`${prefix?prefix+"-":""}${(10*Math.random()+1).toString(16).replace(".","")}`},"./src/lib/src/utilities/useTestId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>useTestId});const useTestId=id=>({})},"./node_modules/require-main-filename sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/require-main-filename sync recursive",module.exports=webpackEmptyContext},"./node_modules/yargs-parser sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/yargs-parser sync recursive",module.exports=webpackEmptyContext},"./node_modules/yargs/build/lib sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/yargs/build/lib sync recursive",module.exports=webpackEmptyContext},"./node_modules/yargs sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/yargs sync recursive",module.exports=webpackEmptyContext},"?e309":()=>{},"?3a7d":()=>{},"?69e6":()=>{},"?0fd5":()=>{},"?e785":()=>{}}]);