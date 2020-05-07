import requests, time
import os
from bs4 import BeautifulSoup
import base64

def makeDirectory(path, fileURL):
    fileURLNew = fileURL.split('//')[1]
    fileURLSplit = fileURLNew.split('/')
    SaveDirectory = path
    HTMLdirectory = ""
    if (len(fileURLSplit)>2):
        for folder in fileURLSplit[1:len(fileURLSplit)-1]:
            SaveDirectory = os.path.join(SaveDirectory, folder);
            if not os.path.isdir(SaveDirectory):
                os.mkdir(SaveDirectory)
            HTMLdirectory = os.path.join(HTMLdirectory, folder);
    
    return SaveDirectory, HTMLdirectory


def getFileNameInDir(newdirectory, files_dict, split_path, fileExtensions, link_file=None ):
    it=0
    #If The URL has no directory structure
    if (len(split_path) == 1) and split_path[0] in fileExtensions:
        fileName = str(it)+"."+split_path[0]
        fileSaveName = os.path.join(newdirectory,fileName)
        while fileSaveName in files_dict:
            it+=1
            fileName = str(it)+"."+split_path[0]
            fileSaveName = os.path.join(newdirectory,fileName)
        files_dict[fileSaveName] = 1            
        return fileSaveName
    
    #These files need a specific directory
    else:    
        fileName = split_path[0]
        #Join if the file path has multiple '.'
        for dotSepExt in split_path[1:]:
            fileName += '.' + dotSepExt
        fileSaveName = os.path.join(newdirectory,fileName)

        while fileSaveName in files_dict:
            it += 1
            fileName = split_path[0] + str(it)
            for dotSepExt in split_path[1:]:
                fileName += '.' + dotSepExt
            fileSaveName =  os.path.join(newdirectory,fileName)
        return fileSaveName



def DownloadFile(url,fileURL, path, files_dict, link_file):
    
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
                split_path = os.path.split(fileURL)[-1].split('?')[0].split('.') 
                #print(split_path)
                #Create a directory
                SaveDirectory, HTMLDirectory = makeDirectory(path, fileURL);
                
                #It is non absolute path
                fileSaveName = getFileNameInDir(SaveDirectory, files_dict, split_path, fileExtensions)
                fileHTMLName = os.path.join(HTMLDirectory, os.path.split(fileSaveName)[-1])

                #Making the File Save Directory non Absolute
                print("File to Save directory, ", fileHTMLName)

                #It is the absolute path
                fileSaveName = os.path.join(path, fileSaveName);
                print(fileSaveName)
                #Add location of new downloaded file
                link_file[fileURL] = fileHTMLName
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
                return fileHTMLName

        else:
            #To deal with resources written has
            return fileURL
    except Exception as E:
        print("*****Not Available/Could Not Download*****", fileURL, E)
        return fileURL
        
