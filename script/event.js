import * as DOM from "./DOM.js";

const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
let isshowlist=true;
export const handleSubmit = (email) => {
  const emailInput = DOM.getEmailInput();
  const loginElement = DOM.login();

  if (emailRegex.test(email)) {
    alert('Đăng nhập thành công !!!');
    loginElement.style.display = "none";
    emailInput.style.border = "1px solid white"; 
  } else {
    alert('Đăng nhập thất bại !!!');
    emailInput.style.border = "1px solid red"; 
  }
};
export const anhien = (viewmore,list,boxitem,x) => {

  if (isshowlist) {
    list.style.display="none";
    isshowlist=false;
    viewmore.textContent="View Less";
    boxitem.style.height = "200px";
  } else {
    list.style.display="block";
    isshowlist=true;
    viewmore.textContent="View More";
    boxitem.style.height = x;
  }
};
export const loadform = () => {
  const emailInput =DOM.getEmailInput();
  const loginElement = DOM.login();
  emailInput.style.border = "1px solid white"; 
  loginElement.style.display = "block"; 
  isshowlist=true;
};
