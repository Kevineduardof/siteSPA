import home from '../modules/home.js';
import brigadeiro from '../modules/brigadeiro.js';
import cupcakes from '../modules/cupcakes.js';
import doces from '../modules/doces.js';

export default function router() {
    const routes = {
        '/': function(){return home()},
        '/brigadeiro': function(){return brigadeiro()},
        '/cupcakes': function(){return cupcakes()},
        '/doces': function(){return doces()},
        getPage: function(path) {
            return routes[path]();
        }
    };

    return routes;
}
