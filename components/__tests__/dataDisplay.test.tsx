import { render, screen } from "@testing-library/react";
import DataDisplay from "../dataDisplay";

describe('DataDisplay Component', () => {
    let container: HTMLElement;

    beforeEach(() => {
        const { container: renderContainer } = render(<DataDisplay />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container)
    });

    it('should contain a DIV element', () => {
        const divElement = screen.getByTestId("data-display");

        expect(divElement.tagName).toBe("DIV");
    });
});