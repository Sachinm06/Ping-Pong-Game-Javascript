let can=document.getElementById("table")
let drew_= can.getContext('2d')


drew_.fillStyle='red';
drew_.fillRect(100,100,30,30);

drew_.fillStyle='orange';
drew_.beginPath();
drew_.arc(200,200,10,0, Math.PI *2,false);
drew_.closePath();
drew_.fill();