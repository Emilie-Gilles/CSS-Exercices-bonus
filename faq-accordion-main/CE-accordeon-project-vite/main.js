import './style.scss'

const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {

        if (faq.classList.contains('active')) {
            faq.classList.remove('active');
            faq.querySelector('.btn').src = './public/assets/images/icon-plus.svg';

        } else {
            faq.classList.add('active');
            faq.querySelector('.btn').src = './public/assets/images/icon-minus.svg';

        }






    });
});



