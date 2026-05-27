const addToSave = () => {
    const send = document.getElementById("save");
    const ordersContainer = document.getElementById("orders");
    const selection = document.getElementById("selection");
  
    send.addEventListener("click", () => {
      const username = document.getElementById("name").value;
      const phoneNumber = document.getElementById("phone").value;
      const mail = document.getElementById("mail").value;
      const selectedValue = selection.value;
  
      if (username && phoneNumber && mail && selectedValue) {
        const orderDiv = document.createElement("div");
        ordersContainer.style = `display:flex; flex-wrap:wrap; gap:30px;`
        orderDiv.innerHTML = `<div style="width:300px; border:1px solid #112; display:flex; flex-direction:column; gap:4px;"><h1 style="text-align:center; border-bottom:1px solid gray;">Order:${ordersContainer.children.length + 1}</h1><p>User: ${username}</p><p>Phone: ${phoneNumber}</p><p>Mail: ${mail}</p><p>Dough Thickness: ${selectedValue}</p></div>`;
        
        ordersContainer.appendChild(orderDiv);
      } else {
        alert("Please fill in all fields.");
      }
    });
  };
  
  addToSave();