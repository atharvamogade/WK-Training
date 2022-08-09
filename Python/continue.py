nums = [1, 5, 7, 9, 4, 11, 8, 2, 3, 10]
numEven = []
for num in nums:
    if num % 2 == 0:
        numEven.append(num)
    else:
        continue

print(numEven)