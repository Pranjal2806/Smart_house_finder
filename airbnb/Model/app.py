from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# load model once
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # extract safely
        area = float(data.get("area", 0))
        distance = float(data.get("distance", 0))
        amenities = int(data.get("amenities", 0))
        ambience = int(data.get("ambience", 0))

        features = [area, distance, amenities, ambience]

        prediction = model.predict([features])[0]

        return jsonify({
            "predicted_rent": round(prediction, 2),
            "status": "success"
        })

    except Exception as e:
        return jsonify({
            "error": str(e),
            "status": "failed"
        }), 500

if __name__ == "__main__":
    app.run(port=5001, debug=True)