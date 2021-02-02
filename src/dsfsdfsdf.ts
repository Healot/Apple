import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
const data = require('./macs.json');
const { promises: fs} = require('fs');

function go(data) {
    const newJson = JSON.stringify(groupByFamily(data));
    fs.writeFile('./newjson.json', data, {encoding: 'utf8'});
  }