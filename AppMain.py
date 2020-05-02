from Main import *
import base64


from flask import Flask, request

#DEBUG=os.environ["DEBUG_LINKEDIN_ENDPOINT"]=="True"

app = Flask(__name__)
@app.route("/get_webpage/<string:base64domain>/", methods=["GET"])
def websiteMain(base64domain):
    url = str(base64.b64decode(base64domain), 'utf-8')
    cloner(url)
    return url+": Cloned, base64=:"+base64domain


app.run(host="localhost")
