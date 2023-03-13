import { fireEvent, render, screen } from "@testing-library/react";
import DataItem from "../dataItem";

describe('DataItem Component', () => {
    let container: HTMLElement;

    const props = {
        seriesTitle: "Visualization Series Title",
        data: {
            series: "Series Data received by props",
            dataQuery: {
                datos: [{ fecha: "nombre", dato: "1,700.00" }]
            }
        },
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
        const { container: renderContainer } = render(<DataItem {...props} />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });

    it('should contain a DIV element with testId "data-item"', () => {
        const divElement = screen.getByTestId("data-item");

        expect(divElement.tagName).toBe("DIV");
    });

    it('should contain a H2 element with series title received by props', () => {
        const headingElement = screen.getByTestId("series-title");

        expect(headingElement.tagName).toBe("H2");
        expect(headingElement).toHaveTextContent(props.seriesTitle);

    });

    it('should render the DataDisplay component with data received by props', () => {
        const displayComponent = screen.getByTestId("data-display");

        expect(displayComponent).toBeInTheDocument();
        expect(displayComponent).toHaveTextContent(props.data.series);
    });

    it('should render the ActionButons component with data received by props', () => {
        const actionsComponent = screen.getByTestId("action-buttons");

        expect(actionsComponent).toBeInTheDocument();
    });




});