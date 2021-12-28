# You need install :
# pip install PyPDF2 - > Read and parse your content pdf
# pip install requests - > request for get the pdf
# pip install BeautifulSoup - > for parse the html and find all url hrf with ".pdf" final
from PyPDF2 import PdfFileReader
import requests
import io
from bs4 import BeautifulSoup
from tika import parser # pip install tika
import re
import os
import json


url=requests.get('https://www.dmv.ca.gov/portal/vehicle-industry-services/autonomous-vehicles/autonomous-vehicle-collision-reports')


soup = BeautifulSoup(url.content,"lxml")

myJsonArray = []
def parse_file(file_name):
    print( path + file_name)
    raw = parser.from_file(file_name)

    content = raw['content']

    #print(content)
    myData = dict()

    # company
    searchObj = re.search( r'BuSINESS NAME:.*\n', content, re.M|re.I)
    if searchObj:
        #print ("search --> searchObj.group() : ", searchObj.group())
        company_name_dirty = searchObj.group()
        company_name = company_name_dirty.replace('BuSINESS NAME: ', '')

        print('\n\nCompany name is: ' +company_name)
        myData["Company"] = company_name.strip()
    else:
        print ("company name not found!!!!!")
        myData["company"] = "N/A"
        
            
    # date

    #DATE Of ACCIDENT: 10/8/2021
    searchObj = re.search( r'DATE Of ACCIDENT:.*\n', content, re.M|re.I)
    if searchObj:
        #print ("search --> searchObj.group() : ", searchObj.group())
        date_dirty = searchObj.group()
        accident_date = date_dirty.replace('DATE Of ACCIDENT: ', '')

        print('\n\ndate of accident is: ' +accident_date)
        myData["accidentDate"] = accident_date.strip()
    else:
        print ("DATE Of ACCIDENT:not found!!!!!")
        myData["accidentDate"] = "N/A"
        

    # description

    searchObj = re.search( r'1:.*(\n|\s)*CITY_2:', content, re.M|re.I)
    if searchObj:
        #print ("search --> searchObj.group() : ", searchObj.group())
        dirty_desc = searchObj.group()
        desc = dirty_desc.replace('1: ', '').replace('CITY_2:','').rstrip()

        print(desc)
        myData["description"] = desc
    else:
        print ("Description not found!!!!!")
        desc = ''
        

    # manual vs autonomous
    manual_or_autonomous = 'N/A'
    if 'manual mode' in desc or 'conventional mode' in desc:
        manual_or_autonomous = 'manual mode'
    elif 'autonomous mode' in desc:
        manual_or_autonomous = 'autonomous mode'
    
    print("\nVehicle was in " + manual_or_autonomous)
    myData["mode"] = manual_or_autonomous

    # damage
    searchObj = re.search( r'minor:(\n|\s)*(Yes|Off)(\n|\s)*Moderate:(\n|\s)*(Yes|Off)(\n|\s)*major:(\n|\s)*(Yes|Off)', content, re.M|re.I)
    if searchObj:
        #print ("search --> searchObj.group() : ", searchObj.group())
        damage_dirty = searchObj.group()
        searchObjTwo = re.search( r'.*:(\n|\s)*Yes', content, re.M|re.I)
        if searchObjTwo:
            damage_dirty = searchObjTwo.group()
            damage = damage_dirty.replace(': Yes', '').lstrip()
        else:
            damage = 'minor'

        print('\n\n damage is: ' +damage)
        myData["damage"] = damage
    else:
        print ("damage:not found!!!!!")
        myData["damage"] = 'N/A'
    
    # output json
    print (myData)
    myJsonArray.append(myData)





path = "data/"
count = 0
filename = path +str(count) + ".pdf"
print(filename)


if not os.path.isfile('data/'+'0.pdf'):

    for a in soup.find_all('a', href=True):
        #print(a)
        mystr= a['href']
        if(mystr[-3:]=='pdf' or mystr[-4:]=='pdf/' ):
            urlpdf = 'https://www.dmv.ca.gov' + a['href']
            print ("url with pdf final:", urlpdf)


            r = requests.get(urlpdf, stream = True)
            
            with open(filename,"wb") as pdf:
                for chunk in r.iter_content(chunk_size=1024):

                    if chunk:
                        pdf.write(chunk)
            
            parse_file(filename)
            count+=1
            filename =   path +str(count) + ".pdf"
            print("\n\n")
            # https://www.dmv.ca.gov/portal/file/waymo_12112021-pdf/
            
            #if count == 3:
            #    break
    
    
else:
    for f in os.listdir(path):
        print(f)
        parse_file(path +f)
    with open('output.json', 'w') as my_file:
        json.dump(myJsonArray, my_file)
    


 

 
        

    

