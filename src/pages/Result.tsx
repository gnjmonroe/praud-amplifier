import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import image1 from '../images/test/1.jpg';
import image2 from '../images/test/2.jpg';
import image3 from '../images/test/3.jpg';
import image4 from '../images/test/4.jpg';
import image5 from '../images/test/5.jpg';
import image6 from '../images/test/6.jpg';
import image7 from '../images/test/7.jpg';
import image8 from '../images/test/8.jpg';
import image9 from '../images/test/9.jpg';
import image10 from '../images/test/10.jpg';
import image11 from '../images/test/11.jpg';
import image12 from '../images/test/12.jpg';
import image13 from '../images/test/13.jpg';
import image14 from '../images/test/14.jpg';
import image15 from '../images/test/15.jpg';
import image16 from '../images/test/16.jpg';
import image17 from '../images/test/17.jpg';
import image18 from '../images/test/18.jpg';
import image19 from '../images/test/19.jpg';
import image20 from '../images/test/20.jpg';
import image21 from '../images/test/21.jpg';
import image22 from '../images/test/22.jpg';
import image23 from '../images/test/23.jpg';
import image24 from '../images/test/24.jpg';
import image25 from '../images/test/25.jpg';
import CategoryPageHeader from '../components/CategoryPageHeader';
import LinkButton from '../components/LinkButton';
import classes from '../scss/result.module.scss';

export default function Result(props: {
  data: any,
}) {
  const { data } = props;
  const [modalHidden, setModalHidden] = useState(true);
  const formRef: any = useRef(null);

  function getSelectedOptionsString() {
    return data.map((set: any) => (
      `${set.category}: ${localStorage.getItem(`${set.category}`)}`
    )).join(', ');
  }

  const selectedOptionsString = getSelectedOptionsString();

  function randomlyPickImage() {
    const randomNumber = Math.floor(Math.random() * 25);
    switch (randomNumber) {
      case 0:
        return image1;
      case 1:
        return image2;
      case 2:
        return image3;
      case 3:
        return image4;
      case 4:
        return image5;
      case 5:
        return image6;
      case 6:
        return image7;
      case 7:
        return image8;
      case 8:
        return image9;
      case 9:
        return image10;
      case 10:
        return image11;
      case 11:
        return image12;
      case 12:
        return image13;
      case 13:
        return image14;
      case 14:
        return image15;
      case 15:
        return image16;
      case 16:
        return image17;
      case 17:
        return image18;
      case 18:
        return image19;
      case 19:
        return image20;
      case 20:
        return image21;
      case 21:
        return image22;
      case 22:
        return image23;
      case 23:
        return image24;
      case 24:
        return image25;
      default:
        throw new Error(`Unexpected value of randomNumber: ${randomNumber}`);
    }
  }

  function sendEmail(event: any) {
    event.preventDefault();

    if (!formRef.current) throw new Error(`formRef is null, ${formRef.current}`);

    emailjs.sendForm('service_blq9kug', 'template_nuhg5a7', formRef.current, 'zVBCCWv3DgxQc3Yfq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        throw new Error(error.text);
      });

    setModalHidden(true);
  }

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      // sendEmail(event);
      setModalHidden(false);
    }
  }

  return (
    <div className={classes.resultPage}>
      <CategoryPageHeader prevSlug="confirm" />
      <div className={classes.contents}>
        <h2 className={classes.title}>Your Amplifier</h2>
        <img className={classes.image} src={randomlyPickImage()} alt="Your custom Amplifier" />
        <p>{selectedOptionsString}</p>
      </div>
      <div className={classes.linkButtonContainer}>
        <div
          className={classes.shareButton}
          role="button"
          tabIndex={0}
          onClick={() => setModalHidden(false)}
          onKeyDown={handleKeyDown}
        >
          Share
        </div>
        <LinkButton text="Back to Home" target="/" greenLight />
      </div>
      <div className={modalHidden ? `${classes.modal} ${classes.hide}` : classes.modal}>
        <form
          className={classes.form}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <label htmlFor="recipient">
            To
            <input type="text" id="recipient" name="recipient" />
          </label>
          <label htmlFor="message">
            Message
            <input type="text" id="message" name="message" />
          </label>
          <button type="button" onClick={() => setModalHidden(true)}>Close</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
