function Button({ ...props }) {
    return (
        <>
            <button type={props.btnType} onClick={props.clickHandle} data-testid={props.testId}>{props.text}</button>
        </>
    );
}

export default Button;