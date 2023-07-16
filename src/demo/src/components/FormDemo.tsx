import React from "react"
import styled from "@emotion/styled";
import {Button, Checkbox, Error, Form, FormField, H1, Radio, Select, ToggleSwitch} from "@qawaz/anique";
import {Textfield} from "@qawaz/anique";

interface FormDemoProps {
    isDarkTheme : boolean
    toggleDarkTheme : () => void
}

const DemoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const CenteredButton = styled(Button)`
  align-self: center !important;
`

export function FormDemo(props: FormDemoProps) {
    return (
        <DemoContainer>
            <H1>A Complex Form</H1>
            <ToggleSwitch
                onText={"Dark"}
                offText={"Light"}
                checked={props.isDarkTheme}
                onChange={props.toggleDarkTheme}
            />
            <FormContainer>
                <FormField
                    errors={[
                        "Name cannot be empty"
                    ]}
                >
                    <Textfield
                        placeholder={"Name"}
                        label={"Your Name"}
                    />
                </FormField>
                <FormField
                    errors={[
                        "Email cannot be empty"
                    ]}
                >
                    <Textfield
                        type={"email"}
                        placeholder={"Email"}
                        label={"Your Email"}
                        helpText={"A valid email is required"}
                    />
                </FormField>
                <FormField
                    errors={[
                        "You haven't selected an option"
                    ]}
                    innerGap={"1em"}
                    gap={"0.5em"}
                >
                    <Radio
                        value={true}
                        label={"Male"}
                        helpText={"Select if you are a biological male"}
                    />
                    <Radio
                        value={true}
                        label={"Female"}
                        helpText={"Select if you are a biological female"}
                    />
                </FormField>
                <FormField
                    errors={[
                        "You haven't selected an option"
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "Yes"
                            },
                            {
                                label: "No"
                            }
                        ]}
                        label={"Are you a student"}
                        helpText={"Only full time students should select yes"}
                        placeholder={"Not selected"}
                    />
                </FormField>
                <Checkbox
                    value={true}
                    label={"Accept terms and services"}
                    helpText={"You must read Terms and Services of our company"}
                />
                <CenteredButton
                    primary
                >Submit</CenteredButton>
            </FormContainer>
        </DemoContainer>
    )
}