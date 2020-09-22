import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(arreglo: any[], texto: string = '', propiedad: string = ''): any[] {

        console.log('arreglo', arreglo);
        console.log('texto', texto);

        if (texto === '') {

            return arreglo;
        }

        if (!arreglo) {

            return arreglo;
        }

        texto = texto.toLocaleLowerCase();

        /* Unlike toLowerCase, toLocaleLowerCase takes localization into account.
        In most cases, with most languages, they will produce similar output, however certain languages will behave differently. */

        // Aplicamos el método filter de js

        /* return arreglo.filter(
            (item) => {

                // Si incluye el texto
                return item.title.toLowerCase().includes(texto);
            }
        ); */

        return arreglo.filter(item => item[propiedad].toLowerCase().includes(texto));

    }

}
