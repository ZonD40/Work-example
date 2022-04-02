function calc() {
    // CALC ************************************************************* 

        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;

        //================================================================

        if (localStorage.getItem('sex')) {
            sex = localStorage.getItem('sex');
        } else {
            sex = 'female';
            localStorage.setItem('sex', 'female');
        }

        if (localStorage.getItem('ratio')) {
            ratio = localStorage.getItem('ratio');
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375);
        }

        calcTotal();

        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');

        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

        //================================================================

        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio) {
                result.textContent = 'Вы ввели не все данные';
                return;
            }

            if (sex === 'female') {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            } else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }

        function getStaticInformation(selector, activeClass) {
            const elements = document.querySelectorAll(selector);

            elements.forEach(e => {
                e.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                    } else {
                        sex = e.target.getAttribute('id');
                        localStorage.setItem('sex', e.target.getAttribute('id'));
                    }


                    elements.forEach(e => {
                        e.classList.remove(activeClass);
                    });

                    e.target.classList.add(activeClass);
                    calcTotal();
                });
            });
        }

        function getDynamicInformation(selector) {
            const input = document.querySelector(selector);


            input.addEventListener('input', () => {

                if (input.value.match(/\D/g)) {
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = 'none';
                }

                switch (input.getAttribute('id')) {
                    case 'height':
                        height = +input.value;
                        break;
                    case 'weight':
                        weight = +input.value;
                        break;
                    case 'age':
                        age = +input.value;
                        break;
                }
                calcTotal();
            });
        }

        function initLocalSettings(selector, activeClass) {
            const element = document.querySelectorAll(selector);

            element.forEach(e => {
                e.classList.remove(activeClass);
                if (e.getAttribute('id') === localStorage.getItem('sex')) {
                    e.classList.add(activeClass);
                }

                if (e.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    e.classList.add(activeClass);
                }
            });
        }

}

export default calc;