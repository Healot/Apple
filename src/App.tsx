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
        {/* <B /> */}
        
    </div>
  );
}

// class A extends React.Component {
//   r = React.createRef<HTMLDivElement>();
//   componentDidMount() {
//     console.log('1A', document.querySelector("#A"));
//     console.log('cdm', this.r.current);
//   }

//   render() {
//     console.log('2A');
//     console.log('render', this.r.current);
//     return <div id="A" ref={this.r}>A</div>
//   }
// }

// function B() {
//   const r = React.useRef<HTMLDivElement>(null);
//   const [state, setState] = React.useState(0);
//   useEffect(() => {
//     console.log('1B', document.querySelector("#B"));
//     const d = +new Date;
//     while (+new Date - d < 2000);
//     console.log('useEffect', r.current?.offsetHeight);
//   }, [state])
//   React.useLayoutEffect(() => {
//     console.log('3B', document.querySelector("#B"));
//     console.log('useLayoutEffect', r.current?.offsetHeight);
//   }, [state])


//   console.log('2B');
//   console.log('render', r.current);
//   return <div onClick={() => setState(x => x + 1)} id="B" ref={r} style={{ background:"yellowgreen", lineHeight: 1 }}>B</div>
// }