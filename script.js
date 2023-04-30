//--------MAIN---------//

//----------Validar caracteres-----------//
function validarTexto(event) {
  const texto = event.target.value;
  const regex = /^[a-z0-9\s]+$/;
  if (!regex.test(texto)) {
    event.target.value = texto.replace(/[^a-z0-9\s]/g, "");
  }
}

//-------FUNCIÓN ENCRIPTAR--------------//

function encriptar(textoDesEncriptado) {
  const valores = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let textoEncriptado = textoDesEncriptado;
  for (const valor in valores) {
    const expresion = new RegExp(valor, "g");
    textoEncriptado = textoEncriptado.replace(expresion, valores[valor]);
  }

  return textoEncriptado;
}

function encriptarTexto() {
  // Validar si el area de texto está vacía
  if (document.getElementById("textoBox").value.trim() === "") {
    Swal.fire({
      position: "center",
      width: "15em",
      toast: true,
      icon: "warning",
      title: "Ingresa un texto para continuar",
      showConfirmButton: false,
      timer: 1500,
    });
    // salida.style.display = "none";
    // swap.style.display = "block";
    return;
  } else {
    const textoDesEncriptado = document.getElementById("textoBox").value;
    const textoEncriptado = encriptar(textoDesEncriptado);
    document.getElementById("textoResultadoBox").value = textoEncriptado;
    Swal.fire({
      position: "center",
      width: "15em",
      toast: true,
      icon: "success",
      title: "Encriptado!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

//---------FUNCIÓN DESENCRIPTAR----------------//
function desencriptar(textoEncriptado) {
  const valores = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  let textoDesencriptado = textoEncriptado;
  for (const valor in valores) {
    const expresion = new RegExp(valor, "g");
    textoDesencriptado = textoDesencriptado.replace(expresion, valores[valor]);
  }
  return textoDesencriptado;
}

// Validar si el area de texto de salida está vacío

function desencriptarTexto() {
  if (
    document.getElementById("textoResultadoBox" && "textoBox").value.trim() ===
    ""
  ) {
    Swal.fire({
      position: "center",
      width: "15em",
      toast: true,
      icon: "warning",
      title: "Ingresa un texto cifrado antes de continuar",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  } else {
    var textoEncriptado = document.getElementById("textoBox").value;
    var textoDesencriptado = desencriptar(textoEncriptado);
    document.getElementById("textoResultadoBox").value = textoDesencriptado;
    Swal.fire({
      position: "center",
      width: "18em",
      toast: true,
      icon: "success",
      title: "Desencriptado!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

//-----------FUNCIÓN COPY PASTE---------------//
function copiarResultado() {
  let textoResultadoBox = document.getElementById("textoResultadoBox");
  let textoBox = document.getElementById("textoBox");

  if (textoResultadoBox && textoBox) {
    if (textoResultadoBox.value) {
      textoBox.value = textoResultadoBox.value;
      textoResultadoBox.value = "";
    } else {
      Swal.fire({
        position: "center",
        width: "15em",
        toast: true,
        icon: "warning",
        title: "No hay texto para copiar",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    alert("Texto no encontrado");
  }
  return;
}
/*
//---------INTERCAMBIAR IMG-------//
function hideCajaImg() {
  var cajaImg = document.querySelector(".caja-img");
  var caja-salida = document.querySelector(".caja-salida");
  cajaImg.style.display = "none";
  caja-salida.style.display = "block";
}
*/
function hideCajaImg() {
  document.getElementById("imgbox").style.visibility = "hidden";
  document.getElementById("textoResultadoBox").style.visibility = "visible";
}
function showCajaImg() {
  document.getElementById("imgbox").style.visibility = "visible";
  document.getElementById("textoResultadoBox").style.visibility = "hidden";
}


//---------INTERCAMBIAR IMG FIN-------//

//LIMPIAR CAMPOS//
//clear button animation
function anim() {
  micron
    .getEle(".caja-ingreso")
    .interaction("bounce")
    .duration(".45")
    .timing("ease-out");
}
function anim2() {
  micron
    .getEle(".img1")
    .interaction("squeeze")
    .duration(".45")
    .timing("ease-out");
}
//función
function limpiarCampos() {
  document.getElementById("textoResultadoBox").value = "";
  document.getElementById("textoBox").value = "";
}

function limpiar() {
  limpiarCampos();
  showCajaImg();
  anim();
}

function paso1() {
  
  encriptarTexto();
  hideCajaImg();
}
