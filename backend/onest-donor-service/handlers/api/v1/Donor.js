'use strict';
var donorService = require('../../../services/Donorservice');
/**
 * Operations on /api/v1/Donor
 */
module.exports = {
    /**
     * summary: 
     * description: Create new Donor
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
            let donorToBeCreated = req.body;
            let createdDonor = await donorService.createDonor(donorToBeCreated);
            console.log(createdDonor);
            res.status(status).send({
                "message": "string",
                "success": "string",
                "donorUpdate":  createdDonor 
            })
        } catch (error) {
            next(error);
        }
    }
};
