import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import json

# Initialize Selenium WebDriver (Headless Chrome)
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--disable-gpu')

# Initialize WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Define the URLs to process
urls = [
    "http://localhost:3000/docs/api-reference/introduction",
    "http://localhost:3000/docs/api-reference/error-handling",
    "http://localhost:3000/docs/api-reference/upload-files"
]

# Root URL for constructing mainUrl
root_url = "/docs/api-reference/"

# Initialize parsed data list
parsed_data = []

# Process each URL
for url in urls:
    print(f"Processing URL: {url}")
    
    # Open the URL
    driver.get(url)
    
    # Wait for JavaScript to load
    time.sleep(3)
    
    # Get the page source
    page_source = driver.page_source
    
    # Parse HTML with BeautifulSoup
    soup = BeautifulSoup(page_source, 'html.parser')
    
    # Find all divs with data-search-sections attribute
    section_divs = soup.find_all('div', {'data-search-sections': True})
    
    print(f"Found {len(section_divs)} divs with 'data-search-sections' attribute.")
    
    # Process each data-search-sections div
    for section_div in section_divs:
        section_data = {
            'title': section_div.get('data-search-title', ''),
            'id': section_div.get('data-search-sections', ''),
            'mainUrl': f"{root_url}{section_div.get('data-search-sections', '')}",
            'sections': []
        }
        
        # Find all nested divs with data-search attribute
        search_divs = section_div.find_all('div', {'data-search': True})
        
        print(f"Found {len(search_divs)} divs with 'data-search' attribute in section '{section_data['id']}'.")
        
        # Process each data-search div
        for search_div in search_divs:
            search_section = {
                'title': search_div.get('data-title', ''),
                'contents': []
            }
            
            # Collect text from specified elements
            text_elements = search_div.find_all(['h2', 'h3', 'p', 'li'])
            for element in text_elements:
                text = element.get_text(strip=True)
                if text:
                    search_section['contents'].append(text)
            
            # Add section if it has content
            if search_section['contents']:
                section_data['sections'].append(search_section)
        
        # Add section data if it has subsections
        if section_data['sections']:
            parsed_data.append(section_data)

# Save to JSON
if parsed_data:
    with open('parsed_sections.json', 'w', encoding='utf-8') as json_file:
        json.dump(parsed_data, json_file, indent=4)
    print("Data saved to 'parsed_sections.json'")
else:
    print("No data to save.")

# Close browser
driver.quit()