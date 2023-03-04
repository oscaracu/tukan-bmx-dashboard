import { render, screen } from '@testing-library/react';
import SystemDescription from '../systemDescription';

describe('SystemDescription Component', () => {

  let container: HTMLElement;
  const props = {
    description: "Here is a brief system description"
  }

  beforeEach(() => {
    const { container: renderContainer } = render(<SystemDescription {...props}/>);
    container = renderContainer;
  });

  it('renders without crash', () => {
    expect(container);
  });
  it("show a brief system description from a data source", ()=>{
    const paragraph = screen.getByText("Here is a brief system description");
    expect(paragraph).toBeInTheDocument();
  })
})
