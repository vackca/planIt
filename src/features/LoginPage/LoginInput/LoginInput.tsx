import {useField} from 'formik';
import React, {VFC} from 'react';
import {TextField} from "@mui/material";

interface LoginPageProps {
    label?: string;
    name: string;
    id?: string;
    type: string;
    onFocus?: VoidFunction;
    placeholder?: string;
}

const LoginInput: VFC<LoginPageProps> = ({label, name, id, type, onFocus, placeholder}) => {
    const [field, meta] = useField({
        name: name,
        type: type,
        onFocus: onFocus,
        placeholder: placeholder,
    });

    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <TextField type={type} {...field}/>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}

export default LoginInput;
