function DataDisplay({ ...props }) {
    return (
        <div data-testid="data-display">
            {props.data}
        </div>);
}

export default DataDisplay;