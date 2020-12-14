import requests

# Getting the data from the api
r = requests.get('https://weather.visualcrossing.com/'
                 'VisualCrossingWebServices/rest/services/'
                 'weatherdata/forecast?aggregateHours=24&'
                 'includeAstronomy=true&combinationMethod=aggregate&'
                 'contentType=csv&unitGroup=us&locationMode=single&'
                 'key=1PYNQ6AWUDJE9AFERDCHJHSXK&'
                 'locations=Columbia%2C%20CT%2C%20US')

# Parsing the data and grabbing moon phase
data = float(r.text.split('\n')[1]
             .replace('\"', '')
             .replace(' ', '')
             .split(',')[-2])

# Computing the moon phase
moon_phase = ''
if data == 1:
    moon_phase = 'New Moon'
elif 0 < data < 0.25:
    moon_phase = 'Waxing Crescent'
elif data == 0.25:
    moon_phase = 'First Quarter'
elif 0.25 < data < 0.5:
    moon_phase = 'Waxing Gibbous'
elif data == 0.5:
    moon_phase = 'Full Moon'
elif 0.5 < data < 0.75:
    moon_phase = 'Waning Gibbous'
elif data == 0.75:
    moon_phase = 'Last Quarter'
elif 0.75 < data < 1:
    moon_phase = 'Waning Crescent'
else:
    moon_phase = "Error"

# Displaying the moon phase
print(moon_phase)
