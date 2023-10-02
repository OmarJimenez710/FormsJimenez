import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  successAlert(
    name : string,
    lastName : string,
    email : string,
    phone : number,
    age : number
  ) {
    Swal.fire({
      icon: 'success',
      title: 'Estudiante dado de alta',
      html:  'Datos del estudiante' +
      '<br><br> Nombre : <strong>' + name + ' ' +  lastName + '</strong>' +
      '<br> Edad :  <strong>' + age + '</strong>' +
      '<br> email : <strong>' + email + '</strong>' +
      '<br> phone : <strong>' + phone + '</strong>',
      footer: '<h2> Proceso Exitoso </h2>'
    })
  }

  errorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error, por favor verifique que datos ingresados sean correctos',
      footer: '<h2> Proceso Fallido </h2>'
    })
  }
}
