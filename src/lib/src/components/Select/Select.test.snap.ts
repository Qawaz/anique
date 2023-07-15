// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`components/Select <DefaultSelect /> Snapshot Test 1`] = `
.emotion-0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: Roboto,Helvetica,Arial,sans-serif;
}

.emotion-0>label {
  padding-bottom: 2px;
}

.emotion-0>.Anique-SelectContent {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.emotion-0>.Anique-SelectContent>select {
  width: 100%;
  padding: 0.625rem;
  border: 1px solid rgba(203, 213, 225, 1);
  border-radius: 4px;
  font-size: 0.9375rem;
  background-color: rgba(255, 255, 255, 1);
  -webkit-transition: outline 0.05s ease-in-out;
  transition: outline 0.05s ease-in-out;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  z-index: 1;
}

.emotion-0>.Anique-SelectContent>select:focus {
  outline: 2px solid blue;
  outline-offset: 0.1rem;
}

.emotion-0>.Anique-SelectContent>select option {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
}

.emotion-0>.Anique-SelectContent>.Anique-Icon {
  position: absolute;
  right: 1rem;
  color: currentColor;
}

.emotion-0>.Anique-SelectCurrentSelected {
  padding: 0.625rem;
}

.emotion-0>.Anique-SelectLabelHelpText {
  color: rgba(109, 113, 117, 1);
}

.emotion-2 {
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  max-height: 100%;
  max-width: 100%;
}

.emotion-2 svg {
  fill: currentColor;
  background-color: none;
}

.emotion-2:hover {
  color: auto;
  background-color: auto;
}

<div
  className=Anique-SelectContainer emotion-0
>
  <label
    className=Anique-Label Anique-SelectLabel emotion-1
    htmlFor="Anique-Select-0"
    id="Anique-SelectLabel-1"
  >
    Order Type
  </label>
  <div
    className=Anique-SelectContent
  >
    <select
      aria-describedby="Anique-SelectHelpText-2"
      aria-labelledby="Anique-SelectLabel-3"
      className=Anique-Select
      id="Anique-Select-4"
      name=order_type
      onChange={[Function]}
      value=
    >
      <option
        value=prepaid
      >
        Prepaid
      </option>
      <option
        value=cod
      >
        COD
      </option>
    </select>
    <span
      className=Anique-Icon emotion-2
      id="Anique-Icon-5"
    >
      <img
        alt=
        aria-hidden=true
        className=Anique-IconSVG
        data-testid=icon-external
        src=data:image/svg+xml;utf8,[object Object]
      />
    </span>
  </div>
</div>
`;
