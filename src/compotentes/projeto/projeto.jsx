import './projeto.css'
import Portifolio from '../../assets/portfolio2.png'


function primeiro(){

    return(
        <>
       <div class="titulo">
        <h2>projetos</h2>
        </div>
        <div class='conteiner-projetos'>

            <div class ="foto">
             <  img class='imagens' src={Portifolio} alt="" />
            </div>

            <div class='mensagens-projetos'>
              <div class="conteiner-texto-projeto">
                 <h2>
                Projeto portifolio
              </h2><br></br>

              <p>
                Este projeto de portfólio foi criado para apresentar meus principais trabalhos, habilidades e aprendizados como desenvolvedor. Com uma estrutura bem organizada e visual agradável, proporciona uma navegação fluida e compatível com diferentes dispositivos, oferecendo uma experiência acessível e profissional.
               </p>


            </div>

              </div>
             
        </div>
        </>
    )

}

export default primeiro