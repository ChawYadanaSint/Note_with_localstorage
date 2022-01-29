import { user,user_ans,questions } from "./MockData.js";

// id scan from url
var baseUrl = (window.location).href; // You can also use document.URL
var id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);

// id to name
let name = null;
user.map(data =>{
  if(id == data.id){
    name = data.name;
  }
})

console.log(name)

//question out


var question = document.getElementById('question')


let main_div = document.createElement('div');
main_div.classList.add('main',`color${id}`)
// document.body.style.backgroundColor = 'cyan'

let header_text = document.createElement('h1');
header_text.textContent = `Let's guess ${name}'s Choice`;



let div_row = document.createElement('div');
div_row.classList.add('row')

questions.map(data => {
  let div_col = document.createElement('div');
  div_col.classList.add('col');

  let span_div = document.createElement('div');
  let span_que = document.createElement('span');
  span_que.textContent = data.question;
  span_div.appendChild(span_que);

  let input_div = document.createElement('div');
  for(let i = 0; i < data.answers.length; i++) {
    input_div.id =`Q${i}`;

    let input_que = document.createElement('input');
    input_que.id = i+1;
    input_que.value = data.answers[i]
    input_que.name = data.q_no
    input_que.type = 'radio'

    let input_span_que = document.createElement('span')
    input_span_que.textContent = data.answers[i]

    input_div.appendChild(input_que)
    input_div.appendChild(input_span_que)
  }
  div_col.appendChild(span_div);
  div_col.appendChild(input_div);


  div_row.appendChild(div_col);
})

//btn submit and onclick function
var result = 0

let input_btn = document.createElement('input');
    input_btn.value = 'Submit'
    input_btn.type = 'button'
    input_btn.classList.add('btn')
    input_btn.onclick = () =>{
      user_ans.map(data => {
        if(data.name==name){
          var checked_Q1 = document.querySelector('input[name = "Q1"]:checked').value;
          var checked_Q2 = document.querySelector('input[name = "Q2"]:checked').value;
          var checked_Q3 = document.querySelector('input[name = "Q3"]:checked').value;
          var checked_Q4 = document.querySelector('input[name = "Q4"]:checked').value;
          if(checked_Q1==data.answer){
            result++;
          }
          if(checked_Q2==data.answer){
            result++;
          }
          if(checked_Q3==data.answer){
            result++;
          }
          if(checked_Q4==data.answer){
            result++;
          }
          console.log(data.answer)
          console.log(result)
        }
      })


      //delete and show result

      header_text.textContent = `You can guess ${result}/4 of ${name}'s choice`
      div_row.remove()
      input_btn.remove()
      window.onload
    }

main_div.appendChild(header_text)
main_div.appendChild(div_row)
main_div.appendChild(input_btn)
question.appendChild(main_div)