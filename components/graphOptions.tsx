import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form as FormikForm,
    Field,
    FieldProps,
    useFormikContext,
} from "formik";
import selectOptions from "models/selectOptions";

function GraphOptions({ ...props }) {

    // const { values } = useFormikContext();

    const typeOptions = props.typeOptions.map(
        (option: selectOptions, index: number) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        )
    );

    return (
        <>
            <fieldset data-testid="graph-options-fieldset" className="p-1 m-1">
                <legend className="hidden">Graph options</legend>

                <div className="flex flex-row justify-center text-center gap-2">
                    <div className="min-w-[120px] text-center">
                        <label htmlFor="graphType" className="block">Graph type</label>
                        <Field as="select" name="graphType" id="graphType" data-testid="graphType" className="block p-2 overflow-hidden overflow-ellipsis" disabled>
                            {typeOptions}
                        </Field>

                    </div>
                    <div className="min-w-[120px] text-center flex flex-col items-center">
                        <label htmlFor="color" className="block">Color</label>
                        <Field type="color" name="color" id="color" className="block m-2" />

                    </div>
                </div>
            </fieldset>
        </>
    );
}

export default GraphOptions;
