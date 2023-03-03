import { render, screen } from '@testing-library/react';
import SystemDescription from '../systemDescription';

describe('SystemDescription Component', () => {

  let container: HTMLElement;

  beforeEach(() => {
    const { container: renderContainer } = render(<SystemDescription />);
    container = renderContainer;
  });

  it('renders without crash', () => {
    expect(container);
  });
  it("show a brief system description", ()=>{
    const paragraph = screen.getByText('Brief system description');
    expect(paragraph).toBeInTheDocument();
  })
})
