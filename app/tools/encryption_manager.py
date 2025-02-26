import bcrypt

class encryptionManager():
    def create_hash(self, text):
        salt = bcrypt.gensalt #salto de variables
        return bcrypt.hashpw(text.encode("utf-8"), salt).decode("utf-8") # es necesario para evitar problemas en la base de datos
    
    def compare_hashes(self, text, hashpw):
        return bcrypt.checkpw(text.encode("utf-8"), hashpw.encode("utf-8"))
