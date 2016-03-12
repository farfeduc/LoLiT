/**
 * DailygamesController
 *
 * @description :: Server-side logic for managing dailygames
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Dailygames'
    });
  },
  _config: {}
};
