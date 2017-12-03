from flask import Flask, request
# import io
# import base64
# import pprint
# import numpy as np
import tensorflow as tf
# from PIL import Image

app = Flask(__name__)
# pp = pprint.PrettyPrinter(indent=2)
sess = tf.InteractiveSession()

def match(matrix):
    return "Pen Pineapple Apple Pen\n"


@app.route("/", methods=['POST'])
def handle():
    image_data = tf.decode_base64(request.data)
    array = tf.image.decode_jpeg(image_data, channels=3)

    array = tf.Print(array, [array], message="Print: ")

    with tf.Session():
        array.eval()

    b = tf.add(array, array).eval()

    resized = tf.image.resize_images([array], [64, 64])

    resized = tf.Print(resized, [resized], message="Print: ")

    # resized.eval()
    c = tf.add(resized, resized).eval()

    return match(resized)

if __name__ == "__main__":
    app.run(debug = True)

