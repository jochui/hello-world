let catPic = true;

function bookReveal(){
    if(catPic){
    bookDescription.style.display = 'inline'
    catPic = false;
}
else{
    bookDescription.style.display = 'none'
    catPic = true;
}
}
function movieReveal(){
    if(catPic){
    movieDescription.style.display = 'inline'
    catPic = false;
}
else{
    movieDescription.style.display = 'none'
    catPic = true;
}
}
function showReveal(){
    if(catPic){
    showDescription.style.display = 'inline'
    catPic = false;
}
else{
    showDescription.style.display = 'none'
    catPic = true;
}
}