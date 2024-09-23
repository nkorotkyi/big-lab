import Form from "../components/Form.jsx"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within } from "@storybook/test"
import { expect } from "@storybook/jest"

type FormStories = typeof Form

const meta: Meta<FormStories> = {
  title: "component/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {
    InputType: {
      description: "DOM attribute defines input tag type",
      type: "string",
      table: {
        defaultValue: {
          summary: "text",
        },
      },
      control: {
        type: "none",
      },
    },
    ButtonType: {
      description: "DOM attribute defines button tag type",
      type: "string",
      table: {
        defaultValue: {
          summary: "submit",
        },
      },
      control: {
        type: "none",
      },
    },
    className: {
      description: "DOM attribute is used to point to a class in a style sheet",
      type: "string",
      table: {
        defaultValue: {
          summary: ["formParent", "\nportal"],
        },
      },
      control: {
        type: "none",
      },
    },
    htmlFor: {
      description: "DOM attribute is used to link with input tag",
      type: "string",
      control: {
        type: "none",
      },
    },
  },
}
/**
 * The Form component has data validator and display data using portal
 */
export const FormDefault: StoryObj<FormStories> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByTestId("surname"), "Met")
    await userEvent.type(canvas.getByTestId("name"), "Riot")
    await userEvent.type(canvas.getByTestId("phone"), "+380671234567")
    await userEvent.type(canvas.getByTestId("email"), "krgewkrgk@gmail.com")

    // await userEvent.click(canvas.getByRole("button"))

    // await waitFor(() => expect(canvas.getAllByTestId("portal-root")).toBeInTheDocument())
  },
}
export default meta
