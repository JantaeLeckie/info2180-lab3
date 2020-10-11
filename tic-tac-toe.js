/**write the necessary JavaScript event-handling code so that when
the page loads, each square in the 3x3 grid game board is styled appropriately by
adding the right class. 

Write your JavaScript code unobtrusively, without modifying
either the index.html or tic-tac-toe.css files.

Hint: It might be helpful to set each div inside the game board to have the provided
CSS class square, using the JavaScript classList property or setAttribute()
method or className property that you learnt in your lecture.

Hint 2: You may also want to ensure you use the onload or DOMContentLoaded
handler.  */

// var boxes = document.querySelector("div").classList.add("box");
// console.log(boxes)

var originalstat = ("Move your mouse over a square and click to play an X or an O.");
var mystarter = function(){
    // var b = document.querySelectorAll("#board div");
    let b = document.getElementById("board").children;
    console.log(b);
    this.boxes(b);
}

window.onload = mystarter;
function boxes(n){
    var myXO = true; 
    for(let x = 0; x < n.length; x++){
        n[x].classList.add('square');
        n[x].onmouseover = function(){
            n[x].classList.toggle("hover", true);
        }
        n[x].onmouseout = function(){
            n[x].classList.toggle("hover", false);
        }
        n[x].addEventListener('click', function(){
            if (myXO === true){
                n[x].innerHTML = 'X';
                myXO = false;
                winner(n);
            }else{
                n[x].innerHTML = 'O';
                myXO = true;
                winner(n);
            }
        })
        
    }
}

function winner(n){
    let m = "";
    let win = "";
    let stat = document.getElementById("status");
    stat.className = "you-won";
    let lose = ("No one won");
    if (n[0].innerHTML !== "" && n[0].innerHTML === n[1].innerHTML && n[1].innerHTML === n[2].innerHTML){
        m = n[0].innerHTML;
        win = ("Congratulation! " + m + " is the winner")
        stat.innerHTML = win;
    }
    else if (n[0].innerHTML !== "" && n[0].innerHTML === n[3].innerHTML && n[3].innerHTML === n[6].innerHTML){
        m = n[0].innerHTML;
        win = ("Congratulation! " + m + " is the winner");
        stat.innerHTML = win;
    }
    else if (n[0].innerHTML !== "" && n[0].innerHTML === n[4].innerHTML  && n[4].innerHTML === n[8].innerHTML){
        m = n[0].innerHTML;
        win = ("Congratulation! " + m + " is the winner");
        stat.innerHTML = win;
    }
    else if (n[1].innerHTML !== "" && n[1].innerHTML === n[4].innerHTML && n[4].innerHTML=== n[7].innerHTML){
        m = n[1].innerHTML;
        win = ("Congratulation! " + m + " is the winner");
        stat.innerHTML = win;
    }
    else if (n[2].innerHTML !== "" && n[2].innerHTML === n[5].innerHTML && n[5].innerHTML === n[8].innerHTML){
        m = n[2].innerHTML;
        win = ("Congratulation! " + m + " is the winner");
        stat.innerHTML = win;
    }
    else if (n[2].innerHTML !== "" && n[2].innerHTML === n[4].innerHTML && n[4].innerHTML=== n[6].innerHTML){
        m = n[2].innerHTML;
        win = ("Congratulation! " + m + " is the winner");
        stat.innerHTML = win;
    }
    else if (n[3].innerHTML !== "" && n[3].innerHTML === n[4].innerHTML && n[4].innerHTML === n[5].innerHTML){
        m = n[3].innerHTML;
        win = ("Congratulation! " + m + " is the winner")
        stat.innerHTML = win;
    }
    else if (n[6].innerHTML !== "" && n[6].innerHTML === n[7].innerHTML && n[7].innerHTML === n[8].innerHTML){
        m = n[6].innerHTML;
        win = ("Congratulation! " + m + " is the winner")
        stat.innerHTML = win;
    }
    else{
        stat.innerHTML = lose;
    }
}


// window.onload = function(){
//     let squares = document.querySelectorAll("#board div");
//     console.log(squares);
// 