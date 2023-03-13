import { useEffect } from "react";
import ActionButtons from "./actionButtons";
import DataDisplay from "./dataDisplay";

function DataItem({ ...props }) {

    return (
        <div data-testid="data-item" className=" bg-slate-200 w-full max-w-xs p-3 flex flex-col justify-center rounded-xl">
            <h2 data-testid="series-title" className="text-center text-lg font-semibold text-sky-900">{props.seriesTitle}</h2>
            <DataDisplay data={props.data} />
            <ActionButtons dataActions={props.dataActions} dataId={props.data.id} />

        </div>
    );
}

export default DataItem;