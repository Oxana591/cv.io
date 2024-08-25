var i=0;
function next(){
    i++;
    if (i>9){
        i=0;
    }
    else{
        document.getElementsByClassName('slider-img')[0].src='images/'+i+'.jpg';
    console.log(document.getElementsByClassName('slider-img').src);
    }
}
function prev(){
    i--;
    if (i<1){
        i=10;
    }
    else{
        document.getElementsByClassName('slider-img')[0].src='images/'+i+'.jpg';
    console.log(document.getElementsByClassName('slider-img').src);
    }
}
    