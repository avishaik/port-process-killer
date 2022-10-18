#!/usr/bin/env node
import { KillProcessCmd } from "./killProcessCmd";
import { CommandResponse } from "./types";

export function killProcess(): CommandResponse {
    const killProcess = new KillProcessCmd();
    return killProcess.execCmd();
}

killProcess();