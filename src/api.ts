import { execSync } from "child_process";

export abstract class API {
    cmdString: string;

    /* istanbul ignore next */
    runCmd(command: string): string {
        return execSync(command).toString().trim();
    }

    abstract execAPI(): number;
}