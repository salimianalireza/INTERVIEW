import React from 'react';
// import { useClass } from 'hooks';
export const Input = (props) => {
  const { type, className, onBlur, onChange, value, onKeyPress } = props;
  const { join } = useClass();
  return (
    <input
      {...props}
      type={type}
      className={join(
        'block border focus:outline-none focus:ring-2 ring-[#2684ff] rounded-[4px] h-[38px]',
        className
      )}
      onBlur={onBlur}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyPress={(e) => onKeyPress(e)}
      defaultValue={value}
    />
  );
};