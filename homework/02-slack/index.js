

function 가입축하알람기능(){

    const 오늘날짜 = new Date()
        
    const 오늘연도 = 오늘날짜.getFullYear()
    const 오늘월 = String(오늘날짜.getMonth() + 1).padStart(2, "0")
    const 오늘일 = String(오늘날짜.getDate()).padStart(2, "0")

    alert (`회원가입을 축하합니다. 
        (가입일시 : ${오늘연도}-${오늘월}-${오늘일})`)
}

