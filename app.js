import router from './router/router.js';
const root = document.getElementById('root');

const routes = router();

document.addEventListener('onstatechange', e => {
    root.innerHTML = '';
    const path = e.detail.getPath;
    const page = routes.getPage(path);
    history.pushState({}, '', path);
    root.appendChild(page);
});

window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    root.innerHTML = '';
    root.appendChild(routes.getPage(path));
})

const page = routes.getPage('/');
history.pushState({}, '', '/');
root.appendChild(page);