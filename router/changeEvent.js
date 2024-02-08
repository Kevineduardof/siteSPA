export default function createCustomEvent(path){
    const getRouter = new CustomEvent('onstatechange', { detail: { getPath: path }});

    document.dispatchEvent(getRouter);
}
