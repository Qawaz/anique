import React, {PropsWithChildren} from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {Error} from "../Error";

interface FormFieldProps extends PropsWithChildren {
    className?: string
    id?: string
    gap ?: string
    innerGap ?: string
    errors: string[]
}

const GapColumn = styled.div<{ gap ?: string }>`
  display: flex;
  flex-direction: column;
  ${props=> props.gap && css`
      gap : ${props.gap}
  `}
`

export function FormField(props: FormFieldProps) {
    return (
        <GapColumn className={props.className} id={props.id} gap={props.gap}>
            <GapColumn gap={props.innerGap}>
                {props.children}
            </GapColumn>
            {props.errors.map((errorText) => (
                <Error>{errorText}</Error>
            ))}
        </GapColumn>
    )
}