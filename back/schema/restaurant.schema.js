import Joi from 'joi';

export const restaurantCreateSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.min": "Le nom doit contenir au moins 3 caractères.",
    "string.max": "Le nom ne peut pas dépasser 50 caractères.",
    "any.required": "Le nom est obligatoire."
  }),
  city: Joi.string().min(3).max(50).required().messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "La ville ne peut pas dépasser 50 caractères.",
    "any.required": "La ville est obligatoire."
  }),
  image: Joi.string().min(3).max(200).required().messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "L'image ne peut pas dépasser 50 caractères.",
    "any.required": "L'image est obligatoire."
  })
})
  .required();
  
export const restaurantUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.min": "Le nom doit contenir au moins 3 caractères.",
    "string.max": "Le nom ne peut pas dépasser 50 caractères.",

  }),
  city: Joi.string().min(3).max(50).messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "La ville ne peut pas dépasser 50 caractères.",

  }),
  image: Joi.string().min(3).max(200).messages({
    "string.min": "La ville doit contenir au moins 3 caractères.",
    "string.max": "L'image ne peut pas dépasser 50 caractères.",
    
  })
})
  .min(1);
    
