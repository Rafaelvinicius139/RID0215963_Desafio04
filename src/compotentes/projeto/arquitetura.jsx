
import './projeto.css'
import Arquitetura from '../../assets/arquitetura.png'
function arquitetura(){

    return(
        <>
      
        <div class='conteiner-projetos'>
           
            <div class ="foto">
             <  img class='imagens'src={Arquitetura} alt="" />
            </div>

            <div class='mensagens-projetos'>
              <div class="conteiner-texto-projeto">
                 <h2>
               Projeto Arquitetura
              </h2><br></br>
              <p>
               Este projeto de arquitetura foi desenvolvido com foco em inovação, funcionalidade e experiência do usuário. Inspirado nos valores da Escola DNC, ele une design moderno e estrutura eficiente para proporcionar um ambiente acolhedor, produtivo e acessível a todos. Cada detalhe foi planejado para refletir o compromisso com a educação de qualidade e a transformação digital.
              </p>
            
            </div>
                
              </div>
           
        </div>
        </>
    )

}

export default arquitetura