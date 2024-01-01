const add_note_button = document.getElementById("rhythmgame_maker_add")
const reset_note_button = document.getElementById("rhythmgame_maker_reset")
const complete_note_button = document.getElementById("rhythmgame_maker_complete")

const rhythmgame_maker_notenum = document.getElementById("rhythmgame_maker_notenum");
const rhythm_game_maker_stage_text = document.getElementById("rhythm_game_maker_stage");

const rhythmgame_maker_bpm_input = document.getElementById("bpm_input_button");
const rhythmgame_maker_bpm_button = document.getElementById("rhythmgamemaker_bpm_submit");









let notes_1 = [];
let notes_2 = []; let notes_3 = []; let notes_4 = []; let notes_5 = [];
let notes_6 = []; let notes_7 = []; let notes_8 = [];
let note_list = [notes_1, notes_2, notes_3, notes_4, notes_5, notes_6, notes_7, notes_8];

note_total = []



let rhythmgame_maker_stage = 1;


/** 초기화 - 체크박스들 */
for(let i=0; i<8; i++){

    for(let j=1; j<=5; j++){

        note_list[i].push(document.getElementById(`note_${i+1}_${j}`))

    }
}
console.log(note_list)

function true_false(list){
    local_list = []
    for(i=1; i<=list.length; i++){

        if(list[i].checked === true){

            local_list.push(i + 1);
            
            
        }
            
        
    }
    return local_list;
}


function add_note_button_fun(){
    try{

        if(rhythmgame_maker_stage !== 1){
            alert("추가 할 수 없습니다.")
            return;
            
        }
        
       

        
        for(let i=0; i<8; i++){
            local_list = []
            
            for(let j=0; j<5; j++){

                if(document.getElementById(`note_${i+1}_${j+1}`).checked === true){
                    local_list.push(j+1)
                }


                document.getElementById(`note_${i+1}_${j+1}`).checked = false;

            }

            note_total.push(local_list)
            
            
           
        } //for문 끝

        rhythmgame_maker_notenum.textContent = `현재 노트 수 : ${note_total.length}`


        
    
    } catch(error){ // try문
        alert("에러! 관리자에게 문의하세요.")
    }
    
}

function rhythmgame_maker_complete_fun(){

    add_note_button_fun();
    rhythmgame_maker_stage = 2;

    rhythmgame_maker_interfaceupdate_fun()
    

    


}


function hide_checkbox(){


    for(let i=1; i<=8; i++){

        for(let j=1; j<=5; j++){

            document.getElementById(`note_${i}_${j}`).style.display = "none";
            rhythmgamemaker_hide()
            
        }




    }


}

function rhythmgamemaker_hide() {
    const rhythm_cl = document.querySelectorAll('.rhythm_checkboxnum');
    rhythm_cl.forEach(rhythm_cl_f => {
        rhythm_cl_f.style.display = "none";
        
    });
}

function rhythmgame_maker_interfaceupdate_fun(){

    if(rhythmgame_maker_stage === 1){
        rhythm_game_maker_stage_text.textContent = "<1. 노트 생성 단계>";





    } else if(rhythmgame_maker_stage === 2){
        rhythm_game_maker_stage_text.textContent = "<2. bpm(빠르기) 선택 단계>";
        hide_checkbox()
        


    } else if(rhythmgame_maker_stage === 3){
        rhythm_game_maker_stage_text.textContent = "<3. 플레이 키 설정 단계>";

    } else if(rhythmgame_maker_stage === 4){
        rhythm_game_maker_stage_text.textContent = "<4. 마지막 세팅 단계";

    } else if(rhythmgame_maker_stage === 5){
        rhythm_game_maker_stage_text.textContent = "<5. 플레이 단계>";

    } else if(rhythmgame_maker_stage === 5){
        rhythm_game_maker_stage_text.textContent = "<6. 결과 화면>";

    }





}


function rhythmgame_maker_reset_fun(){
    rhythmgame_maker_stage = 1;
    note_total = []
    rhythmgame_maker_notenum.textContent = `현재 노트 수 : ${note_total.length}`


}


add_note_button.addEventListener("click", add_note_button_fun)

complete_note_button.addEventListener("click", rhythmgame_maker_complete_fun)

reset_note_button.addEventListener("click", rhythmgame_maker_reset_fun )

rhythmgame_maker_bpm_input.addEventListener('click', (event) =>{
    
})