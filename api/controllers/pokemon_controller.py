from flask import Blueprint, jsonify 
from api.models.factory import ModelFactory
from api.tools.response_manager import ResponseManager
from bson import ObjectId
from flask_jwt_extended import jwt_required


bp = Blueprint("pokemon", __name__, url_prefix="/pokemon")
RM = ResponseManager()
POKEMON_MODEL = ModelFactory.get_model("pokemons")

#Get One
@bp.route("/get/<string:pokemon_id>", methods=["GET"])
@jwt_required()
def get_pokemon(pokemon_id):
    pokemon = POKEMON_MODEL.find_by_id(ObjectId(pokemon_id))
    return RM.success(pokemon)

#Get All
@bp.route("/", methods=["GET"])
@jwt_required()
def get_all():
    data = POKEMON_MODEL.find_all()
    return RM.success(data)