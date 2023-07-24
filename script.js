const ipt = document.getElementById("text-box");
const item = document.getElementById("list");


function addLi(value) {
  const liItem = document.createElement("li");
  liItem.innerHTML = `${value} <button>X</button>`;
  liItem.addEventListener('click',function(){
    this.classList.toggle("done");
  })
  item.appendChild(liItem);
  liItem.querySelector("button").addEventListener('click',function(){
    liItem.remove();
})
}

ipt.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addLi(this.value);
    this.value = "";
    const btn = document.querySelector("button");
    btn.addEventListener
  }
});
