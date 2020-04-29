import requests, time
from bs4 import BeautifulSoup
url = 'https://www.wlvpn.com'
#Requests Library, get webpage wait for 5 seconds()
page = requests.get(url, time.sleep(2))
print(page.content)

#Testing File Writes
file = open('index.html','w')
file.write(str(page.content, 'utf-8'))
file.close()

#soup = BeautifulSoup(page.content, 'html.parser')

#Then for <img> tags
#Then Parse the object first for <script> tags,
#Then for <link> tags / css files
#
#Download content 1 by 1 and write it in a file.
