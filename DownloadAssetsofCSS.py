import os
import requests
import posixpath
from functools import reduce 
from fake_useragent import UserAgent
def downloadResource(path, storedirectory, downloadurl):
    try:
        downloadedAsset = requests.get(downloadurl, timeout=10)
        #Print the Response value to see if it does work.
        print("DownloadURL", downloadedAsset)
        saveFile = open(storedirectory, 'wb')
        for line in downloadedAsset:
            saveFile.write(line)
        saveFile.close()
        print("Internal Resource Downloads",downloadurl, storedirectory)
    except Exception as E:
        print("Download CSS Internal Issue: Failed Timeout", E)

def getCssDirectory(resourceDirectorySplit):
    cssdirectory = ''
    #Except File Name add all folders into newdirectory inside /project/base64
    for k in resourceDirectorySplit[0:-1]:
        cssdirectory = os.path.join(cssdirectory,k);
    filename = resourceDirectorySplit[-1].split("?")[0].split('#')[0]
    cssdirectory = os.path.join(cssdirectory, filename)
    return cssdirectory.replace('\\','/')

def makeResourceDirectory(projectSplit, resourceDirectorySplit):
    newdirectory = os.path.join(projectSplit[-2],projectSplit[-1])
    for k in resourceDirectorySplit[0:-1]:
        newdirectory = os.path.join(newdirectory, k)
        if not os.path.isdir(newdirectory):
            os.mkdir(newdirectory)
    filename = resourceDirectorySplit[-1].split("?")[0].split('#')[0]
    newdirectory = os.path.join(newdirectory,filename)
    return newdirectory

def splitall(path):
    allparts = []
    while 1:
        parts = os.path.split(path)
        if parts[0] == path:  # sentinel for absolute paths
            allparts.insert(0, parts[0])
            break
        elif parts[1] == path: # sentinel for relative paths
            allparts.insert(0, parts[1])
            break
        else:
            path = parts[0]
            allparts.insert(0, parts[1])
    return allparts

#def extractInternalCSS(projectpath, HTMLpath, fileURL, file):
#    pass
#Extracts both Internal and External Css if a file is sent
def extractExternalCSS(projectpath, HTMLpath, fileURL, file):
    #find ("url") tags in the file
    splitProjectPath = splitall(projectpath)
    #print("CSS FILE:", projectpath, HTMLpath, fileURL)
    #newdirectorysplit = splitall(HTMLpath)
    #newdirectory = posixpath.split(newdirectory)
    #print(newdirectorysplit)
    #print(file[0:10])
    for i in range(0,len(file)):
        #file[i] = file[i]
        index = 0
        lineSize = len(file[i])
        while index < lineSize:
            index = file[i].find('url(', index)
            if index == -1:
                break;
            #find the start of url( tag)
            start = index+4
	    	#end of url tag
            end = start + file[i][start:].find(')')
            #print(start,start+end)
            #extract the resource url
            resourceurl = file[i][start:end].replace('\'','').replace("\"","")
            #print(resourceurl)
            #print(file[i])
            newdirectorysplit = splitall(HTMLpath)[0:-1]
            #download all the assets starting from ../ [for now]
            fileURLsplit = fileURL.split("/")[0:-1]
            #print(fileURLsplit)
            newdirectory = ''
            #newdirectory = os.path.join(newdirectory, splitall(projectpath)[-1])
            if (resourceurl[0:3] == "../"):
            	#If .. go 1 directory back
                tmpresource = resourceurl.split("/")
                #print(tmpresource)
                for j in tmpresource:
                	if j == "..":
                		newdirectorysplit.pop(-1)
                		fileURLsplit.pop(-1)
                	else:
                		newdirectorysplit.append(j)
                		fileURLsplit.append(j)
                #Prepare save Directory

                #create a folder for writing the file if not there:
                newdirectory = makeResourceDirectory(splitProjectPath, newdirectorysplit)

                #Prepare save URL
                #print("fileURLsplit", fileURLsplit)

                fileUrlResource = fileURLsplit[0]
                for k in fileURLsplit[1:]:
                	fileUrlResource+= "/" + k

                filename = newdirectorysplit[-1].split("?")[0].split('#')[0]
                newdirectory = os.path.join(newdirectory)
                downloadResource(projectpath, newdirectory, fileUrlResource)

            if (resourceurl[0:4] == "http"):
            	#Remove the domain part
                resourceurl.replace("///",'/')
                fetchURLsplit = resourceurl.split("//")[-1].split('/')
                for k in range(0,len(fetchURLsplit)):
                    #remove domain part
                	if '.' in fetchURLsplit[k]:
                		fetchURLsplit.pop(k)
                		break
                	fetchURLsplit.pop(i)
                #print(fetchURLsplit)
                newdirectory = makeResourceDirectory(splitProjectPath, fetchURLsplit)
                downloadResource(projectpath, newdirectory, resourceurl)

                cssdirectory = getCssDirectory(fetchURLsplit)

                file[i] =  file[i][0:start]+cssdirectory+file[i][end:]
            #Since Line size can change
            lineSize = len(file[i])
            index += 1

            #print(file[i])
        #file[i] = bytes(file[i])
    return file


    #download assets starting with https later.
    #After changing the urls (if necessary i.e. other than ../ or not starting with http)

    #return file

#path = "E:\\UpWork\\2020\\May\\WebsiteCloner\\project\\aHR0cHM6Ly93bHZwbi5jb20=\\wp-content\\plugins\\revslider\\public\\assets\\css\\settings.css"
#projectpath = "E:\\UpWork\\2020\\May\\WebsiteCloner\\project\\aHR0cHM6Ly93bHZwbi5jb20="
#HTMLpath = "wp-content\\plugins\\revslider\\public\\assets\\css\\settings.css"

#fileURL = "https://wlvpn.com/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.8"

#file = open(path, encoding='utf-8')

#file = file.readlines()

#extractInternalCSS(HTMLpath, fileURL, file)
