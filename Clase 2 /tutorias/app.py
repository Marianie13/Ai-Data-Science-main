from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home ():
    return "Bienvenido a la API"

#ruta para enviar daros(post)
@app.route('/mensaje', methods=['POST'])
def mensaje():
    data = request.json
    mensaje= data.get('mensaje', 'No se recibio un mensaje')
    return jsonify({'respuesta': f'Mensaje recibido:{mensaje}'}),201

#Iniciar la aplicacion
if __name__ == '__main__':
    app.run(debug=True)




