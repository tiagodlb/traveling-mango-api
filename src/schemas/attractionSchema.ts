import joi from "joi"

export const attractionSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  imgURL: joi.string().required(),
  destinyId: joi.number().required(),
})
