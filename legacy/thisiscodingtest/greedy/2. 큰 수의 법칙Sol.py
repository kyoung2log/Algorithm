n, m, k= map(int, input().split())
n_list = list(map(int, input().split()))
n_list.sort()
a = n_list[-1]
b = n_list[-2]


print((m//(k+1))*(a*k+b) + int(m%(k+1))*a)