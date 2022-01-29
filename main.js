
var whole_length = localStorage.length;

var id = 0;
if(localStorage.getItem('whole_ID'))
{
 id = localStorage.getItem('whole_ID');
}else{
  localStorage.setItem('whole_ID',0)

}

function addNote(){
  id++;
  showIndividualNote(id);
}

function showNote(){
  for(let i=0;i<whole_length;i++){
    let key = localStorage.key(i);
    let noteText_array =localStorage.getItem(key);
    let noteText = JSON.parse(noteText_array);
    
    if (key == "whole_ID") {
      continue;
    }
    showIndividualNote(noteText[0],noteText[1]);
  }
}
showNote();

function showIndividualNote(noteID,noteText){
  var display_note = document.getElementById('note_display');

  //note div
  let note = document.createElement('div');
  note.classList.add('note');
  note.id = `note${noteID}`;

  //card
  let card = document.createElement('div');
  card.classList.add('card','bg-light','mb-3');
  card.style.maxWidth = '18rem';

  let card_header = document.createElement('div');
  card_header.classList.add('card-header','note_card');

  //edit and delete icon

  let note_text = document.createElement('span');
  note_text.textContent = `Note-${noteID}`;

  let edit_icon = document.createElement('i');
  edit_icon.id = `edit${noteID}`
  edit_icon.classList.add('bi','bi-pencil-square','note_card_push');
  edit_icon.setAttribute("onclick","editNote(this.id)");

  let delete_icon = document.createElement('i');
  delete_icon.classList.add('bi','bi-trash-fill','text-danger');
  delete_icon.id = `delete${noteID}`
  delete_icon.setAttribute("onclick","deleteNote(this.id)");
  
  let card_body = document.createElement('div');
  card_body.classList.add('card-body');

  let note_textarea = document.createElement('textarea');
  note_textarea.id = noteID;
  // note_textarea.disabled = 'disabled';
  note_textarea.cols = '30';
  note_textarea.rows = '10';
  note_textarea.textContent = noteText;

  //append
  card_header.appendChild(note_text);
  card_header.appendChild(edit_icon);
  card_header.appendChild(delete_icon);

  card_body.appendChild(note_textarea);

  card.appendChild(card_header);
  card.appendChild(card_body);
  note.appendChild(card);
  display_note.appendChild(note);
}


function deleteNote(d_id){
  //d_id = delete1
  var key = d_id.match(/(\d+)/);
  //key = 1
  console.log(key)
  localStorage.removeItem(key[0]);
  let div_id = document.getElementById(`note${key[0]}`)
  div_id.remove();

}

function editNote(e_id){
  var key = e_id.match(/(\d+)/);

  let text_id = document.getElementById(key[0]);
  // text_id.disabled = false;
  let btn_done = document.createElement('input');
  btn_done.type='button';
  btn_done.classList.add('btn','btn-primary');
  btn_done.style.float = 'right';
  btn_done.value = 'Done';
  //local storage edit
  btn_done.onclick = () =>{
    var value_array = [key[0],text_id.value,`Note-${key[0]}`];
    localStorage.setItem(key[0], JSON.stringify(value_array));

    // text_id.disabled = true;
    btn_done.remove();
  }
  insertAfter(text_id,btn_done);
  
  localStorage.setItem('whole_ID',id);

}
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}