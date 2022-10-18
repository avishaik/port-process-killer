export type CmdOption = {
    arg: string;
    description: string;
}

export enum CommandResponse {
    OK = 0,
    FAIL = -1
}
