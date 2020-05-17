from Downloader import *
#Expects a url not ending with '/'
def clearURL(url):
    while url[-1] == '/':
        url = url[0:-1]
    return url

def cloner(url):
    tmppath = os.path.join(os.getcwd(),'project')
    folder = str(base64.b64encode(bytes(url,'utf-8')),'utf-8')
    path = os.path.join(tmppath, folder)
    if not os.path.isdir(tmppath):
        os.mkdir(tmppath)
    if not os.path.isdir(path):
        os.mkdir(path)
    #Clean the URL
    url = clearURL(url)
    #print(folder)
    print(path)
    #Dictionary FileName to check if new name to allot
    files_dict = {}
    #For not Duplicating files already downloaded contains URLs, Location in PC
    link_file = {}
    userAgent = UserAgent()
    header = {'User-Agent':str(userAgent.chrome)}
    page = requests.get(url, headers=header, timeout=10)
    print(page)
    #print(page.content)

    #Testing File Writes
    fileDir = os.path.join(path,'index.html')
    file = open(fileDir,'wb')
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

    #Downloading Assets
    soup = downloadAllFiles(url, soup, path, files_dict, link_file)    

    #soup.find('img')['src'] = DownloadFile(soup.find('img')['src'])

    #print(soup.find('img')['src'])
    
    file.write(soup.encode('utf-8'))
    file.close()
    #Reopen the Written file as lines, and extract the internal CSS resource
    file = open(fileDir, encoding='utf-8')
    file = file.readlines()
    fileURL = url+"/"+'index.html'
    fileHTMLName = 'index.html'
    file = extractExternalCSS(path, fileHTMLName, fileURL, file);
    saveFile = open(fileDir, 'wb')
    for line in file:
        saveFile.write(line.encode('utf-8'))
    saveFile.close()

#url = 'https://www.wlvpn.com/'
#cloner(url)

#Other Option
#Another Option
#Request Header for each website, and check which version extension is the file
#and download accordingly.

def downloadAllFiles(url, soup, path, files_dict, link_file):
    downloadFavicon(url, path)
    for i in range(0,len(soup.findAll('link'))):
        #print(images[i]['src'])
        #print(soup.findAll('link')[i]['href'])
        soup.findAll('link')[i]['href'] = DownloadFile(url,soup.findAll('link')[i]['href'],path,files_dict, link_file)
    for i in range(0,len(soup.findAll('img'))):
        #print(soup.findAll('img')[i]['src'])
        soup.findAll('img')[i]['src'] = DownloadFile(url,soup.findAll('img')[i]['src'], path, files_dict, link_file)

    for i in range(0,len(soup.findAll('script'))):
        try:
            #print(soup.findAll('script')[i],'\n\n')
            if 'src' in str(soup.findAll('script')[i]): 
                #print(soup.findAll('script')[i]['src'])
                soup.findAll('script')[i]['src'] = DownloadFile(url,soup.findAll('script')[i]['src'],path,files_dict, link_file)
        except:
            pass
    #Meta Content
    for i in range(0,len(soup.findAll('meta'))):
        try:
            #print(soup.findAll('script')[i],'\n\n')
            if 'content' in str(soup.findAll('meta')[i]): 
                #print(soup.findAll('script')[i]['src'])
                soup.findAll('meta')[i]['content'] = DownloadFile(url,soup.findAll('meta')[i]['content'],path,files_dict, link_file)
        except:
            pass
            #print(soup.findAll('script'))
    return soup

def downloadFavicon(url, path):
    #if the url leads to a specific page
    #website/specificpage, while favicon is at root/favicon.ico
    try:
        splitURL = url.split('/')
        print(splitURL)
        downURL = ''
        #http://www.google.com/
        #http:, '', 'www.google.com'
        for part in splitURL[0:3]:
            downURL += part + '/'
        downURL += 'favicon.ico'
        downloadedAsset = requests.get(downURL, timeout=5)
        if str(downloadedAsset).split('[')[1].split(']')[0][0] == '2':
            savePath = os.path.join(path,'favicon.ico')
            file = open(savePath, 'wb')
            for line in downloadedAsset:
                file.write(line)
            print(downURL, savePath)

    except Exception as E:
        print("Favicon not download", E)
