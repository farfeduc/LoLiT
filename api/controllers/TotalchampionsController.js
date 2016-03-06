/**
 * TotalchampionsController
 *
 * @description :: Server-side logic for managing totalchampions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Totalchampions'
    });
  },
  _config: {}
};


