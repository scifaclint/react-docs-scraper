import json
import re

# Load the original JSON
with open('index_apiReference.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def clean_text(text):
    # Remove extra whitespace, normalize spaces, and strip
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    # Remove unwanted characters and formatting
    text = text.replace('\\', '')  # Remove backslashes
    text = text.replace("\'", "'")  # Replace escaped single quotes
    text = text.replace('\"', '"')  # Replace escaped double quotes
    text = text.replace('"', '')  # Remove unescaped double quotes
    text = text.replace("'", '')  # Remove unescaped single quotes
    text = re.sub(r'\u00a0', ' ', text)  # Remove non-breaking spaces
    text = re.sub(r'[\x00-\x1F]+', '', text)  # Remove control characters
    text = re.sub(r'[\[\]{}]', '', text)  # Remove brackets and braces
    text = re.sub(r'<[^>]+>', '', text)  # Remove HTML tags
    text = re.sub(r'[.,;:!?]+$', '', text)  # Remove trailing punctuation
    return text

def split_long_text(text, max_length=120):
    # Split text into chunks of max_length, without breaking words
    words = text.split()
    chunks = []
    current = ''
    for word in words:
        if len(current) + len(word) + 1 <= max_length:
            if current:
                current += ' '
            current += word
        else:
            if current:
                chunks.append(current)
            current = word
    if current:
        chunks.append(current)
    return chunks


for doc in data:
    for section in doc.get('sections', []):
        if 'contents' in section:
            cleaned = []
            for c in section['contents']:
                cleaned_text = clean_text(c)
                # If the cleaned text is long, split it
                if len(cleaned_text) > 120:
                    split_items = split_long_text(cleaned_text, max_length=120)
                    cleaned.extend([clean_text(item) for item in split_items])
                else:
                    cleaned.append(clean_text(cleaned_text))
            section['contents'] = cleaned

# Save to a new file
with open('parsed_sections_cleaned.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
