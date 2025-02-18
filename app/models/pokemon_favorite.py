from app import mongo
from app.models.super_class import SuperClass

class PokemonFavorites(SuperClass):
    def __init__(self):
        super().__init__("pokemon_favorites")

    def update(self, object_id, data):
       raise NotImplementedError("Los pokemones no se pueden actulizar")

    
