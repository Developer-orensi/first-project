const info_level = document.getElementById("info_level")
const info_remainexp = document.getElementById("info_remainexp")
let level;
let exp;

if(localStorage.getItem("level") == null){

    
    // 만들기
    localStorage.setItem("level", "1")
    localStorage.setItem("exp", "0")
    level = 1;
    exp = 0;
} else{
    
    level = Number(localStorage.getItem("level"));
    exp = Number(localStorage.getItem("exp"))
    info_level.textContent = `레벨 : ${level}`
    info_remainexp.textContent = `다음 레벨까지 남은 경험치 : ${need_exp_list[level] - exp}`
    levelup()

    
    
}



function levelup(){
    while(exp >= need_exp_list[level]){

        exp -= need_exp_list[level];
        level++;
        alert(`레벨업! (${level-1} --> ${level})`)
        

        

    }
    info_level.textContent = `레벨 : ${level}`
    info_remainexp.textContent = `다음 레벨까지 남은 경험치 : ${need_exp_list[level] - exp} (${Math.floor((need_exp_list[level] - exp)/need_exp_list[level] * 100)}%)`
    localStorage.setItem("level", level)
    localStorage.setItem("exp", exp)
}