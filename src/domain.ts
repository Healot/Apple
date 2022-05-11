import {groupByFamily} from './BuyersGuide/utils/groupByFamily'
const { promises: fs} = require('fs');

const data = require('./macs.json');

function go(data) {
    const newJson = JSON.stringify(groupByFamily(data));
    fs.writeFile('./newjson.json', data, {encoding: 'utf8'});
  }
