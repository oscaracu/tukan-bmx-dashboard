function Modal({ ...props }) {
    return (
        <div data-testid="modal" className="top-0 left-0 w-full h-auto min-h-screen fixed bg-slate-800/95 flex flex-col items-center justify-center p-3 sm:h-auto">
            {props.childComponent}
        </div>);
}

export default Modal;