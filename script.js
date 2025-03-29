const addTodo = () => {
  const todoText = document.getElementById("todo-text").value;
  if (todoText != "") {
    setData(todoText);
    listTodo();
  }
};

const listTodo = () => {
  let html = ``;
  let data = getData();
  if (data) {
   
    data.forEach((value, item) => {
      html += `<li>${value} <button onclick="removeData(${item})"><i class="fa-solid fa-trash"></i></button></li>`;
    });
  
  }
  document.getElementById("todo-item").innerHTML = html;
};

const getData = (item = null) => {
  let data = JSON.parse(localStorage.getItem("mytodo"));
  if (data) {
    if (item) {
      if (data.indexOf(item) != -1) {
        return data[item];
      } else {
        return false;
      }
    }
    return data;
  }
  return false;
};

listTodo();

const setData = (item) => {
  if (getData(item) != false) {
    alert("item already added in todo");
  } else {
    let data = getData();
    data = data != false ? data : [];
    data.push(item);
    data = JSON.stringify(data);
    localStorage.setItem("mytodo", data);
  }
};

const removeData = (itemId) => {
  let data = getData();
  if (data) {
    let newData = data.filter((v, i) => {
      return i != itemId;
    });
    newData = JSON.stringify(newData);
    localStorage.setItem("mytodo", newData);
    listTodo();
  } else {
    alert("data not found");
  }
};
