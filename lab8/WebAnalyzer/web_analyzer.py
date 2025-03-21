import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/University_of_Calgary"

try:
    respone = requests.get(url)

except Exception as e:
    print(f"Error fetching content: {e}")