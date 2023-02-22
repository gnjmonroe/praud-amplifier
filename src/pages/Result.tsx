import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ReactComponent as EmailIcon } from '../assets/email.svg';

import Header from '../components/Header';
import LinkButton from '../components/LinkButton';

import randomlyPickImage from '../utils/randomlyPickImage';

import classes from '../scss/pages/result.module.scss';

export default function Result() {
  const [modalHidden, setModalHidden] = useState(true);
  const [result, setResult] = useState<string | boolean | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const recipientRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  const defaultRecipientString = 'example@naver.com';
  const defaultSubjectString = 'Your Custom Amplifier!';
  const defaultMessageString = 'Here is your custom Amplifier!';

  /**
    * emailJS function
    * NOTE: emailJS service has been deactivated since end of exhibition
  */
  function sendEmail(event: React.FormEvent) {
    event.preventDefault();

    if (!formRef.current) throw new Error(`formRef is null, ${formRef.current}`);

    emailjs.sendForm('service_blq9kug', 'template_nuhg5a7', formRef.current, 'zVBCCWv3DgxQc3Yfq')
      .then(() => {
      }, (error) => {
        throw new Error(error.text);
      });

    if (recipientRef.current) recipientRef.current.value = '';
    if (subjectRef.current) subjectRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';

    setModalHidden(true);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      setModalHidden(false);
    }
  }

  function handleEmailButtonClick() {
    setModalHidden(false);

    if (recipientRef.current) {
      recipientRef.current.value = defaultRecipientString;
    }
    if (subjectRef.current) {
      subjectRef.current.value = defaultSubjectString;
    }
    if (messageRef.current) {
      messageRef.current.value = defaultMessageString;
    }
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
        <img
          className={classes.image}
          src={randomlyPickImage(result, setResult)}
          alt="Your custom Amplifier"
        />
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
          <label
            className={`${classes.label}`}
            htmlFor="recipient"
          >
            To*
            <input
              className={`${classes.textInput}`}
              ref={recipientRef}
              type="text"
              id="recipient"
              name="recipient"
              defaultValue={defaultRecipientString}
              onFocus={() => { if (recipientRef.current) recipientRef.current.value = ''; }}
            />
          </label>
          <label
            className={`${classes.label}`}
            htmlFor="subject"
          >
            Subject*
            <input
              className={`${classes.textInput}`}
              ref={subjectRef}
              type="text"
              id="subject"
              name="subject"
              defaultValue={defaultSubjectString}
              onFocus={() => { if (subjectRef.current) subjectRef.current.value = ''; }}
            />
          </label>
          <label className={`${classes.label}`} htmlFor="message">
            Message
            <input
              className={`${classes.textInput}`}
              ref={messageRef}
              type="text"
              id="message"
              name="message"
              defaultValue={defaultMessageString}
              onFocus={() => { if (messageRef.current) messageRef.current.value = ''; }}
            />
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
            <button
              className={`${classes.modalButton} ${classes.close}`}
              type="button"
              onClick={() => setModalHidden(true)}
            >
              Close
            </button>
            <input
              className={`${classes.modalButton} ${classes.submit}`}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
