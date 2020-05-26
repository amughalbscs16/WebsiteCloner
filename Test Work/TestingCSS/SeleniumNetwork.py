import json
def process_browser_log_entry(driver, entry):
	response = json.loads(entry['message'])['message']
	browser_log = driver.get_log('performance') 
	urls = []
	response = response['params']
	if 'request' in response:
		response = response['request']
		if 'url' in response:
			response = response['url']
			print(response)
			urls.append(response)
	return urls

print(urls)