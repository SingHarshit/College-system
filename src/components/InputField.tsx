import { FieldError } from "react-hook-form";

type InputFieldProps={
    label: string;
    name: string;
    type: string;
    error?: FieldError;
    register:any;
    inputProps:React.InputHTMLAttributes<HTMLInputElement>;




};

const InputField=(
    { label, name, type, error, register, inputProps }: InputFieldProps) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            {...register(name, { required: true })}
            type={type}
            className={`form-control ${error && "is-invalid"}`}
            {...inputProps}
        />
        {error && <small className="invalid-feedback">{error.message}</small>}
    </div>
 );

export default InputField;