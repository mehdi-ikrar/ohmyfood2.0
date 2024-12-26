import Joi from 'joi';

export const dishCreateSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.min": "Le nom doit contenir au moins 3 caractères.",
    "string.max": "Le nom ne peut pas dépasser 50 caractères.",
    "any.required": "Le nom est obligatoire."
  }),
  description: Joi.string().min(3).max(50).required().messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "La ville ne peut pas dépasser 50 caractères.",
    "any.required": "La ville est obligatoire."
  }),
  price: Joi.number().min(0).precision(2).required().messages({
    "number.base": "Le prix doit être un nombre.",
    "number.min": "Le prix ne peut pas être négatif.",
    "number.precision": "Le prix ne peut pas avoir plus de deux décimales.",
    "any.required": "Le prix est obligatoire."
  }),
  restaurant_id: Joi.string().min(3).max(50).allow('').messages({
    "string.min": "Le prix doit contenir au moins 3 caractères.",
    "string.max": "Le prix ne peut pas dépasser 50 caractères."
  })
  
})
  .required();
  
export const dishUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.min": "Le nom doit contenir au moins 3 caractères.",
    "string.max": "Le nom ne peut pas dépasser 50 caractères.",

  }),
  description: Joi.string().min(3).max(50).messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "La ville ne peut pas dépasser 50 caractères.",

  }),
  price: Joi.string().min(3).max(50).allow('').messages({
    "string.min": "Le prix doit contenir au moins 3 caractères.",
    "string.max": "Le prix ne peut pas dépasser 50 caractères."
  }),
  restaurant_id: Joi.string().max(50).allow('').messages({
    "string.min": "Le prix doit contenir au moins 3 caractères.",
    "string.max": "Le prix ne peut pas dépasser 50 caractères."
  })
  
})
  .required()
  .min(1);
    
