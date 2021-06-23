import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-manual-usuario',
  templateUrl: './manual-usuario.component.html',
  styleUrls: ['./manual-usuario.component.scss']
})
export class ManualUsuarioComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.user$;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.bienvenida();
    this.reproducir();
  }

  bienvenida(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("Bienvenido al manual de vive registro, aquí aprenderas cómo usar el sistéma completamente, en la parte derecha encontraras un boton para reproducir el texto de cada sección del manual"));
  }

  reproducir(){
    var botonReproducir1 = document.getElementById('reproducir1');
    var texto1 = document.getElementById('texto1').textContent;

    var botonReproducir2 = document.getElementById('reproducir2');
    var texto2 = document.getElementById('texto2').textContent;

    var botonReproducir3 = document.getElementById('reproducir3');
    var texto3 = document.getElementById('texto3').textContent;

    var botonReproducir4 = document.getElementById('reproducir4');
    var texto4 = document.getElementById('texto4').textContent;

    var botonReproducir5 = document.getElementById('reproducir5');
    var texto5 = document.getElementById('texto5').textContent;

    var botonReproducir6 = document.getElementById('reproducir6');
    var texto6 = document.getElementById('texto6').textContent;

    var botonReproducir7 = document.getElementById('reproducir7');
    var texto7 = document.getElementById('texto7').textContent;

    var botonReproducir8 = document.getElementById('reproducir8');
    var texto8 = document.getElementById('texto8').textContent;

    var botonReproducir9 = document.getElementById('reproducir9');
    var texto9 = document.getElementById('texto9').textContent;

    var botonReproducir10 = document.getElementById('reproducir10');
    var texto10 = document.getElementById('texto10').textContent;

    var botonReproducir11 = document.getElementById('reproducir11');
    var texto11 = document.getElementById('texto11').textContent;

    var botonReproducir12 = document.getElementById('reproducir12');
    var texto12 = document.getElementById('texto12').textContent;
    
    var botonReproducir13 = document.getElementById('reproducir13');
    var texto13 = document.getElementById('texto13').textContent;
    
    var botonReproducir14 = document.getElementById('reproducir14');
    var texto14 = document.getElementById('texto14').textContent;

    var botonReproducir15 = document.getElementById('reproducir15');
    var texto15 = document.getElementById('texto15').textContent;

    var botonReproducir16 = document.getElementById('reproducir16');
    var texto16 = document.getElementById('texto16').textContent;

    var botonReproducir17 = document.getElementById('reproducir17');
    var texto17 = document.getElementById('texto17').textContent;

    var botonReproducir18 = document.getElementById('reproducir18');
    var texto18 = document.getElementById('texto18').textContent;

    var botonReproducir19 = document.getElementById('reproducir19');
    var texto19 = document.getElementById('texto19').textContent;

    var botonReproducir20 = document.getElementById('reproducir20');
    var texto20 = document.getElementById('texto20').textContent;

    var botonReproducir21 = document.getElementById('reproducir21');
    var texto21 = document.getElementById('texto21').textContent;

    var botonReproducir22 = document.getElementById('reproducir22');
    var texto22 = document.getElementById('texto22').textContent;

    var botonReproducir23 = document.getElementById('reproducir23');
    var texto23 = document.getElementById('texto23').textContent;

    var botonReproducir24 = document.getElementById('reproducir24');
    var texto24 = document.getElementById('texto24').textContent;

    var botonReproducir25 = document.getElementById('reproducir25');
    var texto25 = document.getElementById('texto25').textContent;

    var botonReproducir26 = document.getElementById('reproducir26');
    var texto26 = document.getElementById('texto26').textContent;

    document.getElementById('reproducir1').addEventListener('click', ()=>{
        botonReproducir1.classList.add('sonando');
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto1));
    })

    document.getElementById('reproducir2').addEventListener('click', ()=>{
      botonReproducir2.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto2));
    })

    document.getElementById('reproducir3').addEventListener('click', ()=>{
      botonReproducir3.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto3));
    })

    document.getElementById('reproducir4').addEventListener('click', ()=>{
      botonReproducir4.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto4));
    })

    document.getElementById('reproducir5').addEventListener('click', ()=>{
      botonReproducir5.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto5));
    })

    document.getElementById('reproducir6').addEventListener('click', ()=>{
      botonReproducir6.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto6));
    })

    document.getElementById('reproducir7').addEventListener('click', ()=>{
      botonReproducir7.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto7));
    })

    document.getElementById('reproducir8').addEventListener('click', ()=>{
      botonReproducir8.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto8));
    })

    document.getElementById('reproducir9').addEventListener('click', ()=>{
      botonReproducir9.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto9));
    })

    document.getElementById('reproducir10').addEventListener('click', ()=>{
      botonReproducir10.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto10));
    })

    document.getElementById('reproducir11').addEventListener('click', ()=>{
      botonReproducir11.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto11));
    })

    document.getElementById('reproducir12').addEventListener('click', ()=>{
      botonReproducir12.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto12));
    })

    document.getElementById('reproducir13').addEventListener('click', ()=>{
      botonReproducir13.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto13));
    })

    document.getElementById('reproducir14').addEventListener('click', ()=>{
      botonReproducir14.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto14));
    })

    document.getElementById('reproducir15').addEventListener('click', ()=>{
      botonReproducir15.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto15));
    })

    document.getElementById('reproducir16').addEventListener('click', ()=>{
      botonReproducir16.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto16));
    })

    document.getElementById('reproducir17').addEventListener('click', ()=>{
      botonReproducir17.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto17));
    })

    document.getElementById('reproducir18').addEventListener('click', ()=>{
      botonReproducir18.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto18));
    })

    document.getElementById('reproducir19').addEventListener('click', ()=>{
      botonReproducir19.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto19));
    })

    document.getElementById('reproducir20').addEventListener('click', ()=>{
      botonReproducir20.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto20));
    })

    document.getElementById('reproducir21').addEventListener('click', ()=>{
      botonReproducir21.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto21));
    })

    document.getElementById('reproducir22').addEventListener('click', ()=>{
      botonReproducir22.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto22));
    })

    document.getElementById('reproducir23').addEventListener('click', ()=>{
      botonReproducir23.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto23));
    })

    document.getElementById('reproducir24').addEventListener('click', ()=>{
      botonReproducir24.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto24));
    })

    document.getElementById('reproducir25').addEventListener('click', ()=>{
      botonReproducir25.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto25));
    })

    document.getElementById('reproducir26').addEventListener('click', ()=>{
      botonReproducir26.classList.add('sonando');
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto26));
    })

  }

 

}
