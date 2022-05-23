import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Greeting from "./Greeting";

describe("<Greeting> component", () => {
  test("renders 'Hello World' as a text", () => {
    render(<Greeting />);

    const helloWorlElement = screen.getByText("Hello World!");
    expect(helloWorlElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you' if button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you' if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("It's good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });

  test("renders 'Changed!' if button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
});
