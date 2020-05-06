import requests, time
import os
from bs4 import BeautifulSoup
import base64

def makeDirectory(link_file, path, fileURL):
    fileURLNew = fileURL.split('//')[1]
    fileURLSplit = fileURLNew.split('/');
    newdirectory = path
    if (len(fileURLSplit)>2):
        for folder in fileURLSplit[1:len(fileURLSplit)-1]:
            newdirectory = os.path.join(newdirectory, folder);
            if not os.isdir(newdirectory):
                os.mkdir(newdirectory)
        return newdirectory 
    #If there is no / structure in url
    else:
        return path


def DownloadFile(url,fileURL, path, files_dict, link_file,):
    
    fileExtensions = ['css','js','jpeg','jpg','ico','png','img','bmp','svg','gif','javascript', 'json', 'map', 'xml']
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
        #If file is already downloaded
        if fileURL in link_file:
            return link_file[fileURL]
        TrueFile = False
        #If file is one of the types mentioned above
        file = requests.get(fileURL)
        print(fileURL,file.headers['Content-Type'])
        for x in fileExtensions:
            if x in file.headers['Content-Type']:
                TrueFile = True
                break
            
        #Deal with the directory structure
        
        print(fileURL, TrueFile)
        if not TrueFile:
            return fileURL
        
        
        if '?' not in fileURL or TrueFile :
            #Do Not Duplicate Files
            if fileURL in link_file:
                return link_file[fileURL]
            #Link File URL->FileDirectory
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
                directory = makeDirectory(link_file, path, fileURL):
                file_directory = 
                #URLS with no file name but extensions
                """if (len(split_path) == 1) and split_path[0] in fileExtensions:
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
                """

                files_dict[fileSaveName] = 1    
                #print(split_path)
                fileSaveName = os.path.join(path,fileName)
                
                #Add location of new downloaded file
                link_file[fileURL] = fileSaveName

                print("File to Save name with, ", fileSaveName)
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
            #To deal with resources written has
            return fileURL
    except Exception as E:
        print("*****Not Available/Could Not Download*****", fileURL, E)
        return fileURL
        
