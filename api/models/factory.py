from api.models.pokemon import Pokemon
from api.models.pokemon_favorite import PokemonFavorites
from api.models.users import User

class ModelFactory:
    @staticmethod
    def get_model(collection_name):
        models = {
            "users": User,
            "pokemons": Pokemon,
            "pokemon_favorites": PokemonFavorites
        }
        if collection_name in models:
            #regresar instancia del modelo dependiendo del nombre
            return models[collection_name]()
        raise ValueError(f"La coleccion enviado : {collection_name} no existe")
    

#modelos de python interactuan directamente con la base de datos
#schema (py) = modelo (js)
#controlador-> validacion de schema -> modelo