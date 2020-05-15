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
    soup = downloadAllFiles(url, soup, path, files_dict, link_file)    

    #soup.find('img')['src'] = DownloadFile(soup.find('img')['src'])

    #print(soup.find('img')['src'])
    file.write(soup.encode('utf-8'))
    file.close()

#url = 'https://www.wlvpn.com/'
#cloner(url)

#Other Option
#Another Option
#Request Header for each website, and check which version extension is the file
#and download accordingly.

def downloadAllFiles(url, soup, path, files_dict, link_file):
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
            #print(soup.findAll('script'))
    return soup
