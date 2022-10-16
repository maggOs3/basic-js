const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // let dtName = [];
  // if ()
  // for (let name = 0; name < members.length; name++) {
  //   if (typeof members[name] === "string") {
  //     dtName.push(members[name][0]);
  //   }
  // }
  // dtName = dtName.sort().join("");
  // return dtName.toUpperCase();
}

module.exports = {
  createDreamTeam,
};
