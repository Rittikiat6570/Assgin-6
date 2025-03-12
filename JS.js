document.addEventListener('DOMContentLoaded', () => {
  let arr = [];

  let input = prompt("กรุณาป้อนข้อมูล (กด Cancel เพื่อหยุด):");
  while (input !== null && input.trim() !== "") {
    arr.push(input);
    input = prompt("กรุณาป้อนข้อมูล (กด Cancel เพื่อหยุด):");
  }

  arr.sort();

  const ulElement = document.getElementById("resultList");
  arr.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    ulElement.appendChild(li);
  });
});
