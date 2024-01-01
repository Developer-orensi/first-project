// 숫자야구 만들기// 단계1. 샘플로 3자리의 숫자 야구를 뽑는다.// 단계2. 위치와, 자리를 비교한다.// 단계3. 스트라이크, 볼 출력한다

/** a : int, b : int , return a 이상 b 미만의 랜덤한 난수
 * Python에서의 randint와 같은 기능을 합니다.
 */
function randint(a, b){
    return Math.floor((b - a) * Math.random()) + a;
}
// 숫자 3개 만드는 함수
let number1, number2, number3;
let a = true; let b=true;
let num1, num2, num3;
let num1_list;
let num2_list;
let ball;
let strike;
let answer_num;
trial_num = 0
let alarm_text;



function numberset(){
    a= true;
    b= true;
    number1 = randint(0, 10);

    while(a){

        number2 = randint(0,10);
        if(number1 !== number2){
            a = false;
        }
    }
    while(b){
        number3 = randint(0,10)
        if(number1 !== number3 && number2 !== number3){

            b= false;
        }
    }
    return String(number1) + String(number2) + String(number3)
}

function intersection(set1, set2) {
    const result = [];
    for (const element of set1) {
      if (set2.includes(element)) {
        result.push(element);
      }
    }
    return result;
  }



/** num1 : str, num2 : str, num1, num2는 모두 3자리수
 * return [strike수, ball수]
 */
function StrikeBall(num1, num2){
    num2 = String(num2)

    num1_list = [num1.slice(0,1), num1.slice(1,2), num1.slice(2,3)];
    num2_list = [num2.slice(0,1), num2.slice(1,2), num2.slice(2,3)];
    
    ball = 0;
    for(j=0; j<3; j++){

        if(num1_list[j] === num2_list[0] || num1_list[j] === num2_list[1] || num1_list[j] === num2_list[2]){
            ball++;
        }

    }
    
    strike = 0;
    for(i=0; i<3; i++){
        if(num1_list[i] == num2_list[i]){
            ball -= 1
            strike++;
        }
    }
    console.log([strike,ball])
    console.log(answer_num)
    return [strike, ball]
    

}




function register(){

    


    if(trial_num === 10){
        alert(`숫자 맞추기 실패! 답은 ${answer_num} 입니다! `)
        trial_num = 0;
        alert("계속 하고 싶으시다면 reset을 눌러 주세요")
    }
    trial_num++;

    num1 = document.getElementById("first_num").value;
    num2 = document.getElementById("second_num").value;
    num3 = document.getElementById("third_num").value;

    // 여기서 볼-스트라이크 판별을 넣어줌;
    input_num_f = num1 + num2 + num3

    ball_strike_count = StrikeBall(input_num_f, answer_num)
    strike_num = ball_strike_count[0]
    ball_num = ball_strike_count[1]
    
    if(ball_num == 0 && strike_num == 0){
        do_out = true
    } else{
        do_out = false
    }

    // 여기서 텍스트를 추가해줌.
    if(!do_out){
        alarm_text = `${trial_num} 회 : ${input_num_f} (${strike_num} 스트라이크 ${ball_num} 볼)`
    } else{
        alarm_text = `${trial_num} 회 : ${input_num_f} (아웃!!)`
    }

    document.getElementById(round_dictionary[trial_num]).textContent = alarm_text




    if(strike_num === 3){

        alert(`축하합니다! ${trial_num} 회만에 맞혔습니다!(경험치 + ${3*(11 - trial_num)})`);
        

        exp += (11 - trial_num)*3;
        
        levelup()

        reset_number(false)




    }

    



}






function reset_number(alert_bool = true){
    answer_num = numberset() // 답 바꾸기

    if(alert_bool){
        alert("리셋되었습니다!") // 알림 보내기
    }

    for(i=0; i<10; i++){
        document.getElementById(round_dictionary[i+1]).textContent = "-" // 글씨 바꾸기
    }
    trial_num = 0 // 0회로 조정
    
}

/** 라운드를 넣으면 그것의 id로 바꿔주는  */
round_dictionary = {
    1 : "round1",
    2 : "round2",
    3 : "round3",
    4 : "round4",
    5 : "round5",
    6 : "round6",
    7 : "round7",
    8 : "round8",
    9 : "round9",
    10 : "round10"
}






// 3자리의 셀렉션

answer_num = numberset()


const guessbutton = document.getElementById("baseball_guess");
guessbutton.addEventListener('click', register);
const resetbutton = document.getElementById("baseball_reset");
resetbutton.addEventListener('click', reset_number)





