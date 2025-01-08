// main.js
import * as DOM from "./DOM.js";
import * as event from "./event.js";

export const registerEvents = () => {
  const emailInput = DOM.getEmailInput();
  const submitButton = DOM.getSubmitButton();
  
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      const email = emailInput.value;
      event.handleSubmit(email);
    });
  }
  if (DOM.viewmore1) {
    DOM.viewmore1().addEventListener('click', () => {
        event.anhien(DOM.viewmore1(),DOM.list1(),DOM.box1(),"670px");
    });
  }
  if (DOM.viewmore2) {
    DOM.viewmore2().addEventListener('click', () => {
        event.anhien(DOM.viewmore2(),DOM.list2(),DOM.box2(),"670px");
    });
  }
  if (DOM.viewmore3) {
    DOM.viewmore3().addEventListener('click', () => {
        event.anhien(DOM.viewmore3(),DOM.list3(),DOM.box3(),"670px");
    });
  }
  if (DOM.viewmore4) {
    DOM.viewmore4().addEventListener('click', () => {
        event.anhien(DOM.viewmore4(),DOM.list4(),DOM.box4(),"450px");
    });
  }
  if (DOM.viewmore5) {
    DOM.viewmore5().addEventListener('click', () => {
        event.anhien(DOM.viewmore5(),DOM.list5(),DOM.box5(),"450px");
    });
  }
  if (DOM.viewmore6) {
    DOM.viewmore6().addEventListener('click', () => {
        event.anhien(DOM.viewmore6(),DOM.list6(),DOM.box6(),"450px");
    });
  }
};
