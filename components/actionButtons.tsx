import Button from "./button";

interface DataAction {
    btnType: string;
    testId: string;
    text: string;
    clickHandle: any;
    icon: any
}

function ActionButtons({ ...props }) {

    const actionBtns = props.dataActions.map((action: DataAction, index: number) =>
        <Button key={index} btnType={action.btnType} testId={action.testId} clickHandle={() => action.clickHandle(props.dataId)}>
            <div className="text-xl text-sky-900 p-1 rounded-md hover:bg-sky-900 hover:text-white">
                {action.icon}
            </div>
            <p className="hidden">{action.text}</p>
        </Button>)

    return (
        <div data-testid="action-buttons" className="flex flex-row gap-1 justify-center mt-3">
            {actionBtns}
        </div>
    );
}

export default ActionButtons;