#!flask/bin/python
from flask import Flask, jsonify
from flask import make_response
from flask import request
from flask_cors import CORS
import pandas

app = Flask(__name__)
CORS(app)

df = pandas.read_csv('2019.csv', delimiter=';', thousands=',', decimal='.')

@app.route('/api/sec/<int:id>', methods=['GET'])
def get_product(id):
    return jsonify({'ortalamaVol': df[df['ID'] == id]['VOL'].mean(),
                    'sapmaVol': df[df['ID'] == id]['VOL'].std(),
                    'minVol': df[df['ID'] == id]['VOL'].min(),
                    'maxVol': df[df['ID'] == id]['VOL'].max(),
                    'medVol': df[df['ID'] == id]['VOL'].median(),
                    'ortalamaVal': df[df['ID'] == id]['VAL'].mean(),
                    'sapmaVal': df[df['ID'] == id]['VAL'].std(),
                    'minVal': df[df['ID'] == id]['VAL'].min(),
                    'maxVal': df[df['ID'] == id]['VAL'].max(),
                    'medVal': df[df['ID'] == id]['VAL'].median()
                    })

@app.errorhandler(404)
def not_found(error):
    return make_response(
        jsonify({'HTTP 404 Error': 'The content you looks for does not exist. Please check your request.'}), 404)


if __name__ == '__main__':
    app.run(debug=True)