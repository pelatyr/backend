exports.listShop = function (req, res) {
    try {
        console.log(req.body)
        console.log(req.params)
        let id = req.params.id_shop;
        sql = `SELECT
                    * 
                FROM
                    shops
               WHERE = ${id} `;

         req.con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send({code: 200, data: result });
        });
    }catch {
        res.send({ code: 404, data:[], status: "data is catch"});
    }
};