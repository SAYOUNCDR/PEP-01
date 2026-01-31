const container = document.getElementById("container");

const ul = document.createElement("ul");
container.appendChild(ul);

const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 78 },
];

students.forEach((student) => {
  const li = document.createElement("li");

  li.textContent = `${student.name} – ${student.marks}`;

  li.style.backgroundColor = "#f0f8ff";
  li.style.padding = "5px";
  li.style.margin = "5px 0";
  li.style.borderRadius = "4px";

  ul.appendChild(li);
});
