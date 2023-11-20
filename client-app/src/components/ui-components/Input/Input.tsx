import * as React from "react";
import TextField from "@mui/material/TextField";
import { ChangeEventHandler } from "react";

type Props = {
  id?: string;
  name?: string;
  label: string;
  type:
    | "text"
    | "password"
    | "email"
    | "radio"
    | "date"
    | "button"
    | "checkbox"
    | "number"
    | "tel";
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function Input({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      name={name}
      sx={{
        width: "100%",
      }}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
