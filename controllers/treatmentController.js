const { Service } = require('../models');

const treatmentController = {};

treatmentController.findAllTreatments = async (req, res) => {
    try {
        const treatment = await Service.findAll(
            // {
            //     include: [
            //         {
            //             model: User,
            //                 attributes: {
            //                     exclude: ["id", "user_id", "nif", "direction", "password", "createdAt", "updatedAt"]
            //                 } 
            //         },{
            //             model: Specialty,
            //             attributes: {
            //                 exclude: ["id", "createdAt", "updatedAt"]
            //             } 
            //         }],
            // }
        )
        return res.json(
            {
                success: true,
                message: "access profiles successfully",
                treatment: treatment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}


module.exports = treatmentController;