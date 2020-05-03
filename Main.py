from Downloader import *
import base64
url = 'https://www.wlvpn.com/'

def cloner(url):
    tmppath = os.path.join(os.getcwd(),'project')
    folder = str(base64.b64encode(bytes(url,'utf-8')),'utf-8')
    path = os.path.join(tmppath, folder)
    if not os.path.isdir(tmppath):
        os.mkdir(tmppath)
    if not os.path.isdir(path):
        os.mkdir(path)
    #print(folder)
    print(path)
    #Dictionary FileName to check if new name to allot
    files_dict = {}
    #For not Duplicating files already downloaded contains URLs, Location in PC
    link_file = {}

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

    for i in range(0,len(soup.findAll('link'))):
        #print(images[i]['src'])
        #print(soup.findAll('link')[i]['href'])
        soup.findAll('link')[i]['href'] = DownloadFile(url,soup.findAll('link')[i]['href'],path,files_dict, link_file)

    #soup.find('img')['src'] = DownloadFile(soup.find('img')['src'])

    #print(soup.find('img')['src'])
    file.write(soup.encode('utf-8'))
    file.close()

#cloner(url)

#Other Option
#Another Option
#Request Header for each website, and check which version extension is the file
#and download accordingly.
