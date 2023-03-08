function Modal({ ...props }) {
    return (
        <div data-testid="modal">
            {props.childComponent}
        </div>);
}

export default Modal;