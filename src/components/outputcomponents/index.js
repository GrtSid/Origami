import React, { PropTypes } from 'react';

import TextOutput from './TextOutput/TextOutput';
import ImageOutput from './ImageOutput/ImageOutput';
import BarGraphOutput from './BarGraphOutput/BarGraphOutput';
import ScatterGraphOutput from './ScatterGraphOutput/ScatterGraphOutput';

import TextOutputShowcaseCard from './TextOutput/TextOutputShowcaseCard';
import ImageOutputShowcaseCard from './ImageOutput/ImageOutputShowcaseCard';
import BarGraphOutputShowCaseCard from './BarGraphOutput/BarGraphOutputShowcaseCard';
import ScatterGraphOutputShowCaseCard from './ScatterGraphOutput/ScatterGraphOutputShowcaseCard';

export function getOutputComponentById(id, headers, calling_context, data) {
  switch (id) {
  case 1:
    return <TextOutput headers={headers} calling_context={calling_context} data={data} />;
  case 2:
    return <ImageOutput headers={headers} calling_context={calling_context} data={data} />;
  case 3:
    return <BarGraphOutput headers={headers} calling_context={calling_context} data={data} />;
  case 4:
    return <ScatterGraphOutput headers={headers} calling_context={calling_context} data={data} />;
  default:
    return <div>Null</div>;
  }
}

export function getAllOutputComponentsForShowcase(data) {
  return [
    <TextOutputShowcaseCard key={Math.random()}
                            demoProps={data}
    />,
    <ImageOutputShowcaseCard key={Math.random()}
                             demoProps={data}
    />,
    <BarGraphOutputShowCaseCard key={Math.random()}
                            demoProps={data}
    />,
    <ScatterGraphOutputShowCaseCard key={Math.random()}
                                demoProps={data}
    />
  ];
}
