from flask import Flask, request
import io
import pprint
import base64
import numpy as np
# import tensorflow as tf
from PIL import Image

app = Flask(__name__)
pp = pprint.PrettyPrinter(indent=2)

def match(matrix):
    return "Pen Pineapple Apple Pen"


@app.route("/", methods=['POST'])
def handle():
    image_data = base64.b64decode(request.data)
    image = Image.open(io.BytesIO(image_data))
    array = np.array(image)

    pp.pprint(array)
    return match(array)
