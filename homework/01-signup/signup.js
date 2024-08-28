// function 이메일알람하는기능(이메일입력창){
        //     alert("회원가입을 축하합니다. 가입하신 이메일은 " + 이메일입력창 + "입니다.")
        // }

        function 이메일알람하는기능(){
            const 이메일명 = document.getElementById("이메일입력창").value
            // 열린태그안에 있는 값을 데려와야할때는 밸류를 씀
            
            //document.getElementById("가입자보여주는곳").innerText = 가입자명
            //document.getElementById("가입자보여주는곳").innerHTML = "<div>가입자명</div>" 
            //복잡하기 때문에 햅틱으로 바꿔서 사용
            // document.getElementById("가입자보여주는곳").innerHTML = `
            //     <div onclick="가입자보여주는기능()">${가입자명}</div>
            // `

            const 이메일분리된결과 = 이메일명.split("@")
            
            console.log(이메일분리된결과)

            const 이메일앞부분 = 이메일분리된결과[0]
            const 이메일뒷부분 = 이메일분리된결과[1]
            console.log(이메일앞부분)
            console.log(이메일뒷부분)

            const 새로운이메일앞부분글자 = 이메일앞부분.slice(length, 4)
            const 새로운이메일뒷부분별표 = "****"
            const 새로운이메일앞부분 = 새로운이메일앞부분글자 + 새로운이메일뒷부분별표
            console.log(새로운이메일앞부분)

            const 새로운이메일 = 새로운이메일앞부분 + "@" + 이메일뒷부분
            console.log(새로운이메일)
           
            alert (`회원가입을 축하합니다. 가입하신 이메일은 ${새로운이메일} 입니다.`)

            // const 이메일받는곳 = document.getElementById("이메일보여주는곳").innerHTML =
            // alert (`회원가입을 축하합니다. 가입하신 이메일은 ${새로운이메일} 입니다.`)

        }