import ActionButtons from "./actionButtons";
import DataDisplay from "./dataDisplay";

function DataItem({ ...props }) {

    return (
        <div data-testid="data-item">
            <h2 data-testid="series-title">{props.seriesTitle}</h2>
            <DataDisplay data={props.data} />
            <ActionButtons dataActions={props.dataActions} />

        </div>
    );
}

export default DataItem;