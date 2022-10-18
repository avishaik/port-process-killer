import { Cmd } from "./cmd";
import { GetPidAPI } from "./getPidAPI";
import { CmdOption } from "./types";

export class GetPidCmd extends Cmd {
    port: number;
    getPidApi: GetPidAPI;

    constructor() {
        const cmdReqOptions: CmdOption[] = [ {arg: "-p, --port <type>", description: "port number of the process needed to kill"} ];
        super(cmdReqOptions);
        if (this.options.port < 1) {
            throw Error(`${this.options.port} is not a valid port`);
        }
        this.port = this.options.port;
        this.cmdString = `netstat -ano | findstr :${this.port}`;
    }

    getPort(): number {
        return this.port;
    }

    execCmd(): string | number {
        try {
            this.getPidApi = new GetPidAPI(this.port);
            return this.getPidApi.execAPI();
        } catch (error) {
            throw Error(error);
        }
    }

    execAPI(): number {
        throw new Error("Method not implemented.");
    }
    

}