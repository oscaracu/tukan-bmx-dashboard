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
  it('should contain a SystemDescription component', () => {
    const description = screen.getByTestId('SystemDescription-component');
    expect(description).toBeInTheDocument();
  });
})