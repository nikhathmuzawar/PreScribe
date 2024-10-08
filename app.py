from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import spacy
import pytextrank

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load spaCy model and add pytextrank
nlp = spacy.load("en_core_web_lg")
nlp.add_pipe("textrank")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    symptoms_text = data.get('symptoms', '')
    history="diagnosed with Migraines a few years ago and have been taking medication for it. history of high blood pressure and I had a knee surgery last year."
    symptoms_text=str(symptoms_text+history)
    doc = nlp(symptoms_text)
    summary_sentences = [sent.text for sent in doc._.textrank.summary(limit_phrases=2, limit_sentences=2)]
    print(summary_sentences)
    firstaid="Fisrt aid: take a dolo for temporay relif"
    summary_sentences.append("Fisrt aid: take a dolo for temporay relif")
    
    return jsonify(summary=summary_sentences)

if __name__ == '__main__':
    app.run(debug=True)

