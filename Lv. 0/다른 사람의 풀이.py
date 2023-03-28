def solution(my_string, num1, num2):
    my_string = list(my_string)
    str1, str2 = my_string[num1], my_string[num2]
    my_string[num2] = str1
    my_string[num1] = str2
    return "".join(my_string)

def solution(my_string, num1, num2):
    my_string = list(my_string)
    my_string[num1], my_string[num2] = my_string[num2], my_string[num1]
    return "".join(my_string)
