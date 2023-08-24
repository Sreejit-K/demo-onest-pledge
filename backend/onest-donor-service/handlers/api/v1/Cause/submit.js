'use strict';
// var dataProvider = require('../../../../data/api/v1/Cause/submit.js');
var causeService = require('../../../../services/CauseService');
/**
 * Operations on /api/v1/Cause/submit
 */
module.exports = {
    /**
     * summary: 
     * description: Submit a Cause
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
            let causeToBeCreated = req.body;
            let createdCause = await causeService.createCause(causeToBeCreated);
            console.log(createdCause);
            res.status(status).send({
                "message": "Casue has been succesfully created",
                "success": true,
                "causeUpdate":  createdCause 
            })
        } catch (error) {
            next(error);
        }
    }
};
