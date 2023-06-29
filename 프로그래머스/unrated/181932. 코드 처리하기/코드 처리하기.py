def solution(code):
    mode = 0
    answer = ''
    for i in range(len(code)):
        if mode == 0 and code[i] == "1":
            mode = 1
        elif mode == 1 and code[i] == "1":
            mode = 0
        elif mode == 0 and code[i] != "1" and i % 2 == 0:
            answer += code[i]
        elif mode == 1 and code[i] != "1" and i % 2 == 1:
            answer += code[i]
    
    if answer == '':
        answer = 'EMPTY'
    return answer