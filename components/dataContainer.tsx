import { FormValues } from "models/FormValues";
import Button from "./button";
import DataItem from "./dataItem";


function DataCointainer({ ...props }) {

    let dataItems;

    if (!props.dataItems) {
        dataItems = null;
    } else {
        dataItems = props.dataItems.map((item: FormValues, index: number) => <DataItem key={index} seriesTitle={item.title} data={item} dataActions={props.dataActions} />)
    }


    return (
        <section data-testid="data-container">
            <div data-testid="add-item">
                <Button btnType="button" clickHandle={props.clickHandle} testId="add-btn" text="Add new" />
            </div>
            {dataItems}

        </section>
    );
}

export default DataCointainer;