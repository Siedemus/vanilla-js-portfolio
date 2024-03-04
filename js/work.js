const inputs = document.querySelectorAll(".js-input");
const projects = document.querySelectorAll(".js-project");
let lastCheckedProject;
let lastCheckedInput;

const setInitialInput = (input) => {
  input.checked = true;
  input.parentElement
    .querySelector(".js-icon")
    .classList.add("project__icon--active");
  return input;
};

const setInitialProject = (project) => {
  project.classList.add("project--active");
  return project;
};

const setNewCheckedInput = (input) => {
  lastCheckedInput.checked = false;
  lastCheckedInput.parentElement
    .querySelector(".js-icon")
    .classList.remove("project__icon--active");
  input.checked = true;
  input.parentElement
    .querySelector(".js-icon")
    .classList.add("project__icon--active");
  return input;
};

const setActiveProject = (project) => {
  lastCheckedProject.classList.remove("project--active");
  projects[+project.value].classList.add("project--active");
  return projects[+project.value];
};

lastCheckedInput = setInitialInput(inputs[0]);
lastCheckedProject = setInitialProject(projects[0]);

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    lastCheckedInput = setNewCheckedInput(e.target);
    lastCheckedProject = setActiveProject(e.target);
  });
});
