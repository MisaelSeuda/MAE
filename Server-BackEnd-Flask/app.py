from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    # verificar as credenciais do usuário aqui
    # se as credenciais estão corretas, retornar uma resposta de sucesso
    return jsonify({'message': 'Logged in successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
