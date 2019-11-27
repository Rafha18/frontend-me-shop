import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    ajax: service(),
    email: "",

    actions: {

        save() {
            //Recupero as informações do atributo 'value' do input no template.hbs desta rota
            let email = this.get('email');
            let password = this.get('password');
            let name = this.get('name');
            let address = this.get('address');
            let city = this.get('city');
            let cep = this.get('cep');

            //Monto as opções da requisição, como por exemplo método, dados que serão enviados
            let options = {
                method: 'POST',
                data: {
                    email: email,
                    password: password,
                    name: name,
                    address: address,
                    cep: cep,
                    city: city
                }
            };

            //Pego a service ajax declarada no escopo do controller, em especifico na linha 7, e utilizo um método chamado request que seria em sua tradução literal: requisição;
            // O primeiro parâmetro desse método é qual URL que estou requisitando, e o segundo são as opções que defini na linha 30;
            this.get('ajax').request('/clientes', options)
                //Se der certo a requisição, então...
                .then(resultado => {
                    //lógico do que fazer se der certo o 'post'(cadastro) do cliente, neste exemplo está imprimindo no navegador
                    return console.log('Cliente registrado -> ', resultado);

                })
                //Se der algum erro imprime o erro no console do navegador
                .catch(err => {
                    console.error(err);
                });
        }
    }
});
