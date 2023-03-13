import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function DataDisplay({ ...props }) {

    let displayData;

    if (props.data.visualizationType === "table") {
        displayData =
            <div className=" w-full max-w-xs overflow-scroll max-h-40">
                <table className="table-auto w-full bg-white text-center border-2">
                    <tr>
                        <th className="border-2 border-slate-400 border-solid bg-sky-100">Fecha</th>
                        <th className="border-2 border-slate-400 border-solid">Dato</th>
                    </tr>
                    {props.data.dataQuery.datos.map((dato: { fecha: string; dato: string; }, index: number) =>
                        <tr>
                            <td className="border-2 border-slate-400 border-solid bg-sky-100">{dato.fecha}</td>
                            <td className="border-2 border-slate-400 border-solid">{dato.dato}</td>
                        </tr>
                    )}
                </table>
            </div>;

    } else {
        console.log("graph");

    }

    return (
        <div data-testid="data-display">
            {displayData}
        </div>);
}

export default DataDisplay;