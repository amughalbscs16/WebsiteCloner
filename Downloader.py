import requests, time
import os
from bs4 import BeautifulSoup
import base64
from DownloadAssetsofCSS import * 
import traceback
def makeDirectory(path, fileURL):
    fileURLNew = fileURL    
    if '//' in fileURL:
        fileURLNew = fileURL.split('//')[1]
    
    print(fileURLNew, "First Split in MainDirectory for fileURL", "FileURL:", fileURL)
    fileURLSplit = splitall(fileURLNew)
    SaveDirectory = path
    HTMLdirectory = ""
    if (len(fileURLSplit)>2):
        for folder in fileURLSplit[1:len(fileURLSplit)-1]:
            tmpSaveDirectory = os.path.join(SaveDirectory, folder);
            if not os.path.isdir(tmpSaveDirectory):
                try:
                    os.mkdir(tmpSaveDirectory)
                    SaveDirectory = tmpSaveDirectory
                except NotADirectoryError as E:
                    continue
            SaveDirectory = tmpSaveDirectory
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
        #Join if the file path has multiple '.' .min.css types
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

    userAgent = UserAgent()
    RoUL = ''
    #header = {'User-Agent':str(userAgent.chrome)}
    header = {'User-Agent':"Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/2.0.0.11"}
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
        #folder internal
        if fileURL[0:4] != 'http':
            if fileURL[0].isalpha():
                fileURL = url + "/" + fileURL
        #To See how does '/' only behaves
        if fileURL[0] == "/":
            fileURL = url + fileURL
        #If file is already downloaded
        if fileURL in link_file:
            return link_file[fileURL]
        TrueFile = True
        #If file is one of the types mentioned above
        file = ''
        response = ''
        try:
            file = requests.get(fileURL, headers=header, timeout=30)
            response = str(file).split('[')[1].split(']')[0][0]
            print("Requests Lib Response:", file)
            RoUL = 'R'
            if response != '2' and response != '3':
                file = getFilefromURLLIB(fileURL)
                print("URL Lib Response:", file.status)
                response = str(file.status)[0]
                if response == '2' and respons == '3':
                    RoUL = 'UL'
                else:
                    print("Response not 2xx from both Requests and URLLIB")
                    return fileURL

            if 'Content-Type' in file.headers:
                print(file.headers['Content-Type'])
                if 'html' in file.headers['Content-Type']:
                    TrueFile = False

        #Invalid URLS etc
        except Exception as E:
            print(fileURL, "Not a correct file", E)
            return fileURL
        #Content-Type not in all
        #print(fileURL,file.headers['Content-Type'])
        #if 'Content-Type' in file.headers:
        #    for x in fileExtensions:
        #        if x in file.headers['Content-Type']:
        #            TrueFile = True
        #            break
        

        #Successfull Download/response starts from 2xx and file is not HTML file
        if response == '2' and TrueFile:
            TrueFile = True
            print(fileURL, TrueFile, "R/UL", RoUL)
        else:
            print(fileURL, TrueFile)
        #Deal with the directory structure
        
        print(fileURL, TrueFile)
        
        if TrueFile:
            #Do Not Duplicate Files
            if fileURL in link_file:
                return link_file[fileURL]
            #Link File URL->FileDirectory
            #If File has complete URL now
            if fileURL[0:4] == "http":
                #Get the file 
                #file = requests.get(fileURL)
                #print(file)
                fileName = ''
                #print(files_dict)
                #print(os.path.split(fileURL)[-1].split('?')[0])
                #Generate file name check if file with same name downloaded already
                split_path = os.path.split(fileURL)[-1].split('?')[0].split('.') 
                #print(split_path)
                #Create a directory
                SaveDirectory, HTMLDirectory = makeDirectory(path, fileURL);
                
                
                fileSaveName = getFileNameInDir(SaveDirectory, files_dict, split_path, fileExtensions)
                #It is non absolute path

                fileHTMLName = os.path.join(HTMLDirectory, os.path.split(fileSaveName)[-1])

                #Making the File Save Directory non Absolute
                ##print("File to Save directory, ", fileHTMLName)

                #It is the absolute path
                fileSaveName = os.path.join(path, fileSaveName);
                #print(fileSaveName)
                #Add location of new downloaded file
                link_file[fileURL] = fileHTMLName
                ##print(fileName+"; FileName")
                #Check if the file is already in the directory_file originalname
                fileHTMLName = writeMainFile(file, fileSaveName, path, fileHTMLName, fileURL, RoUL)
                #print(files_dict)
                #return fileSaveName
                return fileHTMLName.replace('\\','/')

        else:
            #To deal with resources written has
            return fileURL 
    except Exception as E:
        print("*****Not Available/Could Not Download*****", fileURL, E)
        print(traceback.format_exc())

        return fileURL
def cleanFileSaveName(file, fileName):
    if fileName == '':
        return fileName
    fileName = fileName.replace("\\", '/')
    fileName = fileName.replace("///",'/').replace('//','/')
    while fileName[-1] == '/':
        fileName = fileName[0:-1]
    if '.' not in fileName:
        if 'content-type' in file.headers: 
            fileName += "." + file.headers['content-type'].split(';')[0].split('/')[1]
        else:
            print("This File Has No Content-Type", file.headers, fileName)

    return fileName

def writeMainFile(file, fileSaveName, path, fileHTMLName, fileURL, RoUL):
    #saveFile = None
    #fileSaveName = cleanFileSaveName(file, fileSaveName)
    #fileHTMLName = cleanFileSaveName(file, fileHTMLName)
    saveFile = open(fileSaveName, 'wb')
    

    #saveFile = open(fileName,'wb')
    #Returning String file.text [str], file.content[bytes]
    #Write File
    if RoUL == 'UL':
        saveFile.write(file.data)
    elif RoUL == 'R':    
        for line in file:
            saveFile.write(line)
    saveFile.close()
    #Extract CSS Internal Assets
    if '.css' in fileSaveName or ('content-type' in file.headers and 'css' in file.headers['content-type']):
        saveFile = open(fileSaveName, encoding='utf-8')
        file = saveFile.readlines()
        saveFile.close()
        print("FilEHTML NAME later for split:", fileHTMLName)
        file = extractExternalCSS(path, fileHTMLName, fileURL, file);                    
        saveFile = open(fileSaveName, 'wb')
        for line in file:
            saveFile.write(line.encode('utf-8'))
        saveFile.close()
    return fileHTMLName



#Weaknesses/Left

#We need to tackle wp-json challenge, store wp-json into a json file.

#**Now we need to deal with JS files with names ending? and have multiple files in the ?
#If file directory could not be made, make a directory and store extras there.
