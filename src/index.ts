import { GetPidAPI } from './getPidAPI';
import { KillProcessAPI } from './killProcessAPI';

export function portKill(port: number, force?: boolean): void {
    try {
        const killProcessAPI = new KillProcessAPI(port, force);
        killProcessAPI.execAPI();
    } catch(error) {
        console.log(`error is: ${error.message}`)
    }
}

export function getPid(port: number): number {
    try {
        const getPidAPI = new GetPidAPI(port);
        return getPidAPI.execAPI();
    } catch(error) {
        console.log(`error is: ${error.message}`)
    }
}

