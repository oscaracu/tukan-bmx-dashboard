import Button from "./button";

interface DataAction {
    btnType: string;
    testId: string;
    text: string;
    clickHandle: any;
}

function ActionButtons({ ...props }) {

    const actionBtns = props.dataActions.map((action: DataAction, index: number) => <Button btnType={action.btnType} testId={action.testId} text={action.text} clickHandle={action.clickHandle} />)

    return (
        <div data-testid="action-buttons">
            {actionBtns}
        </div>
    );
}

export default ActionButtons;