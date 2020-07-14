import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';
import p5 from '../assets/images/logo_desktop.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
	    <img src={p5} alt="" width="300" height="357" class="center" />
        <h1 className="mb-1">{config.heading}</h1>
		<h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            Quem somos
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="callout" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Quem Somos
            </h2>
            <p className="lead mb-5">
              A empresa Marco Batista Service (MBS) foi criada em 2014 com o
			  objetivo de realizar o sonho de muitas pessoas transformando seus
			  projetos pessoais ou empresariais em realidade!
			  < br/>
			  Contamos com muita experiência e capacidade de execução bastante
			  acelerada para a sua obra, independente do tamanho ou localidade.
            </p>
            <Scroll type="id" element="services" offset={100}>
              <a className="btn btn-dark btn-xl" href="#services">
                Serviços
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">O que oferecemos</h3>
          <h2 className="mb-5">Serviços</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="far fa-file-alt"></i>
            </span>
            <h4>
              <strong>Orçamento</strong>
            </h4>
            <p className="text-faded mb-0">Fazemos seu orçamento sem compromisso.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="fas fa-hammer"></i>
            </span>
            <h4>
              <strong>Multi Obras</strong>
            </h4>
            <p className="text-faded mb-0">
              Estamos prontos para qualquer tipo de obra, incluindo parceiros de pintura e elétrica.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="fas fa-hard-hat"></i>
            </span>
            <h4>
              <strong>Engenheiro</strong>
            </h4>
            <p className="text-faded mb-0">
              Indicamos engenheiro capacitado para análises e documentações.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="far fa-thumbs-up"></i>
            </span>
            <h4>
              <strong>Garantia</strong>
            </h4>
            <p className="text-faded mb-0">Garantimos o serviço bem executado e no prazo combinado!<i className="fas fa-heart"></i></p>
          </div>
        </div>
      </div>
    </section>
	
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Novidades</h3>
          <h2 className="mb-5">Projetos recentes</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Guarulhos</h2>
                  <p className="mb-0">
                    Pintura e acabamento em escola.
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Atibaia</h2>
                  <p className="mb-0">
                    Pintura, piso e acabamento nesta grande construção!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Diadema</h2>
                  <p className="mb-0">
                    Parece simples, mas as escadas exigem muita atenção e cuidado!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Diadema</h2>
                  <p className="mb-0">
                    Olha o tamanho desta laje!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <section id="contact" className="map">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      ></iframe>
      <br />
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>
    </section> */}

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
