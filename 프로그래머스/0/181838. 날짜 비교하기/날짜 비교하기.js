function solution(date1, date2) {
    const formattedDate1 = new Date(date1.join('-'))
    const formattedDate2 = new Date(date2.join('-'))
    
    return formattedDate1 < formattedDate2 ? 1 : 0;
}