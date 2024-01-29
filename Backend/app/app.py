#Importando  flask y algunos paquetes
from fastapi import FastAPI, HTTPException, Request, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from passlib.context import CryptContext
from typing import List, Optional
import mysql.connector

# Configuración de la aplicación FastAPI
app = FastAPI()

# Configuración del CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración de la base de datos
MYSQL_USER = 'root'
MYSQL_PASSWORD = ''
MYSQL_HOST = 'localhost'
MYSQL_DB = 'walking_legs'

# Configuración del Contexto de la Contraseña
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Modelos Pydantic para validación de datos
class User(BaseModel):
    id: int
    idroles: int
    nombre: str
    correo: str


class UserInDB(User):
    contraseña: str


class UserCreate(BaseModel):
    name: str
    apellido: str
    documento: str
    email: str
    password: str
    telefono: str
    direccion: str


class Paseo(BaseModel):
    tipo_mascota: str
    direccion: str
    fecha: str
    duracion: str


# Funciones auxiliares
def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            database=MYSQL_DB
        )
        yield connection
    finally:
        if 'connection' in locals():
            connection.close()


# Rutas
@app.post('/login')
async def login(request: Request):
    if request.method == 'POST' and request.is_json:
        data = await request.json()
        email = data.get('email')
        password = data.get('password')

        cursor = mysql.connection.cursor()

        cursor.execute('SELECT id, idroles, nombre, correo, contraseña FROM usuarios WHERE correo = %s', (email,))
        usuario = cursor.fetchone()
        cursor.close()

        if usuario and pwd_context.verify(password, usuario[4]):
            response = {
                "message": "Logged in successfully",
                "dataLogin": {
                    "id": usuario[0],
                    "idroles": usuario[1],
                    "nombre": usuario[2],
                    "correo": usuario[3]
                }
            }
            return JSONResponse(content=response, status_code=status.HTTP_200_OK)
        else:
            response = {
                "message": "Email o contraseña incorrectos"
            }
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=response)
    else:
        response = {
            "message": "Solicitud incorrecta"
        }
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=response)


@app.post('/register_cliente')
async def registrar_cliente(user_data: UserCreate, db: mysql.connector.connection.MySQLConnection = Depends(get_db_connection)):
    try:
        cursor = db.cursor()
        cursor.execute('SELECT correo FROM usuarios WHERE correo = %s', (user_data.email,))
        usuario = cursor.fetchone()

        if usuario:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail={"message": "El correo ya está registrado."})
        else:
            password_encriptada = pwd_context.hash(user_data.password)

            cursor.execute(
                'INSERT INTO usuarios (nombre, apellido, documento, correo, contraseña, telefono, direccion, idroles) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)',
                (user_data.name, user_data.apellido, user_data.documento, user_data.email, password_encriptada, user_data.telefono, user_data.direccion, 2)
            )

            db.commit()

            response = {
                "message": "Cliente registrado exitosamente."
            }

            return JSONResponse(content=response, status_code=status.HTTP_200_OK)

    except Exception as e:
        response = {
            "message": "Hubo un error durante el registro. Por favor, inténtalo de nuevo."
        }
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=response)

    finally:
        cursor.close()


@app.get('/obtener_usuarios')
async def obtener_usuarios(db: mysql.connector.connection.MySQLConnection = Depends(get_db_connection)):
    try:
        cursor = db.cursor()
        cursor.execute('SELECT nombre,apellido,documento,correo,telefono FROM `usuarios` WHERE idroles = 2;')
        resultados = cursor.fetchall()

        payload = []

        for result in resultados:
            content = {
                'nombre': result[0],
                'apellido': result[1],
                'documento': result[2],
                'correo': result[3],
                'telefono': result[4]
            }
            payload.append(content)

        return payload

    except Exception as e:
        error_message = str(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail={"error": error_message})

    finally:
        cursor.close()


@app.post('/solicitar_paseo')
async def solicitar_paseo(paseo_data: Paseo, db: mysql.connector.connection.MySQLConnection = Depends(get_db_connection)):
    try:
        cursor = db.cursor()
        cursor.execute('INSERT INTO paseo (fecha, tipo_mascota, direccion, duracion) VALUES (%s, %s, %s, %s)',
                       (paseo_data.fecha, paseo_data.tipo_mascota, paseo_data.direccion, paseo_data.duracion))
        db.commit()
        cursor.close()

        response = {
            "message": "Servicio solicitado exitosamente",
            "tipo_mascota": paseo_data.tipo_mascota,
            "direccion": paseo_data.direccion,
            "duracion": paseo_data.duracion,
            "fecha_programada": paseo_data.fecha
        }

        return JSONResponse(content=response, status_code=status.HTTP_200_OK)

    except Exception as e:
        response = {
            "message": "Error al solicitar el servicio. Por favor, inténtelo nuevamente más tarde."
        }
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=response)


@app.post('/cerrarsesion')
async def cerrarsesion():
    return {"mensaje": "Sesión cerrada exitosamente"}
  