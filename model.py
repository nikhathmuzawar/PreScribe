import spacy
import pytextrank

nlp = spacy.load("en_core_web_lg")
nlp.add_pipe("textrank")

example_text = """severe abdominal pain, nausea, and vomiting. 
The pain is localized in the lower right quadrant and has been persistent for the last 24 hours. 
The patient also reports a low-grade fever and loss of appetite. 
Physical examination reveals tenderness and guarding in the right lower quadrant. 
"""
print('Original Document Size:',len(example_text))
doc = nlp(example_text)

for sent in doc._.textrank.summary(limit_phrases=2, limit_sentences=2):
	print(sent)
	print('Summary Length:',len(sent))
