import { expect } from "chai";
import sinon from "sinon";
import { GetPidAPI } from "../src/getPidAPI";

describe('getPidAPI', function() {

  it('return pid when port is being used', function() {
    const cmdResMock = `  TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       9024
    TCP    [::]:3001              [::]:0                 LISTENING       9024`.trim();
    const getPidAPI = new GetPidAPI(3001);
    sinon.stub(getPidAPI, "runCmd").returns(cmdResMock);
    const pid = getPidAPI.execAPI();
    expect(pid).to.equal(9024);
}); 
      
    it('return -1 when there is no port being used', function() {
        const cmdResEmpty = "";
        const getPidAPI = new GetPidAPI(8080);
        sinon.stub(getPidAPI, "runCmd").returns(cmdResEmpty);
        const pid = getPidAPI.execAPI();
        expect(pid).to.equal(-1);
    }); 

    it('throws excpetion when runCmd fails', function() {
        const getPidAPI = new GetPidAPI(8080);
        sinon.stub(getPidAPI, "runCmd").throwsException();
        const pid = getPidAPI.execAPI();
        expect(pid).to.be.undefined;
    }); 

});