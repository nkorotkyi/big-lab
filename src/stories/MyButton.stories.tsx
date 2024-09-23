import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { MyButton } from "../components/UI/MyButton"

export default {
  title: "Component/MyButton",
  component: MyButton,
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof MyButton>

const Template: StoryFn<React.ButtonHTMLAttributes<HTMLButtonElement>> = (args) => <MyButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Натисни на мене",
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: "Disabled",
  disabled: true,
}

export const CustomText = Template.bind({})
CustomText.args = {
  children: "Custom text",
}
