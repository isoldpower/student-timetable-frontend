export type UserPreferences = {

}

type UserType = 'student' | 'advisor';

export type BasicUser = {
    id: string;
    preferredName: string;
    email: string;
    type: UserType;
}

export type StudentUser = BasicUser & {
    type: 'student';
    preferences: UserPreferences;
}

export type AdvisorUser = BasicUser & {
    type: 'advisor';
}