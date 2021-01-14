import { useState } from 'react';


export interface ReturnType {
  value: string | number
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

/*
 * 将输入框的值进行动态绑定。
 */
const useInputBind = (initialValue: string | number): ReturnType => {
  const [value, setValue] = useState<string | number>(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onReset = () => {
    setValue('');
  };
  return { value, onChange, onReset };
};

export default useInputBind;