import {deduplicateModels} from './deduplicateModels'
import {addIdToData} from './addIdToData'

const json = require('../../macs.json');;

export type NonEmptyArray<T> = [T, ...T[]];
export interface IMacModelDto {
    "intro": string;
    "disc": string;
    "model": string;
    "family": string;
    "titles": NonEmptyArray<string>;
};

export interface IMacModelRaw {
    "intro": string;
    "disc": string;
    "models": string[];
    "family": string;
    "titles": string[];
};

export interface IMacModel extends IMacModelRaw {
  "id": string;
};

const MAC_FAMILIES = <const>[
  "MacBook Pro",
  "MacBook Air",
  "MacBook",
  "iMac",
  "Mac mini",
  "Mac Pro",
];

export type IFamily = typeof MAC_FAMILIES[number]


export type IMacFamilyGroups = {
  [key in IFamily]: IMacModel[];
} 

export function groupByFamily(models: IMacModelDto[]): IMacFamilyGroups {
    const o: { [key in IFamily]: IMacModel[] } = {
      "MacBook Pro": [],
      "MacBook Air": [],
      "MacBook": [],
      "iMac": [],
      "Mac mini": [],
      "Mac Pro": [],
    };
    
    MAC_FAMILIES.forEach(family => {
      if (family === "MacBook") {
        o["MacBook"] = addIdToData(deduplicateModels(models.filter(
          el => el.titles[0].startsWith("MacBook") &&
          !el.titles[0].startsWith("MacBook Air") &&
          !el.titles[0].startsWith("MacBook Pro")
        )));
      } else {
        o[family] = addIdToData(deduplicateModels(models.filter(el => el.titles[0].startsWith(family))));
      }
    });

    return o;
}
// concat titles & models by family in each object

/// UUID