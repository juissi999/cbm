import os
import json

# search for all the files in imagedirectories
happyfiles = os.listdir("happy_images")
unhappyfiles = os.listdir("unhappy_images")

# construct full url-path by adding the folder
happyurls = []
for f in happyfiles:
   happyurls.append(os.path.join("happy_images", f))

unhappyurls = []
for f in unhappyfiles:
   unhappyurls.append(os.path.join("unhappy_images", f))

# construct the writable json-dict
data = {}
data["url_happy"] = happyurls
data["url_unhappy"] = unhappyurls

# write it so that the variable name is on the file (easier to execute on js)
with open("data.json", "w") as outfile:
   outfile.write("data = ")
   json.dump(data, outfile)

# This would maybe be "proper way", but creates a file with no variable and not 
# so easy to execute on a page
#with open("data1.json", "w") as outfile:
#   json.dump(data, outfile)