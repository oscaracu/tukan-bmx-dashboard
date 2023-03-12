function DataDisplay({ ...props }) {
    return (
        <div data-testid="data-display">
            <p className="hidden">{JSON.stringify(props.data)}</p>
        </div>);
}

export default DataDisplay;