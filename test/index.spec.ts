import sinon from "sinon";
import * as cp from "child_process";
import { portKill } from "../src/index";
import * as utils from "../src/utils";
import { expect } from "chai";


describe('portKill', function() {
  let sandbox: sinon.SinonSandbox;
      beforeEach(function() {
        sandbox = sinon.createSandbox();
    });
    afterEach(function() {
        sandbox.restore();
    });

    it('return when pid was not found by port', function() {
    /*  const retrievePidSpy = sinon.stub(utils, "retrievePid").returns(null);
      const execSyncSpy = sinon.stub(cp, "execSync");

      portKill(8080, false);

      expect(retrievePidSpy.calledOnce).to.be.true;
      expect(execSyncSpy.callCount).to.equal(0);      */
    }); 


  });
  