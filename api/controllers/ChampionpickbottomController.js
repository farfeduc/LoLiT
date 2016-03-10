/**
 * ChampionpickbottomController
 *
 * @description :: Server-side logic for managing championpickbottoms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Championpickbottom'
    });
  },
  _config: {}
};

