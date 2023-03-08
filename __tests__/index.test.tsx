import { fireEvent, render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home Component', () => {

  let container: HTMLElement;

  beforeEach(() => {

    const { container: renderContainer } = render(<Home />);
    container = renderContainer;

  });

  it('renders without crash', () => {

    expect(container)

  });

  it('should contain the Header Component', () => {

    const headerElement = screen.getByTestId("app-header");

    expect(headerElement).toBeInTheDocument();

  });

  it('should contain the DataContainer Component', () => {

    const dataContainer = screen.getByTestId("data-container");

    expect(dataContainer).toBeInTheDocument()

  });

  it('should render the Modal Component when "Add new" botton is pressed', () => {

    const btnElement = screen.getByTestId("add-btn");

    fireEvent.click(btnElement);

    const modalComponent = screen.getByTestId("modal");

    expect(modalComponent).toBeInTheDocument();

  });

  it('should render Form component into Modal Component when "Add new" botton is pressed', () => {

    const btnElement = screen.getByTestId("add-btn");

    fireEvent.click(btnElement);

    const formElement = screen.getByTestId("form");

    expect(formElement).toBeInTheDocument();

  });

  it('should unmount Modal component when Form "Cancel" button is pressed', () => {

    const btnElement = screen.getByTestId("add-btn");

    fireEvent.click(btnElement);

    const modalComponent = screen.getByTestId("modal");

    const cancelButton = screen.getByTestId("cancel-btn");

    fireEvent.click(cancelButton);

    expect(modalComponent).not.toBeInTheDocument();

  });

})
