var buttons = document.querySelectorAll('button');
var display=document.querySelector('.display');
 disp=(num)=>{
    display.value+=num;
}
clrscr=()=>{
    display.value="";
}
ev=()=>{
    let data=eval(display.value);
   display.value=data;
}
 