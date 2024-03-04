class carruzelcomponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <section class=" slider_section position-relative">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 offset-md-2">
                  <div class="slider_detail-box">
                    <h1>
                      Paseo
                      <span>
                        para tu mascota
                      </span>
                    </h1>
                    <p>
                      Regala a tu mascota un paseo lleno de alegría. ¡Reserva ahora y dale a tu amigo peludo un día
                      inolvidable!
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Comprar
                      </a>
                      <a href="" class="btn-2">
                        Contacto
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="slider_img-box">
                    <img src="../../assets/images/paseo.jpg" class="rounded-circle" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 offset-md-2">
                  <div class="slider_detail-box">
                    <h1>
                      Professional
                      <span>
                        Care Your Pet
                      </span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Buy now
                      </a>
                      <a href="" class="btn-2">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="slider_img-box1">
                    <img src="../../assets/images/paseo.jpg" class="rounded-circle" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 offset-md-2">
                  <div class="slider_detail-box">
                    <h1>
                      Professional
                      <span>
                        Care Your Pet
                      </span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Buy now
                      </a>
                      <a href="" class="btn-2">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="slider_img-box2">
                    <img src="../../assets/images/paseo.jpg" class="rounded-circle" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4 offset-md-2">
                  <div class="slider_detail-box">
                    <h1>
                      Professional
                      <span>
                        Care Your Pet
                      </span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1">
                        Buy now
                      </a>
                      <a href="" class="btn-2">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="slider_img-box3">
                    <img src="../../assets/images/paseo.jpg" class="rounded-circle" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

    </section>
    `;
        this.style = `
        <style>
        .slider_section {
            background-image: url(../../assets/images/hero.jpg);
            padding: 6% 0;
            background-size: cover;
            background-repeat: no-repeat;
          }
          
          .slider_section .row {
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
          }
          
          .slider_detail-box h1 {
            color: #ffffff;
            font-size: 52px;
          }
          
          .slider_detail-box h1 span {
            display: inline-block;
            color: #434242;
            font-weight: bold;
            
          }
          
          .slider_detail-box p {
            color: #f6f8f7;
            margin-top: 45px;
            margin-bottom: 40px;
            
          }
          
          .slider_detail-box .btn-box .btn-1 {
            display: inline-block;
            padding: 10px 45px;
            background-color: #023b48;
            border: 1px solid #023b48;
            color: #ffffff;
            margin-right: 10px;
          }
          
          .slider_detail-box .btn-box .btn-1:hover {
            background-color: transparent;
            color: #023b48;
          }
          
          .slider_detail-box .btn-box .btn-2 {
            display: inline-block;
            padding: 10px 45px;
            background-color: #ffffff;
            border: 1px solid #ffffff;
            color: #023b48;
          }
          
          .slider_detail-box .btn-box .btn-2:hover {
            background-color: transparent;
            color: #ffffff;
          }
          
          .slider_img-box {
            margin-right: 5%;
          }
          
          .slider_img-box img {
            width: 100%;
            
          
          }
          
          .slider_img-box1 img {
            width: 100%;
          }
          
          .slider_img-box2 img {
            width: 100%;
          }
          
          .slider_img-box3 img {
            width: 100%;
          }
          
          
          
          .carousel-indicators {
            bottom: -15%;
          }
          
          .carousel-indicators li {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            opacity: 1;
          }
          
          .carousel-indicators .active {
            background-color: #010106;
          }
          
        </style>
    `;
    }
}

window.customElements.define("carruzel-component",carruzelcomponent)