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
    if fileURL[0:2] == "//":
        print("Could not deal with this", fileURL)
        return fileURL
    if fileURL[0] == '.':
        print("Could not deal with this", fileURL)
        return fileURL
    try:
        TrueFile = False
        #If File has correct extension after '.'
        for x in ['css','js','jpeg','jpg','ico','png','img','bmp','svg']:
            for y in fileURL.split('.'):
                if x in y[0:len(x)].lower():
                    TrueFile = True
                    break
            if TrueFile:
                break
            
        print(fileURL, TrueFile)
        if fileURL == "" or fileURL == " " or not TrueFile:
            return fileURL
        if fileURL[0] == "/":
            fileURL = url + fileURL
        
        if '?' not in fileURL or '?ver' in fileURL :
            if fileURL[0:4] == "http":
                #Get the file 
                file = requests.get(fileURL)
                print(file)
                #Generate file name
                fileName = os.path.join(path,os.path.split(fileURL)[-1].split('?')[0])
                #print(fileName+"; FileName")
                #Check if the file is already in the directory_fileoriginalname
                saveFile = open(fileName, 'wb')
                #Write File
                for line in file:
                    saveFile.write(line)
                saveFile.close()
                return fileName
        else:
            #To Deal with it
            return fileURL
    except:
        print("Error", fileURL)

page = requests.get(url, time.sleep(2))
#print(page.content)

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

#print(soup.find('img')['src'])
#images = soup.findAll('img')
#print(images)

#Images are downloading
for i in range(0,len(soup.findAll('img'))):
    print(soup.findAll('img')[i]['src'])
    soup.findAll('img')[i]['src'] = DownloadFile(soup.findAll('img')[i]['src'])

for i in range(0,len(soup.findAll('script'))):
    try:
        print(soup.findAll('script')[i],'\n\n')
        if 'src' in str(soup.findAll('script')[i]): 
            print(soup.findAll('script')[i]['src'])
            soup.findAll('script')[i]['src'] = DownloadFile(soup.findAll('script')[i]['src'])
    except:
        print(soup.findAll('script'))

for i in range(0,len(soup.findAll('link'))):
    #print(images[i]['src'])
    print(soup.findAll('link')[i]['href'])
    soup.findAll('link')[i]['href'] = DownloadFile(soup.findAll('link')[i]['href'])

#soup.find('img')['src'] = DownloadFile(soup.find('img')['src'])

#print(soup.find('img')['src'])
file.write(soup.prettify())
file.close()


