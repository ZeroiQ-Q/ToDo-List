let list = [{ name: "EG : Make Dinner", deuDate: "2023-04-04" }];
function add_to_list() {
  let item_list = document.querySelector(".list_item").value;
  let date_list = document.querySelector(".pick_date").value;
  list.push({ name: item_list, deuDate: date_list });
  console.log(list);
}
display_list();

function display_list() {
  let ToDoHtml = "";
  for (let i = 0; i < list.length; i++) {
    let html = `<div> ${list[i].name} </div> <div> ${list[i].deuDate}</div> <div> <button class="delete_button" onclick= "
    list.splice(${i},1);
    display_list();
    console.log(list);
    ">Delete</button> </div>`;
    ToDoHtml = ToDoHtml + html;
  }
  document.querySelector(".result").innerHTML = ToDoHtml;
  document.querySelector(".list_item").value = "";
}
