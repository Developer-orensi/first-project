/** a : int, b : int , return a 이상 b 미만의 랜덤한 난수
 * Python에서의 randint와 같은 기능을 합니다.
 */
function randint(a, b){
    return Math.floor((b - a) * Math.random()) + a  
}
/** console log. */
function printf(text){
    console.log(text);
}



const guess_blank = document.getElementById("guess")

let number = guess_blank.nodeValue

const guess_button = document.getElementById("guessbutton")
printf(guess_button + guess_blank)
const reset_button = document.querySelector("#resetbutton")
let answer = randint(1, 1000)

answer = randint(1,1000)
let msg_text

/** 작으면 up 크면 down 맞으면 right을 돌려주는 함수 */
function guess(event){
    number = guess_blank.value
    number = Number(number)
  
    if(Number(number) < answer){
        trial_num += 1
        msg_text= "틀렸습니다! 더 큰 수를 입력하세요!"
    } else if(Number(number) == answer){

        if(trial_num < 12){
            msg_text= `정답입니다! 시도 횟수 :${trial_num} (경험치 + ${(15 - trial_num)*2})`
            exp += 2*(15 - trial_num * 2)

            levelup()





        } else{
            msg_text= `정답입니다! 시도 횟수 :${trial_num}`
        }

        











    } else if(Number(number) > answer){
        trial_num += 1
        msg_text= "틀렸습니다! 더 작은 수를 입력하세요!"
    }

    message.textContent = msg_text

}

function reset(reset_number_bool = true){
    answer = randint(1, 1000)
    trial_num = 0
    if(reset_number_bool){

        alert("리셋되었습니다!")
    }
    
    message.textContent = ""
}
const message = document.querySelector('#message')

guess_button.textContent = "추론하기"
guess_button.addEventListener('click', guess)
reset_button.addEventListener('click', reset)


