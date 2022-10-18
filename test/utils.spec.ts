import { expect } from "chai";
import { getKillCmd, getTaskKillCmd, getWmicDelCmd, portExist, retrievePidFromCmd } from "../src/utils";

describe('utils.ts', function() {
    describe('portExist', function() {
        it('return false when string is empty', function() {
            const isPort = portExist("",1);
            expect(isPort).to.be.false;
          }); 
          
          it('return true when port exist', function() {
            const cmdLine = "TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       28248";
            const isPort = portExist(cmdLine,3001);
            expect(isPort).to.be.true;
          }); 
    });

    describe('retrievePid', function() {

        
        it('return true when port exist', function() {
          const cmdLine = "TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       28248";
          const isPort = portExist(cmdLine,3001);
          expect(isPort).to.be.true;
        }); 
  });

  describe('retrievePidFromCmd', function() {
      
      it('return pid when cmd text contains port number', function() {
        const cmdLine = "TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       28248";
        const pid = retrievePidFromCmd(cmdLine);
        expect(pid).to.equal(28248);
      }); 

      it('return -1 when cmd text does not contain port number', function() {
        const cmdLine = "TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING ";
        const pid = retrievePidFromCmd(cmdLine);
        expect(pid).to.equal(-1);
      }); 
});

describe('getCmd', function() {
      
  it('return task cmd string with pid', function() {
    const cmd = getTaskKillCmd(2000);
    expect(cmd).to.equal(`TaskKill /F /T /PID 2000`);
  }); 

  it('return wmic cmd string with pid', function() {
    const cmd = getWmicDelCmd(2000);
    expect(cmd).to.equal(`wmic process where "ProcessID='2000'" delete`);
  }); 

  it('return task kill cmd when force is false', function() {
    const cmd = getKillCmd(2000, false);
    expect(cmd).to.equal(`TaskKill /F /T /PID 2000`);
  }); 

  it('return wmic cmd when force is true', function() {
    const cmd = getKillCmd(2000, true);
    expect(cmd).to.equal(`wmic process where "ProcessID='2000'" delete`);
  }); 
});

  

  });
  