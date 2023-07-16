import React, {ChangeEventHandler} from "react"
import styled from "@emotion/styled";
import {css} from "@emotion/react";

interface ToggleSwitchProps {

    offText: string

    onText: string

    checked ?: boolean

    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;

}

const ButtonContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`

const ButtonContainerI = styled.i`
  display: inline-block;
  position: relative;
  top: -9px;
`

const Label = styled.label`
  font-size: 13px;
  color: ${props=> props.theme.color.textPrimary};
  font-weight: 500;
`

const ButtonColorModeSwitch = styled(Label)`
  display: inline-block;
  margin: 0px;
  position: relative;
`

const ButtonColorModeSwitchInner = styled(Label)<{ checked: boolean }>`
  margin: 0px;
  width: 140px;
  height: 30px;
  background: ${props=> props.theme.color.textTertiary};
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  /*box-shadow: 0px 0px 8px 0px rgba(17, 17, 17, 0.34) inset;*/
  display: block;
  cursor: pointer;

  &:before {
    content: attr(data-on);
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    top: 7px;
    right: 20px;
    ${props => props.checked && css`
      content: attr(data-off);
      right: auto;
      left: 20px;
    `}
  }

  &:after {
    content: attr(data-off);
    width: 70px;
    height: 26px;
    background: ${props=> props.theme.color.bgPrimary};
    border-radius: 26px;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
    
    ${props => props.checked && css`
        content: attr(data-on);
        left: 68px;
        //background: #3c3c3c;
    `}
  }

  // ${props => props.checked && css`
  //   background: #151515;
  //   color: #fff;
  // `}

`

const ButtonColorModeSwitchCheckbox = styled.input`
  cursor: pointer;
  width: 50px;
  height: 25px;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0px;
`

export function ToggleSwitch(props: ToggleSwitchProps) {
    return (
        <ButtonContainer>
            <ButtonColorModeSwitch className="switch btn-color-mode-switch">
                <ButtonColorModeSwitchCheckbox
                    type="checkbox"
                    name="color_mode"
                    id="color_mode"
                    value="1"
                    checked={props.checked ?? false}
                    onChange={props.onChange}
                />
                <ButtonColorModeSwitchInner
                    htmlFor="color_mode"
                    data-on={props.onText}
                    data-off={props.offText}
                    className="btn-color-mode-switch-inner"
                    checked={props.checked ?? false}
                />
            </ButtonColorModeSwitch>
            <ButtonContainerI className="fa fa-moon-o" aria-hidden="true"></ButtonContainerI>
        </ButtonContainer>
    )
}