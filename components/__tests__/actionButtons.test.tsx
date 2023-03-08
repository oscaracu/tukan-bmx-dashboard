import { fireEvent, render, screen } from "@testing-library/react";
import ActionButtons from "../actionButtons";

describe('ActionButtons component', () => {
    let container: HTMLElement;

    const props = {
        seriesTitle: "Visualization Series Title",
        data: "Series Data received by props",
        clickHandle: jest.fn(),
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
        const { container: renderContainer } = render(<ActionButtons {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should contain a DIV element with testId "action-buttons"', () => {
        const divElement = screen.getByTestId("action-buttons");

        expect(divElement.tagName).toBe("DIV");
    });

    it('should contain data action button elements with type "button" and own actions text', () => {

        props.dataActions.forEach(action => {

            const btnElement = screen.getByTestId(action.testId);

            expect(btnElement.tagName).toBe("BUTTON");
            expect(btnElement).toHaveTextContent(action.text);
            expect(btnElement).toHaveAttribute("type", "button");

        });


    });

    it('action buttons should call a function received by props on mouse click', () => {

        props.dataActions.forEach(action => {
            const btnElement = screen.getByTestId(action.testId);
            fireEvent.click(btnElement);
            expect(action.clickHandle).toHaveBeenCalled();
        })

    });




});