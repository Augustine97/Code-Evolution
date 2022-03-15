import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({value,handleChange}: InputProps) => {
  return (
    <input
      type='text'
      onChange={(event) => handleChange(event)}
      value={value}
    />
  );
};
