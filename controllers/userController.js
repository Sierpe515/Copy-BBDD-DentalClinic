const { User, Service, Appointment, Employee, Specialty } = require('../models');
const bcrypt = require('bcrypt');

const userController = {};

userController.getAppointment = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId 
                },
                include: [
                    {
                        model: Employee,
                        attributes: {
                            exclude: ["id", "user_id", "image", "nif", "birth_date", "direction", "collegiate_number", "schedule", "createdAt", "updatedAt"]
                        },
                        include: {
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getAppointmentAdmin = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                order: [["date", "ASC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
            
        )
    
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getAppointmentDoctor = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                order: [["date", "ASC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["id", "employee_id", "user_id", "service_id"]
                }
            }
            
        )
        
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(
            {
                success: true,
                message: "access profile successfully",
                user: user
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong",
                error_message: error.message
            }
        )
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { name, surname, nif, birth_date, direction, email, phone, password } = req.body;
        const userId = req.userId

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUser = await User.update(
            {
                name, 
                surname, 
                nif, 
                birth_date, 
                direction, 
                email, 
                phone,
                password: encryptedPassword
            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUser) {
            return res.send({
                success: false,
                message: "Can't update user profile",
                error_message: error.message
            })
        }

        return res.send({
            success: true,
            message: "Updated user profile successfully",
            updateUser: updateUser
        })
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

userController.updateUserByAdmin = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, surname, nif, birth_date, direction, email, phone, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const updateUser = await User.update(
            {
                name,
                surname,
                nif,
                birth_date,
                direction,
                email,
                phone,
                password: encryptedPassword
            },
            {
                where: {
                    id: userId
                }
            }
        );
        if (!updateUser) {
            return res.send({
                success: false,
                message: "Can't update user profile",
                error_message: error.message
            })
        }
        return res.send({
            success: true,
            message: "Updated user profile successfully",
            updateUser: updateUser
        })
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

userController.findAllUsersDoctor = async (req, res) => {
    try {
        const user = await User.findAll(
            {
                attributes: {
                    exclude: ["password"]
                }
            }
        )

        return res.json(
            {
                success: true,
                message: "access profiles successfully",
                user: user
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

userController.findAllUsersAdmin = async (req, res) => {
    try {
        const user = await User.findAll()

        return res.json(
            {
                success: true,
                message: "access profiles successfully",
                user: user
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

userController.deleteUserByAdmin = async(req, res) => {
    try {
        const user = req.params.id;

        const deleteUser = await User.destroy(
      
            {
                where: {
                    id: user
                }
            },
        )

        return res.json(
            {
                success: true,
                message: "User deleted successfully",
                appointment: deleteUser
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

userController.findAllDoctors = async (req, res) => {
    try {
        const doctor = await Employee.findAll(
            {
                include: [
                    {
                        model: User,
                            attributes: {
                                exclude: ["id", "user_id", "nif", "direction", "password", "createdAt", "updatedAt"]
                            } 
                    },{
                        model: Specialty,
                        attributes: {
                            exclude: ["id", "createdAt", "updatedAt"]
                        } 
                    }],
            }
        )
        return res.json(
            {
                success: true,
                message: "access profiles successfully",
                user: doctor
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

const { Op } = require('sequelize');

userController.getUpcomingAppointmentUser = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId,
                    [Op.and]: [
                        {
                            date: {
                                [Op.gte]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "ASC"]],
                include: [
                    {
                        model: Employee,
                        attributes: {
                            exclude: ["id", "user_id", "image", "nif", "birth_date", "direction", "collegiate_number", "schedule", "createdAt", "updatedAt"]
                        },
                        include: {
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getPastAppointmentUser = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId,
                    [Op.and]: [
                        {
                            date: {
                                [Op.lt]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "DESC"]],
                include: [
                    {
                        model: Employee,
                        attributes: {
                            exclude: ["id", "user_id", "image", "nif", "birth_date", "direction", "collegiate_number", "schedule", "createdAt", "updatedAt"]
                        },
                        include: {
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getUpcomingAppointmentAdmin = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: {
                    [Op.and]: [
                        {
                            date: {
                                [Op.gte]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "ASC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
            
        )
    
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getPastAppointmentAdmin = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: {
                    [Op.and]: [
                        {
                            date: {
                                [Op.lt]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "DESC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["employee_id", "user_id", "service_id"]
                }
            }
            
        )
    
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getUpcomingAppointmentDoctor = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: {
                    [Op.and]: [
                        {
                            date: {
                                [Op.gte]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "ASC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["id", "employee_id", "user_id", "service_id"]
                }
            }
            
        )
        
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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

userController.getPastAppointmentDoctor = async(req, res) => {
    try {
        const userAppointment = await Appointment.findAll(
            {
                where: {
                    [Op.and]: [
                        {
                            date: {
                                [Op.lt]: new Date(),
                            },
                        },
                    ]
                },
                order: [["date", "DESC"]],
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["id", "user_id", "nif", "birth_date", "direction", "password", "createdAt", "updatedAt"]
                        } 
                    },
                    {
                        model: Employee,
                        include: [{
                            model: User,
                            attributes: {
                                exclude: ["id", "nif", "birth_date", "direction", "password", "role_id", "createdAt", "updatedAt"]
                            },
                        },{
                            model: Specialty,
                            attributes: {
                                exclude: ["id", "createdAt", "updatedAt"]
                            } 
                        }],
                        attributes: {
                            exclude: ["id", "user_id", "image", "createdAt", "updatedAt"]
                        }
                    },
                ],
                attributes: {
                    exclude: ["id", "employee_id", "user_id", "service_id"]
                }
            }
            
        )
        
        return res.json(
            {
                success: true,
                message: "Access appointments successfully",
                userAppointment: userAppointment
            }
        )
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


module.exports = userController;