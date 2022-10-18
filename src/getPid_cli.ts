#!/usr/bin/env node
import { GetPidCmd } from "./getPidCmd";

export function getPid() {
    const getPidCmd = new GetPidCmd();
    getPidCmd.execCmd();
}


getPid();