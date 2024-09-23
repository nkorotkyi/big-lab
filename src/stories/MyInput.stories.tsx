import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { MyInput } from "../components/UI/MyInput"

export default {
  title: "Component/MyInput",
  component: MyInput,
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta<typeof MyInput>

const Template: StoryFn<React.InputHTMLAttributes<HTMLInputElement>> = (args) => <MyInput {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "Введіть текст",
  type: "text",
}

export const Password = Template.bind({})
Password.args = {
  placeholder: "Введіть пароль",
  type: "password",
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: "Поле заблоковано",
  disabled: true,
}
