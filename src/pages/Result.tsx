import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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
import { ReactComponent as EmailIcon } from '../assets/email.svg';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import classes from '../scss/pages/result.module.scss';

export default function Result() {
  const [modalHidden, setModalHidden] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const formRef: any = useRef(null);
  const recipientRef: any = useRef(null);
  const subjectRef: any = useRef(null);
  const messageRef: any = useRef(null);

  const defaultRecipientString = 'example@naver.com';
  const defaultSubjectString = 'Your Custom Amplifier!';
  const defaultMessageString = 'Here is your custom Amplifier!';

  function randomlyPickImage() {
    const randomNumber = Math.floor(Math.random() * 25);
    if (result) {
      switch (result) {
        case '1': return image1;
        case '2': return image2;
        case '3': return image3;
        case '4': return image4;
        case '5': return image5;
        case '6': return image6;
        case '7': return image7;
        case '8': return image8;
        case '9': return image9;
        case '10': return image10;
        case '11': return image11;
        case '12': return image12;
        case '13': return image13;
        case '14': return image14;
        case '15': return image15;
        case '16': return image16;
        case '17': return image17;
        case '18': return image18;
        case '19': return image19;
        case '20': return image20;
        default: throw new Error(`Unexpected value of result: ${result}`);
      }
    }
    switch (randomNumber) {
      case 0:
        setResult('1');
        return image1;
      case 1:
        setResult('2');
        return image2;
      case 2:
        setResult('3');
        return image3;
      case 3:
        setResult('4');
        return image4;
      case 4:
        setResult('5');
        return image5;
      case 5:
        setResult('6');
        return image6;
      case 6:
        setResult('7');
        return image7;
      case 7:
        setResult('8');
        return image8;
      case 8:
        setResult('9');
        return image9;
      case 9:
        setResult('10');
        return image10;
      case 10:
        setResult('11');
        return image11;
      case 11:
        setResult('12');
        return image12;
      case 12:
        setResult('13');
        return image13;
      case 13:
        setResult('14');
        return image14;
      case 14:
        setResult('15');
        return image15;
      case 15:
        setResult('16');
        return image16;
      case 16:
        setResult('17');
        return image17;
      case 17:
        setResult('18');
        return image18;
      case 18:
        setResult('19');
        return image19;
      case 19:
        setResult('20');
        return image20;
      default:
        throw new Error(`Unexpected value of randomNumber: ${randomNumber}`);
    }
  }

  // emailJS function
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

  function handleEmailButtonClick() {
    setModalHidden(false);
    recipientRef.current.value = defaultRecipientString;
    subjectRef.current.value = defaultSubjectString;
    messageRef.current.value = defaultMessageString;
  }

  const resultString = `https://raw.githubusercontent.com/gnjmonroe/praud-amplifier/main/src/images/${result}.jpg`;

  useEffect(() => {
    setResult('');
  }, []);

  return (
    <div className={modalHidden === true ? classes.resultPage : classes.withoutPadding}>
      {/* main section */}
      <Header prevSlug="confirm" />
      <div className={classes.contents}>
        <img className={classes.image} src={randomlyPickImage()} alt="Your custom Amplifier" />
      </div>
      <div className={classes.linkButtonContainer}>
        <div
          className={classes.shareButton}
          role="button"
          tabIndex={0}
          onClick={handleEmailButtonClick}
          onKeyDown={handleKeyDown}
        >
          <EmailIcon className={classes.emailIcon} />
        </div>
        <LinkButton text="Restart" target="/" />
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
            <input className={`${classes.textInput}`} ref={recipientRef} type="text" id="recipient" name="recipient" defaultValue={defaultRecipientString} onFocus={() => { recipientRef.current.value = ''; }} />
          </label>
          <label className={`${classes.label}`} htmlFor="subject">
            Subject*
            <input className={`${classes.textInput}`} ref={subjectRef} type="text" id="subject" name="subject" defaultValue={defaultSubjectString} onFocus={() => { subjectRef.current.value = ''; }} />
          </label>
          <label className={`${classes.label}`} htmlFor="message">
            Message
            <input className={`${classes.textInput}`} ref={messageRef} type="text" id="message" name="message" defaultValue={defaultMessageString} onFocus={() => { messageRef.current.value = ''; }} />
          </label>
          <input
            style={{ display: 'none' }}
            type="text"
            id="customImage"
            name="customImage"
            value={resultString}
            readOnly
          />
          <div className={classes.modalButtons}>
            <button className={`${classes.modalButton} ${classes.close}`} type="button" onClick={() => setModalHidden(true)}>Close</button>
            <input className={`${classes.modalButton} ${classes.submit}`} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
