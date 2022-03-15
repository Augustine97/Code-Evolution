import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return (
    <input
      type='text'
      onChange={(event) => props.handleChange(event)}
      value={props.value}
    />
  );
};
