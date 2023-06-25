const createRegister = (arrofRegister) => {
  const form = document.createElement("form");
  const title = document.createElement("p");
  const headerInputs = document.createElement("div");

  // assining attributes

  form.id = "cash-register";
  title.className = "title";
  headerInputs.className = "form-row";

  // setting innerHtml
  title.innerHTML = "Cash Register";
  headerInputs.innerHTML = `
    <label for="price">Total bill:</label>
    <input type="text" class="txt-input" id="cash" autocomplete="off" placeholder="How much he's given" />
    <label for="cash">Payment Note:</label>
    <input type="text" class="txt-input" id="price" autocomplete="off" placeholder="Actual price"/>
  `;

  form.appendChild(title);
  form.appendChild(headerInputs);

  form.innerHTML += `
    <div class="form-row">
        <label for="one-hundred">One Hundred :</label>
        <input
            type="text"
            class="txt-input"
            id="one-hundred"
            value="0"
            autocomplete="off"
            placeholder="0"
            placeholder="0"
            onfocus="if(this.value == '0') {this.value = '';}"
        />
    </div>
    <div class="form-row">
    <label for="twenty">Twenty :</label>
    <input
        type="text"
        class="txt-input"
        id="twenty"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="ten">Ten :</label>
    <input
        type="text"
        class="txt-input"
        id="ten"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="five">Five :</label>
    <input
        type="text"
        class="txt-input"
        id="five"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="one">One :</label>
    <input
        type="text"
        class="txt-input"
        id="one"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="quarter">Quarter :</label>
    <input
        type="text"
        class="txt-input"
        id="quarter"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="dime">Dime :</label>
    <input
        type="text"
        class="txt-input"
        id="dime"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="nickel">Nickel :</label>
    <input
        type="text"
        class="txt-input"
        id="nickel"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>
    <div class="form-row">
    <label for="penny">Penny :</label>
    <input
        type="text"
        class="txt-input"
        id="penny"
        value="0"
        autocomplete="off"
        placeholder="0"
        onfocus="if(this.value == '0') {this.value = '';}"
    />
    </div>

    <div class="result-container">
    <p>Result :</p>
    <div id="result"></div>
    </div>

    <div class="cta">
    <button id="submit-btn" class="calulate">Get change</button>
    <button id="reset-btn" class="reset">Clear</button>
    </div>
`;

  document.getElementById("whole").appendChild(form);
};

export default createRegister;
