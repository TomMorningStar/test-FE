type UserData = ["id", number] | ["name", string] | ["age", number];

export type UserArray = UserData[];

type TransformedData = {
    label: string;
    value: number;
};

export type TransformDataFunction = (data: UserArray[]) => TransformedData[];
