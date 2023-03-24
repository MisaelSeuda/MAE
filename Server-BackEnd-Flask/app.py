from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret' # troque por uma chave secreta adequada
jwt = JWTManager(app)

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    # verificar as credenciais do usuário aqui
    # se as credenciais estão corretas, criar um token
    access_token = create_access_token(identity=email)
    return jsonify({'token': access_token}), 200

@app.route('/me', methods=['GET'])
@jwt_required()
def me():
    current_user = jwt.get_jwt_identity()
    # obter os dados do usuário aqui
    return jsonify({'email': current_user}), 200

if __name__ == '__main__':
    app.run(debug=True)
