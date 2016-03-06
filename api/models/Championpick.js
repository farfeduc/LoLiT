/**
 * Championpick.js
 *
 * @description :: This model represents the total number of times each chamion as been picked
 */

module.exports = {

  tableName: 'ChampionPick',
 
  attributes: {
    _id: {
      type: 'integer',
      required: true
    },

    total: {
      type: 'integer'
    }
  }
};


