const Joi = require("joi");

const taskValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  status: Joi.string().valid("Todo", "In Progress", "Done"),
  dueDate: Joi.date().optional()
});

module.exports = taskValidationSchema;
