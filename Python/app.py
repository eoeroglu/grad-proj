#!flask/bin/python
from flask import Flask, jsonify
from flask import make_response
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/sec/<int:id>', methods=['GET'])
def get_product(id):
    return jsonify({'ortalama': id})

@app.errorhandler(404)
def not_found(error):
    return make_response(
        jsonify({'HTTP 404 Error': 'The content you looks for does not exist. Please check your request.'}), 404)


if __name__ == '__main__':
    app.run(debug=True)