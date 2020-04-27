#!flask/bin/python
from flask import Flask, jsonify
from flask import make_response
from flask import request
from flask_cors import CORS
import pandas

app = Flask(__name__)
CORS(app)

df = pandas.read_csv('data.csv', delimiter=';', thousands=',', decimal='.')

@app.route('/api/sec/<int:id>/<int:year>', methods=['GET'])
def get_product(id, year):
    return jsonify({'ortalamaVol': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VOLUME']['SUM'].mean(),
                    'sapmaVol': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VOLUME']['SUM'].std(),
                    'minVol': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VOLUME']['SUM'].min(),
                    'maxVol': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VOLUME']['SUM'].max(),
                    'medVol': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VOLUME']['SUM'].median(),
                    'ortalamaVal': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VALUE']['SUM'].mean(),
                    'sapmaVal': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VALUE']['SUM'].std(),
                    'minVal': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VALUE']['SUM'].min(),
                    'maxVal': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VALUE']['SUM'].max(),
                    'medVal': df[df['ID'] == id][df['YEAR'] == year][df['FACT'] == 'VALUE']['SUM'].median()
                    })

@app.errorhandler(404)
def not_found(error):
    return make_response(
        jsonify({'HTTP 404 Error': 'The content you looks for does not exist. Please check your request.'}), 404)


if __name__ == '__main__':
    app.run(debug=True)