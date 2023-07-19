import {Meta, StoryObj} from "@storybook/react";
import {SelectMinor} from "../../icons";
import {IconButton, RippledIconButton} from "./IconButton";

export default {
    title: "components/IconButton",
    component: IconButton
} as Meta<typeof IconButton>

export const TextIconButton: StoryObj<typeof IconButton> = {
    args: {
        children: "+"
    }
}

export function SimpleIconButton() {
    return (
        <IconButton>
            <SelectMinor/>
        </IconButton>
    )
}

export function IconButtonWithRipple() {
    return (
        <RippledIconButton>
            <SelectMinor/>
        </RippledIconButton>
    )
}