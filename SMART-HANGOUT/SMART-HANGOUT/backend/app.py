from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simple dummy places data
places = [
    {"name": "Cozy Corner Cafe", "category": "cafe", "budget": 300},
    {"name": "Mumbai Spice Restaurant", "category": "restaurant", "budget": 700},
    {"name": "Infinity Mall", "category": "mall", "budget": 500},
    {"name": "McDonald's Andheri", "category": "mcd", "budget": 250}
]

# Home route
@app.route("/")
def home():
    return "Smart Hangout Finder Backend Running"

# Search API
@app.route("/search", methods=["POST"])
def search():
    data = request.json
    min_budget = data.get("minBudget")
    max_budget = data.get("maxBudget")
    category = data.get("category")

    results = []

    for place in places:
        if min_budget <= place["budget"] <= max_budget:
            if category == "all" or place["category"] == category:
                results.append(place)

    return jsonify(results)

# Chatbot API
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message").lower()

    if "cafe" in user_message:
        reply = "You can try Cozy Corner Cafe ☕"
    elif "mall" in user_message:
        reply = "Infinity Mall is a great hangout spot 🛍️"
    elif "restaurant" in user_message:
        reply = "Mumbai Spice Restaurant is popular 🍽️"
    else:
        reply = "Try searching for cafes, malls, or restaurants in Mumbai!"

    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(debug=True)