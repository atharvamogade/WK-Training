# -------------------------------- WHILE LOOP -------------------------------- #

num = 0
while (num < 5):
    print(num, end=' ')  # 0 1 2 3 4 
    num += 1


print()
# --------------------------------- FOR LOOP --------------------------------- #

number = 5
for i in range(number):
    print(i, end=' ')  # 0 1 2 3 4

for i in range(5, 10):
    print(i, end=' ')  # 5 6 7 8 9

print()
for even in range(2, 20, 2):
    print(even, end=' ')  # 2 4 6 8 10 12 14 16 18 