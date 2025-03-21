import requests
from bs4 import BeautifulSoup
import re

url = "https://en.wikipedia.org/wiki/University_of_Calgary"

def create_soup():
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        print(f"Successfully fetched content from {url}")
    except Exception as e:
        print(f"Error fetching content: {e}")
    return soup

def count_occurences(soup : BeautifulSoup, tag):
    return len(soup.find_all(tag))

if __name__ == "__main__":
    soup = create_soup()

    # Part 3: Data Analysis
    heading_tags = ("h1", "h2", "h3", "h4", "h5", "h6")
    print(f"There are {sum(count_occurences(soup, tag) for tag in heading_tags)} headings")
    print(f"There are {count_occurences(soup, 'a')} links")
    print(f"There are {count_occurences(soup, 'p')} paragraphs")

    # Part 4: Keywords analysis
    keyword = input("Enter a keyword to count occurences of: ")
    page_text = soup.get_text(separator=" ")
    print(page_text.count(keyword))

    # Part 5: Word Frequency Analysis
    
    words = re.findall("[a-zA-Z]+", page_text)
    print(words)

    frequencies = dict()
    for word in words:
        word = word.lower()
        frequencies[word] = frequencies.get(word, 0) + 1
    sorted_frequencies = sorted(frequencies.items(), key=lambda pair : pair[1])
    
    def print_frequency_pair(pair):
        print(f"   {pair[0]} : {pair[1]}")

    print("The top 5 frequencies are:")
    for pair in sorted_frequencies[-1 : -6 : -1]:
        print_frequency_pair(pair)

    
        
    