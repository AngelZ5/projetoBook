import { Component } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Observable } from 'rxjs';
import { Livro } from '../../componentes/livro/livro';

@Component({
  selector: 'app-criar-livro',
  imports: [],
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css'
})


export class CriarLivroComponent {
  constructor (private livroService:LivroService){
  }

  criarLivro(livro:Livro){
    this.livroService.adicionarLivro(livro).subscribe(() => {
      
    })
  }
}
