str = input('Enter a string: ')
str = str.lower()
count = 0
for ch in str:
    if ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u':
        count += 1
print(count)