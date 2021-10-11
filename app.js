const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}
function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  const nameClass = event.target.className;
  let newClassName = event.target.classList;
  switch (nameClass) {
    case "placeholder col-done":
      newClassName.add("task-done");
      break;
    case "placeholder col-progress":
      newClassName.add("task-progress");
      break;
    case "placeholder col-start":
      newClassName.add("task-start");
      break;
  }
}

function dragleave(event) {
  event.target.classList.remove("task-done", "task-progress", "task-start");
}
function dragdrop(event) {
  event.target.classList.remove(
    "hov",
    "task-done",
    "task-progress",
    "task-start"
  );
  event.target.append(item);
  event.target.classList.remove("hovered");
}
