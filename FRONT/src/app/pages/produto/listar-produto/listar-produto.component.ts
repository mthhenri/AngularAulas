import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Endereco } from 'src/app/models/endereco.models';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  constructor(private client : HttpClient) { }

  

  ngOnInit(): void {
    this.client.get<Endereco>("https://viacep.com.br/ws/83323123/json/")
      .subscribe({
        //Funcionou
        next : (enderecos) => {
          console.log(`${enderecos.localidade} - ${enderecos.logradouro}`)
        },
        //Falhou
        error : (erro) => {
          console.log(erro)
        }
      });
    console.log("O componente foi carregado")
  }

}
