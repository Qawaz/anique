import {
    Meta, StoryFn
} from "@storybook/react";
import {HorizontalDivider} from "./HorizontalDivider";

export default {
    title: "components/HorizontalDivider",
    component: HorizontalDivider,
} as Meta<typeof HorizontalDivider>

export const WithoutText : StoryFn<typeof HorizontalDivider> = () => {
    return (
        <HorizontalDivider />
    )
}

export const WithText : StoryFn<typeof HorizontalDivider> = () => {
    return (
        <HorizontalDivider text={"Sample Text"} />
    )
}