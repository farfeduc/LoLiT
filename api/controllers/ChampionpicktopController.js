/**
 * ChampionpicktopController
 *
 * @description :: Server-side logic for managing championpicktops
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Championpicktop'
    });
  },
  _config: {}
};
