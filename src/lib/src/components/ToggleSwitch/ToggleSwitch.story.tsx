import {Meta, StoryObj} from "@storybook/react"
import {ToggleSwitch} from "./ToggleSwitch";
import {useState} from "react";

export default {
    title: "components/ToggleSwitch",
    component: ToggleSwitch,
} as Meta<typeof ToggleSwitch>

export const ToggleSwitchObj : StoryObj<typeof ToggleSwitch> = {
    name : "Toggle Switch",
    args : {
        onText : "Light",
        offText : "Dark",
    }
}

export const Interactive = () => {
    const [active,setActive] = useState(false)
    return (
        <ToggleSwitch
            onText={"On"}
            offText={"Off"}
            checked={active}
            onChange={(e)=> setActive(!active) }
        />
    )
}