import './style.scss'

const faqs = document.querySelectorAll('.faq');
let button = document.getElementById('plus');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');






    });
});


function toggleImg() {
    var img = document.getElementById('plus');
    if (img.src.endsWith('icon-plus.svg')) {
        img.src = './public/assets/images/icon-minus.svg'; // Remplacez par le chemin de votre image "moins"
    } else {
        img.src = './public/assets/images/icon-plus.svg';
    }
}
