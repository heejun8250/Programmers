def solution(num_list):
    import math
    answer = 0
    if math.prod(num_list) < sum(num_list)**2:
        answer = 1
    else :
        answer = 0
    return answer