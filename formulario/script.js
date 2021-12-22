var civil1 = document.getElementById('solteiro');
var civil2 = document.getElementById('casado');
var civil3 = document.getElementById('separado');
var civil4 = document.getElementById('divorciado');
var civil5 = document.getElementById('viuvo');
var civil6 = document.getElementById('uniao');

function marcaDesmarca(id) {
  if (id == "solteiro") {
    document.getElementById('casado').checked = false;
    document.getElementById('separado').checked = false;
    document.getElementById('divorciado').checked = false;
    document.getElementById('viuvo').checked = false;
    document.getElementById('uniao').checked = false;
    
  } else if (id == "casado") {
    document.getElementById('solteiro').checked = false;
    document.getElementById('separado').checked = false;
    document.getElementById('divorciado').checked = false;
    document.getElementById('viuvo').checked = false;
    document.getElementById('uniao').checked = false;
  }else if (id == "separado") {
    document.getElementById('divorciado').checked = false;
    document.getElementById('viuvo').checked = false;
    document.getElementById('uniao').checked = false;
    document.getElementById('casado').checked = false;
    document.getElementById('solteiro').checked = false;
  }else if (id == "divorciado") {
     document.getElementById('viuvo').checked = false;
    document.getElementById('uniao').checked = false;
    document.getElementById('casado').checked = false;
    document.getElementById('solteiro').checked = false;
    document.getElementById('separado').checked = false;
  }else if (id == "viuvo") {
    document.getElementById('uniao').checked = false;
    document.getElementById('casado').checked = false;
    document.getElementById('solteiro').checked = false;
    document.getElementById('separado').checked = false;
    document.getElementById('divorciado').checked = false;
  }else if (id == "uniao") {
    document.getElementById('casado').checked = false;
    document.getElementById('solteiro').checked = false;
    document.getElementById('separado').checked = false;
    document.getElementById('divorciado').checked = false;
    document.getElementById('viuvo').checked = false;
  } 
  else if (id == "separado") {
    document.getElementById('divorciado').checked = false;
    document.getElementById('viuvo').checked = false;
    document.getElementById('uniao').checked = false;
    document.getElementById('casado').checked = false;
    document.getElementById('solteiro').checked = false;
  }
}

var comung = document.getElementById('membro1');
var naocomung = document.getElementById('membro2');
var naomembro = document.getElementById('membro3');

function marcaDesmarca(id) {
  if (id == "membro1") {
    document.getElementById('membro2').checked = false;
    document.getElementById('membro3').checked = false;
    }else if (id == "membro2") {
    document.getElementById('membro3').checked = false;
    document.getElementById('membro1').checked = false;
    }else if (id == "membro3") {
    document.getElementById('membro1').checked = false;
    document.getElementById('membro2').checked = false;
    }
}

var oficial = document.getElementById('ofici');
var diacono = document.getElementById('diaco');
var dispon = document.getElementById('diacodispon');
var presbitero = document.getElementById('presbi');
var disponibilidade = document.getElementById('dispon');

function marcaDesmarca(id) {
  if (id == "ofici") {
    document.getElementById('diaco').checked = false;
    document.getElementById('diacodispon').checked = false;
    document.getElementById('presbi').checked = false;
    document.getElementById('dispon').checked = false;
    
  } else if (id == "diaco") {
    document.getElementById('diacodispon').checked = false;
    document.getElementById('presbi').checked = false;
    document.getElementById('dispon').checked = false;
    document.getElementById('ofici').checked = false;
    
  }else if (id == "diacodispon") {
    document.getElementById('presbi').checked = false;
    document.getElementById('dispon').checked = false;
    document.getElementById('ofici').checked = false;
    document.getElementById('diaco').checked = false;
    
  }else if (id == "presbi") {
     document.getElementById('dispon').checked = false;
    document.getElementById('ofici').checked = false;
    document.getElementById('diaco').checked = false;
    document.getElementById('diacodispon').checked = false;
    
  }else if (id == "dispon") {
    document.getElementById('ofici').checked = false;
    document.getElementById('diaco').checked = false;
    document.getElementById('diacodispon').checked = false;
    document.getElementById('presbi').checked = false;
    
  }
}