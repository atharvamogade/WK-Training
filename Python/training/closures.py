def outerFunction():
    val = 10

    def innerFunction():
        inner_val = 20
        return val

    return innerFunction

ifn = outerFunction()
print(ifn())