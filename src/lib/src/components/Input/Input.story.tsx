import {Input} from "./Input";
import {Meta, StoryFn, StoryObj} from "@storybook/react"
import {useState} from "react";

export default {
    title: "Components/Input",
    component: Input
} as Meta<typeof Input>

export const SimpleInput: StoryFn = () => {
    const [value, setValue] = useState("This is a simple input")
    return (
        <Input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
    )
}