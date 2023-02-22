import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';
import image12 from '../images/12.jpg';
import image13 from '../images/13.jpg';
import image14 from '../images/14.jpg';
import image15 from '../images/15.jpg';
import image16 from '../images/16.jpg';
import image17 from '../images/17.jpg';
import image18 from '../images/18.jpg';
import image19 from '../images/19.jpg';
import image20 from '../images/20.jpg';

export default function randomlyPickImage(
  resultExists: string | boolean | null,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  setResultExists: (arg: string) => void
) {
  const randomNumber = Math.floor(Math.random() * 20);
  if (resultExists) {
    switch (resultExists) {
      case '1':
        return image1;
      case '2':
        return image2;
      case '3':
        return image3;
      case '4':
        return image4;
      case '5':
        return image5;
      case '6':
        return image6;
      case '7':
        return image7;
      case '8':
        return image8;
      case '9':
        return image9;
      case '10':
        return image10;
      case '11':
        return image11;
      case '12':
        return image12;
      case '13':
        return image13;
      case '14':
        return image14;
      case '15':
        return image15;
      case '16':
        return image16;
      case '17':
        return image17;
      case '18':
        return image18;
      case '19':
        return image19;
      case '20':
        return image20;
      default:
        throw new Error(`Unexpected value of result: ${setResultExists}`);
    }
  }
  switch (randomNumber) {
    case 0:
      setResultExists('1');
      return image1;
    case 1:
      setResultExists('2');
      return image2;
    case 2:
      setResultExists('3');
      return image3;
    case 3:
      setResultExists('4');
      return image4;
    case 4:
      setResultExists('5');
      return image5;
    case 5:
      setResultExists('6');
      return image6;
    case 6:
      setResultExists('7');
      return image7;
    case 7:
      setResultExists('8');
      return image8;
    case 8:
      setResultExists('9');
      return image9;
    case 9:
      setResultExists('10');
      return image10;
    case 10:
      setResultExists('11');
      return image11;
    case 11:
      setResultExists('12');
      return image12;
    case 12:
      setResultExists('13');
      return image13;
    case 13:
      setResultExists('14');
      return image14;
    case 14:
      setResultExists('15');
      return image15;
    case 15:
      setResultExists('16');
      return image16;
    case 16:
      setResultExists('17');
      return image17;
    case 17:
      setResultExists('18');
      return image18;
    case 18:
      setResultExists('19');
      return image19;
    case 19:
      setResultExists('20');
      return image20;
    default:
      throw new Error(`Unexpected value of randomNumber: ${randomNumber}`);
  }
}
