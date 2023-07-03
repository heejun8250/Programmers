def solution(numLog):
    answer = ''
    for i in range(1,len(numLog)):
        if numLog[i] == numLog[i-1] + 1:
            answer = answer+'w'
        elif numLog[i] == numLog[i-1] - 1:
            answer = answer + 's'
        elif numLog[i] == numLog[i-1] + 10:
            answer = answer + 'd'
        elif numLog[i] == numLog[i-1] - 10:
            answer = answer + 'a'
    return answer