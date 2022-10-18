import { Cmd } from "./cmd";
import { GetPidCmd } from "./getPidCmd";
import { CmdOption, CommandResponse } from "./types";
import { getKillCmd } from "./utils";

export class KillProcessCmd extends Cmd {
    force: boolean=false;
    cmdString: string;
    getPidCmd: GetPidCmd;
    taskKillCmd: string;
    wmicKillCmd: string;


   constructor() {
        const cmdReqOptions: CmdOption[] = [ {arg: "-p, --port <type>", description: "port number of the process needed to kill"} ];
        const cmdOptionalOptions: CmdOption[] = [ {arg: "-f, --force", description: "use wmic cmd to kill the process which works in cases taskkill does not work"} ];
        super(cmdReqOptions, cmdOptionalOptions);
        this.getPidCmd = new GetPidCmd();
        if(this.options.force) {
            this.force = this.options.force;
        }
    }

    execCmd(): CommandResponse {
        try {
            const pid = this.getPidCmd.execCmd();
            if (!pid) {
                return CommandResponse.FAIL;
            }
            this.runCmd(getKillCmd(pid as number, this.force));
            return CommandResponse.OK;
        } catch(error) {
            console.log("Command failed");
        }
    }

    execAPI(): number {
        throw new Error("Method not implemented.");
    }
}