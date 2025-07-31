import type { Meta, StoryObj } from "@storybook/react-vite";
import DateRangeCalendar from "./DateRangeCalendar";
import './daterangecalendar.css'
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Example/Date Range Calendar",
  component: DateRangeCalendar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    initialStartDate: { control: {type: "date" } },
    initialEndDate: { control: {type: "date" }},
    rangeColor: { control: 'color' },
  },
} satisfies Meta<typeof DateRangeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
args: {
    initialStartDate: new Date(),
    initialEndDate: new Date(),
    rangeColor: '#000000'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dateCells = await canvas.getAllByText("15");
    await userEvent.click(dateCells[0]);
  },

};
