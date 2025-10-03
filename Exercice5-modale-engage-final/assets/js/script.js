/* Main script */

/* Autofocus in modale form */
var myModal = document.getElementById('modalEngage')
var myInput = document.getElementById('nom')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

