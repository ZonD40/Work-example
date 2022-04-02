function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS **********************************************************

        const tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);
        //===================================================================
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        //===================================================================
        function hideTabContent() {
            tabsContent.forEach(tab => {
                tab.classList.add('hide');
                tab.classList.remove('show', 'fade');
            });

            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            }); 
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }
}

export default tabs;