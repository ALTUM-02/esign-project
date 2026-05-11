import React from "react";

type Props = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
};

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  name,
}: Props) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full border p-3 rounded-lg outline-none"
    />
  );
};

export default InputField;