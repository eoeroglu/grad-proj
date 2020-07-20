#!flask/bin/python
from flask import Flask, jsonify
from flask import make_response
from flask import request
from flask_cors import CORS
import pandas
import datetime
#import statsmodels.api as sm
import json
import pmdarima as pm
#from pmdarima.model_selection import train_test_split
#import numpy as np
#import matplotlib.pyplot as plt
from sklearn import preprocessing
#from sklearn.metrics import mean_squared_error
import warnings

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

@app.route('/api/sec/auto/<int:id>/<string:fact>/', methods=['GET'])
def auto_arima(id, fact):
    warnings.filterwarnings('ignore')
    trainStart = datetime.datetime(2015,1,1)
    trainEnd = datetime.datetime(2018,12,1)
    forecastStart = datetime.datetime(2019,1,1)
    forecastEnd = datetime.datetime(2019,12,1)
    num_months = (forecastEnd.year - trainEnd.year) * 12 + (forecastEnd.month - trainEnd.month)
    secVol = df[df['FACT'] == fact][df['ID'] == id][['PERIOD','SUM']]
    secVol['PERIOD'] = pandas.to_datetime(secVol['PERIOD'], format='%Y%m', errors='coerce').dropna()
    secVol['SUM'] = secVol[['SUM']].values.astype(float)
    secVol = secVol.set_index('PERIOD')
    secVol = secVol.sort_index()
    x = secVol[['SUM']].values.astype(float)
    min_max_scaler = preprocessing.MinMaxScaler()
    x_scaled = min_max_scaler.fit_transform(x)
    secVol['SUM'] = x_scaled
    y = secVol
    trainData = (y['PERIOD'] >= trainStart) & (y['PERIOD'] <= trainEnd)
    model = pm.auto_arima(trainData, seasonal=False, m=num_months)
    forecasts = model.predict(test.shape[0])
    lists = forecasts.tolist()
    json_str = json.dumps(lists)
    return jsonify(json_str)

@app.route('/api/sec/ema/<int:id>/<string:fact>', methods=['GET'])
def moving_average(id, fact):
    warnings.filterwarnings('ignore')
    trainStart = datetime.datetime(2015, 1, 1)
    trainEnd = datetime.datetime(2018, 12, 1)
    forecastStart = datetime.datetime(2019, 1, 1)
    forecastEnd = datetime.datetime(2019, 12, 1)
    trainDiff = (forecastStart.year - trainStart.year) * 12 + (forecastStart.month - trainStart.month)
    secVol = df[df['FACT'] == fact][df['ID'] == id][['PERIOD', 'SUM']]
    secVol['PERIOD'] = pandas.to_datetime(secVol['PERIOD'], format='%Y%m', errors='coerce').dropna()
    secVol['SUM'] = secVol[['SUM']].values.astype(float)
    secVol = secVol.set_index('PERIOD')
    secVol = secVol.sort_index()
    x = secVol[['SUM']].values.astype(float)
    min_max_scaler = preprocessing.MinMaxScaler()
    x_scaled = min_max_scaler.fit_transform(x)
    secVol['SUM'] = x_scaled
    train = secVol.loc[trainStart:forecastEnd]
    secVol_ma = train.rolling(window=trainDiff + 1).mean().dropna()
    result = pandas.concat([train, secVol_ma])
    result = result.to_json(orient='values')
    return jsonify(result)

@app.errorhandler(404)
def not_found(error):
    return make_response(
        jsonify({'HTTP 404 Error': 'The content you looks for does not exist. Please check your request.'}), 404)


if __name__ == '__main__':
    app.run(debug=True)