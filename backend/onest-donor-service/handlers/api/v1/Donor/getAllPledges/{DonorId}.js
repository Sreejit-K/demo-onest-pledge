'use strict';
var donorService = require('../../../../../services/Donorservice');
/**
 * Operations on /api/v1/Donor/getAllPledges/{DonorId}
 */
module.exports = {
    /**
     * summary: 
     * description: Create new Donor
     * parameters: DonorId
     * produces: 
     * responses: 200
     */
    post: async function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var reqParams = req.params;
        var {DonorId} = reqParams ;
        try {
            var fetchDonor = await donorService.getAllPledgesBasedOnDonorId(DonorId);
            res.status(status).send(fetchDonor);
        } catch (error) {
            next(error);
        }
    }
};
