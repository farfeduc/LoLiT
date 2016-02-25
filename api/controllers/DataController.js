module.exports = {
    GetDataList : function(req, res){
        Data.findOne({ mapId: 11}).exec(function(err, data) {
                if (err) return next(err);
                res.json(data);  
            });
    }
};