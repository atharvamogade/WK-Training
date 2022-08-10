def greet(name):
    print("Hello, " + name)

greet("Chintu")  # Hello, Chintu 


# ---------------------------------------------------------------------------- #

def sum(num1, num2):
    return num1 + num2

print(sum(3, 7))  # 10


# ---------------------------------------------------------------------------- #

def greet1(*str):
    print("Hello, " + str[1])

greet1("person0", "person1")