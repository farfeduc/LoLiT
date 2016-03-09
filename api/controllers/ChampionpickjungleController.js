/**
 * ChampionpickjungleController
 *
 * @description :: Server-side logic for managing championpickjungles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Championpick'
    });
  },
  _config: {}
};

