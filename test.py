# T = int(int(input())**(1/3))
T = 3
def printStar(T):
  if(T == 1):
    print("*"*3)
    print("* *")
    print("***")
    return 0

  T = T-1
  printStar(T)
  printStar(T)

printStar(T)
# 
# ***
# * *
# ***

# 9 
# *********
# * ** ** *
# *********
# ***   ***
# * *   * *
# ***   ***
# *********
# * ** ** *
# *********