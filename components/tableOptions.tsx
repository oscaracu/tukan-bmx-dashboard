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

function TableOptions({ ...props }) {

    // const { values } = useFormikContext();

    const formatOptions = props.formatOptions.map(
        (option: selectOptions, index: number) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        )
    );

    return (

        <fieldset data-testid="table-options-fieldset" className="p-1 mt-1">
            <legend className="hidden">Table options</legend>
            <div className="flex flex-row gap-2 justify-center text-center">
                <div className="text-center">
                    <label htmlFor="dateFormat" className="block">Date format</label>
                    <Field as="select" name="dateFormat" id="dateFormat" data-testid="dateFormat" className="block max-w-[130px] p-2 overflow-hidden overflow-ellipsis">
                        {formatOptions}
                    </Field>

                </div>
                <div className="text-center">
                    <label htmlFor="decimals" className="block">Decimals</label>
                    <Field type="number" name="decimals" id="decimals" className="block max-w-[130px] p-2" />

                </div>

            </div>
        </fieldset>

    );
}

export default TableOptions;
