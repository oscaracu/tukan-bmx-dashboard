import { fireEvent, render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home Component', () => {

  let container: HTMLElement;

  const props = {
    submitHandler: jest.fn()
  }

  beforeEach(() => {

    const { container: renderContainer } = render(<Home {...props} />);
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

  it('should call a funtion when the Form "Generate" button is pressed', () => {

    const addNewButton = screen.getByTestId("add-btn");

    fireEvent.click(addNewButton);

    const generateButton = screen.getByTestId("generate-btn");

    fireEvent.click(generateButton);

    expect(props.submitHandler).toHaveBeenCalled();


  });

  it('should render a new Data item with data from the Form when "Generate" button is pressed', () => {

    const addNewButton = screen.getByTestId("add-btn");

    fireEvent.click(addNewButton);

    const titleInput = screen.getByLabelText("Title");
    const seriesSelect = screen.getByTestId("series-select");
    const initialDateInput = screen.getByLabelText("Initial date");
    const endDateInput = screen.getByLabelText("End date");
    const decimalsInput = screen.getByLabelText("Decimals");
    const generateButton = screen.getByTestId("generate-btn");

    fireEvent.change(titleInput, { target: { value: "Title Example 1" } });
    fireEvent.change(seriesSelect, { target: { value: "Data series 2" } });
    fireEvent.change(initialDateInput, { target: { value: "2020-01-01" } });
    fireEvent.change(endDateInput, { target: { value: "2021-01-01" } });
    fireEvent.change(decimalsInput, { target: { value: 2 } });
    fireEvent.click(generateButton);

    const dataItem = screen.getByText("Title Example 1");

    expect(dataItem).toBeInTheDocument();

  });

})
