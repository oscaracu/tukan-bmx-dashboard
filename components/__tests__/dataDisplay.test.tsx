import { render, screen } from "@testing-library/react";
import DataDisplay from "../dataDisplay";

describe('DataDisplay Component', () => {
    let container: HTMLElement;
    const props = {
        data: {
            series: "Series Data received by props",
            dataQuery: {
                datos: [{ fecha: "nombre", dato: "1,700.00" }]
            }
        },
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<DataDisplay {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container)
    });

    it('should contain a DIV element', () => {
        const divElement = screen.getByTestId("data-display");

        expect(divElement.tagName).toBe("DIV");
    });

    it('should render a data passed by props', () => {
        const divElement = screen.getByTestId("data-display");

        expect(divElement).toHaveTextContent(props.data.series)
    });
});