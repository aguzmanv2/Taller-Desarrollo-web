export class NotificationView {
  constructor() {
    this.toast = document.getElementById("toast");
    this.timer = null;
  }

  show(message) {
    this.toast.textContent = message;
    this.toast.classList.add("show");

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.toast.classList.remove("show");
    }, 1700);
  }
}
