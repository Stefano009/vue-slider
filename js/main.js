// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        landscapes: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ]
    },
    methods: {
        nextLandscape() {
            this.counter += 1;
            if (this.counter == this.landscapes.length) {
                this.counter = 0;
            }

        },
        prevLandscape() {
            this.counter -= 1;
            if (this.counter < 0) {
                this.counter = (this.landscapes.length - 1);
            }
        }
    }
});