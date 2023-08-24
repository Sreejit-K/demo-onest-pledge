'use strict';
var dataProvider = require('../../../../data/api/v1/Donor/search.js');
var donorService = require('../../../../services/Donorservice.js');
/**
 * Operations on /api/v1/Donor/search
 */
module.exports = {
    /**
     * summary: 
     * description: Pedge search
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
        try {
            var fetchDonor = await donorService.searchDonor(req.body);
            res.status(status).send(fetchDonor);
        } catch (error) {
            next(error);
        }
    }
};
