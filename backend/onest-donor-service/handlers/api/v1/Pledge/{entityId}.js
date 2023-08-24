'use strict';
var pledgeService = require('../../../../services/PledgeService');
/**
 * Operations on /api/v1/Pledge/{entityId}
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
            var getPledge = await pledgeService.getPledgeById(entityId, req.headers)
            res.status(status).send(getPledge);
        } catch (error) {
            next(error);
        }
    },
    /**
     * summary: 
     * description: Pledge new update
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
        var pledge = req.body.PledgeDetails;
        try {
            var getPledge = await pledgeService.updatePledgeById(entityId, pledge)
            res.status(status).send(getPledge);
        } catch (error) {
            next(error);
        }
    }
};
