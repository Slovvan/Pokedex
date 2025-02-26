from marshmallow import Schema, fields

class PokemonFavoriteSchema(Schema):
    pokemon_id = fields.Int(
        #requerimientos a validar
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El nombre es requerido"
        }
    )
    user_id = fields.Str(
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El Usuario es requerido"
        }
    )
  