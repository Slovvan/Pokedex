from app import mongo
from app.models.super_class import SuperClass
from bson import ObjectId

class PokemonFavorites(SuperClass):
    def __init__(self):
        super().__init__("pokemon_favorites")

    def update(self, object_id, data):
       raise NotImplementedError("Los pokemones no se pueden actulizar")

    def find_by_id(self, object_id):
        raise NotImplementedError("Los pokemones no se pueden obtener individualmente")
    
    def find_all(self, user_id):
        data = self.collection.find({"user_id": ObjectId(user_id)})
        return data
    
