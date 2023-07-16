import React from "react"
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const HorizontalDividerContainer = styled.div<{ color?: string, hasText: boolean }>`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-weight: normal;
  font-family: 'Verdana', sans-serif;
  color: ${props => props.color || "#9A9A9AFF"};

  ${props => !props.hasText && css`
    height: 1px;
    background: ${props.color || "#9A9A9AFF"};
  `}

  ${props => css`
    div:first-child {
      width: 100%;
      margin-right: 10px;
      background: ${props.color || "#9A9A9AFF"};
      height: 1px;
    }
  `}

  ${props => css`
    div:last-child {
      width: 100%;
      margin-left: 10px;
      background: ${props.color || "#9A9A9AFF"};
      height: 1px;
    }
  `}

`

export interface HorizontalDividerProps {

    color?: string

    text?: string

    className?: string | undefined;

    id?: string | undefined;

}

export function HorizontalDivider(props: HorizontalDividerProps) {
    return (
        <HorizontalDividerContainer color={props.color} className={props.className} id={props.id}
                                    hasText={props.text != null}>
            <div/>

            {props.text ? (props.text) : null}

            <div/>
        </HorizontalDividerContainer>
    )
}