import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

function DataDisplay({ ...props }) {

    let displayData;

    if (props.data.visualizationType === "table") {
        displayData =
            <div className=" w-full max-w-xs overflow-scroll max-h-40">
                <table className="table-auto w-full bg-white text-center border-2">
                    <thead>
                        <tr>
                            <th className="border-2 border-slate-400 border-solid bg-sky-100">Fecha</th>
                            <th className="border-2 border-slate-400 border-solid">Dato</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.data.dataQuery.datos.map((dato: { fecha: string; dato: string; }, index: number) =>
                            <tr key={index}>
                                <td className="border-2 border-slate-400 border-solid bg-sky-100">{dato.fecha}</td>
                                <td className="border-2 border-slate-400 border-solid">{dato.dato}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>;

    } else {

        const graphData = props.data ? props.data.dataQuery.datos.map((dato: { fecha: any; dato: any; }) => { return { name: dato.fecha, value: parseFloat(dato.dato.split(",").join("").toString()) } }) : [];

        displayData =
            <div>
                <BarChart width={300} height={200} data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill={props.data.color} />
                </BarChart>
            </div>

    }

    return (
        <div data-testid="data-display">
            {displayData}
            <p className="hidden">{props.data.series}</p>
        </div>);
}

export default DataDisplay;