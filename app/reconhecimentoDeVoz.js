
var   elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    //console.log(e.results[0][0].transcript)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div> Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())