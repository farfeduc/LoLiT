/**
 * ToprunesController
 *
 * @description :: Server-side logic for managing toprunes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Toprunes'
    });
  },
  _config: {}
};

