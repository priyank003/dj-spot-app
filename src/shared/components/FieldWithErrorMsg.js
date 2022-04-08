import React from "react";
import { Field, useFormikContext } from "formik";
import { useMemo } from "react";
import { Form } from "react-bootstrap";
import { useCallback } from "react";

const FieldWithErrorMsg = ({
  name,
  label,
  className,
  placeholder,
  formText,
  formGroupClassName = "",
  as,
  ...rest
}) => {
  const { touched, errors } = useFormikContext();
  const randId = useMemo(() => Math.random(10000).toString(22), []);
  const FormComponent = useCallback(
    (props) =>
      as === "textarea" ? (
        <Form.Control as="textarea" {...props} />
      ) : (
        <Form.Control {...props} />
      ),
    []
  );
  return (
    <Form.Group className={formGroupClassName}>
      {label !== "" && (
        <Form.Label htmlFor={randId} className="text-capitalize">
          {label || name}
        </Form.Label>
      )}
      <Field
        id={randId}
        as={FormComponent}
        className={`${
          touched[name] && errors[name] && "is-invalid"
        } ${className}`}
        name={name}
        placeholder={(placeholder || label || name).capitalize()}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <div className="invalid-feedback">{errors[name]}</div>
      )}
      {formText && <Form.Text>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default FieldWithErrorMsg;
