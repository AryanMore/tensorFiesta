import pandas as pd
import numpy as np
import json
# Load your dataset
mama_earth_data = pd.read_csv('Reviews Data.csv')
mama_earth_data = mama_earth_data[~mama_earth_data.index.duplicated(keep='first')]
#print(mama_earth_data.head())




mama_earth_data['REVIEW_DATE'] = pd.to_datetime(mama_earth_data['REVIEW_DATE'])

# Create a new column to store the season
mama_earth_data['SEASON'] = ''

# Define the conditions to classify the seasons
winter_condition = (mama_earth_data['REVIEW_DATE'].dt.month.isin([10, 11, 12, 1]))
summer_condition = (mama_earth_data['REVIEW_DATE'].dt.month.isin([2, 3, 4, 5]))
monsoon_condition = (mama_earth_data['REVIEW_DATE'].dt.month.isin([6, 7, 8, 9]))
unknown_condition = ~(winter_condition | summer_condition | monsoon_condition)

# Assign seasons based on conditions
mama_earth_data.loc[winter_condition, 'SEASON'] = 'Winter'
mama_earth_data.loc[summer_condition, 'SEASON'] = 'Summer'
mama_earth_data.loc[monsoon_condition, 'SEASON'] = 'Monsoon'
mama_earth_data.loc[unknown_condition, 'SEASON'] = 'Unknown'

# Print the count of reviews in each season
season_counts = mama_earth_data['SEASON'].value_counts()

s = 0
w = 0
r = 0

for i , j in zip(mama_earth_data['SKU'] , mama_earth_data['SEASON']):
  if(i == '8906087770534'):
    if(j == 'Winter'): w+=1
    elif(j == 'Summer'): s+=1
    elif(j == 'Monsoon'): r+=1
total_sales_pp = w+s+r
print("Winter Sales are {0} Summer Sales are {1} Monsoon Sales are {2}".format((w/total_sales_pp)*100 , (s/total_sales_pp)*100 , (r/total_sales_pp)*100))


#print(season_counts)
#print(mama_earth_data.head())



# Step 2: Prepare your data (a dictionary in this case)
my_data = {
    "Winter": (w/total_sales_pp)*100,
    "Summer": (s/total_sales_pp)*100,
    "Monsoon": (r/total_sales_pp)*100,
}

# Step 3: Open a file in write mode
with open('trends.json', 'w') as json_file:
    # Step 4: Dump your data into the file
    json.dump(my_data, json_file)

# Congratulations! You've just created a JSON file named 'my_file.json'.
