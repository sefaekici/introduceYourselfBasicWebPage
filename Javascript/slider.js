var i=0;
var images=['https://yoldaolmak.com/wp-content/uploads/2016/10/Ayvacik-Samsun-Gezilecek-Yerler.jpg','https://yoldaolmak.com/wp-content/uploads/2016/10/Samsun-Gezilecek-Yerler.jpg','https://www.etstur.com/letsgo/wp-content/uploads/2018/11/sahinkaya-kanyonu-samsun-gezilecek-yerler.jpg','https://gezipgordum.com/wp-content/uploads/2016/08/Ladik-G%C3%B6l%C3%BC-Samsun.jpg','https://www.etstur.com/letsgo/wp-content/uploads/2018/11/kizilirmak-deltasi-samsun-gezilecek-yerler.jpg'];

var duration=3000;

function slideImg(){
    
    document.slide.src=images[i];
    
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideImg()",duration);
}

window.onload=slideImg;