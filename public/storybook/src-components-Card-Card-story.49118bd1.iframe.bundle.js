"use strict";(self.webpackChunkanique=self.webpackChunkanique||[]).push([[893],{"./src/lib/src/components/Card/Card.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicCard:()=>BasicCard,CardWithFooterActions:()=>CardWithFooterActions,CardWithHeaderActions:()=>CardWithHeaderActions,CardWithMultipleSections:()=>CardWithMultipleSections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_story});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),Button=__webpack_require__("./src/lib/src/components/Button/Button.tsx"),ButtonGroup=__webpack_require__("./src/lib/src/components/ButtonGroup/ButtonGroup.tsx"),Stack=__webpack_require__("./src/lib/src/components/Stack/Stack.tsx"),Text=__webpack_require__("./src/lib/src/components/Text/Text.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledCardHeader=emotion_styled_browser_esm.Z.div((({theme:{color,fontSize}})=>({padding:"1.25rem 1.25rem 0"}))),CardHeader=({title,actions,children})=>{const actionMarkup=actions?(0,jsx_runtime.jsx)(ButtonGroup.h,{children:actions.map((({label,onAction,...rest},index)=>(0,jsx_runtime.jsx)(Button.z,{onClick:onAction,plain:!0,...rest,children:label},index)))}):void 0,titleMarkup=(0,react.isValidElement)(title)?title:(0,jsx_runtime.jsx)(Text.x,{as:"h2",variant:"headingM",children:title});return(0,jsx_runtime.jsx)(StyledCardHeader,{className:"Ursa-CardHeader",children:actionMarkup||children?(0,jsx_runtime.jsxs)(Stack.K,{align:"baseline",justify:"between",children:[(0,jsx_runtime.jsx)(Stack.K.Item,{children:titleMarkup}),actionMarkup,children]}):titleMarkup})};CardHeader.displayName="CardHeader";const StyledCardSection=emotion_styled_browser_esm.Z.div((()=>({padding:"1.25rem","& .Ursa-CardSectionTitle":{paddingBottom:"0.75rem"}}))),CardSection=({title,children,actions})=>{const actionMarkup=actions?(0,jsx_runtime.jsx)(ButtonGroup.h,{children:actions.map((({label,...rest})=>(0,jsx_runtime.jsx)(Button.z,{...rest,children:label})))}):void 0,titleMarkup="string"==typeof title?(0,jsx_runtime.jsx)(Text.x,{as:"h3",variant:"headingXS",transform:"uppercase",children:title}):title,titleAreaMarkup=titleMarkup||actionMarkup?(0,jsx_runtime.jsx)("div",{className:"Ursa-CardSectionTitle",children:actionMarkup?(0,jsx_runtime.jsxs)(Stack.K,{align:"baseline",children:[(0,jsx_runtime.jsx)(Stack.K.Item,{children:titleMarkup}),actionMarkup]}):titleMarkup}):void 0;return(0,jsx_runtime.jsxs)(StyledCardSection,{className:"Ursa-CardSection",children:[titleAreaMarkup,children]})};CardSection.displayName="CardSection";const UrsaCard=({title,className,children,sectioned,actions,primaryFooterAction,secondaryFooterActions})=>{const headerMarkup=title||actions?(0,jsx_runtime.jsx)(CardHeader,{title,actions}):void 0,contentMarkup=sectioned?(0,jsx_runtime.jsx)(CardSection,{children}):children,primaryFooterActionMarkup=primaryFooterAction?(0,jsx_runtime.jsx)(Button.z,{primary:!0,onClick:primaryFooterAction.onAction,...primaryFooterAction,children:primaryFooterAction.label}):void 0;let secondaryFooterActionMarkup;secondaryFooterActions?.length&&(1===secondaryFooterActions.length?secondaryFooterActionMarkup=(0,jsx_runtime.jsx)(Button.z,{...secondaryFooterActions[0],children:secondaryFooterActions[0].label}):(Button.z,secondaryFooterActions[0],secondaryFooterActions[0].label));const footerMarkup=primaryFooterActionMarkup||secondaryFooterActionMarkup?(0,jsx_runtime.jsx)("div",{className:"Ursa-CardFooter",children:(0,jsx_runtime.jsxs)(ButtonGroup.h,{children:[secondaryFooterActionMarkup,primaryFooterActionMarkup]})}):void 0;return(0,jsx_runtime.jsxs)("div",{className:`Ursa-Card ${className||""}`,children:[headerMarkup,contentMarkup,footerMarkup]})};UrsaCard.displayName="UrsaCard";const StyledCard=(0,emotion_styled_browser_esm.Z)(UrsaCard)((({theme:{color,fontSize,border},footerActionAlignment})=>{let justifyContent;switch(footerActionAlignment){case"left":justifyContent="flex-start";break;case"space-between":justifyContent="space-between";break;default:justifyContent="flex-end"}return{borderRadius:border["--ursa-border-radius-xl"],backgroundColor:color["--ursa-white"],color:color["--ursa-black"],boxShadow:"0 0 0.3125rem rgb(23 24 25 / 10%), 0 0 0.625rem rgb(23 24 25 / 15%)","& > .Ursa-CardFooter":{display:"flex",alignItems:"center",justifyContent,padding:"0 1.25rem 1.25rem"},"& h2, h3":{color:color["--ursa-black"]},"& > .Ursa-CardSection + .Ursa-CardSection":{borderTop:`1px solid ${color["--ursa-btn-disabled"]}`}}})),Card=(0,react.memo)((props=>(0,jsx_runtime.jsx)(StyledCard,{...props})));Card.Header=CardHeader,Card.Section=CardSection;const Card_story={title:"Components/Card",component:Card},Template=args=>(0,jsx_runtime.jsx)(Card,{...args});Template.displayName="Template";const BasicCard=Template.bind({});BasicCard.args={title:"Order Information",children:(0,jsx_runtime.jsx)("p",{children:"View a summary of Order Information"}),sectioned:!0};const CardWithHeaderActions=Template.bind({});CardWithHeaderActions.args={title:"Additional Information",children:(0,jsx_runtime.jsx)("p",{children:"Add additional shipping information that the delivery partners can use."}),sectioned:!0,actions:[{label:"Add Info",onAction:()=>alert("Add info")}]};const CardWithFooterActions=Template.bind({});CardWithFooterActions.args={title:"Shipment Information",children:(0,jsx_runtime.jsx)(Card.Section,{title:"Items",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Item 1"}),(0,jsx_runtime.jsx)("li",{children:"Item 2"})]})}),primaryFooterAction:{label:"Add Tracking Number",onAction:()=>alert("Add Tracking Number")},secondaryFooterActions:[{label:"Print",onAction:()=>alert("Print")}]};const CardWithMultipleSections=Template.bind({});CardWithMultipleSections.args={title:"Order Information",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Card.Section,{title:"Items",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Item 1"}),(0,jsx_runtime.jsx)("li",{children:"Item 2"})]})}),(0,jsx_runtime.jsx)(Card.Section,{title:"Items",children:(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Item 1"}),(0,jsx_runtime.jsx)("li",{children:"Item 2"})]})})]})},BasicCard.parameters={...BasicCard.parameters,docs:{...BasicCard.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...BasicCard.parameters?.docs?.source}}},CardWithHeaderActions.parameters={...CardWithHeaderActions.parameters,docs:{...CardWithHeaderActions.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...CardWithHeaderActions.parameters?.docs?.source}}},CardWithFooterActions.parameters={...CardWithFooterActions.parameters,docs:{...CardWithFooterActions.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...CardWithFooterActions.parameters?.docs?.source}}},CardWithMultipleSections.parameters={...CardWithMultipleSections.parameters,docs:{...CardWithMultipleSections.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...CardWithMultipleSections.parameters?.docs?.source}}};const __namedExportsOrder=["BasicCard","CardWithHeaderActions","CardWithFooterActions","CardWithMultipleSections"]},"./src/lib/src/components/ButtonGroup/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ButtonGroup});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonItem=({button})=>(0,jsx_runtime.jsx)("div",{className:"Ursa-ButtonItem",children:button});ButtonItem.displayName="ButtonItem";const UrsaButtonGroup=({children,className})=>{const content=react.Children.toArray(children).map(((child,index)=>(0,jsx_runtime.jsx)(ButtonItem,{button:child},index)));return(0,jsx_runtime.jsx)("div",{className:`Ursa-ButtonGroup ${className||""}`,role:"group",children:content})};UrsaButtonGroup.displayName="UrsaButtonGroup";const ButtonGroup=(0,emotion_styled_browser_esm.Z)(UrsaButtonGroup)((({spacing,justify,segmented,fullWidth,connectedTop,connectedBottom})=>`\n    display: flex;\n    flex-wrap: ${segmented?"nowrap":"wrap"};\n    flex-grow: ${fullWidth?"1":"0"};\n    min-width: ${fullWidth?"100%":"auto"};\n    align-items: stretch;\n    \n    .Ursa-ButtonContainer {\n      height: 100%;\n    }\n\n    ${segmented?`.Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > button, \n        .Ursa-ButtonItem:nth-of-type(n+1) > .Ursa-ButtonContainer > a {}\n      \n      .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)\n        > .Ursa-ButtonContainer\n        > button, .Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)\n        > .Ursa-ButtonContainer\n        > a {\n        border-radius: unset;\n        margin-right: -1px;\n      }\n\n      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > button, \n      .Ursa-ButtonItem:last-of-type > .Ursa-ButtonContainer > a {\n        margin-left: ${fullWidth?"-1px":"0"};\n        border-top-left-radius: unset;\n        border-bottom-left-radius: unset;\n        border-top-right-radius: ${connectedTop?"unset":"4px"};\n        border-bottom-right-radius: ${connectedBottom?"unset":"4px"};\n      }\n\n      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > button, \n      .Ursa-ButtonItem:first-of-type > .Ursa-ButtonContainer > a {\n        margin-right: -1px;\n        border-top-right-radius: unset;\n        border-bottom-right-radius: unset;\n        border-top-left-radius: ${connectedTop?"unset":"4px"};\n        border-bottom-left-radius: ${connectedBottom?"unset":"4px"};\n      }\n      `:`\n      justify-content: ${"end"===justify?"flex-end":"center"===justify?"center":"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"around":"flex-start"};\n      & .Ursa-ButtonItem:not(:first-of-type) {\n        margin-left: ${"extraTight"===spacing?"0.3125rem":"loose"===spacing?"1.25rem":"0.625rem"};\n      }\n      `}\n    \n    ${fullWidth&&"\n      .Ursa-ButtonItem {\n        flex: 1 1 auto;\n\n        button {\n          width: 100%;\n        }\n\n        &:hover {\n          z-index: 5;\n        }\n      }\n    "}\n  }\n  `))},"./src/lib/src/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UrsaStackItem=({className,children})=>(0,jsx_runtime.jsx)("div",{className:`Ursa-StackItem ${className||""}`,children});UrsaStackItem.displayName="UrsaStackItem";const Item=(0,emotion_styled_browser_esm.Z)(UrsaStackItem)((({vertical=!1,wrap=!0,justify="start",align="center",spacing="normal",fill=!1})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex-grow: ${fill?1:0};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"2px":"tight"===spacing?"5px":"loose"===spacing?"15px":"extraLoose"===spacing?"20px":"10px"};\n    `));var useTestId=__webpack_require__("./src/lib/src/utilities/useTestId.ts");const UnstyledStack=({className,children})=>{const testid=(0,useTestId.I)("test-stack");return(0,jsx_runtime.jsx)("div",{className:`Ursa-Stack ${className||""}`,...testid,children})};UnstyledStack.displayName="UnstyledStack";const Stack=(0,react.memo)((0,emotion_styled_browser_esm.Z)(UnstyledStack)((({vertical=!1,wrap=!0,justify="start",align=""+(vertical?"start":"center"),spacing="normal"})=>`\n        display: flex;\n        flex-direction: ${vertical?"column":"row"};\n        flex-wrap: ${wrap?"wrap":"nowrap"};\n        flex: ${"evenly"===justify?"1 1 auto":"0 1 auto"};\n        justify-content: ${"evenly"===justify?"space-evenly":"between"===justify?"space-between":"around"===justify?"space-around":"end"===justify?"flex-end":"flex-start"};\n        align-items: ${"baseline"===align?"baseline":"stretch"===align?"stretch":"end"===align?"flex-end":"start"===align||vertical&&!align?"flex-start":"center"};\n        gap: ${"extraTight"===spacing?"0.125rem":"tight"===spacing?"0.375rem":"loose"===spacing?"1rem":"extraLoose"===spacing?"1.25rem":"0.75rem"};\n        width: 100%;\n        height: 100%;\n        white-space: nowrap;\n    `)));Stack.Item=Item},"./src/lib/src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});__webpack_require__("./node_modules/react/index.js");var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_Invisible__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/src/components/Invisible/Invisible.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z)((({id,className,children,as,hidden})=>{const Element=as&&"inherit"!==as?as:"p",textMarkup=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Element,{id,className:`Ursa-Text ${className||""}`,children});return hidden?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Invisible__WEBPACK_IMPORTED_MODULE_3__.u,{children:textMarkup}):textMarkup}))((({theme:{color,fontSize},as:inputAs,variant:inputVariant,color:inputColor="normal",fontWeight,transform,strikethrough,underline,truncate,align,wrap})=>{const textDecorationValues=[];underline&&textDecorationValues.push("underline"),strikethrough&&textDecorationValues.push("line-through");const colors={normal:color["--ursa-text-primary"],success:color["--ursa-text-success"],warning:color["--ursa-text-warning"],error:color["--ursa-text-error"],subdued:color["--ursa-text-subdued"]},sizes={heading4XL:fontSize["--ursa-font-size-13"],heading3XL:fontSize["--ursa-font-size-12"],heading2XL:fontSize["--ursa-font-size-11"],headingXL:fontSize["--ursa-font-size-9"],headingL:fontSize["--ursa-font-size-8"],headingM:fontSize["--ursa-font-size-7"],headingS:fontSize["--ursa-font-size-6"],headingXS:fontSize["--ursa-font-size-5"],bodyL:fontSize["--ursa-font-size-6"],bodyM:fontSize["--ursa-font-size-5"],bodyS:fontSize["--ursa-font-size-4"]},variant=inputVariant||{h1:"heading4XL",h2:"heading3XL",h3:"heading2XL",h4:"headingXL",h5:"headingL",h6:"headingM",span:"bodyM",p:"bodyM",legend:"bodyM",inherit:"bodyM"}[inputAs&&"inherit"!==inputAs?inputAs:"p"];return{color:colors[inputColor],fontWeight:fontWeight||{headingXS:"semibold",headingS:"semibold",headingM:"semibold",headingL:"semibold",headingXL:"semibold",heading2XL:"semibold",heading3XL:"bold",heading4XL:"bold",bodyS:"regular",bodyM:"regular",bodyL:"regular"}[variant],fontSize:sizes[variant],textAlign:align,textDecoration:textDecorationValues.join(" ")||void 0,textTransform:transform||"none",maxWidth:truncate?"100%":void 0,overflow:truncate?"hidden":"visible",whiteSpace:truncate?"nowrap":"normal",textOverflow:truncate?"ellipsis":"clip",overflowWrap:wrap?"break-word":"normal"}}))}}]);