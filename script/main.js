
import { registerEvents } from "./sigeineven.js";
import * as event from "./event.js";
document.addEventListener('DOMContentLoaded', () => {
  registerEvents();
  event.loadform();
});
