import { API } from "./api";
import { GetPidAPI } from "./getPidAPI";
import { CommandResponse } from "./types";
import { getKillCmd } from "./utils";

export class KillProcessAPI extends API{

    port: number;
    force: boolean=false;
    getPidAPI: GetPidAPI;
    
    constructor(port: number, force?: boolean) {
        super();
        this.port = port;
        if (force) {
            this.force = force;
        }
        this.getPidAPI = new GetPidAPI(this.port);
    }

    execAPI(): CommandResponse {
        try {
            const pid = this.getPidAPI.execAPI();
            if (!pid || pid < 0) {
                return CommandResponse.FAIL;
            }
            this.runCmd(getKillCmd(pid as number, this.force));
            return CommandResponse.OK;
        } catch(error) {
            console.log("Command failed");
        }
    }
}