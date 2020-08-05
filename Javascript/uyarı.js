var sure=3;
var milisec=0;
var seconds=0;
function display(){
    if(milisec>=10){
        milisec=0;
        seconds =1;
    }
    else
        milisec =1;
        document.getElementById("d2").value= sure - milisec;
        if(milisec == sure) location.href = 'index.php';
        else setTimeout("display()",1000);
}
display();
