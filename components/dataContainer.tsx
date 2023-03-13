import { FormValues } from "models/FormValues";
import Button from "./button";
import DataItem from "./dataItem";
import { BsPlusCircle } from "react-icons/bs";

function DataCointainer({ ...props }) {

    let dataItems;

    if (!props.dataItems) {
        dataItems = null;
    } else {
        dataItems = props.dataItems.map((item: FormValues, index: number) => <DataItem key={index} seriesTitle={item.title} data={item} dataActions={props.dataActions} fetchFunction={props.fetchFunction} />)
    }


    return (
        <section data-testid="data-container" className="my-3 flex flex-col gap-4">
            <div data-testid="add-item" className=" bg-slate-200 w-full max-w-xs p-8 flex justify-center rounded-xl mx-auto">
                <Button btnType="button" clickHandle={props.clickHandle} testId="add-btn">
                    <div className="p-4 bg-sky-800 text-white text-center flex flex-col items-center rounded-xl hover:bg-sky-900">
                        <span className="text-5xl m-1"><BsPlusCircle /></span>
                        <p className="text-lg">Add new</p>
                    </div>
                </Button>
            </div>
            {dataItems}

        </section>
    );
}

export default DataCointainer;