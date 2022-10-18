import { Cmd } from "./cmd";
import { GetPidAPI } from "./getPidAPI";
import { CmdOption } from "./types";

export class GetPidCmd extends Cmd {
    port: number;
    getPidApi: GetPidAPI;

    constructor() {
        const cmdReqOptions: CmdOption[] = [ {arg: "-p, --port <type>", description: "port number of the process needed to kill"} ];
        super(cmdReqOptions);
        this.port = this.options.port;
        this.cmdString = `netstat -ano | findstr :${this.port}`;
    }

    execCmd(): string | number {
        try {
            this.getPidApi = new GetPidAPI(this.port);
            return this.getPidApi.execAPI();
        } catch (error) {
            console.log(`Could not find  pid by port #${this.port}`);
        }
    }

    execAPI(): number {
        throw new Error("Method not implemented.");
    }
    

}