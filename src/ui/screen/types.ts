
// export type RoleType = "owner" | "admin" | "manager" | "sharedTrainer" | "trainer"
export type RoleType = "owner" | "admin" | "sharedTrainer" | "trainer" | "client" | 'regularTrainer'
export type UserType = "trainer" | "client";

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    userID: number;
    type: UserType;
    phone?: string;
    role: RoleType;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

export type RecordType = "strength" | "endurance" | "cardio" | "timedLongerBetter" | "timedFasterBetter" | "general";
export type TagType = "mainMuscle" | "otherMuscle" | "equipment" | "movement" | "level" | "mechanics" | "source"

export interface Tag {
    name: string;
    type: TagType;
}

export interface Exercise {
    name: string;
    description: string;
    recordType: RecordType;
    tags: Array<object>;
}