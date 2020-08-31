import * as React from 'react';
import { Slider } from 'antd';

const SliderAtom = () => {
  const [value, setValue] = React.useState<number[]>([20, 50]);
  const handler = (value: number[]) => setValue(value);
  return (
    <React.Fragment>
      <Slider range defaultValue={[20, 50]} onChange={handler} />
      <p>{value[0]}</p>
      <p>{value[1]}</p>
    </React.Fragment>
  );
};

export default SliderAtom;
