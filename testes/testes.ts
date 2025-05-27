import { from, of } from 'rxjs';

//let obs = of("Curitiba", 200,4.5, true);
//console.log(obs);

//criação de um observable from()
let arr = ["Ibicaré", "Joaçaba", "Treze Tílias", "Luzerna"]

from(arr).subscribe({
    next: valor => {
        let x = 'Cidade' + valor;
        console.log(x)
    },
    error: valor => console.log('Erro:' + valor),
    complete: () => console.log ('acabou')
});


//criação de um observable of()
of ("Curitiba", 200, 4.5, true). subscribe({
  next: valor => {
    let x = 'Valor:' + valor;
    console.log(x)
    },
    error: valor => console.log('Erro' + valor),
    complete: () => console.log ('cabou')
});

//Filtro: pipe(filter())

