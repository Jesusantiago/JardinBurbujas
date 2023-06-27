

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const name_value = user_name.value;
  const surname_value = user_surname.value;
  const email_value = user_email.value;
  const phone_value = user_phone.value;
  const message_value = user_message.value;

  const nameRegex = /[A-ZÑa-zñ]+/i;
  const emailRegex =
    /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
  const telRegex =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  const messageRegex = /^(?::(\S+) )?(\S+)(?: (?!:)(.+?))?(?: :(.+))?$/gm;

  let warning = "";
  let submitMensaje = false;

  if (!validateString(name_value, nameRegex, user_name)) {
    warning += "El nombre es incorrecto ";
    submitMensaje = true;
    user_name.style.border = "1px solid red";
  }

  if (!validateString(surname_value, nameRegex, user_surname)) {
    warning += "El apellido es incorrecto ";
    submitMensaje = true;
    user_surname.style.border = "1px solid red";
  }

  if (!validateString(email_value, emailRegex, user_email)) {
    warning += "El email es incorrecto ";
    submitMensaje = true;
    user_email.style.border = "1px solid red";
  }

  if (!validateString(phone_value, telRegex, user_phone)) {
    warning += "El telefono es incorrecto ";
    submitMensaje = true;
    user_phone.style.border = "1px solid red";
  }

  if (!validateString(message_value, messageRegex, user_message)) {
    warning += "El mensaje es incorrecto";
    submitMensaje = true;
    user_message.style.border = "1px solid red";
  }

  if (submitMensaje) {
    console.log(warning);
  } else {
    sendData(data);
    popup.classList.add("container--active");
  }

  let data = {
    nombre: name_value,
    apellido: surname_value,
    email: email_value,
    telefono: phone_value,
    mensaje: message_value,
  };

  console.log(user_name.value);

  sendData(data);
});

popupButton.addEventListener("click", () => {
  popup.classList.remove("container--active");
});

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
      }

      console.log(response);
    })
    .catch((err) => {
      //en caso de error imprimo el error por consola
      console.log(err);
    });
};
