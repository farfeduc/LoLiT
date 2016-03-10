/**
 * StatsplayerController
 *
 * @description :: Server-side logic for managing statsplayers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Statsplayer'
    });
  },
  _config: {}
};

