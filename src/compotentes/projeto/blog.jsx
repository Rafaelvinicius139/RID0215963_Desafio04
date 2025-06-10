
import './projeto.css'
import Blog from '../../assets/blog.png'
function blog(){

    return(
        <>
      
        <div class='conteiner-projetos'>

            <div class ="foto">
             <  img class='imagens'src={Blog} alt="" />
            </div>

            <div class='mensagens-projetos'>
              <div class="conteiner-texto-projeto">
                 <h2>
                Blog 
                </h2><br></br>
                  <p>
                  Este projeto foi desenvolvido para 
                  praticar media queries e responsividade, 
                  garantindo que o site se adapte bem a todos os dispositivos, especialmente os móveis trabanhando com Html Css.
                  </p>



            </div>

              </div>
             
        </div>
        </>
    )

}

export default blog