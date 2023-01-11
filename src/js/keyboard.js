export class Keyboard {
  #switchEl;
  #containerEl;
  #fontSelectEl;
  #keyboardEl;
  #inputGroupEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", (event) => {
      console.log(event.key, /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
      // this.#inputGroupEl.classList.toggle("error", result );
      this.#keyboardEl.querySelector(`[data-code = ${event.code}]`)?.classList.add("active");
    })

    document.addEventListener("keyup", (e) => {
        this.#keyboardEl.querySelector(`[data-code = ${e.code}]`)?.classList.remove("active")
    })
  }

  #onChangeTheme(e) {
    document.documentElement.setAttribute("theme", e.target.checked ? "dark" : "");
  }

  #onChangeFont(e) {
    document.body.style.fontFamily = e.target.value;
  }
}
