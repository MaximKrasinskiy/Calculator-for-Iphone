document.title = 'My Iphone-Calculator'
//основные переменные
let a = '';
let b = '';
let sign = '';
let finish = '';

// переменные для цифр и знаков
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','X','/','%','+/-'];

// экран калбкулятора
let out = document.querySelector('.calc-screen p');

// функция очистки кнопка 'AC'
function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

//привязываем кнопку 'AC' к функции clearAll

document.querySelector('.ac').onclick = clearAll;

//создаю событие по нажатию кнопок на калькуляторе и последующее их отображение

document.querySelector('.buttons').onclick = (e) => {
    if(!e.target.classList.contains('btn')) return;
    if(e.target.classList.contains('ac')) return;

    out.textContent = '';
     // создаю основную константу для текущего события ,для отображения нажатых кнопок

        const key = e.target.textContent;

     //создание основного функционала
     //для первой переменной
        if(digit.includes(key)){
            if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
            }else if(a!== '' && b!== '' && finish){
                b = key;
                finish = false;
                out.textContent = b;
            }else{
                b += key;
                out.textContent = b;
            }
            return
        }
     //для арифмитического знака
            if(action.includes(key)){
            sign = key;
            out.textContent = sign;
            return
        }
     //  функционал для вычисления
        if(key === "="){
            if(b === '') b = a;
            switch(sign){
                case "+":
                    a = (+a) + (+b);
                    break;
                    case "-":
                        a = a - b;
                        break;
                        case 'X':
                         a = a * b;
                            break;
                            case '/':
                                if( b === '0'){
                                    out.textContent = 'Error';
                                    a = '';
                                    b = '';
                                    sign = '';
                                    return;
                                }
                                a = a / b;
                                break;
                                case '%':
                                    a = a / 10
                                    break;
        }
        finish = true;
        out.textContent = a;
    }
    
}

 let btn = document.querySelector(".camera");
 let rec = document.querySelector(".rec");


 function changeColor(){
   rec.style.background = 'rgb(65, 60, 60)'
}
function backColor(){
    rec.style.background = 'red'
}
btn.addEventListener('click',changeColor);
btn.addEventListener('dblclick',backColor);