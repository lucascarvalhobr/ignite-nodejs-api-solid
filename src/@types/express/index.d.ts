//feito para fazer override em libraries

//criando nova propriedade dentro de Express.
declare namespace Express{
    export interface Request{
        user:{
            id: string;
        }
    }
}