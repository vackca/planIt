import {useField} from 'formik';
import React, {FC} from 'react';
import {TextField} from "@mui/material";
import {StyledInputDiv, StyledLabel, StyledTextField} from "./LoginInput.styled";

interface LoginPageProps {
    label?: string;
    name: string;
    id?: string;
    type: string;
    autoFocus?: boolean;
    onFocus?: VoidFunction;
    placeholder?: string;
}

const LoginInput: FC<LoginPageProps> = ({label, name, id, type, onFocus, autoFocus, placeholder}) => {
    const [field, meta] = useField({
        name: name,
        type: type,
        onFocus: onFocus,
        placeholder: placeholder,
    });

    return (
        <div>
            {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
            <StyledTextField color="primary" size="small" type={type} {...field} autoFocus={autoFocus}/>
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </div>
    );
}

export default LoginInput;
