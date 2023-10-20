const search_input = document.getElementById("search");
const search_btn = document.getElementById("search_btn");

search_input.addEventListener('input', function(){
if(search_input.value !== ""){
    search_btn.style.backgroundColor = "lightgreen"
}else{
    search_btn.style.backgroundColor = "transparent"

}
})