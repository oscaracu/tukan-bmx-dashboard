import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../form';

describe('Button Component', () => {

  let container: HTMLElement;
  let formElement: HTMLElement;
  const props = {
    formTitle: "My Form",
    description: "Aut quia ut facilis necessitatibus sed fugiat."
  }

  beforeEach(() => {
    const { container: renderContainer } = render(<Form {...props}/>);
    container = renderContainer;
    formElement = screen.getByTestId('form');
  });

  it('renders without crash', () => {
    expect(container);
  });

  it('should render an h1 element with the given title', () => {
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(props.formTitle);
  });

  it('should render an p element with the given description', () => {
    const paragraphElement = screen.getByTestId('form-description');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent(props.description);
  });

  it('should render a form element without method and action attributes', () => {
    expect(formElement).toBeInTheDocument();
    expect(formElement).not.toHaveAttribute('method');
    expect(formElement).not.toHaveAttribute('action');
  });

  it('should render an input element with label "Title" and id "title"', () => {
    const inputElement = screen.getByLabelText('Title');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('id', 'title');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(formElement).toContainElement(inputElement);
  });


})
