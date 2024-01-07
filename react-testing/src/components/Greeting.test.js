import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe('Greeting Component', () => {
  test('renders Hello World as a text', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you as a text', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText(`good to see you`, { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders Changed! if button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement);
    const helloWorldElement = screen.getByText('Changed!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('removes good to see you', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement);
    const helloWorldElement = screen.queryByText('good to see you', { exact: false });
    expect(helloWorldElement).toBeNull();
  });
});
