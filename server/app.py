from flask import Flask, render_template, jsonify, request

app = Flask(__name__, static_folder='./', static_url_path='/')

# Routes
@app.route('/')
def home():
  return app.send_static_file('index.html')
