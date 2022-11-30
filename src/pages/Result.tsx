import React, { useState, useRef, useEffect } from 'react';
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
  const [result, setResult] = useState<string | null>(null);
  const formRef: any = useRef(null);
  const recipientRef: any = useRef(null);
  const subjectRef: any = useRef(null);
  const messageRef: any = useRef(null);

  function getSelectedOptionsString() {
    return data.map((set: any) => (
      `${set.category}: ${localStorage.getItem(`${set.category}`)}`
    )).join(', ');
  }

  const selectedOptionsString = getSelectedOptionsString();

  function randomlyPickImage() {
    const randomNumber = Math.floor(Math.random() * 25);
    if (result) return result;
    switch (randomNumber) {
      case 0:
        setResult(image1);
        return image1;
      case 1:
        setResult(image2);
        return image2;
      case 2:
        setResult(image3);
        return image3;
      case 3:
        setResult(image4);
        return image4;
      case 4:
        setResult(image5);
        return image5;
      case 5:
        setResult(image6);
        return image6;
      case 6:
        setResult(image7);
        return image7;
      case 7:
        setResult(image8);
        return image8;
      case 8:
        setResult(image9);
        return image9;
      case 9:
        setResult(image10);
        return image10;
      case 10:
        setResult(image11);
        return image11;
      case 11:
        setResult(image12);
        return image12;
      case 12:
        setResult(image13);
        return image13;
      case 13:
        setResult(image14);
        return image14;
      case 14:
        setResult(image15);
        return image15;
      case 15:
        setResult(image16);
        return image16;
      case 16:
        setResult(image17);
        return image17;
      case 17:
        setResult(image18);
        return image18;
      case 18:
        setResult(image19);
        return image19;
      case 19:
        setResult(image20);
        return image20;
      case 20:
        setResult(image21);
        return image21;
      case 21:
        setResult(image22);
        return image22;
      case 22:
        setResult(image23);
        return image23;
      case 23:
        setResult(image24);
        return image24;
      case 24:
        setResult(image25);
        return image25;
      default:
        throw new Error(`Unexpected value of randomNumber: ${randomNumber}`);
    }
  }

  function sendEmail(event: any) {
    event.preventDefault();

    if (!formRef.current) throw new Error(`formRef is null, ${formRef.current}`);

    emailjs.sendForm('service_blq9kug', 'template_nuhg5a7', formRef.current, 'zVBCCWv3DgxQc3Yfq')
      .then(() => {
      }, (error) => {
        throw new Error(error.text);
      });

    recipientRef.current.value = '';
    subjectRef.current.value = '';
    messageRef.current.value = '';

    setModalHidden(true);
  }

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      setModalHidden(false);
    }
  }

  const resultString = `https://raw.githubusercontent.com/gnjmonroe/praud-amplifier/main/src/images/test/${result ? result.substring(result.search(/\d+.jpg/), result.length) : result}`;

  useEffect(() => {
    setResult('');
  }, []);

  return (
    <div className={modalHidden === true ? classes.resultPage : classes.withoutPadding}>
      {/* main section */}
      <CategoryPageHeader prevSlug="confirm" />
      <div className={classes.contents}>
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
      {/* email modal */}
      <div className={modalHidden ? `${classes.modal} ${classes.hide}` : classes.modal}>
        <form
          className={classes.form}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <label className={`${classes.label}`} htmlFor="recipient">
            To*
            <input className={`${classes.textInput}`} ref={recipientRef} type="text" id="recipient" name="recipient" />
          </label>
          <label className={`${classes.label}`} htmlFor="subject">
            Subject*
            <input className={`${classes.textInput}`} ref={subjectRef} type="text" id="subject" name="subject" defaultValue="Your Custom Amplifier!" />
          </label>
          <label className={`${classes.label}`} htmlFor="message">
            Message
            <input className={`${classes.textInput}`} ref={messageRef} type="text" id="message" name="message" defaultValue="Here is your custom Amplifier!" />
          </label>
          <input
            // style={{ display: 'none' }}
            type="text"
            id="customImage"
            name="customImage"
            value={resultString}
            readOnly
          />
          <button className={classes.modalButton} type="button" onClick={() => setModalHidden(true)}>Close</button>
          <input className={classes.modalButton} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
