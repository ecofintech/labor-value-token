const LaborToken = artifacts.require("LaborToken");

module.exports = function(deployer) {
  deployer.deploy(LaborToken, "Labor Value Token", "LABOR", "8", "3");

}
