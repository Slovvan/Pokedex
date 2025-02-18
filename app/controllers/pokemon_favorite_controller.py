#crear 
#eliminar
#get all
from flask import Blueprint, request, jsonify 
from app.schemas.pokemon_favorites_schema import PokemonFavoriteSchema
from app.models.factory import ModelFactory
from marshmallow import ValidationError
from bson import ObjectId

bp = Blueprint("pokemon_favorites", __name__, url_prefix="/pokemon_favorites")
pokemon_favorite_schema = PokemonFavoriteSchema()
pokemon_favorite_model = ModelFactory.getModel("pokemon_favorites")


@bp.route("/register_pokemon", methods=["POST"])
def register():
    try:
        data = pokemon_favorite_schema.load(request.json)
        pokemon_id= pokemon_favorite_model.create(data)
        return jsonify({"user_id":str(pokemon_id)}, 200)
    
    except ValidationError as error:
        return jsonify("Los parametros enviados son ncorrectos", 400)
    
    
@bp.route("/delete_pokemon/<string:pokemon_id>", methods=["DELETE"])
def delete(pokemon_id):
    pokemon_favorite_model.delete(ObjectId(pokemon_id))
    return jsonify("Pokemon eliminado con exito", 200)

@bp.route("/get_pokemons/", methods=["GET"])
def get_pokemon():
    pokemon = pokemon_favorite_model.find_all()
    return jsonify(pokemon, 200)