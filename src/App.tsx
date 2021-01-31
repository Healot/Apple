import React from 'react';
import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
<<<<<<< HEAD
import  { useState, useContext,  useCallback, useMemo } from 'react';


=======
import  { useState,  useEffect, useCallback, useMemo } from 'react';
>>>>>>> 284703c (master delete context)
import {ProductSummary} from './BuyersGuide/components/ProductSummary'
const json = require('./macs.json');
// sadadasdasd
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

