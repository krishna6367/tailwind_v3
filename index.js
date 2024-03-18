const burger = documnet.querySelector('#burger');
const menu = deocument.querySelector('#menu');

burger.addEventListener('click', () => {
if (menu.classList.contains('hidden'))
    {
        menu.classList.remove('hidden');
    }

    else
    
    {
        menu.classList.add('hidden');
    }
}
)