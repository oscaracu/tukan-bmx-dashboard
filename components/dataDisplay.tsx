function DataDisplay({ ...props }) {
    return (
        <div data-testid="data-display">
            {JSON.stringify(props.data)}
        </div>);
}

export default DataDisplay;