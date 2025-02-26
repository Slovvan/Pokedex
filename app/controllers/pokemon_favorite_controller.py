#crear 
#eliminar
#get all
from flask import Blueprint, request
from app.schemas.pokemon_favorites_schema import PokemonFavoriteSchema
from app.models.factory import ModelFactory
from app.tools.response_manager import ResponseManager
from marshmallow import ValidationError
from bson import ObjectId
from flask_jwt_extended import jwt_required, get_jwt_identity

RM = ResponseManager()
bp = Blueprint("pokemon_favorites", __name__, url_prefix="/pokemon_favorites")
pokemon_favorite_schema = PokemonFavoriteSchema()
pokemon_favorite_model = ModelFactory.get_model("pokemon_favorites")


@bp.route("/", methods=["POST"])
@jwt_required()
def create():
    try:
        #data = pokemon_favorite_schema.load(request.json)
        data = request.json
        data = pokemon_favorite_schema.load(data)
        pokemon_id= pokemon_favorite_model.create(data)
        return RM.success({"pokemon_id":str(pokemon_id)})
    
    except ValidationError as err:
        print(err)
        return RM.error("Los parametros enviados son ncorrectos")
    
    
@bp.route("/delete_pokemon/<string:pokemon_id>", methods=["DELETE"])
@jwt_required()
def delete(pokemon_id):
    pokemon_favorite_model.delete(ObjectId(pokemon_id))
    return RM.success("Pokemon eliminado con exito")

@bp.route("/get_pokemons/", methods=["GET"])
@jwt_required()
def get_all(user_id):
    user_id = get_jwt_identity()
    pokemon = pokemon_favorite_model.find_all(user_id)
    return RM.success(pokemon)