import { render, screen } from "@testing-library/react";
import DataContainer from "../dataContainer";

describe('DataContainer Component', () => {
    let container: HTMLElement;

    beforeEach(() => {
        const { container: renderContainer } = render(<DataContainer />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should contain a SECTION element', () => {
        const sectionElement = screen.getByTestId("data-container");

        expect(sectionElement.tagName).toBe("SECTION")
    });
});