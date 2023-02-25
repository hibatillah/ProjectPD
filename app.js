// *accordion
const head = document.querySelectorAll('#accordion-head');

head.forEach((item) => {
    const acc = item.parentElement.getAttribute('id');

    if (acc == 'accordion-open') {
        item.addEventListener('click', (el) => {
            const hidden = ('hidden');
            const body = item.nextElementSibling;
            const icon = item.querySelector('#accordion-icon')

            body.classList.toggle(hidden);
            icon.classList.toggle('rotate-90');
            console.log('open');
        });
    }
    else if (acc == 'accordion-collapse') {
        item.addEventListener('click', (el) => {
            const hidden = ('hidden');
            const body = item.nextElementSibling;
            const icon = item.querySelector('#accordion-icon')

            head.forEach((e) => {
                if (e == el.target){
                    body.classList.toggle(hidden);
                    icon.classList.toggle('rotate-90');
                    console.log('collapse');
                } else {
                    body.classList.add(hidden);
                    icon.classList.remove('rotate-90');
                    console.log('close');
                };
            });
        });
    };
});


const check = document.querySelector('#check');
document.addEventListener('click', (el) => {
    if (el.target.matches('#cek') || el.target.matches('#upload')){
        check.scrollIntoView({ behavior: 'smooth' });
    }
})

const submit = document.querySelector('#uploadButton');
const result = document.querySelector('#result');
result.classList.remove('hidden');
result.classList.add('mt-5');

// *copyright year
const yearCurrent = new Date().getFullYear();
const year = document.querySelector('#year');
year.innerText = yearCurrent;

// *scroll to top
const backTop = document.querySelector('#back');

backTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backTop.classList.remove('hidden');
        backTop.classList.add('fade-in');
    } else {
      backTop.classList.add('hidden');
    }
}

// *modal
const flowchart = document.querySelector('#flowchart');
const modalFlowchart = document.querySelector('#modal-flowchart');
const fadeBg = document.querySelector('#fade-bg');
const closeBtn = document.querySelector('#close-btn');

flowchart.addEventListener('dblclick', () => {
    modalFlowchart.classList.remove('hidden');
    fadeBg.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    modalFlowchart.classList.add('hidden');
    fadeBg.classList.add('hidden');
    closeBtn.classList.add('hidden');
});
