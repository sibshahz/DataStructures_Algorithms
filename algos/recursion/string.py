import urllib
methods=[]
for method in dir(urllib):
    methods.append(method)
print(methods)