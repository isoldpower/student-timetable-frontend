export type ScheduleCourse = {
    id: string;
    title: string;
    description: string;
    creditHours: number;
    location: string;
    time: string;
    weekdays: string;
    semester: string;
}

export type RatedCourse = ScheduleCourse & {
    liked?: boolean;
}