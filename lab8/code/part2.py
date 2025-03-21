# Artem Spiian (10192898) 
# Eric Tourigny (30215666)
from re import split
import requests 
from bs4 import BeautifulSoup 
import re
import matplotlib.pyplot as plt
 
url = "https://en.wikipedia.org/wiki/University_of_Calgary" 
 
try: 
    response = requests.get(url) 
    response.raise_for_status()  # Ensures the request was successful 
    soup = BeautifulSoup(response.text, 'html.parser') 
    print()
    print('Number of <a> tags: ' + str(len(soup.find_all('a'))))
    print('Number of <h1> tags: ' + str(len(soup.find_all('h1'))))
    print('Number of <h2> tags: ' + str(len(soup.find_all('h2'))))
    print('Number of <h3> tags: ' + str(len(soup.find_all('h3'))))
    print('Number of <h4> tags: ' + str(len(soup.find_all('h4'))))
    print('Number of <h5> tags: ' + str(len(soup.find_all('h5'))))
    print('Number of <h6> tags: ' + str(len(soup.find_all('h6'))))
    print('Number of <p> tags: ' + str(len(soup.find_all('p'))))

    #working part 4
    string = input("Enter the keyword you want to count: ")
    text = soup.get_text()
    print('Keyword count: ' + str(len(text.split(string)) - 1))

    split_text = [i.lower() for i in text.split()]
    split_text_with_counts = [[x,split_text.count(x)] for x in set(split_text)]

    sorted_data = sorted(split_text_with_counts, key=lambda x: x[1], reverse=True)

    print()
    print('Most popular words are:')
    for x in sorted_data[:5]:
        print(x[0] + ': ' + str(x[1]))

    biggest_paragraph = ''
    biggest_paragraph_length = 0
    for para in soup.find_all('p'):
        if (len(para.get_text()) > biggest_paragraph_length):
            biggest_paragraph_length = len(para.get_text())
            biggest_paragraph = para.get_text()

    print('The longest paragraph is ' + str(biggest_paragraph_length) + ' characters long and ' + str(len(re.findall("\\w+", biggest_paragraph))) + ' words long')
    print(biggest_paragraph)

    headings = len(soup.find_all('h1')) + len(soup.find_all('h2')) + len(soup.find_all('h3')) + len(soup.find_all('h4')) + len(soup.find_all('h5')) + len(soup.find_all('h6'))

    labels = ['Headings', 'Links', 'Paragraphs'] 
    values = [headings, len(soup.find_all('a')), len(soup.find_all('p'))] 

    plt.bar(labels, values) 
    plt.title('Group 39') 
    plt.ylabel('Count') 
    plt.show()

except Exception as e: 
    print(f"Error: {e}") 
