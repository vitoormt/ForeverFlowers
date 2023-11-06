import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../assets/foto1.png';
import foto2 from '../assets/foto2.png';
import foto3 from '../assets/foto3.avif';

function UncontrolledExample() {

  const urlImg1 = "https://cdn.discordapp.com/attachments/810935222819618857/1171102361436041216/cosmos-flor-1024x683_1.png?ex=655b7510&is=65490010&hm=86a1074f811061b2284a23b630e377e72ed28229cc755d44f62c94bc8d4ba345&"
  const urlImg2 = "https://cdn.discordapp.com/attachments/810935222819618857/1171102362136494171/tipos-de-flores-1-1024x576_1.png?ex=655b7511&is=65490011&hm=3ba713e87614b341bd58483763bb90a93a1990c01cb9719471ff7e6d3b8e0f3c&"
  const urlImg3 = "https://cdn.discordapp.com/attachments/810935222819618857/1171102362853716039/6-arranjo-de-flores-permanentes-1-scaled-e1653066015996_1.png?ex=655b7511&is=65490011&hm=b2735c0fb3b38bbb0c8ecb3dcffcccd1ba1f11fca0ddac8556d276118f43ba9c&"

  return (
    <Carousel>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg1}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={500} src={urlImg3}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample;