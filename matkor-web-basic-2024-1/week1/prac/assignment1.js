let num = prompt("몇번 치실래요?");
num = Number(num);
// num = parseInt(num);
const cnt_dom = document.getElementById("cnt");
const egg_dom = document.getElementById("egg");
cnt_dom.innerHTML = num;
const hitEgg=() => {
    num--;
    cnt_dom.innerHTML()
}
egg_dom.addEventListener("click",)