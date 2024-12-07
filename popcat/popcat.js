let count = 0;
function popcatclick(click = true) {
    count += 1;
    counts(count); 
    let image = document.getElementById("popcat");
    let check = image.src.split("/").pop();
    if (check == "popcatsut.png"){
        image.src="popcatopen.png";
    } else {
        image.src="popcatsut.png";
    }

}
function counts(count) {
    let countt = document.getElementById("clickcount");
    countt.textContent = count;
}