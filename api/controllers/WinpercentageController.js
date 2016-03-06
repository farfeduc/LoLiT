/**
 * WinpercentageController
 *
 * @description :: Server-side logic for managing winpercentages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Winpercentages'
    });
  },
  _config: {}
};


