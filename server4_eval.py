from flask import Flask, request
from flask_cors import CORS
import base64
import numpy as np
import tensorflow as tf
import keras
from keras.models import load_model
import json
from PIL import Image


app = Flask(__name__)
CORS(app)
model = load_model("trained_model.hdf5")
model.load_weights("trained_weights.hdf5")
print("Loaded model and weights")

graph = tf.get_default_graph()
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
path = 'assets/imgs/'


def predict(img):
    with graph.as_default():
        prediction = model.predict(img, verbose=0)
    print(prediction)
    class_labels = [range(n)]
    top3 = sorted(zip(prediction, class_labels), reverse=True)[:3]
    print(top3)
    label_idx = 0
    label_idx = int(np.argmax(prediction))
    return str(label_idx)

def match(matrix):
    return "Pen Pineapple Apple Pen\n"


@app.route("/", methods=['POST'])
def handle():
    img_base64 = request.data
    # img = np.reshape(np.frombuffer(base64.b64decode(img_base64), np.uint8), (64, 64, 3))
    with open("temp.jpg", "wb") as fh:
        fh.write(base64.decodestring(img_base64))
    img = Image.open("temp.jpg")
    new_img = img.resize((64, 64))
    img_array = np.array(new_img.getdata()).reshape(1, new_img.size[1], new_img.size[0], 3)
    results = predict(img_array)
    print("WE ARE SENDING BACK THIS: " + results)

    imgk = Image.open('Conjurers/src/' + path + idx_to_paths[int(results)] + '.jpg')
    imgk.show()
    return results

if __name__ == "__main__":
    app.run(debug = True)

