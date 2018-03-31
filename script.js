function komp() {
    var random = Math.random() * 10
    if (random < 3.67) {
        return 'Gajah'
    }
    else if (random < 6.67) {
        return 'Manusia'
    }
    else {
        return'Semut'
    }
}

function hasil(player,komp) {
    if (player == komp) {
        return 'Kamu Seri'
    }
    else if (player == 'Gajah') {
        return (komp == 'Semut') ? 'Kamu Kalah' : 'Kamu Menang!'
    }
    else if (player == 'Manusia') {
        return (komp == 'Gajah') ? 'Kamu Kalah' : 'Kamu Menang!'
    }
    else if (player == 'Semut') {
        return (komp == 'Manusia') ? 'Kamu Kalah' : 'Kamu Menang!'
    }
}

function gajah() {
    var player = 'Gajah'
    var bot = komp()
    document.querySelector('#tangan').src = 'gambar/jempol.png'
    var result = hasil(player, bot)
    if(bot=='Gajah'){
        document.querySelector('#tangan-komp').src  = 'gambar/jempol-komp.png'
    }
    else if(bot=='Manusia'){
        document.querySelector('#tangan-komp').src  = 'gambar/telunjuk-komp.png'
    }
    else{
        document.querySelector('#tangan-komp').src = 'gambar/jari-manis-komp.png'
    }
    var keputusan = document.querySelector('#result')
    keputusan.innerHTML = result 
}

function manusia() {
    var player = 'Manusia'
    var bot = komp()
    document.querySelector('#tangan').src = 'gambar/telunjuk.png'
    var result = hasil(player, bot)
    if (bot == 'Gajah') {
        document.querySelector('#tangan-komp').src = 'gambar/jempol-komp.png'
    }
    else if (bot == 'Manusia') {
        document.querySelector('#tangan-komp').src = 'gambar/telunjuk-komp.png'
    }
    else {
        document.querySelector('#tangan-komp').src = 'gambar/jari-manis-komp.png'
    }
    var keputusan = document.querySelector('#result')
    keputusan.innerHTML = result
}

function semut() {
    var player = 'Semut'
    var bot = komp()
    document.querySelector('#tangan').src = 'gambar/jari-manis.png'
    var result = hasil(player, bot)
    if (bot == 'Gajah') {
        document.querySelector('#tangan-komp').src = 'gambar/jempol-komp.png'
    }
    else if (bot == 'Manusia') {
        document.querySelector('#tangan-komp').src = 'gambar/telunjuk-komp.png'
    }
    else {
        document.querySelector('#tangan-komp').src = 'gambar/jari-manis-komp.png'
    }
    var keputusan = document.querySelector('#result')
    keputusan.innerHTML = result
}



