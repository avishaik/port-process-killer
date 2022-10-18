import { API } from "./api";
import { CommandResponse } from "./types";
import { portExist, retrievePidFromCmd } from "./utils";

export class GetPidAPI extends API {
    port: number;

    constructor(port: number) {
        super();
        this.port = port;
        this.cmdString = `netstat -ano | findstr :${this.port}`;
    }

    execAPI() {
            try {
                const cmdLines = this.runCmd(this.cmdString).split(`\n`);
                for(let cmdLine of  cmdLines) {
                    if (portExist(cmdLine, this.port)) {
                        return retrievePidFromCmd(cmdLine.trim());
                    }
                }
                return CommandResponse.FAIL;
            } catch (error) {
                throw Error(`Could not find pid by port #${this.port}`);
            }
        }
}