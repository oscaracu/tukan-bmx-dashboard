import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../header";

describe('Heading Component', () => {
    let container: HTMLElement;
    let props = {
        clickHandle: jest.fn(),
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<Header {...props} />);
        container = renderContainer;
    });

    it('should render wihtout crash', () => {
        expect(container)
    });

    it('should contain a HEADER element', () => {
        const headerElement = screen.getByTestId("app-header");

        expect(headerElement.tagName).toBe("HEADER");

    });

    it('should contain an H1 element with "Visualizations" title text', () => {
        const titleElement = screen.getByTestId("app-title");

        expect(titleElement.tagName).toBe("H1");
        expect(titleElement).toHaveTextContent("Visualizations");

    });

    it('should contain a button element with text "Download all" and "button" type', () => {
        const downloadBtn = screen.getByTestId("download-btn");

        expect(downloadBtn.tagName).toBe("BUTTON");
        expect(downloadBtn).toHaveTextContent("Download all");
        expect(downloadBtn).toHaveAttribute
    });

    it('"Download" button should call a function passed by props on mouse click ', () => {
        const downloadBtn = screen.getByTestId("download-btn");

        fireEvent.click(downloadBtn);

        expect(props.clickHandle).toHaveBeenCalled();

    });

    it('should contain a button element with text "Grid view" and "button" type', () => {
        const gridBtn = screen.getByTestId("grid-btn");

        expect(gridBtn.tagName).toBe("BUTTON");
        expect(gridBtn).toHaveTextContent("Grid view");
        expect(gridBtn).toHaveAttribute
    });

    it('"Grid" button should call a function passed by props on mouse click ', () => {
        const gridBtn = screen.getByTestId("grid-btn");

        fireEvent.click(gridBtn);

        expect(props.clickHandle).toHaveBeenCalled();

    });

    it('should contain a button element with text "List view" and "button" type', () => {
        const listBtn = screen.getByTestId("list-btn");

        expect(listBtn.tagName).toBe("BUTTON");
        expect(listBtn).toHaveTextContent("List view");
        expect(listBtn).toHaveAttribute
    });

    it('"List" button should call a function passed by props on mouse click ', () => {
        const listBtn = screen.getByTestId("list-btn");

        fireEvent.click(listBtn);

        expect(props.clickHandle).toHaveBeenCalled();

    });

    it('HEADER element should contain the title H1 element and all BUTTONS elements ', () => {
        const headerElement = screen.getByTestId("app-header");
        const titleElement = screen.getByTestId("app-title");
        const downloadBtn = screen.getByTestId("download-btn");
        const gridBtn = screen.getByTestId("grid-btn");
        const listBtn = screen.getByTestId("list-btn");

        const elements = [titleElement, downloadBtn, gridBtn, listBtn];

        elements.forEach(element =>
            expect(headerElement).toContainElement(element)
        );

    });
});