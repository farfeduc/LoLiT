/**
 * AverageplayerController
 *
 * @description :: Server-side logic for managing averageplayers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Averageplayer'
    });
  },
  _config: {}
};


