import { render } from "@testing-library/react";
import DataItem from "../dataItem";

describe('DataItem Component', () => {
    let container: HTMLElement;

    beforeEach(() => {
        const { container: renderContainer } = render(<DataItem />);
        container = renderContainer;
    });

    it('should render without crash', () => {
        expect(container);
    });
});