import { expect } from "chai";
import sinon from "sinon";
import { KillProcessAPI } from "../src/killProcessAPI";

describe('getPidAPI', function() {

  it('return OK when process was killed', function() {
    const killProcessAPI = new KillProcessAPI(3001);
    sinon.stub(killProcessAPI.getPidAPI, "execAPI").returns(2000);
    sinon.stub(killProcessAPI, "runCmd");
    const cmdResponse = killProcessAPI.execAPI();
    expect(cmdResponse).to.equal(0);
}); 

it('return OK when process was killed with force', function() {
    const killProcessAPI = new KillProcessAPI(3001, true);
    sinon.stub(killProcessAPI.getPidAPI, "execAPI").returns(2000);
    sinon.stub(killProcessAPI, "runCmd");
    const cmdResponse = killProcessAPI.execAPI();
    expect(cmdResponse).to.equal(0);
}); 
      
    it('return -1 when there is no port being used to kill', function() {
        const killProcessAPI = new KillProcessAPI(8080);
        sinon.stub(killProcessAPI.getPidAPI, "execAPI").returns(-1);
        sinon.stub(killProcessAPI, "runCmd");
        const pid = killProcessAPI.execAPI();
        expect(pid).to.equal(-1);
    }); 

    it('throws excpetion when runCmd fails', function() {
        const killProcessAPI = new KillProcessAPI(8080);
        sinon.stub(killProcessAPI.getPidAPI, "execAPI").throwsException();
        const runCmdSpy = sinon.spy(killProcessAPI, "runCmd");
        const pid = killProcessAPI.execAPI();
        expect(runCmdSpy.callCount).to.equal(0);
    }); 

});