import { render, screen } from "@testing-library/react";
import GraphOptions from "../graphOptions";

describe('Graph Options form fields', () => {

    let container: HTMLElement;
    const props = {
        typeOptions: [
            { value: "type1", label: "Graph type 1" },
            { value: "type2", label: "Graph type 2" },
            { value: "type3", label: "Graph type 3" }
        ]
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<GraphOptions {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should render a fieldset with legend "Graph options"', () => {
        const fieldsetElement = screen.getByTestId('graph-options-fieldset');
        const legendElement = screen.getByText("Graph options");

        expect(legendElement.tagName).toBe("LEGEND");
        expect(fieldsetElement).toBeInTheDocument();
        expect(fieldsetElement.tagName).toBe('FIELDSET');
        expect(fieldsetElement).toContainElement(legendElement);
    })

    it('should contain a select element with name and testId "graph-options"', () => {
        const selectElement = screen.getByTestId("graph-options");

        expect(selectElement).toHaveAttribute("name", "graph-options")
    });

    it('should contain a color type input with "Color" label', () => {
        const inputElement = screen.getByLabelText("Color");

        expect(inputElement).toHaveAttribute("type", "color");
    });

    it("fieldset 'Graph options' must cointain the 'Color' input and 'graph-types' select", () => {
        const fieldsetElement = screen.getByTestId('graph-options-fieldset');
        const decimalsInput = screen.getByLabelText("Color");
        const dateSelect = screen.getByTestId("graph-types");

        expect(fieldsetElement).toContainElement(decimalsInput);
        expect(fieldsetElement).toContainElement(dateSelect);


    })
});