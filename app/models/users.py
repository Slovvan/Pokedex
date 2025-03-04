from app import mongo
from app.models.super_class import SuperClass

class User(SuperClass):
    def __init__(self):
        super().__init__("users")

    def find_all(self):
        raise NotImplementedError("No es necesario obtener todos los usarios")
    
    def get_by_email_password(self, email):
        user = self.collection.find_one({"email": email})
        user["_id"] = str(user["_id"]) #python can not turn objectID into str by itself
        return user
