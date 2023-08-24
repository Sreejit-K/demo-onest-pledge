'use strict';
var pledgeService = require('../../../services/PledgeService');
/**
 * Operations on /api/v1/Pledge
 */
module.exports = {
    /**
     * summary: 
     * description: Create new Pledge
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
            let pledgeToBeCreated = req.body;
            if (!req.body?.PledgeDetails?.causeId) throw new Error("please provide a causeId");
            if (!req.body?.PledgeDetails?.donorId) throw new Error("please provide a donorId");
            if (!req.body?.PledgeDetails?.amountForPledge) throw new Error("please provide a amount to be pledged");
            let createdPledge = await pledgeService.createPledge(pledgeToBeCreated.PledgeDetails);
            console.log(createdPledge);
            res.status(status).send({
                "message": "Pledge Created Succesfully",
                "success": true,
                "pledgeUpdate":  createdPledge 
            })
        } catch (error) {
            next(error);
        }
    }
};
