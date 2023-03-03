## 서로소집합
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b


## 경로 단축 사용
def find_parent(parent, x):
    # 만약 초기화해놨던 다르다면
    # => 루트 노드가 아니라면 루트 노드를 찾을때까지 재귀 호출
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


v, e = map(int, input().split())
parent = [i for i in range(v+1)]

for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

print("각 원소가 속한 집합 : ", end="")
for i in range(1, v+1):
    print(find_parent(parent, i), end=" ")

print()

print("부모 테이블  : ", end="")
for i in range(1, v+1):
    print(parent[i], end=' ')
