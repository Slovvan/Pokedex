from marshmallow import Schema, fields, ValidationError

class UserSchema(Schema):
    name = fields.Str(
        #requerimientos a validar
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "El nombre es requerido"
        }
    )
    password = fields.Str(
        #requerimientos a validar
        required= True,
        validate= lambda x: len(x) > 0,
        error_messages={
            "required": "La contraseña es requerido"
        }
    )
    email = fields.Email(
        #requerimientos a validar
        required= True,
        validate= lambda x: "@utma.edu.mx" in x,
        error_messages={
            "required": "El correo es requerido"
        }
    )