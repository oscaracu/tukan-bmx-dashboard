import Button from "./button";
import DataItem from "./dataItem";

interface DataItems {
    seriesTitle: string;
    data: any;

}

function DataCointainer({ ...props }) {

    let dataItems;

    if (!props.dataItems) {
        dataItems = null;
    } else {
        dataItems = props.dataItems.map((item: DataItems, index: number) => <DataItem key={index} seriesTitle={item.seriesTitle} data={item.data} dataActions={props.dataActions} />)
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