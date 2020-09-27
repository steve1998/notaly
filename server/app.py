from flask import Flask, render_template, jsonify, request, send_file

app = Flask(__name__, static_folder='./', static_url_path='/')

# Routes
@app.route('/')
def home():
  return app.send_static_file('index.html')

@app.route('/notaly-setup', methods=['GET', 'POST'])
def download():
  path="./notaly-setup.exe"
  return send_file(path, as_attachement=True)

