import { type TransformDataFunction, type UserArray } from './task_4';

const transformData: TransformDataFunction  = (data) => {
  return data.map(subArray => {
      let id: number | undefined;
      let name: string | undefined;
      let age: number | undefined;

      subArray.forEach(([key, value]) => {
          if (key === "id") id = value;
          if (key === "name") name = value;
          if (key === "age") age = value;
      });

      if (id === undefined || name === undefined || age === undefined) {
        throw new Error("Missing required user data");
      }

      return {
          label: `${name}, ${age}`,
          value: id
      };
  });
};

const inputData: UserArray[] = [
  [["id", 1], ["name", "Ivan"], ["age", 23]],
  [["id", 2], ["name", "Maria"], ["age", 30]],
  [["id", 3], ["name", "Anna"], ["age", 28]],
];

const transformedData = transformData(inputData);

console.log(transformedData);

/*
[
    { label: "Ivan, 23", value: 1 },
    { label: "Maria, 30", value: 2 },
    { label: "Anna, 28", value: 3 },
]
*/
