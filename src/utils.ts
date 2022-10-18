import { execSync } from "child_process";

export function getTaskKillCmd(pid: number): string {
    return `TaskKill /F /T /PID ${pid}`;
}
   
export function getWmicDelCmd(pid: number): string {
       return `wmic process where "ProcessID='${pid}'" delete`;
}
  
export function getKillCmd(pid: number, force: boolean): string {
    if(force) {
        return getWmicDelCmd(pid);
    }

    return getTaskKillCmd(pid);
} 

export function portExist(cmdLine: string, port: number): boolean {
    return new RegExp(`(?=.*?(:${port}))(?=.*?(LISTENING))`).test(cmdLine);
}

export function retrievePidFromCmd(cmdLine: string): number {
    const pidNum = cmdLine.match(/[0-9]+$/);
    if (pidNum) {
        console.log(pidNum);
        return parseInt(pidNum[0]);
    }

    return -1;
}