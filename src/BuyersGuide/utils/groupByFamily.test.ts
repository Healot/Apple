import {groupByFamily, IMacModelDto} from './groupByFamily';

describe('groupByFamily', () => {
  it('should group models for empty array', () => {
    expect(groupByFamily([])).toEqual({
      "MacBook Pro": [],
      "MacBook Air": [],
      "MacBook": [],
      "iMac": [],
      "Mac Mini": [],
      "Mac Pro": [],
    });
  });
  it('should group models by family', () => {
    const arr: IMacModelDto[] = [
      {
        "intro": "2020-03-18T00:00:00.000Z",
        "disc": "2020-11-10T00:00:00.000Z",
        "model": "A2179 (EMC 3302)",
        "family": "2020**",
        "titles": [
          "MacBook Air &quot;Core i3&quot; 1.1 13&quot; (Scissor, 2020)",
          "MacBook Air &quot;Core i5&quot; 1.1 13&quot; (Scissor, 2020)",
          "MacBook Air &quot;Core i7&quot; 1.2 13&quot; (Scissor, 2020)"
        ]
      },
      {
        "intro": "2020-11-10T00:00:00.000Z",
        "disc": "N/A",
        "model": "A2337 (EMC 3598)",
        "family": "M1, 2020",
        "titles": [
          "MacBook Air &quot;M1&quot; 8-Core 3.2/7-Core GPU 13&quot;",
          "MacBook Air &quot;M1&quot; 8-Core 3.2/8-Core GPU 13&quot;"
        ]
      },
    {
      "intro": "2020-05-04T00:00:00.000Z",
      "disc": "2020-11-10T00:00:00.000Z",
      "model": "A2289 (EMC 3456)",
      "family": "2020 13&quot; (2 TB 3)",
      "titles": [
        "MacBook Pro 13-Inch &quot;Core i5&quot; 1.4 2020 2 TB 3",
        "MacBook Pro 13-Inch &quot;Core i7&quot; 1.7 2020 2 TB 3"
      ]
    },
    {
      "intro": "2020-06-22T00:00:00.000Z",
      "disc": "N/A",
      "model": "A2330 (EMC 3568)",
      "family": "Apple DTK",
      "titles": [
        "Mac mini Developer Transition Kit (DTK)"
      ]
    },
    {
      "intro": "2020-11-10T00:00:00.000Z",
      "disc": "N/A",
      "model": "A2348 (EMC 3569)",
      "family": "M1, 2020",
      "titles": [
        "Mac mini &quot;M1&quot; 8-Core 3.2 (2020)"
      ]
    }
  ];

    const result = {
      "MacBook": [],
      "iMac": [],
      "Mac Pro": [],
      'MacBook Air': [
        {
        "intro": "2020-03-18T00:00:00.000Z",
        "disc": "2020-11-10T00:00:00.000Z",
        "models": ["A2179 (EMC 3302)"],
        "family": "2020**",
        "titles": [
          "MacBook Air &quot;Core i3&quot; 1.1 13&quot; (Scissor, 2020)",
          "MacBook Air &quot;Core i5&quot; 1.1 13&quot; (Scissor, 2020)",
          "MacBook Air &quot;Core i7&quot; 1.2 13&quot; (Scissor, 2020)"
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
      }],
      'MacBook Pro': [
        {
          "intro": "2020-05-04T00:00:00.000Z",
          "disc": "2020-11-10T00:00:00.000Z",
          "models": ["A2289 (EMC 3456)"],
          "family": "2020 13&quot; (2 TB 3)",
          "titles": [
            "MacBook Pro 13-Inch &quot;Core i5&quot; 1.4 2020 2 TB 3",
            "MacBook Pro 13-Inch &quot;Core i7&quot; 1.7 2020 2 TB 3"
          ]
        },
      ],

      'Mac Mini': [
        {
          "intro": "2020-06-22T00:00:00.000Z",
          "disc": "N/A",
          "models":[ "A2330 (EMC 3568)"],
          "family": "Apple DTK",
          "titles": [
            "Mac mini Developer Transition Kit (DTK)"
          ]
        },
        {
          "intro": "2020-11-10T00:00:00.000Z",
          "disc": "N/A",
          "models": ["A2348 (EMC 3569)"],
          "family": "M1, 2020",
          "titles": [
            "Mac mini &quot;M1&quot; 8-Core 3.2 (2020)"
          ]
        }
      ]
    }

    expect(groupByFamily(arr)).toEqual(result);
  });
});