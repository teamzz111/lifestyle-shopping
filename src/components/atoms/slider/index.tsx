import * as React from 'react';
import { Slider } from 'antd';

const SliderAtom = () => {
  return (
    <React.Fragment>
      <Slider range defaultValue={[20, 50]} />
      {/* <p>{}</p> */}
    </React.Fragment>
  );
};

export default SliderAtom;
