import React from 'react';
import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
import  { useState, useContext,  useCallback, useMemo } from 'react';

import {ProductSummary} from './BuyersGuide/components/ProductSummary'

const json = require('./macs.json');

const finalData = groupByFamily(json);

export function App() {
  return (
    <div className="App">
        <ProductSummary models={finalData['MacBook Air']} title={'MacBook Air'} description={''} image={''}/>
      <h1>Something is here</h1>
    </div>
  );
}

