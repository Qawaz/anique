"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[861],{"./src/lib/src/components/Stack/Stack.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStack:()=>DefaultStack,HorizontalStack_withNoWrap:()=>HorizontalStack_withNoWrap,Stack_fill_space_evenly:()=>Stack_fill_space_evenly,Stack_with_an_Item_filling_space:()=>Stack_with_an_Item_filling_space,VerticalStack:()=>VerticalStack,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var ___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/components/Stack/Stack.tsx"),_Tag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/components/Tag/Tag.tsx"),_Heading__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/src/components/Heading/Heading.tsx"),_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/lib/src/components/Button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/src/components/ButtonGroup/ButtonGroup.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stack",component:___WEBPACK_IMPORTED_MODULE_3__.K},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.K,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Pending"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Unfulfilled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Cancelled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Returned"})]});Template.displayName="Template";const StackItemTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.K,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.K.Item,{fill:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Heading__WEBPACK_IMPORTED_MODULE_5__.X,{children:"Shipments"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.K.Item,{justify:"end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__.h,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.z,{children:"View Orders"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_7__.z,{primary:!0,children:"Create Shipment"})]})})]});StackItemTemplate.displayName="StackItemTemplate";const NoWrapTemplate=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.K,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Jackets & Hoodies"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Red"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Black"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Cotton"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Polyurethane"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Menswear"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Outerwear"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Fall-Winter 2022"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Runway"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"New In"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Best Sellers"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Most Reviewed"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Eco-Friendly"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_4__.V,{name:"Upcycled"})]});NoWrapTemplate.displayName="NoWrapTemplate";const DefaultStack=Template.bind({});DefaultStack.args={vertical:!1,align:"center",justify:"start",spacing:"normal",wrap:!0};const Stack_fill_space_evenly=Template.bind({});Stack_fill_space_evenly.args={vertical:!1,align:"center",justify:"evenly",spacing:"normal",wrap:!0};const VerticalStack=Template.bind({});VerticalStack.args={vertical:!0,align:"start",justify:"start",spacing:"normal",wrap:!0};const Stack_with_an_Item_filling_space=StackItemTemplate.bind({});Stack_with_an_Item_filling_space.args={vertical:!1,align:"center",justify:"between",spacing:"normal",wrap:!0};const HorizontalStack_withNoWrap=NoWrapTemplate.bind({});HorizontalStack_withNoWrap.args={justify:"start",spacing:"loose",wrap:!1},DefaultStack.parameters={...DefaultStack.parameters,docs:{...DefaultStack.parameters?.docs,source:{originalSource:"args => <Stack {...args}>\r\n    <Tag name={'Pending'} />\r\n    <Tag name={'Unfulfilled'} />\r\n    <Tag name={'Cancelled'} />\r\n    <Tag name={'Returned'} />\r\n  </Stack>",...DefaultStack.parameters?.docs?.source}}},Stack_fill_space_evenly.parameters={...Stack_fill_space_evenly.parameters,docs:{...Stack_fill_space_evenly.parameters?.docs,source:{originalSource:"args => <Stack {...args}>\r\n    <Tag name={'Pending'} />\r\n    <Tag name={'Unfulfilled'} />\r\n    <Tag name={'Cancelled'} />\r\n    <Tag name={'Returned'} />\r\n  </Stack>",...Stack_fill_space_evenly.parameters?.docs?.source}}},VerticalStack.parameters={...VerticalStack.parameters,docs:{...VerticalStack.parameters?.docs,source:{originalSource:"args => <Stack {...args}>\r\n    <Tag name={'Pending'} />\r\n    <Tag name={'Unfulfilled'} />\r\n    <Tag name={'Cancelled'} />\r\n    <Tag name={'Returned'} />\r\n  </Stack>",...VerticalStack.parameters?.docs?.source}}},Stack_with_an_Item_filling_space.parameters={...Stack_with_an_Item_filling_space.parameters,docs:{...Stack_with_an_Item_filling_space.parameters?.docs,source:{originalSource:'args => <Stack {...args}>\r\n    <Stack.Item fill={true}>\r\n      <Heading>Shipments</Heading>\r\n    </Stack.Item>\r\n    <Stack.Item justify="end">\r\n      <ButtonGroup>\r\n        <Button>View Orders</Button>\r\n        <Button primary>Create Shipment</Button>\r\n      </ButtonGroup>\r\n    </Stack.Item>\r\n  </Stack>',...Stack_with_an_Item_filling_space.parameters?.docs?.source}}},HorizontalStack_withNoWrap.parameters={...HorizontalStack_withNoWrap.parameters,docs:{...HorizontalStack_withNoWrap.parameters?.docs,source:{originalSource:'args => <Stack {...args}>\r\n    <Tag name="Jackets & Hoodies" />\r\n    <Tag name="Red" />\r\n    <Tag name="Black" />\r\n    <Tag name="Cotton" />\r\n    <Tag name="Polyurethane" />\r\n    <Tag name="Menswear" />\r\n    <Tag name="Outerwear" />\r\n    <Tag name="Fall-Winter 2022" />\r\n    <Tag name="Runway" />\r\n    <Tag name="New In" />\r\n    <Tag name="Best Sellers" />\r\n    <Tag name="Most Reviewed" />\r\n    <Tag name="Eco-Friendly" />\r\n    <Tag name="Upcycled" />\r\n  </Stack>',...HorizontalStack_withNoWrap.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultStack","Stack_fill_space_evenly","VerticalStack","Stack_with_an_Item_filling_space","HorizontalStack_withNoWrap"]},"./src/lib/src/components/ButtonGroup/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonItem=({button})=>(0,jsx_runtime.jsx)("div",{className:"Ursa-ButtonItem",children:button});ButtonItem.displayName="ButtonItem";const UrsaButtonGroup=({children,className})=>{const content=react.Children.toArray(children).map(((child,index)=>(0,jsx_runtime.jsx)(ButtonItem,{button:child},index)));return(0,jsx_runtime.jsx)("div",{className:`Ursa-ButtonGroup ${className||""}`,role:"group",children:content})};UrsaButtonGroup.displayName="UrsaButtonGroup";const ButtonGroup=(0,emotion_styled_browser_esm.Z)(UrsaButtonGroup)((({spacing,justify,segmented,fullWidth,connectedTop,connectedBottom})=>`\n    display: flex;\n    flex-wrap: ${segmented?"nowrap":"wrap"};\n    flex-grow: ${fullWidth?"1":"0"};\n    min-width: ${fullWidth?"100%":"auto"};\n    align-items: stretch;\n    \n    .Ursa-ButtonContainer {\n      height: 100%;\n    }\n\n    ${segmented?`.Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > button, \n        .Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > a {}\n      \n      .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)\n        > .Ursa-ButtonContainer\n        > button, .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)\n        > .Ursa-ButtonContainer\n        > a {\n        border-radius: unset;\n        margin-right: -1px;\n      }\n\n      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > button, \n      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > a {\n        margin-left: ${fullWidth?"-1px":"0"};\n        border-top-left-radius: unset;\n        border-bottom-left-radius: unset;\n        border-top-right-radius: ${connectedTop?"unset":"4px"};\n        border-bottom-right-radius: ${connectedBottom?"unset":"4px"};\n      }\n\n      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > button, \n      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > a {\n        margin-right: -1px;\n        border-top-right-radius: unset;\n        border-bottom-right-radius: unset;\n        border-top-left-radius: ${connectedTop?"unset":"4px"};\n        border-bottom-left-radius: ${connectedBottom?"unset":"4px"};\n      }\n      `:`\n      justify-content: ${"end"===justify?"flex-end":"center"===justify?"center":"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"around":"flex-start"};\n      & .Ursa-ButtonItem:not(:first-of-type) {\n        margin-left: ${"extraTight"===spacing?"0.3125rem":"loose"===spacing?"1.25rem":"0.625rem"};\n      }\n      `}\n    \n    ${fullWidth&&"\n      .Ursa-ButtonItem {\n        flex: 1 1 auto;\n\n        button {\n          width: 100%;\n        }\n\n        &:hover {\n          z-index: 5;\n        }\n      }\n    "}\n  }\n  `))},"./src/lib/src/components/Heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/generateUniqueID.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnstyledHeading=({element:Element="h2",children,className,id})=>{const _id=id||(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.f)("Ursa-Heading");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Element,{id:_id,className:`Ursa-Heading ${className||""}`,children})};UnstyledHeading.displayName="UnstyledHeading";const Heading=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(UnstyledHeading)((({theme:{color}})=>`\n        color: ${color["--ursa-text-primary"]}\n    `))},"./src/lib/src/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaStackItem=({className,children})=>(0,jsx_runtime.jsx)("div",{className:`Ursa-StackItem ${className||""}`,children});UrsaStackItem.displayName="UrsaStackItem";const Item=(0,emotion_styled_browser_esm.Z)(UrsaStackItem)((({vertical=!1,wrap=!0,justify="start",align="center",spacing="normal",fill=!1})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex-grow: ${fill?1:0};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"2px":"tight"===spacing?"5px":"loose"===spacing?"15px":"extraLoose"===spacing?"20px":"10px"};\n    `));var useTestId=__webpack_require__("./src/lib/src/utilities/useTestId.ts");const UnstyledStack=({className,children})=>{const testid=(0,useTestId.I)("test-stack");return(0,jsx_runtime.jsx)("div",{className:`Ursa-Stack ${className||""}`,...testid,children})};UnstyledStack.displayName="UnstyledStack";const Stack=(0,react.memo)((0,emotion_styled_browser_esm.Z)(UnstyledStack)((({vertical=!1,wrap=!0,justify="start",align=""+(vertical?"start":"center"),spacing="normal"})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex: ${"evenly"===justify?"1 1 auto":"0 1 auto"};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"0.125rem":"tight"===spacing?"0.375rem":"loose"===spacing?"1rem":"extraLoose"===spacing?"1.25rem":"0.75rem"};\n        width: 100%;\n        height: 100%;\n        white-space: nowrap;\n    `)));Stack.Item=Item},"./src/lib/src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/lib/src/icons/MobileCancelMajor.tsx"),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/lib/src/components/Icon/Icon.tsx"),_UnstyledButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/src/components/UnstyledButton/UnstyledButton.tsx"),_utilities__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/utilities/useTestId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaTag=({name,className,onClick,onRemove})=>{const testid=(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.I)("test-tag");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:`Ursa-Tag ${className||""}`,onClick,...testid,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"Ursa-TagName",children:name}),onRemove&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_UnstyledButton__WEBPACK_IMPORTED_MODULE_4__.k,{className:"Ursa-TagCloseButton",ariaLabel:`Remove ${name}`,onClick:onRemove,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.J,{className:"Ursa-TagClose",source:_icons__WEBPACK_IMPORTED_MODULE_6__.Z})})]})};UrsaTag.displayName="UrsaTag";const Tag=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)(UrsaTag)((({theme:{color,fontSize,border},onRemove})=>`\n        cursor: pointer;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        gap: 0.625rem;\n        font-size: ${fontSize["--ursa-font-size-1"]};\n        padding: 0.825em 1.375em;\n        background-color: ${color["--ursa-tag-bg-basic"]};\n        color: ${color["--ursa-tag-text"]};\n        border-radius: ${border["--ursa-border-radius-2xl"]};\n\n        &:focus {\n          outline: 1px solid ${color["--ursa-btn-primary"]};\n        }\n\n        ${onRemove&&`.Ursa-TagClose {\n            & > svg {\n              fill: ${color["--ursa-tag-text"]};\n              transition: opacity .15s ease-in-out;\n\n              &:hover {\n                fill: ${color["--ursa-black"]};\n              }\n            }\n          }`}\n    `))},"./src/lib/src/icons/MobileCancelMajor.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgMobileCancelMajor=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",role:"img",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z",fill:"#5C5F62"})});SvgMobileCancelMajor.displayName="SvgMobileCancelMajor";const __WEBPACK_DEFAULT_EXPORT__=SvgMobileCancelMajor}}]);