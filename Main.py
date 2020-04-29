import requests, time
import os
from bs4 import BeautifulSoup
url = 'https://www.wlvpn.com'
#Requests Library, get webpage wait for 5 seconds()
folder = url.split('.')[1]
path = os.path.join(os.getcwd(), folder)
print(folder)
print(path)
if not os.path.isdir(path):
    os.mkdir(path)
files_dict = {}

def DownloadFile(fileURL):
    if '?' not in fileURL:
        if fileURL[0] == "/" or fileURL[0] == '.':
            pass
        elif fileURL[0:4] == "http":
            #Get the file 
            file = requests.get(fileURL)
            print(file)
            #Generate file name
            fileName = os.path.join(path,os.path.split(fileURL)[1])
            print(fileName)
            #Check if the file is already in the directory_fileoriginalname
            saveFile = open(fileName, 'wb')
            #Write File
            for line in file:
                saveFile.write(line)
            saveFile.close()
            return fileName
    else:
        pass

page = requests.get(url, time.sleep(2))
print(page.content)

#Testing File Writes
file = open('index.html','w')
#file.write(str(page.content, 'utf-8'))
#file.close()

soup = BeautifulSoup(page.content, 'html.parser')

#Then for <img> tags
#Then Parse the object first for <script> tags,
#Then for <link> tags / css files
#
#Download content 1 by 1 and write it in a file.
#print(soup.prettify())
#soup.find('img')['src'] = 2

print(soup.find('img')['src'])
soup.find('img')['src'] = DownloadFile(soup.find('img')['src'])

print(soup.find('img')['src'])
file.write(soup.prettify())
file.close()


