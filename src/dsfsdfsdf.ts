import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
const json = require('./macs.json');
const { promises: fs} = require('fs');

function go() {
    const newJson = JSON.stringify(groupByFamily(json));
    fs.writeFile('./newjson.json', json, {encoding: 'utf8'});
  }
  go();