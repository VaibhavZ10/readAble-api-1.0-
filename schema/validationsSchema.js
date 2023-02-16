// const Joi = require('@hapi/joi')

// const authSchema = Joi.object.keys({
//   email: Joi.string().email().lowercase().required(),
//   password: Joi.string().min(2).required(),
// })

// const dataToValidate = { 
//   email: 'xyz@gmail.com', 
//   password: "nfon1" 
// } 

// const result = Joi.validate(dataToValidate, authSchema); 

// // module.exports = {
// //   authSchema,
// // }

//book

import Joi from "joi";


 const bookSchema = {
  bookPost: Joi.object().keys({
    book_id: Joi.number().integer().required(),
    title: Joi.string().required(),
    author: Joi.string().min(1),
    author_id: Joi.number(),
    genre: Joi.string(),
    rating: Joi.number().min(0).max(10),
    description: Joi.string(),
    isbn: Joi.number().required(),
    status: Joi.boolean(),
    people_requesting: Joi.number().required(),
    release_date: Joi.date(),
  }),

};

export default bookSchema
