import os
import yaml
import re

def read_yaml_file(yaml_file_path):
    with open(yaml_file_path, 'r') as file:
        data = yaml.safe_load(file)
    return data['text_to_add']

def find_markdown_files(directory):
    markdown_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                markdown_files.append(os.path.join(root, file))
    return markdown_files

def prepend_text_to_file(file_path, text):
    with open(file_path, 'r') as original_file:
        original_content = original_file.read()
    with open(file_path, 'w') as modified_file:
        modified_file.write(text + '\n' + original_content)

def extract_h1_text(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    match = re.search(r'# (.+)', content)
    return match.group(1) if match else 'Default Title'

def main(directory):
    yaml_file_path = os.path.join(directory, 'text_to_add.yaml')
    text_to_add = read_yaml_file(yaml_file_path)
    markdown_files = find_markdown_files(directory)
    
    for md_file in markdown_files:
        h1_text = extract_h1_text(md_file)
        modified_text = text_to_add.replace('title', h1_text).replace('description', h1_text)
        prepend_text_to_file(md_file, modified_text)

if __name__ == "__main__":
    directory = '.'  # Change this to the target directory if needed
    main(directory)