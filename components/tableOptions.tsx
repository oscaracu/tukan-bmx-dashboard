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
        <>
            <fieldset data-testid="table-options-fieldset">
                <legend>Table options</legend>
                <label htmlFor="decimals">Decimals</label>
                <Field type="number" name="decimals" id="decimals" />
                <label htmlFor="dateFormat">Date format</label>
                <Field as="select" name="dateFormat" id="dateFormat" data-testid="dateFormat">
                    {formatOptions}
                </Field>
            </fieldset>
        </>
    );
}

export default TableOptions;
