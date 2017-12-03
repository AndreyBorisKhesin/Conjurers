from flask import Flask, request
import base64
import numpy as np
import tensorflow as tf
import keras
from keras.models import load_model
import json


app = Flask(__name__)

model = load_model("trained_model.hdf5")
model.load_weights("trained_weights.hdf5")
print("Loaded model and weights")

n = 13 # number of classes
idx_to_labels = {0: "Apple", 1: "Banana", 2: "Coke zero", 
    3: "Oreo Thins (original)", 4: "Cadbury Chocolate Fingers", 
    5: "Chex Mix (Original)", 6: "Diet coke", 7: "Hershey's drops", 
    8: "m&ms", 9: "Sun Chips (Harvest Cheddar)", 
    10: "Pringles (Sour Cream and Onion)", 11: "Coke (Original)", 
    12: "Golden Oreo Thins"}
idx_to_prices = {0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 
    10: 1, 11: 1, 12: 1}
idx_to_paths = {0: "apple", 1: "banana", 2: "black_coke", 
    3: "blue_oreos", 4: "cadbury", 5: "chex_mix", 
    6: "gray_coke", 7: "hersheys", 8: "m&ms", 9: "orange_chips", 
    10: "pringles", 11: "red_coke", 12: "yellow_oreos"}
path = '/Users/Chrsitine/Desktop/Conjurers/images_for_products/'

def predict(img):
    '''
        img: a (64, 64, 3) array
    '''
    prediction = model.predict(img, verbose=0)
    class_labels = [range(n)]
    top3 = sorted(zip(prediction, class_labels), reverse=True)[:3]
    results = []

    for i in range(3):
        label_idx = top3[i][1]

        if i == 0: 
            amout = 1
        else: 
            amount = 0

        json_obj = json.dumps({'src': path+idx_to_paths[label_idx]+'.jpg', 
            'title': idx_to_labels[label_idx1],
            'price': '$'+str(idx_to_prices[label_idx]), 'amount': amount})

        results.append(json_obj)
    
    return results

def match(matrix):
    return "Pen Pineapple Apple Pen\n"


@app.route("/", methods=['POST'])
def handle():
    img_base64 = request.data
    img = np.reshape(np.frombuffer(base64.b64decode(img_base64), np.uint8), 
        (64, 64, 3))
    results = prediction(img)

    return results

if __name__ == "__main__":
    app.run(debug = True)

