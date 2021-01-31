import {IMacModelRaw, IMacModel, IFamily } from "./groupByFamily";
import uuid from "uuid";

// export function addIdToData( obj: { [key in IFamily]: IMacModelRaw[] }): IMacModel[] {
//     Object.values(obj).map( array => array.forEach( item => ) )
//   }

export function addIdToData (array: IMacModelRaw[]) : IMacModel[] {
    return array.map(item => ({id: uuid.v4(), ...item}))
}

 