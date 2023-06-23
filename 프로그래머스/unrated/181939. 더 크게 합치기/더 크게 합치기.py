def solution(a, b):
    ab = int(str(a) + str(b))
    ba = int (str(b) + str(a))
    
    if ab > ba:
        answer = ab
    elif ab < ba:
        answer = ba
    elif ab == ba:
        answer = ab
    
    return answer