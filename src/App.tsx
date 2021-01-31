import React from 'react';
import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
import { useState, useContext, useEffect, useCallback, useMemo } from 'react';

import {ProductSummary} from './BuyersGuide/components/ProductSummary'
const json = require('./macs.json');

const finalData = groupByFamily(json);
console.log(finalData)
export function App() {
  return (
    <div className="App">
        <ProductSummary models={finalData['MacBook Air']} title={'MacBook Air'} description={''} image={''}/>
      <h1>qwewre</h1>
        
    </div>
  );
}

