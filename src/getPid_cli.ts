#!/usr/bin/env node
import { GetPidCmd } from "./getPidCmd";

export function getPid() {
    try {
        const getPidCmd = new GetPidCmd();
        const pid = getPidCmd.execCmd();
        console.log(`port ${getPidCmd.getPort()} is being used by pid: ${pid}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

}


getPid();