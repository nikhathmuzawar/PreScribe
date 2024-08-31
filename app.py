from flask import Flask, request, render_template
import spacy
import pytextrank

# Initialize the Flask app
app = Flask(__name__)

# Load spaCy model and add TextRank to the pipeline
nlp = spacy.load("en_core_web_lg")
nlp.add_pipe("textrank")

# Define the home route
@app.route('/', methods=['GET', 'POST'])
def home():
    summary = ""
    if request.method == 'POST':
        # Get the text from the form
        example_text = request.form['text']

        # Process the text with spaCy and pytextrank
        doc = nlp(example_text)

        # Generate the summary
        summary = "\n".join([sent.text for sent in doc._.textrank.summary(limit_phrases=2, limit_sentences=2)])

    return render_template('index.html', summary=summary)

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
