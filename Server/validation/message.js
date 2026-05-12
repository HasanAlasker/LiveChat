import Joi from "joi";

export const messageValidationSchema = Joi.object({
  content: Joi.string().trim().min(1).max(500).required().messages({
    "string.empty": "Message content is required",
    "string.min": "Message must be at least 1 character long",
    "string.max": "Message must be at most 500 characters long",
  }),

  isSeen: Joi.boolean(),

  isEdited: Joi.boolean(),

  isDeleted: Joi.boolean(),
});

export const editMessageValidationSchema = Joi.object({
  content: Joi.string().trim().min(1).max(500).required().messages({
    "string.empty": "Message content is required",
    "string.min": "Message must be at least 1 character long",
    "string.max": "Message must be at most 500 characters long",
    "any.required": "Content is required",
  }),
});
