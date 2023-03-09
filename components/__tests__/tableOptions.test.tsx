import { render, screen } from "@testing-library/react";
import TableOptions from "../tableOptions";

describe("Table Options form fields", () => {

    let container: HTMLElement;
    const props = {
        formatOptions: [
            { value: "fotmat1", label: "Format 1" },
            { value: "fotmat2", label: "Format 2" },
            { value: "fotmat3", label: "Format 3" }
        ]
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<TableOptions {...props} />);
        container = renderContainer;
    })

    it('renders without crash', () => {
        expect(container);
    });

    it('should render a fieldset with legend "Table options"', () => {
        const fieldsetElement = screen.getByTestId('table-options-fieldset');
        const legendElement = screen.getByText("Table options");

        expect(legendElement.tagName).toBe("LEGEND");
        expect(fieldsetElement).toBeInTheDocument();
        expect(fieldsetElement.tagName).toBe('FIELDSET');
        expect(fieldsetElement).toContainElement(legendElement);
    })

    it("should contain a number type input with 'Decimals' label and 'decimals 'id", () => {
        const decimalsInput = screen.getByLabelText("Decimals");

        expect(decimalsInput).toHaveAttribute("type", "number");
        expect(decimalsInput).toHaveAttribute("id", "decimals")
    })

    it("should contain a input select with 'Date format' label and name attribute 'date-format'", () => {
        const dateSelect = screen.getByLabelText("Date format");

        expect(dateSelect.tagName).toBe("SELECT");
        expect(dateSelect).toHaveAttribute("name", "date-format");

    })

    it('should render the "date-format" select element with options received by props', () => {
        const selectElement = screen.getByTestId('date-format');
        const optionElements = selectElement.querySelectorAll('option');

        expect(optionElements.length).toBe(props.formatOptions.length);

        props.formatOptions.forEach((option, index) => {
            expect(optionElements[index]).toHaveAttribute('value', option.value);
            expect(optionElements[index]).toHaveTextContent(option.label);
        });
    });


    it("fieldset 'Table Options' must cointain the 'decimals' input and 'date-format' select", () => {
        const fieldsetElement = screen.getByTestId('table-options-fieldset');
        const decimalsInput = screen.getByLabelText("Decimals");
        const dateSelect = screen.getByTestId("date-format");

        expect(fieldsetElement).toContainElement(decimalsInput);
        expect(fieldsetElement).toContainElement(dateSelect);


    })
})