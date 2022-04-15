import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import HeaderCSS from './header.module.css';
import banner from '../../assets/welcome-zoo.jpg';
import micro from '../../assets/microphoneSvgrepo.svg';
import gear from '../../assets/settingsGearSvgrepo.svg';

function Header() {
  return (
    <Row className={HeaderCSS.background}>
      <Row className={HeaderCSS.iconContainer}>
        <Image src={micro} className={HeaderCSS.imgIcon} alt="Microphone" />
        <Image src={gear} className={HeaderCSS.imgIcon} alt="Setting gear" />
      </Row>
      <Row className={HeaderCSS.headerRow}>
        <Col className={HeaderCSS.banner} sm={6} md={6} lg={6}>
          <Card.Img src={banner} style={{ width: '100%' }} className="logo" alt="Panthera" />
        </Col>
        {/* <Col className={HeaderCSS.titleContent} sm={6} md={6} lg={6}>
          <h1>Zoo</h1>
          <h2>Animals</h2>
        </Col> */}
      </Row>
    </Row>
  );
}

export default Header;
