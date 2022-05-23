machine = {"coke": 1000,
           "cider": 800,
           "snack": 1200,
           "brush": 2000,
           "toothpaste": 1000}
hands = {}

while True:
    money = int(input("만원 이상의 금액을 입금하세요 : "))
    if(money >= 10000):
        break

while True:
    select_machine = input("구매를 원하시는 물품을 입력하세요. 원하는 물건이 더 없다면 0을 입력하세요.")
    if(select_machine in machine and money > 0):
        money = money-machine.get(select_machine)
        if(select_machine in hands):
            hands[select_machine] += 1
            print("\n현재 남은 잔액은 {} 입니다.".format(money))
        else:
            hands.update({"{}".format(select_machine): 1})
            print("\n현재 남은 잔액은 {} 입니다.".format(money))
    elif(select_machine == "0"):
        break

print("\n================================================================")
print("구매를 종료했습니다. 현재 남은 잔액은 g} 입니다.".format(money))
print("구매한 목록은 다음과 같습니다.")
for key in hands:
    print(key, ":", hands[key])
