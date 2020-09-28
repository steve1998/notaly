from flask import Flask, render_template, jsonify, request, redirect

app = Flask(__name__, static_folder='./', static_url_path='/')

# Routes
@app.route('/')
def home():
  return app.send_static_file('index.html')

@app.route('/notaly-setup', methods=['GET', 'POST'])
def download():
  path="/notaly-setup.exe"
  try:
    return redirect('https://github.com/steve1998/whattobuy/blob/release/1.0.0/server/notaly-setup.exe')
  except Exception as e:
    self.log(e)
    self.Error(400)

