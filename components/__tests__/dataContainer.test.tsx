import { fireEvent, render, screen } from "@testing-library/react";
import DataContainer from "../dataContainer";

describe('DataContainer Component', () => {
    let container: HTMLElement;

    const props = {
        clickHandle: jest.fn(),
        dataItems: [
            {
                seriesTitle: "Visualization Series Title 1",
                data: "Series Data received by props 1",
            },
            {
                seriesTitle: "Visualization Series Title 2",
                data: "Series Data received by props 2",
            },
            {
                seriesTitle: "Visualization Series Title 3",
                data: "Series Data received by props 3",
            },

        ],
        dataActions: [
            {
                testId: "move-action",
                text: "Move",
                btnType: "button",
                clickHandle: jest.fn(),

            },
            {
                testId: "view-action",
                text: "View",
                btnType: "button",
                clickHandle: jest.fn(),


            },
            {
                testId: "edit-action",
                text: "Edit",
                btnType: "button",
                clickHandle: jest.fn(),


            },
            {
                testId: "delete-action",
                text: "Delete",
                btnType: "button",
                clickHandle: jest.fn(),


            },
            {
                testId: "download-action",
                text: "Download",
                btnType: "button",
                clickHandle: jest.fn(),

            }]
    }

    beforeEach(() => {
        const { container: renderContainer } = render(<DataContainer {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should be a SECTION element', () => {
        const sectionElement = screen.getByTestId("data-container");

        expect(sectionElement.tagName).toBe("SECTION")
    });

    it('should contain a DIV element with testid "add-item"', () => {
        const divElement = screen.getByTestId("add-item");

        expect(divElement.tagName).toBe("DIV");
    });

    it('should contain a button element with "Add new" text', () => {

        const buttonElement = screen.getByTestId("add-btn");

        expect(buttonElement.tagName).toBe("BUTTON");
        expect(buttonElement).toHaveTextContent("Add new");
        expect(buttonElement).toHaveAttribute("type", "button");
    });

    it('"Add new" button should call a function received by props ', () => {
        const buttonElement = screen.getByTestId("add-btn");
        fireEvent.click(buttonElement);

        expect(props.clickHandle).toHaveBeenCalled();
    });

    it('should render as many DataItem components as data items received by props', () => {

        props.dataItems.forEach(item => {
            const headingElement = screen.getByText(item.seriesTitle);

            expect(headingElement).toBeInTheDocument();
        })

    });
});