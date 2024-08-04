import joi from "joi"

export const destinySchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  imgURL: joi.string().required(),
})
