/**
 * RankingController
 *
 * @description :: Server-side logic for managing rankings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Ranking'
    });
  },
  _config: {}
};

