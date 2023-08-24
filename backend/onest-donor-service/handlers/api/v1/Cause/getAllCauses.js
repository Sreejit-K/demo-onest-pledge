'use strict';
var causeService = require('../../../../services/CauseService')
/**
 * Operations on /api/v1/Cause/getAllCauses
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: async function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        try {
            var listOfCauses = await causeService.getAllCauses(req?.headers)
            res.status(status).send(listOfCauses);
        } catch (error) {
            next(error);
        }

    }
};
