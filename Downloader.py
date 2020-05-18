import requests, time
import os
from bs4 import BeautifulSoup
import base64
from DownloadAssetsofCSS import * 
import traceback
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
    #header = {'User-Agent':str(userAgent.chrome)}
    header = {'User-Agent':"Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36"}
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
        TrueFile = True
        #If file is one of the types mentioned above
        file = ''
        try:
            file = requests.get(fileURL, headers=header, timeout=15)
        #Invalid URLS etc
        except Exception as E:
            print(fileURL, "Not a correct file")
            return fileURL
        #Content-Type not in all
        #print(fileURL,file.headers['Content-Type'])
        #if 'Content-Type' in file.headers:
        #    for x in fileExtensions:
        #        if x in file.headers['Content-Type']:
        #            TrueFile = True
        #            break
        
        if 'Content-Type' in file.headers:
            print(file.headers['Content-Type'])
            if 'html' in file.headers['Content-Type']:
                TrueFile = False

        #Successfull Download/response starts from 2xx and file is not HTML file
        if str(file).split('[')[1].split(']')[0][0] == '2' and TrueFile:
            TrueFile = True
            print(fileURL, TrueFile)
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
                writeMainFile(file, fileSaveName, path, fileHTMLName, fileURL)
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

def writeMainFile(file, fileSaveName, path, fileHTMLName, fileURL):
    saveFile = open(fileSaveName, 'wb')
    #saveFile = open(fileName,'wb')
    #Returning String file.text [str], file.content[bytes]
    #Write File
    for line in file:
        saveFile.write(line)
    saveFile.close()
    #Extract CSS Internal Assets
    if '.css' in fileSaveName or ('Content-Type' in file.headers and 'css' in file.headers['Content-Type']):
        saveFile = open(fileSaveName, encoding='utf-8')
        file = saveFile.readlines()
        saveFile.close()
        file = extractExternalCSS(path, fileHTMLName, fileURL, file);                    
        saveFile = open(fileSaveName, 'wb')
        for line in file:
            saveFile.write(line.encode('utf-8'))
        saveFile.close()


#Weaknesses/Left

#We need to tackle wp-json challenge, store wp-json into a json file.

#**Now we need to deal with JS files with names ending? and have multiple files in the ?
#After Index.html file is written, send it to a extract function, read the whole file, read the url() tags and extract
#and rewrite the file.
