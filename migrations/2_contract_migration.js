var kip7 = artifacts.require('KIP7Token');
var kip17 = artifacts.require('KIP17Token');

module.exports = function(deployer) {
  deployer.deploy(kip7, "AICON", "AICO", 8, '50000000000000000')
  //deployer.deploy(kip17, "AICONN", "AICTN")
};
