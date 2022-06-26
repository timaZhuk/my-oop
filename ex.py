name=input('Enter your name: ')
print(f'Hello {name}')


# #Get the name of the file and open it
# name = input('Enter file path:')
# handle = open(name,'r') # we need insert 'D://SomeDir/mbox-short.txt'

# #count word frequency
# counts = dict() #create empty dictionary
# for line in handle:
#     words = line.split() #split =dividing sentences by words that was divided by space
#     for word in words:#'words'-is list
#         counts[word] = counts.get(word,0)+1
# #find the most common word
# bigcount = None
# bigword = None
# for word,count in counts.items(): # items()return tuple of (word,value)
#     if bigcount is None or count>bigcount:
#         bigword = word
#         bigcount=count

# print(word,": ", bigcount)



# inp =input('Europe floor?')
# usf = int(inp)+1
# print('US floor',usf)

# class Item():
#     def __init__(self, name) -> None:
#         self.name = name
#         print(f"I am created: {self.name}!!!")

#     def calculate_total_price(self, x, y):
#         return x*y

# item1 = Item("Phone")

# item1.price = 100
# item1.quantity = 5

# item2 = Item("Laptop")

# item2.price = 1000
# item2.quantity = 4
# total_p = item1.calculate_total_price(item1.price,item1.quantity)
# print(total_p)
# random_str = "aaa"
#print(random_str.upper())


# item1 = 'Phone'
# item1_price = 100
# item1_quantity = 5
# item1_price_total = item1_price * item1_quantity
# print(type(item1))
# print(type(item1_quantity))
# print(type(item1_price))
# print(type(item1_price_total))
















# class Car:
#     "Represents the car class"
#     def __init__(self, make, model, year, max_speed ):
#         self.make = make
#         self.model = model
#         self.year =year
#         self.max_speed = max_speed

#         self.fuel_level = 0
#         self.fuel_capicity = 100
    
#     def __str__(self):
#         return f"{self.make} {self.model} {self.year}"

#     def drive_car(self):
#         print("car is now moving")

#     def calculate_fuel(self):
#         print(f"Current level:{self.fuel_level}")

#     def add_fuel(self,amount):
#         fuel_level =self.fuel_level+amount

#         if fuel_level > self.fuel_capicity:
#             print("Fuel capicity reached")
#         elif fuel_level<=self.fuel_capicity:
#             print("Fuel added")


# car1 = Car("audi","A1",2021, 160)    


   