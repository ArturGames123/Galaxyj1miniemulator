let ram = 768;
let storage = 8.0;
let battery = 100;
let processorSpeed = 1.2;

let burgerClicks = 0;
let susClicks = 0;
let easterEggUnlocked = false;

function updateUI() {
  document.getElementById("ram").innerText = ram.toFixed(1) + " MB";
  document.getElementById("storage").innerText = storage.toFixed(1) + " GB";
  document.getElementById("processor").innerText = processorSpeed.toFixed(1) + " GHz";
  document.getElementById("battery").innerText = "Bateria: " + battery + "%";
}

// Função que diminui a memória RAM quando o jogador entra no jogo
function enterGame() {
  if (ram > 0) {
    ram -= 0.1;
    updateUI();
  }
}

// Função que diminui o armazenamento quando o jogador abre um aplicativo
function useApp() {
  if (storage > 0) {
    storage -= 0.1;
    updateUI();
    checkStorage();
  }
}

// Função que simula o uso da câmera
function useCamera() {
  document.getElementById("camera-status").innerText = "Tirando Foto...";
  setTimeout(() => {
    document.getElementById("camera-status").innerText = "Foto salva!";
  }, 2000); // A foto é salva após 2 segundos
}

// Função para carregar o celular
function chargePhone() {
  document.getElementById("battery").innerText = "Carregando...";
  setTimeout(() => {
    battery = 100;
    updateUI();
  }, 2000); // Carrega a bateria para 100% em 2 segundos
}

// Função para liberar espaço
function freeSpace() {
  storage += 1;
  ram += 50;
  updateUI();
}

// Adiciona cartão SD
function addSD() {
  let value = parseFloat(document.getElementById("sdInput").value);
  if (!isNaN(value)) {
    storage += value;
    updateUI();
  }
}

// Adiciona RAM Plus
function addRAM() {
  let value = parseFloat(document.getElementById("ramInput").value);
  if (!isNaN(value)) {
    ram += value;
    updateUI();
  }
}

// Reinicia o processador
function boostProcessor() {
  processorSpeed = 1.2;
  easterEggUnlocked = false;
  alert("Processador liberado! Todos os easter eggs foram removidos.");
  updateUI();
}

// Easter Egg: botão do hambúrguer
function handleBurgerClick() {
  burgerClicks++;
  if (burgerClicks >= 2 && !easterEggUnlocked) {
    easterEggUnlocked = true;
    alert("Easter egg desbloqueado: Calculadora aberta!");
    useApp();
    ram -= 100;
    storage -= 0.1;
    processorSpeed -= 0.1;
    updateUI();
  }
  setTimeout(() => { burgerClicks = 0; }, 2000);
}

// Easter Egg: clique no Android
function checkAndroidClick() {
  if (!easterEggUnlocked) {
    easterEggUnlocked = true;
    alert("Easter egg desbloqueado: Snake.io ativado!");
    useApp();
  }
}

// Easter Egg: botão 🤨
function handleSusClick() {
  susClicks++;
  if (susClicks >= 3 && !easterEggUnlocked) {
    easterEggUnlocked = true;
    alert("Easter egg desbloqueado: ??");
    useApp();
  }
  setTimeout(() => { susClicks = 0; }, 2000);
}

// Aviso de pouco armazenamento
function checkStorage() {
  if (storage <= 0.5) {
    document.getElementById("warning").style.display = "block";
  } else {
    document.getElementById("warning").style.display = "none";
  }
}

// Função que diminui a bateria com o tempo
setInterval(() => {
  if (battery > 0) {
    battery -= 1;
    updateUI();
  }
}, 10000); // 1% a cada 10 segundos

// Função que diminui a velocidade do processador com o tempo
setInterval(() => {
  if (processorSpeed > 0.1) {
    processorSpeed -= 0.1;
    updateUI();
  }
}, 15000); // 0.1 GHz a cada 15 segundos
