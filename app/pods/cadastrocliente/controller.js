import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    ajax: service(),
    

    email: "",




    actions: {

        save() {

            let email = this.get('email');

            console.log(email);

            let options = {
                method: 'POST',
                data: JSON.stringify({
                    email:email
                    

                })
            };

            this.get('ajax').request('/clientes', options)
            .then(resultado =>{
                return console.log('resultado -> ', resultado);

            })
            .catch(err =>{
                console.error(err);
            })

        }


    }
});
