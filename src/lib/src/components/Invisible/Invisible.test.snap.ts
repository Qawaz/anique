// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`components/Invisible <Invisible /> Run Snapshot Test 1`] = `
.emotion-1 {
  visibility: hidden!important;
  position: absolute!important;
  top: 0!important;
  width: 1px!important;
  height: 1px!important;
  margin: 0!important;
  padding: 0!important;
  overflow: hidden!important;
  border: 0!important;
  outline: 0!important;
  white-space: nowrap!important;
  -webkit-clip-path: inset(50%)!important;
  clip-path: inset(50%)!important;
}

.emotion-2 {
  color: rgba(0, 0, 0, 1);
}

.emotion-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 0.625rem;
}

.emotion-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  width: 100%;
}

.emotion-4 .Anique-LabelContainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.emotion-4 .Anique-LabelContainer>.Anique-TextfieldLabel {
  font-size: 0.9375rem;
}

.emotion-4 .Anique-Textfield {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.emotion-4 .Anique-Textfield>.Anique-TextfieldPrefix {
  position: absolute;
  left: 0.5rem;
  color: rgba(109, 113, 117, 1);
}

.emotion-4 .Anique-Textfield>.Anique-Input {
  width: 100%;
  min-height: inherit;
  padding: 0.625rem;
  padding-left: undefined;
  border: 1px solid rgba(203, 213, 225, 1);
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9375rem;
  text-align: left;
  text-transform: none;
  -webkit-transition: outline 0.05s ease-in-out;
  transition: outline 0.05s ease-in-out;
  resize: none;
}

.emotion-4 .Anique-Textfield>.Anique-Input:focus {
  outline: 2px solid blue;
  outline-offset: 0.1rem;
}

.emotion-4 .Anique-Textfield>.Anique-PasswordShowHide,
.emotion-4 .Anique-Textfield .Anique-TextClearButton {
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
}

.emotion-4 .Anique-TextfieldErrors {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

<form
  className=Anique-Form emotion-0
  data-testid=test-form
  id="Anique-Form-0"
  onSubmit={[Function]}
>
  <span
    className=Anique-Invisible emotion-1
  >
    <h2
      className=Anique-Heading emotion-2
      id="Anique-Heading-1"
    >
      This Title is Hidden
    </h2>
  </span>
  <div
    className=Anique-FormLayout emotion-3
  >
    <div
      className=Anique-FormLayoutGroupItem
    >
      <div
        className=Anique-TextfieldContainer emotion-4
      >
        <div
          className=Anique-LabelContainer
        >
          <label
            className=Anique-TextfieldLabel 
            htmlFor="Anique-Textfield-2"
            id="Anique-TextfieldLabel-3"
          >
            Email
          </label>
        </div>
        <div
          className=Anique-Textfield
          data-field=email
        >
          <input
            aria-labelledby="Anique-TextfieldLabel-4"
            className=Anique-Input
            id="Anique-Textfield-5"
            name=email
            onBlur={[Function]}
            onFocus={[Function]}
            placeholder=Email
            type=text
          />
        </div>
      </div>
    </div>
  </div>
</form>
`;
