function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (modalTimer) {
        clearTimeout(modalTimer);
    }
    // window.removeEventListener('scroll', showModalByScroll);
}
const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 5000);

function modal(triggerSelector, modalSelector) {
    // MODAL *************************************************************

        const modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);
            



        //===================================================================



        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => openModal(modalSelector, modalTimer));

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal(modalSelector);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.style.display == 'block') {
                closeModal(modalSelector);
            }
        });

        window.addEventListener('scroll', showModalByScroll);

        //================================================================


        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal(modalSelector, modalTimer);
                window.removeEventListener('scroll', showModalByScroll);
                clearTimeout(modalTimer);
            }
        }


}

export default modal;
export {closeModal};
export {openModal};
export {modalTimer};