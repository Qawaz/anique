import {FloatingActionButton, RippledFloatingActionButton} from "./FAB";
import {Meta, StoryObj} from "@storybook/react";
import { SelectMinor} from "../../icons";

export default {
    title: "components/FAB",
    component: FloatingActionButton
} as Meta<typeof FloatingActionButton>

export const FAB: StoryObj<typeof FloatingActionButton> = {
    title: "Text Fab",
    args: {
        children: "+"
    }
}

export function IconFab() {
    return (
        <FloatingActionButton>
            <SelectMinor/>
        </FloatingActionButton>
    )
}

export function ButtonFab() {
    const FabButton = FloatingActionButton.withComponent("button")
    return (
        <FabButton>
            +
        </FabButton>
    )
}

export function RippledFab() {
    return (
        <RippledFloatingActionButton>
            +
        </RippledFloatingActionButton>
    )
}