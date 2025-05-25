import json
import os

# Input and output file paths
input_file = "parsed_sections_cleaned.json"
output_file = "apiDocs.js"

try:
    # Read the JSON file
    with open(input_file, 'r') as f:
        data = json.load(f)
    
    # Convert JSON to JavaScript object string
    js_content = f"const apiDocs = {json.dumps(data, indent=2)};"
    
    # Write to .js file
    with open(output_file, 'w') as f:
        f.write(js_content)
    
    print(f"Successfully converted {input_file} to {output_file}")

except FileNotFoundError:
    print(f"Error: The file {input_file} was not found.")
except json.JSONDecodeError:
    print("Error: The input file is not a valid JSON file.")
except Exception as e:
    print(f"An error occurred: {str(e)}")