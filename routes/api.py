from flask import Blueprint

test_blueprint = Blueprint('test_blueprint', __name__)

@test_blueprint.route('/hello', methods=["GET"])
def hello():
    return 'Hello, World'