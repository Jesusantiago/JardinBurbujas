const formPopup = document.getElementById("form__popup"); //Div del formulario vacio
const present = document.getElementById("present"); //Div de la sección present

const fragmet = document.createDocumentFragment(); //fragment para el formulario

const form = document.createElement("div"); //se crea el modal del formulario
form.innerHTML = `<div class="main">
<div class="section">
  <i class="gg-close"></i>
<h1 class="section__title">
Para contactarnos, rellena el siguiente formulario y nos contactaremos
a la brevedad
</h1>
<form class="form">
<div class="personal-data">
<h2 class="form__subtitle">Datos personales</h2>
<ul class="data-list data-list--flex">
    <li class="data">
    <label class="data__label" for="name"
        >Nombre <span>(obligatorio)</span></label
    >
    <input
        id="name"
        class="data__input"
        type="text"
        name="nombre"
        placeholder="Escriba su nombre"
        title="Escriba su nombre"
        pattern="[A-Za-zñÑ]{3,50}"
        minlength="3"
        maxlength="50"
        
    />
    </li>
    <li class="data">
    <label class="data__label" for="surname"
        >Apellido <span>(obligatorio)</span></label
    >
    <input
        id="surname"
        class="data__input"
        type="text"
        name="apellido"
        placeholder="Escriba su apellido"
        title="Escriba su apellido"
        pattern="[A-Za-zñÑ]{3,50}"
        minlength="3"
        maxlength="50"
        
    />
    </li>
</ul>
</div>

<div class="contact-data">
<h2 class="form__subtitle">Datos de contacto</h2>
<ul class="data-list">
    <li class="data">
    <label class="data__label" for="email">
        E-mail <span>(obligatorio)</span></label
    >
    <div class="input-container">
        <input
        id="email"
        class="data__input data__input--padding"
        type="email"
        name="email"
        placeholder="suemail@gmail.com"
        title="Escriba su email"
    
        />
        <img
        class="data__icon"
        src="./img/form-email.svg"
        alt="Icono email"
        draggable="false"
        />
    </div>
    </li>
    <li class="data">
    <label class="data__label" for="phone"
        >Teléfono o celular <span>(opcional)</span></label
    >
    <div class="input-container">
        <input
        id="phone"
        class="data__input data__input--padding"
        type="tel"
        name="telefono"
        placeholder="+54 11 123456789"
        title="Escriba su número de teléfono o celular"
        pattern="[0-9]{2}[0-9]{11}"
        minlength="13"
        maxlength="13"
        />
        <img
        class="data__icon"
        src="./img/form-call.svg"
        alt="Icono telefono"
        draggable="false"
        />
    </div>
    </li>
    <li class="data">
    <label class="data__label" for="message"
        >Motivo de consulta <span>(obligatorio)</span></label
    >
    <textarea
        id="message"
        class="data__input data__input--height"
        name="mensaje"
        cols="22"
        rows="18"
        placeholder="Escriba su mensaje"
        title="Escriba su consulta"
        
    ></textarea>
    </li>
</ul>
<button id="btnForm" class="form__button" type="button">
Enviar
</button>
</div>
</form>
</div>
    </div>`;
form.setAttribute("id", "div__form");

const fragmet2 = document.createDocumentFragment(); //fragment para el popup
const modal = document.createElement("div"); //se crea el modal del popup final
modal.setAttribute("class", "div__popup");
modal.innerHTML = `<div id="popup" class="container">
    <div class="pop-up">
        <img
        class="pop-up__img"
        src="../img/thumb_up.png"
        alt="Personaje pulgar arriba"
        />
        <h2 class="pop-up__title">¡Gracias por su consulta!</h2>
        <p class="pop-up__paragraph">
        A la brevedad nuestro equipo se comunicará para brindarte información
        <br />
        y guiarte en el proceso de admisión
        </p>
        <input
        id="popup-button "
        class="form__button--popup"
        type="button"
        value="Regresar al inicio"
        >
        
        </input>
    </div>
    </div>`;

//La delegación de eventos en los botones

present.addEventListener("click", (e) => {
  if (e.target.className === "present__div_button") {
    //se crea el formulario al pulsar el botón de Contactanos
    formPopup.classList.replace("form__popup__none", "form__popup");
    fragmet.appendChild(form);
    formPopup.appendChild(fragmet);
  }

  if (e.target.className === "form__button") {
    //Se envia el formulario y para al popup final
    e.preventDefault();
    getData();
  }

  if (e.target.className === "form__button--popup") {
    //Se cierra el popup final
    form.classList.remove("main__none");
    formPopup.classList.replace("form__popup", "form__popup__none");
  }

  if (e.target.className === "gg-close") {
    //Se cierra el modal del formulario si le da click en la X
    formPopup.classList.replace("form__popup", "form__popup__none");
  }
});

//menu burger

const item = document.getElementById("burger__items");
const menu = document.getElementById("burger__menu");

menu.addEventListener("click", () => {
  item.classList.toggle("open__burger");
  menu.classList.toggle("close__burger");
});

const getData = () => {
  let name;
  let surname;
  let email;
  let phone;
  let message;

  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const button = document.getElementById("btnForm");

  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  message = document.getElementById("message").value;

  const nameRegex = /[A-ZÑa-zñ]+/i;
  const emailRegex =
    /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
  const telRegex =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  const messageRegex = /^(?::(\S+) )?(\S+)(?: (?!:)(.+?))?(?: :(.+))?$/gm;

  let warning = "";
  let submitMensaje = false;

  if (!validateString(name, nameRegex, nameInput)) {
    warning += "El nombre es incorrecto ";
    submitMensaje = true;
    nameInput.style.border = "1px solid red";
  }

  if (!validateString(surname, nameRegex, surnameInput)) {
    warning += "El apellido es incorrecto ";
    submitMensaje = true;
    surnameInput.style.border = "1px solid red";
  }

  if (!validateString(email, emailRegex, emailInput)) {
    warning += "El email es incorrecto ";
    submitMensaje = true;
    emailInput.style.border = "1px solid red";
  }

  if (!validateString(phone, telRegex, phoneInput)) {
    warning += "El telefono es incorrecto ";
    submitMensaje = true;
    phoneInput.style.border = "1px solid red";
  }

  if (!validateString(message, messageRegex, messageInput)) {
    warning += "El mensaje es incorrecto";
    submitMensaje = true;
    messageInput.style.border = "1px solid red";
  }

  let data = {
    nombre: name,
    apellido: surname,
    email: email,
    telefono: phone,
    mensaje: message,
  };

  if (submitMensaje) {
    console.log(warning);
  } else {
    sendData(data);
  }
};

const validateString = (str, regex, input) => {
  const specialRegex = regex;
  input.style.border = "";
  return specialRegex.test(str);
};

const sendData = (data) => {
  fetch("https://jardin-burbujas.vercel.app/api/contacts/createContact ", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        //en  caso de respuesta correcta, realizo las acciones deseadas
        console.log("datos enviados correctamente!");
        form.classList.add("main__none");
        fragmet2.appendChild(modal);
        formPopup.appendChild(fragmet2);
      }

      console.log(response);
    })
    .catch((err) => {
      //en caso de error imprimo el error por consola
      console.log(err);
    });
};
