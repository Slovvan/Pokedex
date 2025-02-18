from marshmallow import schema, fields, ValidationError

class PokemonFavoriteSchema(schema):
    pokemon_id = fields.Int(
        #requerimientos a validar
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El nombre es requerido"
        }
    )
    """ name_pokemon = fields.Str(
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El nombre del pokemon es requerido"
        }
    ) """
    user_id = fields.Int(

        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El nombre del usuario es requerido"
        }
    )
  