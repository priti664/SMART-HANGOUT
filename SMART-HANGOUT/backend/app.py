from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# Create database tables
with app.app_context():
    db.create_all()

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

# Registration API
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"error": "Username, email, and password are required"}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Username already exists"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

# Login API
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({"error": "Invalid username or password"}), 401

    return jsonify({"message": "Login successful", "user": {"id": user.id, "username": user.username, "email": user.email}}), 200


if __name__ == "__main__":
    app.run(debug=True)