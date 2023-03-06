import { render, screen } from '@testing-library/react';
import Form from '../form';

describe('Form Component', () => {

  let container: HTMLElement;
  let formElement: HTMLFormElement;
  const props = {
    formTitle: "My Form",
    description: "Aut quia ut facilis necessitatibus sed fugiat.",
    seriesOptions: [
      { value: 'series1', label: 'Data series 1' },
      { value: 'series2', label: 'Data series 2' },
      { value: 'series3', label: 'Data series 3' },
    ]
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

  it('should render two input elements of type radio with values "english" and "spanish" and the same name attribute', () => {
    const languageRadioButtons: any = screen.getAllByRole('radio').filter(radioButton => radioButton.getAttribute('name') === 'language');
    expect(languageRadioButtons.length).toBe(2);

    const [englishRadioButton, spanishRadioButton] = languageRadioButtons;
    expect(englishRadioButton.value).toBe('english');
    expect(spanishRadioButton.value).toBe('spanish');

    const englishLabel = formElement.querySelector(`label[for="${englishRadioButton.id}"]`);
    const spanishLabel = formElement.querySelector(`label[for="${spanishRadioButton.id}"]`);

    expect(englishLabel).toBeInTheDocument();
    expect(englishLabel).toHaveTextContent('english');
    expect(spanishLabel).toBeInTheDocument();
    expect(spanishLabel).toHaveTextContent('spanish');
  });

  it('should render all language radio buttons within a fieldset with legend "Language"', () => {
    const fieldsetElement = screen.getByTestId('language-fieldset');
    const legendElement = screen.getByText("Language");

    expect(legendElement.tagName).toBe("LEGEND");
    expect(fieldsetElement).toBeInTheDocument();
    expect(fieldsetElement.tagName).toBe('FIELDSET');
    expect(fieldsetElement).toContainElement(legendElement);

    const languageRadioButtons = screen.getAllByRole('radio').filter(radioButton => radioButton.getAttribute('name') === 'language');
    expect(languageRadioButtons.length).toBe(2);

    languageRadioButtons.forEach(radioButton => {
      expect(radioButton).toBeInTheDocument();
      expect(fieldsetElement).toContainElement(radioButton);
    });
  });

    it('should render a select element with label "Choose a data series"', () => {
    const selectElement = screen.getByLabelText('Choose a data series');

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('name', 'series');
    expect(formElement).toContainElement(selectElement);
  });

  it('should render the "Choose a data series" select element with options received by props', () => {
    const selectElement = screen.getByLabelText('Choose a data series');
    const optionElements = selectElement.querySelectorAll('option');

    expect(optionElements.length).toBe(props.seriesOptions.length);

    props.seriesOptions.forEach((option, index) => {
      expect(optionElements[index]).toHaveAttribute('value', option.value);
      expect(optionElements[index]).toHaveTextContent(option.label);
    });
  });

  it('should render two input elements of type radio with values "Table" and "Graph" and the same name attribute', () => {
    const visualizationRadioButtons: any = screen.getAllByRole('radio').filter(radioButton => radioButton.getAttribute('name') === 'visualization-type');
    expect(visualizationRadioButtons.length).toBe(2);

    const [tableRadioButton, graphRadioButton] = visualizationRadioButtons;
    expect(tableRadioButton.value).toBe('table');
    expect(graphRadioButton.value).toBe('graph');

    const tableLabel = formElement.querySelector(`label[for="${tableRadioButton.id}"]`);
    const graphLabel = formElement.querySelector(`label[for="${graphRadioButton.id}"]`);

    expect(tableLabel).toBeInTheDocument();
    expect(tableLabel).toHaveTextContent('Table');
    expect(graphLabel).toBeInTheDocument();
    expect(graphLabel).toHaveTextContent('Graph');
  });

  it('should render all visualization radio buttons within a fieldset with legend "Choose type of visualization"', () => {
    const fieldsetElement = screen.getByTestId('visualization-fieldset');
    const legendElement = screen.getByText("Choose type of visualization");

    expect(legendElement.tagName).toBe("LEGEND");
    expect(fieldsetElement).toBeInTheDocument();
    expect(fieldsetElement.tagName).toBe('FIELDSET');
    expect(fieldsetElement).toContainElement(legendElement);

    const visualizationRadioButtons = screen.getAllByRole('radio').filter(radioButton => radioButton.getAttribute('name') === 'visualization-type');
    expect(visualizationRadioButtons.length).toBe(2);

    visualizationRadioButtons.forEach(radioButton => {
      expect(radioButton).toBeInTheDocument();
      expect(fieldsetElement).toContainElement(radioButton);
    });
  });

  it('should render an date type input element with label "Initial date" and id "init-date"', () => {
    const inputElement = screen.getByLabelText('Initial date');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('id', 'init-date');
    expect(inputElement).toHaveAttribute('type', 'date');
    expect(formElement).toContainElement(inputElement);
  });

  it('should render an date type input element with label "End date" and id "end-date"', () => {
    const inputElement = screen.getByLabelText('End date');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('id', 'end-date');
    expect(inputElement).toHaveAttribute('type', 'date');
    expect(formElement).toContainElement(inputElement);
  });


})
