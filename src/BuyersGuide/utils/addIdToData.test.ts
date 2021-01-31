import uuid from 'uuid';
import {IMacModelRaw, IMacModel } from "./groupByFamily";
import {addIdToData} from './addIdToData';

describe('add id to data', () => {
    it('should add id to object', () => {
        jest.spyOn(uuid, 'v4')
          .mockReturnValue("5")
          .mockReturnValueOnce("1")
          .mockReturnValueOnce("2")
          .mockReturnValueOnce("3")
          .mockReturnValueOnce("4")

        const data: IMacModelRaw[]  = [
            {
                "intro": "2008-01-15T00:00:00.000Z",
                "disc": "2008-10-14T00:00:00.000Z",
                "models": ["A1237 (EMC 2142*)"],
                "family": "MacBook Air - Original",
                "titles": [
                  "MacBook Air &quot;Core 2 Duo&quot; 1.6 13&quot; (Original)",
                  "MacBook Air &quot;Core 2 Duo&quot; 1.8 13&quot; (Original)"
                ]
              },
              {
                "intro": "2010-10-20T00:00:00.000Z",
                "disc": "2011-07-20T00:00:00.000Z",
                "models": ["A1370 (EMC 2393)", "A1369 (EMC 2392)"],
                "family": "Late 2010",
                "titles": [
                  "MacBook Air &quot;Core 2 Duo&quot; 1.4 11&quot; (Late '10)",
                  "MacBook Air &quot;Core 2 Duo&quot; 1.6 11&quot; (Late '10)",
                  "MacBook Air &quot;Core 2 Duo&quot; 1.86 13&quot; (Late '10)",
                  "MacBook Air &quot;Core 2 Duo&quot; 2.13 13&quot; (Late '10)"
                ]
              },
              {
                "intro": "2011-07-20T00:00:00.000Z",
                "disc": "2012-06-11T00:00:00.000Z",
                "models": ["A1370 (EMC 2471)", "A1369 (EMC 2469)"],
                "family": "Mid-2011",
                "titles": [
                  "MacBook Air &quot;Core i5&quot; 1.6 11&quot; (Mid-2011)",
                  "MacBook Air &quot;Core i7&quot; 1.8 11&quot; (Mid-2011)",
                  "MacBook Air &quot;Core i5&quot; 1.7 13&quot; (Mid-2011)",
                  "MacBook Air &quot;Core i7&quot; 1.8 13&quot; (Mid-2011)"
                ]
              },
              {
                "intro": "2020-11-10T00:00:00.000Z",
                "disc": "N/A",
                "models": ["A2337 (EMC 3598)"],
                "family": "M1, 2020",
                "titles": [
                  "MacBook Air &quot;M1&quot; 8-Core 3.2/7-Core GPU 13&quot;",
                  "MacBook Air &quot;M1&quot; 8-Core 3.2/8-Core GPU 13&quot;"
                ]
              }
        ];

        const result: IMacModel[] = [
            {
            'id' : '1',
            "intro": "2008-01-15T00:00:00.000Z",
            "disc": "2008-10-14T00:00:00.000Z",
            "models": ["A1237 (EMC 2142*)"],
            "family": "MacBook Air - Original",
            "titles": [
              "MacBook Air &quot;Core 2 Duo&quot; 1.6 13&quot; (Original)",
              "MacBook Air &quot;Core 2 Duo&quot; 1.8 13&quot; (Original)"
            ]
          },
          {
            'id' : '2',
            "intro": "2010-10-20T00:00:00.000Z",
            "disc": "2011-07-20T00:00:00.000Z",
            "models": ["A1370 (EMC 2393)", "A1369 (EMC 2392)"],
            "family": "Late 2010",
            "titles": [
              "MacBook Air &quot;Core 2 Duo&quot; 1.4 11&quot; (Late '10)",
              "MacBook Air &quot;Core 2 Duo&quot; 1.6 11&quot; (Late '10)",
              "MacBook Air &quot;Core 2 Duo&quot; 1.86 13&quot; (Late '10)",
              "MacBook Air &quot;Core 2 Duo&quot; 2.13 13&quot; (Late '10)"
            ]
          },
          {
            'id' : '3',
            "intro": "2011-07-20T00:00:00.000Z",
            "disc": "2012-06-11T00:00:00.000Z",
            "models": ["A1370 (EMC 2471)", "A1369 (EMC 2469)"],
            "family": "Mid-2011",
            "titles": [
              "MacBook Air &quot;Core i5&quot; 1.6 11&quot; (Mid-2011)",
              "MacBook Air &quot;Core i7&quot; 1.8 11&quot; (Mid-2011)",
              "MacBook Air &quot;Core i5&quot; 1.7 13&quot; (Mid-2011)",
              "MacBook Air &quot;Core i7&quot; 1.8 13&quot; (Mid-2011)"
            ]
          },
          {
            'id' : '4',
            "intro": "2020-11-10T00:00:00.000Z",
            "disc": "N/A",
            "models": ["A2337 (EMC 3598)"],
            "family": "M1, 2020",
            "titles": [
              "MacBook Air &quot;M1&quot; 8-Core 3.2/7-Core GPU 13&quot;",
              "MacBook Air &quot;M1&quot; 8-Core 3.2/8-Core GPU 13&quot;"
            ]
          }
        ]
        expect(addIdToData(data)).toEqual(result);
    })
})