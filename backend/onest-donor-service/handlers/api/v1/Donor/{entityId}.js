'use strict';
var dataProvider = require('../../../../data/api/v1/Donor/{entityId}.js');
var donorService = require('../../../../services/Donorservice.js');
/**
 * Operations on /api/v1/Donor/{entityId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: entityId
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
            var reqParams = req.params;
            var {entityId} = reqParams ;
            var getCause = await donorService.getDonorById(entityId, req.headers)
            res.status(status).send(getCause);
        } catch (error) {
            next(error);
        }
    },
    /**
     * summary: 
     * description: Donor new update
     * parameters: entityId, body
     * produces: 
     * responses: 200
     */
    put: async function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var reqParams = req.params;
        var {entityId} = reqParams ;
        var cause = req.body;
        try {
            var getCause = await donorService.updateDonorById(entityId, cause)
            res.status(status).send(getCause);
        } catch (error) {
            next(error);
        }
    }
};
