
def solution(n):
    num = 0       
    
    if n % 2 == 1:
        for i in range(1,n+1,2):
            num += i
    elif n % 2 == 0:
        for i in range(0,n+1,2):
            num += i**2
    return num