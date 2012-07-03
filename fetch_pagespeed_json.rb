require 'open-uri'
require 'FileUtils'
api_url = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed'
api_key = 'AIzaSyCYnhJjkzR4zz_PlXbjTVoZyUESBoe6Ajc'
callback = 'runPagespeedCallbacks'
url_to_test = 'http://www.globo.com'

url = [
    api_url + '?',
    'url=' + url_to_test,
    'callback=' + callback,
    'key=' + api_key,
  ].join('&');
  
Dir.mkdir('artifacts') if File::directory?('artifacts') == false
if File::exists?('pagespeed_results.html')
	FileUtils.cp('pagespeed_results.html','artifacts/pagespeed_results.html')
	open('artifacts/pagespeed_results.js', 'wb') do |file|
  		file << open(url).read
  	end	
else
	puts "Missing HTML Template!"
end	