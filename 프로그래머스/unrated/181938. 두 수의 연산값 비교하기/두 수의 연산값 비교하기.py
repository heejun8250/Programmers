def solution(a, b):
    ab = int(str(a)+str(b))
    axb = 2*a*b
    
    if ab > axb:
        answer = ab
    elif ab < axb:
        answer = axb
    else:
        answer = ab
    return answer