#Does Not Work with Wlvpn.com does not download images and .js and .css files
from pywebcopy import WebPage, config
config.setup_config('https://wlvpn.com/', "e:\\Upwork", "Upp")
wp = WebPage()
wp.get('https://wlvpn.com/')
wp.save_complete()
