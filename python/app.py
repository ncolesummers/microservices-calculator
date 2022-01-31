import flask
from flask import request, jsonify
from flask_cors import CORS
import math

app = flask.Flask(__name__)
CORS(app)

@app.route('/addition', methods=['POST'])
def addition():
  content = request.json
  [operand_one, operand_two] = [float(content['operandOne']), float(content['operandTwo'])]
  print(f"Calculating {operand_one} + {operand_two}", flush=True)
  out = jsonify({"result": math.ceil((operand_one + operand_two) * 100000)/100000})
  
  return out

app.run(host="0.0.0.0")