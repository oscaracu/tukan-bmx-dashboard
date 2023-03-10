import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
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

        const { container: renderContainer } = render(

            <Formik initialValues={{ decimals: "", dateFormat: "" }} onSubmit={() => { jest.fn() }}>

                <GraphOptions {...props} />

            </Formik>

        );

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

    it('should contain a select element with name and testId "graphType"', () => {
        const selectElement = screen.getByTestId("graphType");

        expect(selectElement).toHaveAttribute("name", "graphType")
    });

    it('should render the "graph-types" select element with options received by props', () => {
        const selectElement = screen.getByTestId('graphType');
        const optionElements = selectElement.querySelectorAll('option');

        expect(optionElements.length).toBe(props.typeOptions.length);

        props.typeOptions.forEach((option, index) => {
            expect(optionElements[index]).toHaveAttribute('value', option.value);
            expect(optionElements[index]).toHaveTextContent(option.label);
        });
    });

    it('should contain a color type input with "Color" label', () => {
        const inputElement = screen.getByLabelText("Color");

        expect(inputElement).toHaveAttribute("type", "color");
    });

    it("fieldset 'Graph options' must cointain the 'Color' input and 'graphType' select", () => {
        const fieldsetElement = screen.getByTestId('graph-options-fieldset');
        const decimalsInput = screen.getByLabelText("Color");
        const dateSelect = screen.getByTestId("graphType");

        expect(fieldsetElement).toContainElement(decimalsInput);
        expect(fieldsetElement).toContainElement(dateSelect);


    })
});