import requests, time
import os
from bs4 import BeautifulSoup
url = 'https://www.muhammadniaz.net'
#Requests Library, get webpage wait for 5 seconds()
folder = url.split('.')[1]
tmppath = os.path.join(os.getcwd(),'project')
path = os.path.join(tmppath, folder)
print(folder)
print(path)
if not os.path.isdir(tmppath):
    os.mkdir(tmppath)
if not os.path.isdir(path):
    os.mkdir(path)

#Dictionary FileName to check if new name to allot
files_dict = {}
#For not Duplicating files already downloaded contains URLs, Location in PC
link_file = {}
def DownloadFile(fileURL):
    fileExtensions = ['css','js','jpeg','jpg','ico','png','img','bmp','svg','gif','javascript', 'json', 'map']
    if fileURL == "" or fileURL == " " :
        return fileURL
    
    if fileURL[0] == '.':
        print("Could not deal with this", fileURL)
        return fileURL
    #To Deal with this file Now
    if fileURL[0:2] == "//":
        print("Dealt with //", fileURL)
        fileURL = "http:"+fileURL
    
    try:
        if fileURL[0] == "/":
            fileURL = url + fileURL
        TrueFile = False
        #If File has correct extension after '.'
        file = requests.get(fileURL)
        print(fileURL,file.headers['Content-Type'])
        for x in fileExtensions:
            if x in file.headers['Content-Type']:
                TrueFile = True
                break
            
        print(fileURL, TrueFile)
        if not TrueFile:
            return fileURL
        
        
        if '?' not in fileURL or TrueFile :
            #Do Not Duplicate Files
            if fileURL in link_file:
                return link_file[fileURL]
            #If File has complete URL now
            if fileURL[0:4] == "http":
                #Get the file 
                file = requests.get(fileURL)
                #print(file)
                fileName = ''
                #print(files_dict)
                #print(os.path.split(fileURL)[-1].split('?')[0])
                #Generate file name check if file with same name downloaded already
                it=0
                split_path = os.path.split(fileURL)[-1].split('?')[0].split('.') 
                #print(split_path)
                
                #URLS with no file name but extensions
                if (len(split_path) == 1) and split_path[0] in fileExtensions:
                    fileName = str(it)+"."+split_path[0]
                    while fileName in files_dict:
                        it+=1
                        fileName = str(it)+"."+split_path[0]
                        
                        
                #Join if the file path has multiple '.'
                
                else:    
                    fileName = split_path[0]
                    for dotSepExt in split_path[1:]:
                        fileName += '.' + dotSepExt
                it=0
                while fileName in files_dict:
                    it += 1
                    fileName = split_path[0] + str(it)
                    for dotSepExt in split_path[1:]:
                        fileName += '.' + dotSepExt
                    #print(fileName, "New Name")

                files_dict[fileName] = 1    
                #print(split_path)
                fileSaveName = os.path.join(path,fileName)
                
                #Add location of new downloaded file
                link_file[fileURL] = fileName

                #print("File to Save name with, ", fileSaveName)
                #print(fileName+"; FileName")
                #Check if the file is already in the directory_file originalname
                saveFile = open(fileSaveName, 'wb')
                #saveFile = open(fileName,'wb')
                #Write File
                for line in file:
                    saveFile.write(line)
                saveFile.close()
                #print(files_dict)
                #return fileSaveName
                return fileName

        else:
            #To Deal with it if files hai ? and not ver
            return fileURL
    except Exception as E:
        print("*****Error*****", fileURL, E)
        return fileURL
        

page = requests.get(url, time.sleep(2))
#print(page.content)

#Testing File Writes
file = open(os.path.join(path,'index.html'),'wb')
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
        #print(soup.findAll('script')[i],'\n\n')
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
file.write(soup.encode('utf-8'))
file.close()



#Other Option
#Another Option
#Request Header for each website, and check which version extension is the file
#and download accordingly.
