from flask import Flask, request
# import io
import pprint
# import base64
# import numpy as np
import tensorflow as tf
# from PIL import Image

app = Flask(__name__)
pp = pprint.PrettyPrinter(indent=2)

def match(matrix):
    return "Pen Pineapple Apple Pen"


@app.route("/", methods=['POST'])
def handle():
    image_data = tf.decode_base64(request.data)
    array = tf.image.decode_jpeg(image_data)

    pp.pprint(array)
    return match(array)
