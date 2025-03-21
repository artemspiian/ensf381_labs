import requests
from bs4 import BeautifulSoup

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

    print("\n\n".join(str(tag) for tag in soup.find_all("a")))