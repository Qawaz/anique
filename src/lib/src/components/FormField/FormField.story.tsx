import {Meta, StoryFn, StoryObj} from "@storybook/react";
import {FormField} from "./FormField";
import {Input} from "../Input";

export default {
    title : "components/FormField",
    component : FormField
} as Meta<typeof FormField>

export const WithErrors : StoryFn<typeof FormField> = () => {
    return (
        <FormField errors={[
            "Username cannot be empty"
        ]}
            gap={"0.5em"}
        >
            <Input placeholder={"Username"} />
        </FormField>
    )
}