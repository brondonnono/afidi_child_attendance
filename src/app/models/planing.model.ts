export interface Planing {
    docId: string;
    id: string;
    timeTable: Array<Day>;
}

export interface Day {
    id: string;
    weekDay: string;
    monthDay: number;
    times: Array<Time>;
    occupedTimes: Array<Time>;
    availableTimes: Array<Time>;
}

export interface Time {
    id: string;
    value: string;
}