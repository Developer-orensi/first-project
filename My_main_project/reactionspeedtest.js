// 반응속도 테스트
// 상태 : 시작 / 준비 /  입력가능
/**state 0:시작, 1:준비, 2;입력가능, 3:부정출발 4:정상클릭 */
let state
state = 0

let time = 0

const button_s = document.getElementById("speed_button");
const best_text = document.getElementById("best_rec");
const trial_number_button = document.getElementById("speed_trialnum");
const trial_average_text = document.getElementById("speed_average");
const last_trial_text_s = document.getElementById("speed_last_record");





/**랜덤 함수 */
function randint(a, b){
    return Math.floor((b - a) * Math.random()) + a;
}


function fast_slow_speed(speed){
    if(speed <= 100){
        exp += 150; levelup()
        return "예측해서 눌렀나요?(xp + 150)"
        
    } else if(speed<=200){
        exp += 25; levelup()
        return "매우 빠름!(xp + 25)";
    } else if(speed <= 300){
        exp += 5; levelup();
        return "상당히 빠름!(xp + 5)"
    } else if(speed <= 350){
        exp += 3; levelup();
        return "빠름(xp + 3)";
    } else if(speed <= 400){
        exp++; levelup()
        return "보통(xp + 1)"
    } else if(speed <= 500){
        return "느림";
    } else if(speed <=700){
        return "상당히 느림";
    } else if(speed <= 1000){
        return "너무 느림!"
    } else{
        return "너무 느림!!!!!"
    }
}






let current_time;
let previous_time;
let timeout_f;
let time_minus;
let best_score = null;
let trial_number = 0;
let trial_total = 0;
let previous_speed_rec = null;



/** 시작을 눌렀을때 */
function start(){
    state = 1;
    time = randint(1500, 5500);

    button_s.textContent = "준비 - 초록색이 되면 버튼을 누르세요";
    button_s.style.backgroundColor = "red";
    button_s.style.color = "white";
    timeout_f =setTimeout(click ,time);
    

}

/**시작을 누르고, 초록 버튼으로 바꾸기, 시간 체크 */
function click(){

    state = 2;

    button_s.textContent = "클릭";
    button_s.style.backgroundColor = "green";
    button_s.style.color = "white";
    previous_time = new Date();

}

/**정상 클릭 했을 때 : 2 */
function normal_click(){
    current_time = new Date();
    time_minus = current_time - previous_time;
    state = 4;

    trial_total += time_minus
    trial_number++;
    trial_average = Math.floor((trial_total / trial_number))
    previous_speed_rec = time_minus

    if(time_minus < best_score || best_score === null){
        best_score = time_minus
    }

    if(time_minus <= 3000){
        button_s.textContent = `기록 : ${time_minus}ms ${fast_slow_speed(time_minus)}`
        button_s.style.backgroundColor = "yellow";
        button_s.style.color = "red";
        best_text.textContent = `최고 기록 : ${best_score}ms`
        trial_number_button.textContent = `시도 횟수 : ${trial_number}`
        trial_average_text.textContent = `평균 : ${trial_average}ms`



    } else {
        button_s.textContent = `유효하지 않은 기록입니다.`;
        button_s.style.color = black;
        button_s.style.backgroundColor = 'gray';
    }
    

    
    







}





/**초록으로 바뀌기 전에 클릭 했을때 */
function false_start(){
    state = 3

    button_s.style.backgroundColor = "gray";
    button_s.textContent = "준비 상태에서는 클릭할 수 없습니다.";
    button_s.style.color = "red";
    clearTimeout(timeout_f)

}

function reset_(){
    button_s.style.backgroundColor = "gray";
    if(state === 4){

        last_trial_text_s.textContent = `저번 기록 : ${previous_speed_rec}ms`;

    }
    state = 0;
    button_s.textContent = "시작";
    button_s.style.color = "black";
}


function divide(){
    if(state === 0){
        start()
    } else if(state ===1){
        false_start()
    } else if(state === 2){
        normal_click()
    } else if(state === 3){
        reset_()
    } else if(state === 4){
        reset_()
    }
}

button_s.addEventListener("click", divide)

