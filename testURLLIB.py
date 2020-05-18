import urllib3
http = urllib3.PoolManager()
r = http.request('GET', 'http://httpbin.org/robots.txt')
for line in str(r.data, 'utf-8').split('\n'):
	print(line)
print(r.headers['Content-Type'])