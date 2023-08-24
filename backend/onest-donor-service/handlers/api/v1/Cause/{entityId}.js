'use strict';
var causeService = require('../../../../services/CauseService');
/**
 * Operations on /api/v1/Cause/{entityId}
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

        //getCauseById

        try {
            var reqParams = req.params;
            var {entityId} = reqParams ;
            var getCause = await causeService.getCauseById(entityId, req.headers)
            res.status(status).send(getCause);
        } catch (error) {
            next(error);
        }
    },
    /**
     * summary: 
     * description: Cause new update
     * parameters: entityId, quiz
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
            var getCause = await causeService.updateCauseById(entityId, cause)
            res.status(status).send(getCause);
        } catch (error) {
            next(error);
        }
    }
};
