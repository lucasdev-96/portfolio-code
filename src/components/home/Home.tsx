import './Home.css';
import lucasImg from '../../assets/img/lucas.jpeg';

function HomeComponent() {
  return (
    <section id="home" className="homeFather">
      <div>
        <div className="containerFather">
          <img src={lucasImg} alt="lucas" />
          <div>
            <h2>Olá, seja bem vindo!</h2>
            <p>Sou um desenvolvedor de software web full stack</p>
            <p>
              Sempre gostei muito de Tecnologia e a ideia de um dia conseguir criar algo que eu
              mesmo tenha feito ou em conjunto com um determinado grupo de pessoas, me fornece uma
              incrível sensação de felicidade. Tenho facilidade e gosto de aprender coisas novas.
            </p>
            <p style={{ fontSize: '15px' }}>
              Aqui você encontrará meus projetos, certificados, habilidades e mais sobre mim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
