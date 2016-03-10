/**
 * ChampionpickmiddleController
 *
 * @description :: Server-side logic for managing championpickmiddles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Championpickmiddle'
    });
  },
  _config: {}
};

