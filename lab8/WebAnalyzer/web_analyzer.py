import requests
from bs4 import BeautifulSoup
import re
import matplotlib.pyplot as plt

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

if __name__ == "__main__":
    soup = create_soup()

    # Part 3: Data Analysis
    def count_occurences(soup : BeautifulSoup, tag):
        return len(soup.find_all(tag))

    heading_tags = ("h1", "h2", "h3", "h4", "h5", "h6")
    heading_count = sum(count_occurences(soup, tag) for tag in heading_tags)
    link_count = count_occurences(soup, 'a')
    paragraph_count = count_occurences(soup, 'p')
    print(f"There are {heading_count} headings")
    print(f"There are {link_count} links")
    print(f"There are {paragraph_count} paragraphs")

    # Part 4 / 5: Keywords analysis and Word Frequency Analysis
    page_text = soup.get_text(separator=" ")
    words = re.findall(r"\w+", page_text)
    frequencies = dict()
    for word in words:
        word = word.lower()
        frequencies[word] = frequencies.get(word, 0) + 1

    # Part 4: Keyword analysis:
    keyword = input("Enter a keyword to count occurences of: ")
    occurences = frequencies.get(keyword.lower(), 0)
    print(f"{keyword} appears {occurences} times.")

    # Part 5: Word Frequency Analysis
    print("The top 5 frequencies are:")
    sorted_frequencies = sorted(frequencies.items(), key=lambda pair : pair[1])
    for pair in sorted_frequencies[-1 : -6 : -1]:
        print(f"   {pair[0]} : {pair[1]}")

    # Part 6: Longest Paragraph
    def find_paragraph_length(paragraph):
        return len(re.findall(r"\w+", paragraph.get_text()))

    paragraphs = soup.find_all("p")
    paragraph = max(paragraphs, key=find_paragraph_length)
    print(paragraph.get_text())

    # Part 7: Visualizing Results
    labels = ["headings", "links", "paragraphs"]
    values = [heading_count, link_count, paragraph_count]

    plt.bar(labels, values)
    plt.title("Group xx")
    plt.ylabel("Count")
    plt.show()