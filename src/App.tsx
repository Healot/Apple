import React from 'react';
import {groupByFamily} from './BuyersGuide/utils/groupByFamily'


import {ProductSummary} from './BuyersGuide/components/ProductSummary'
const json = require('./macs.json');

const finalData = groupByFamily(json);
console.log(finalData)
export function App() {
  return (
    <div className="App">
        <ProductSummary models={finalData['MacBook Air']} title={'MacBook Air'} description={''} image={''}/>
     
        
    </div>
  );
}

