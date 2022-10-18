import { program, OptionValues } from "commander";
import { API } from "./api";
import { CmdOption } from "./types";

export abstract class Cmd extends API {

    options: OptionValues;

    constructor(requiredCmdOptions?: CmdOption[], optionalCmdOptions?: CmdOption[]) {
        super();

        if (requiredCmdOptions) {
            for(let option of requiredCmdOptions) {
                this.updateRequiredOptions(option.arg, option.description);
            }
        }

        if (optionalCmdOptions) {
            for(let option of optionalCmdOptions) {
                this.updateOptions(option.arg, option.description);
            }
        }

        program.parse();
        this.options = program.opts();
    }

    updateOptions(param: string, description: string): void {
        program.option(param, description);
    }

    updateRequiredOptions(param: string, description: string): void {
        program.requiredOption(param, description);
    }
}