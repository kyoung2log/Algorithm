## 🔴 문제
> [택시 기하학](https://www.acmicpc.net/problem/3053)

<br/>

## 🟡 Sol
```python
import math

R = int(input())

print("{:.6f}".format(R*R*math.pi))
print("{:.6f}".format(R*R*2.000000))
```
<br/>

## 🟢 풀이
처음에는 이게 무슨 소린가... 싶었는데... 저 공식대로 계산하면 택시기하학에서의 반지름은 2가 된다.
암튼 반지름*반지름*pi 공식을 이용해 유클리드 기하학에서의 원의 넓이 출력하고, 택시기하학에서의 원의 넓이를 출력하면된다. :.6f를 사용해서 소숫점 자리수를 맞춰주는것이 point

풀이를 적으면서 다른 풀이를 찾아보니까 택시 기하학이라는것이 원래 아래와 같이 정의되나보다..
![](https://images.velog.io/images/chestnut1044/post/d914e2f5-9afe-456a-81f7-3df16c9301ac/image.png)
![](https://images.velog.io/images/chestnut1044/post/0cce1b5f-ef63-4f35-9320-000a21baab7e/image.png)


<br/>

## 🔵 Ref
> https://leedakyeong.tistory.com/entry/%EB%B0%B1%EC%A4%80-3053%EB%B2%88-%ED%83%9D%EC%8B%9C-%EA%B8%B0%ED%95%98%ED%95%99-in-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%89%BD%EA%B2%8C-%ED%92%80%EC%96%B4%EB%B3%B4%EA%B8%B0
https://namu.wiki/w/%ED%83%9D%EC%8B%9C%20%EA%B8%B0%ED%95%98%ED%95%99
