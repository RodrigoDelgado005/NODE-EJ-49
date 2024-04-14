document.getElementById('b1').addEventListener('click', ApretarBoton)
document.getElementById('b2').addEventListener('click', ApretarBoton)
document.getElementById('b3').addEventListener('click', ApretarBoton)
document.addEventListener('click', BotonDocumento)

function ApretarBoton(e) {
    e.stopPropagation()
    let ref = e.target
    alert(ref.value)
}

function BotonDocumento(e) {
    alert('se ha presionado el fondo del documento')
}