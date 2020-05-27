"""import undetected_chromedriver as uc
uc.install()
#from selenium import webdriver
#from webdriver_manager.chrome import ChromeDriverManager
#driver = webdriver.Chrome(ChromeDriverManager().install())
import json
from selenium.webdriver import Chrome
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
caps = DesiredCapabilities.CHROME
caps['goog:loggingPrefs'] = {'performance': 'ALL'}
driver = Chrome(desired_capabilities=caps)
"""

import undetected_chromedriver as uc
#uc.install()
#from selenium import webdriver
#from webdriver_manager.chrome import ChromeDriverManager
#driver = webdriver.Chrome(ChromeDriverManager().install())
import json
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
caps = DesiredCapabilities.CHROME
caps['goog:loggingPrefs'] = {'performance': 'ALL'}
options = webdriver.ChromeOptions()
options.add_argument("start-maximized")
options.add_argument("disable-infobars")
options.add_argument("--disable-extensions")
driver = webdriver.Chrome(ChromeDriverManager().install(),chrome_options=options, desired_capabilities=caps)


def process_browser_log_entry_urls(driver):
	browser_log = driver.get_log('performance')
	urls = ','
	for entry in browser_log:
		response = json.loads(entry['message'])['message']
		if 'params' in response:
			response = response['params']
			if 'request' in response:
				response = response['request']
				if 'url' in response:
					response = response['url']
					urls=urls + response + ","
	return urls
