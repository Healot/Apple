import {IMacModelRaw , IMacModelDto, IMacModel, NonEmptyArray} from './groupByFamily';
const { v4: uuidv4 } = require('uuid');
export function deduplicateModels(array: IMacModelDto[]): IMacModelRaw[] {
    const modelsDtoByIntro: { [key: string]: IMacModelDto[] } = {};
    array.forEach(el => {
      modelsDtoByIntro[el.intro] = [];
      modelsDtoByIntro[el.intro].push(el);
    });

    return Object.values(modelsDtoByIntro)
      .map((arr) => {
        const {disc, family, intro} = arr[0];
        return {
          // id: uuidv4(),
          intro,
          disc,
          family,
          models: arr.map(e => e.model),
          titles: arr.flatMap(e => e.titles)
        };
      });
}
