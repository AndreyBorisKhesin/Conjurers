from flask import Flask, request
# import io
# import base64
# import numpy as np
import pprint
import tensorflow as tf
# from PIL import Image

app = Flask(__name__)
# sess = tf.InteractiveSession()

def match(matrix):
    return "Pen Pineapple Apple Pen\n"


@app.route("/", methods=['POST'])
def handle():
    image_data = tf.decode_base64(request.data)
    array = tf.image.decode_jpeg(image_data, channels=3)

#     array = tf.Print(array, [array], message="Print: ")

#     array.eval(session=sess)
#     b = tf.add(array, array).eval(session=sess)

    resized = tf.image.resize_images([array], [64, 64])

#     resized = tf.Print(resized, [resized], message="Print: ")

#     resized.eval(session=sess)
#     c = tf.add(resized, resized).eval(session=sess)

    return match(resized)

if __name__ == "__main__":
    app.run(debug = True)