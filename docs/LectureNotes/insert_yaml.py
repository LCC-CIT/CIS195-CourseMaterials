import yaml
import re
import os

def read_yaml_file(yaml_file_path):
    with open(yaml_file_path, 'r') as file:
        data = yaml.safe_load(file)
    return data

def find_markdown_files(directory):
    markdown_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                markdown_files.append(os.path.join(root, file))
    return markdown_files

def prepend_text_to(file_path, text):
    with open(file_path, 'r') as original_file:
        original_content = original_file.read()
    
    # Check if the file already starts with '---'
    if original_content.startswith('---'):
        return
    
    with open(file_path, 'w') as modified_file:
        modified_file.write(f'---\n{text}\n---\n' + original_content)

def extract_h1_text(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    # Check for <h1> element
    match_h1 = re.search(r'<h1>(.+)</h1>', content)
    if match_h1:
        return match_h1.group(1)
    
    # Fallback to # text
    match_hash = re.search(r'^# (.+)', content, re.MULTILINE)
    return match_hash.group(1) if match_hash else 'Default Title'

def main(directory):
    yaml_file_path = os.path.join(directory, 'text_to_add.yaml')
    yaml_data = read_yaml_file(yaml_file_path)
    
    # Convert YAML data to a string with key-value pairs
    text_to_add = '\n'.join(f'{key}: {value}' for key, value in yaml_data.items())
    
    markdown_files = find_markdown_files(directory)
    for markdown_file in markdown_files:
        title = extract_h1_text(markdown_file)
        text_to_add = text_to_add.replace('titleValue', ' '.join(title.split()[:2]))
        prepend_text_to(markdown_file, text_to_add.replace('descriptionValue', title))

if __name__ == "__main__":
    directory = "."
    main(directory)