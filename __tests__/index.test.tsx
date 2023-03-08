import { render, screen } from '@testing-library/react'
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

  it('should contain the Modal Component', () => {

    const modalContainer = screen.getByTestId("modal");

    expect(modalContainer).toBeInTheDocument();

  });

})
