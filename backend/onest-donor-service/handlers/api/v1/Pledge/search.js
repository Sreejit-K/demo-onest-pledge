'use strict';
var dataProvider = require('../../../../data/api/v1/Pledge/search.js');
var pledgeService = require('../../../../services/PledgeService.js');
/**
 * Operations on /api/v1/Pledge/search
 */
module.exports = {
    /**
     * summary: 
     * description: Pledge search
     * parameters: body
     * produces: 
     * responses: 200
     */
    post: async function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var status = 200;
        try {
            var fetchPledge = await pledgeService.searchPledge(req.body);
            res.status(status).send(fetchPledge);
        } catch (error) {
            next(error);
        }
    }
};
