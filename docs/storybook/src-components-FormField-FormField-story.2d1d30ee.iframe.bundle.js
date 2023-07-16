"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[6249],{"./src/lib/src/components/FormField/FormField.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithErrors:()=>WithErrors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormField_story});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Error=__webpack_require__("./src/lib/src/components/Error/Error.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GapColumn=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-direction: column;
  ${props=>props.gap&&emotion_react_browser_esm.iv`
      gap : ${props.gap}
  `}
`;function FormField(props){return(0,jsx_runtime.jsxs)(GapColumn,{className:props.className,id:props.id,gap:props.gap,children:[(0,jsx_runtime.jsx)(GapColumn,{gap:props.innerGap,children:props.children}),props.errors.map((errorText=>(0,jsx_runtime.jsx)(Error.j,{children:errorText},errorText)))]})}FormField.displayName="FormField";var Input=__webpack_require__("./src/lib/src/components/Input/Input.ts");const FormField_story={title:"components/FormField",component:FormField},WithErrors=()=>(0,jsx_runtime.jsx)(FormField,{errors:["Username cannot be empty"],gap:"0.5em",children:(0,jsx_runtime.jsx)(Input.I,{placeholder:"Username"})});WithErrors.displayName="WithErrors",WithErrors.parameters={...WithErrors.parameters,docs:{...WithErrors.parameters?.docs,source:{originalSource:'() => {\n  return <FormField errors={["Username cannot be empty"]} gap={"0.5em"}>\r\n            <Input placeholder={"Username"} />\r\n        </FormField>;\n}',...WithErrors.parameters?.docs?.source}}};const __namedExportsOrder=["WithErrors"]},"./src/lib/src/components/Error/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Error});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/src/icons/AlertMinor.tsx"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledError=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.p((({theme:{color,font,fontSize}})=>`\n        display: inline-flex;\n        flex-flow: row wrap;\n        gap: 5px;\n        font-family: ${font.fontPrimary};\n        font-size: ${fontSize.fontSize3};\n        color: ${color.btnAlert};\n    `)),Error=({id,children,className,icon})=>{const _id=id||(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.f)("error");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledError,{id:_id,className:`Anique-Error ${className||""}`,role:"alert",children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.J,{source:_icons__WEBPACK_IMPORTED_MODULE_5__.Z,color:"btnAlert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{id:`${_id}-text`,className:"Anique-ErrorText",children})]})};Error.displayName="Error"},"./src/lib/src/components/Input/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});const Input=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.input`
  width: 100%;
  padding: 0.9em;
  //font-size: 0.8em;
  //font-family: inherit;
  letter-spacing: 0.1em;
  border: 3px solid ${props=>props.theme.color.textTertiary};
  border-radius: 6px;
  //border-radius: 0 0.4em 0.4em 0;
  transition: border-color 0.3s ease;
  //border-style:ridge;

  font-family: ${props=>props.theme.font.fontSecondary};
  font-size: ${props=>props.theme.fontSize.fontSize4};

  &:focus {
    outline: none;
    border-color: #2962ff;
  }
`}}]);
//# sourceMappingURL=src-components-FormField-FormField-story.2d1d30ee.iframe.bundle.js.map