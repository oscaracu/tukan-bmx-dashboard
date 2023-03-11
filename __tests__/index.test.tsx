import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '@/pages/index'
import { act } from 'react-dom/test-utils';

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

  it('should render Form component into Modal Component when "Add new" botton is pressed', async () => {

    const btnElement = screen.getByTestId("add-btn");

    fireEvent.click(btnElement);

    const formElement = await screen.findByTestId("form");

    expect(formElement).toBeInTheDocument();

  });

  it('should unmount Modal component when Form "Cancel" button is pressed', async () => {

    const btnElement = screen.getByTestId("add-btn");

    fireEvent.click(btnElement);

    const modalComponent = screen.getByTestId("modal");

    const cancelButton = await screen.findByTestId("cancel-btn");

    fireEvent.click(cancelButton);

    expect(modalComponent).not.toBeInTheDocument();

  });

  it('should render a new Data item with data from the Form when "Generate" button is pressed', async () => {

    const addNewButton = screen.getByTestId("add-btn");
    const user = userEvent.setup();

    await act(async () => {
      await user.click(addNewButton);
    });


    const titleInput = await screen.findByLabelText("Title");
    const seriesSelect = await screen.findByTestId("series-select");
    const initialDateInput = await screen.findByLabelText("Initial date");
    const endDateInput = await screen.findByLabelText("End date");
    const decimalsInput = await screen.findByLabelText("Decimals");
    const generateButton = await screen.findByTestId("generate-btn");

    fireEvent.change(titleInput, { target: { value: "Title Example 1" } });
    fireEvent.change(seriesSelect, { target: { value: "Data series 2" } });
    fireEvent.change(initialDateInput, { target: { value: "2020-01-01" } });
    fireEvent.change(endDateInput, { target: { value: "2021-01-01" } });
    fireEvent.change(decimalsInput, { target: { value: 2 } });


    await act(async () => {
      await user.click(generateButton)
    });


    const dataItem = screen.getByText("Title Example 1");

    expect(dataItem).toBeInTheDocument()


  });

  it('should unmount Modal component when Form "Generate" button is pressed', async () => {

    const btnElement = screen.getByTestId("add-btn");
    const user = userEvent.setup();

    await act(async () => {
      await user.click(btnElement)
    });


    const modalComponent = screen.getByTestId("modal");

    const generateButton = await screen.findByTestId("generate-btn");

    await act(async () => {
      await user.click(generateButton)
    });


    expect(modalComponent).not.toBeInTheDocument();

  });

  it('should remove a Data item when Delete button is pressed ', async () => {
    const addNewButton = screen.getByTestId("add-btn");
    const user = userEvent.setup();

    await act(async () => {
      await user.click(addNewButton);
    });


    const titleInput = await screen.findByLabelText("Title");
    const seriesSelect = await screen.findByTestId("series-select");
    const initialDateInput = await screen.findByLabelText("Initial date");
    const endDateInput = await screen.findByLabelText("End date");
    const decimalsInput = await screen.findByLabelText("Decimals");
    const generateButton = await screen.findByTestId("generate-btn");

    fireEvent.change(titleInput, { target: { value: "Title Example 2" } });
    fireEvent.change(seriesSelect, { target: { value: "Data series 2" } });
    fireEvent.change(initialDateInput, { target: { value: "2020-01-01" } });
    fireEvent.change(endDateInput, { target: { value: "2021-01-01" } });
    fireEvent.change(decimalsInput, { target: { value: 2 } });


    await act(async () => {
      await user.click(generateButton)
    });


    const dataItem = screen.getByText("Title Example 2");
    const deleteBtn = screen.getByText("Delete");

    await act(async () => {
      await user.click(deleteBtn)
    });

    expect(dataItem).not.toBeInTheDocument()
  });

})
