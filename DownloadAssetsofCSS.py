import os
import requests
import posixpath
from functools import reduce 
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

def extractInternalCSS(projectpath, fileURL, file):
    #find ("url") tags in the file
    #newdirectorysplit = splitall(HTMLpath)
    #newdirectory = posixpath.split(newdirectory)
    #print(newdirectorysplit)
    fileNew = []
    for line in file:
        fileNew.append(line)

    file = fileNew
    for i in range(0,len(file)):
	    if 'url(' in file[i]:
	    	#find the start of url( tag)
	    	start = file[i].find('url(')+4
	    	#end of url tag
	    	end = start + file[i][start:].find(')')
	    	#print(start,start+end)
	    	#extract the resource url
	    	resourceurl = file[i][start:end].replace('\'','').replace("\"","")
	    	print(resourceurl)
	    	#print(file[i])
	    	newdirectorysplit = splitall(HTMLpath)[0:-1]
    		#download all the assets starting from ../ [for now]
    		fileURLsplit = fileURL.split("/")[0:-1]
    		#print(fileURLsplit)
    		newdirectory = projectpath
    		if (resourceurl[0:3] == "../"):
    			#If .. go 1 directory back
    			tmpresource = resourceurl.split("/")
    			#print(tmpresource)
    			for i in tmpresource:
    				if i == "..":
    					newdirectorysplit.pop(-1)
    					fileURLsplit.pop(-1)
    				else:
    					newdirectorysplit.append(i)
    					fileURLsplit.append(i)
    			#Prepare save Directory
    			
    			#create a folder for writing the file if not there:
    			for i in newdirectorysplit[0:-1]:
    				newdirectory = os.path.join(newdirectory, i)
    				if not os.path.isdir(newdirectory):
    					os.mkdir(newdirectory)
    			#Prepare save URL
    			#print("fileURLsplit", fileURLsplit)

    			fileUrlResource = fileURLsplit[0]
    			for i in fileURLsplit[1:]:
    				fileUrlResource+= "/" + i

    			filename = newdirectorysplit[-1].split("?")[0].split('#')[0]
    			newdirectory = os.path.join(newdirectory, filename) # Save Directory
    			#Download the resource
    			downloadedAsset = requests.get(fileUrlResource)
    			saveFile = open(newdirectory, 'wb')
    			for line in downloadedAsset:
    				saveFile.write(line)
    			saveFile.close()

    			#Just write in the proper directory, no need to change link in CSS for this
    			#print("FILE SAVE IN PC non absolute : ", newdirectory, "file Download URL:", fileUrlResource)
    			#newdirectory =

    			pass
    		#download all assets with resource name starting http
    		if (resourceurl[0:4] == "http"):
    			#Remove the domain part
    			fetchURLsplit = resourceurl.split("//")[1].split('/')
    			for k in range(0,len(fetchURLsplit)):

    				if '.' in fetchURLsplit[k]:
    					fetchURLsplit.pop(k)
    					break
    				fetchURLsplit.pop(i)
    			print(fetchURLsplit)
    			for k in fetchURLsplit[0:-1]:
    				newdirectory = os.path.join(newdirectory,k)
    				if not os.path.isdir(newdirectory):
    					os.mkdir(newdirectory)
    			filename = fetchURLsplit[-1].split("?")[0].split('#')[0]
    			newdirectory = os.path.join(newdirectory,filename)
    			print(newdirectory)
    			#Now Edit CSS File for local
    			file[i] = '\'' + file[i][0:start]+newdirectory+file[i][end:] + '\''
    			print(file[i])
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
