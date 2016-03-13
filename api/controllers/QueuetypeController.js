/**
 * QueuetypeController
 *
 * @description :: Server-side logic for managing queuetypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res) {
    res.view(null, {
        title: 'Queuetype'
    });
  },
  _config: {}
};

