import flask
from flask import request, jsonify
from flask_cors import CORS
import math

from wasmer import engine, Store, Module, Instance

app = flask.Flask(__name__)
CORS(app)


@app.route('/add', methods=['POST'])
def add():
  store = Store()

  # Let's compile the module to be able to execute it!
  module = Module(store, """
  (module
    (type (func (param f32 f32) (result f32)))
    (func (export "sum") (type 0) (param f32) (param f32) (result f32)
      local.get 0
      local.get 1
      f32.add))
  """)

  # Now the module is compiled, we can instantiate it.
  instance = Instance(module)

  content = request.json
  [operand_one, operand_two] = [float(content['operandOne']), float(content['operandTwo'])]
  print(f"Calculating {operand_one} + {operand_two}", flush=True)
  out = jsonify({"result": instance.exports.sum(operand_one, operand_two)})
  
  return out

app.run(host="0.0.0.0")
