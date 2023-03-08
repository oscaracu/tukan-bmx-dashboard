import { render, screen } from "@testing-library/react";
import Modal from "../modal";
import SystemDescription from "../systemDescription";

describe('Modal Component', () => {
    let container: HTMLElement;

    const props = {
        childComponent: <SystemDescription />
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<Modal {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should contain a DIV element with "modal" testid', () => {
        const divElement = screen.getByTestId("modal");

        expect(divElement.tagName).toBe("DIV");
    });

    it('should render a component received by props', () => {
        const childComponent = screen.getByTestId("SystemDescription-component");

        expect(childComponent).toBeInTheDocument();


    });
});