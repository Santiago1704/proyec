class nav_component extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.cargarHTML("../Nabvar-components/nav-component.html");
        this.cargarCSS("../Nabvar-components/nav-component.css");
    }

    cargarHTML(url) {
        fetch(url)
        .then(response => response.text())
        .then(html => {
            this.innerHTML = html;
            this.divCuadro = this.querySelector('#cuadro');
            this.cargarLOGICA()
        })
        .catch(error => {
            console.error('Error al cargar el archivo:',error);
        });
    }

    cargarCSS(url) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    cargarLOGICA(){
        console.log("carga_nav")
    }
}

window.customElements.define("nav_component",nav_component)