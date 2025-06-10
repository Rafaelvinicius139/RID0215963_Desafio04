import "./rodape.css"

import Facebook from '../../assets/face.png'
import Instagran from '../../assets/insta.png'
import Group from '../../assets/Group.png'
import Linkedin from '../../assets/Linkedin.png'



function rodape(){

    return(<>
    
    <div id="conteiner_rodape">


        <img src={Facebook} alt="" class="img" />
         <img src={Instagran} alt="" class="img" />
          <img src={Group} alt="" class="img" />
           <img src={Linkedin} alt="" class="img" />
        <p>Copyright ©2030 All rights reserved</p>


    </div>
    
    </>)
}

export default rodape