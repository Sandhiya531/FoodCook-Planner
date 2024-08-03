const formEl = document.forms.feedback //Fetch form name by name attribute

// Get Elements from Form
const fullName = formEl.elements.name; 
const typeEl = formEl.elements.type;
const emailEl = formEl.elements.email;
const descEl = formEl.elements.description;
const termsEl = formEl.elements.terms;

//Other ways to get elements from form
// const fullNameEl = formEl.fullName;

// Object Destructing - Other ways to get elements from form by using the elements name
// const { fullName, type, email, desc, terms } = formEl.elements;
// console.log(fullName, type, email, desc, terms);


const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  alert("Thank you for your feedback!")
};

formEl.addEventListener("submit", handleSubmit);