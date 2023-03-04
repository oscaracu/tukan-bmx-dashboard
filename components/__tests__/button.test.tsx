import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../button';

describe('Button Component', () => {

  let container: HTMLElement;
  let buttonElement: HTMLElement;
  const props = {
    text: "Click me!",
    clickHandle: jest.fn()
  }

  beforeEach(() => {
    const { container: renderContainer } = render(<Button {...props}/>);
    container = renderContainer;
    buttonElement = screen.getByRole('button');
  });

  it('renders without crash', () => {
    expect(container);
  });

  it('should render a button element', () => {
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render a button element with the given text', () => {
    expect(buttonElement).toHaveTextContent(props.text);
  });

  it('should call the onClick function when the button is clicked', () => {
    fireEvent.click(buttonElement);
    expect(props.clickHandle).toHaveBeenCalled();
  });
})
