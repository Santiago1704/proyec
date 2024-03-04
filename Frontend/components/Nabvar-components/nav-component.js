class nav_component extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        /* this.cargarHTML("../components/Nabvar-components/nav-component.html");
        this.cargarCSS("../components/Nabvar-components/nav-component.css"); */
        this.innerHTML = `
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="">
                    <img src="../../assets/images/logonuevopeq.jpg" alt="">
                    <span>Walking legs</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#servicios">servicios </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#galeria">Galeria de imagenes </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#clientes"> Clinica</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contacto">Contactanos</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                        </form>
                    </div>

                    <div class="d-flex justify-content-center">
                        <a href="html/login.html">Inicio de sesion</a>
                    </div>
                </div>
            </nav>
        </div>
    `;
        this.style = `
        <style>
        .hero_area {
            height: 98vh;
            position: relative;
          }
          
          .hero_area::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 15px;
            background-color: #023b48;
          }
          
          .sub_page .hero_area {
            height: auto;
          }
          
          .hero_area.sub_pages {
            height: auto;
          }
          
          .header_section {
            background-color: #f6f8f7;
            padding-top: 15px;
          }
          
          .header_section .container-fluid {
            padding-right: 25px;
            padding-left: 25px;
          }
          
          .header_section .nav_container {
            margin: 0 auto;
          }
          
          .header_section .quote_btn-container a {
            color: #434242;
            text-transform: uppercase;
          }
          
          .custom_nav-container.navbar-expand-lg .navbar-nav .nav-link {
            padding: 10px 30px;
            color: #434242;
            text-align: center;
            text-transform: uppercase;
          }
          
          a,
          a:hover,
          a:focus {
            text-decoration: none;
          }
          
          a:hover,
          a:focus {
            color: initial;
          }
          
          .btn,
          .btn:focus {
            outline: none !important;
            -webkit-box-shadow: none;
                    box-shadow: none;
          }
          
          .navbar-brand,
          .navbar-brand:hover {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 24px;
            color: #fafcfd;
          }
          
          .custom_nav-container .nav_search-btn {
            background-image: url(../images/search-icon.png);
            background-size: 22px;
            background-repeat: no-repeat;
            background-position-y: 7px;
            width: 35px;
            height: 35px;
            padding: 0;
            border: none;
          }
          
          .navbar-brand {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
          }
          
          .navbar-brand img {
            width: 30px;
            margin-right: 5px;
          }
          
          .navbar-brand span {
            font-size: 20px;
            font-weight: 700;
            color: #191919;
            margin-top: 5px;
          }
          
          .custom_nav-container {
            z-index: 99999;
            padding: 5px 0;
          }
          
          .custom_nav-container .navbar-toggler {
            outline: none;
          }
          
          .custom_nav-container .navbar-toggler .navbar-toggler-icon {
            background-image: url(../images/menu.png);
            background-size: 55px;
          }
          
        </style>
    `;
    }

    /* cargarHTML(url) {
        fetch(url)
        .then(response => response.text())
        .then(html => {
            this.innerHTML = html;
            this.divCuadro = this.querySelector('#nav');
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
    } */
}

window.customElements.define("nav-component",nav_component)