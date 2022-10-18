#!/usr/bin/env node
import { KillProcessCmd } from "./killProcessCmd";
import { CommandResponse } from "./types";

export function killProcess(): CommandResponse {
    try {
        const killProcess = new KillProcessCmd();
        return killProcess.execCmd();
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

killProcess();