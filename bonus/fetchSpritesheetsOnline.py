
## Get all the spritesheets from Spriters resources
import requests
from bs4 import BeautifulSoup
from urllib.request import urlretrieve

url = 'https://www.spriters-resource.com/nintendo_switch/octopathtravelerii/'
reqs = requests.get(url)
soup = BeautifulSoup(reqs.text, 'html.parser')

spritelinks = []
for link in soup.find_all('a'):
	a = link.get('href')
	if("sheet" in a):
		a = a.split('/')
		spritelinks.append(a[4])
		
imagelinks = []
for link in spritelinks:
	url = "https://www.spriters-resource.com/fullview/" + link
	reqs = requests.get(url)
	soup = BeautifulSoup(reqs.text, 'html.parser')
	lst = []
	for link in soup.find_all('img'):
		a = link.get('src')
		if("sheets" in a):
		    imagelinks.append(a)

count = 0
for url in imagelinks:
	path = "spritesheet/" + str(count) + ".png"
	try:
		urlretrieve("https://www.spriters-resource.com" + url, path)
		print("saved: " + str(count))
		count += 1
	except:
		print("Could not get image from url: " + url)
		break