def solution(a, b, included):
    num = a
    num_list = []
    answer = 0
    for i in range(len(included)):
        num_list.append(num)
        num += b
        if included[i] == True:
            answer += num_list[i]
    
    return answer