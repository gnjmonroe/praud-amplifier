import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import image10 from "../images/10.jpg";
import image11 from "../images/11.jpg";
import image12 from "../images/12.jpg";
import image13 from "../images/13.jpg";
import image14 from "../images/14.jpg";
import image15 from "../images/15.jpg";
import image16 from "../images/16.jpg";
import image17 from "../images/17.jpg";
import image18 from "../images/18.jpg";
import image19 from "../images/19.jpg";
import image20 from "../images/20.jpg";
import EmailIcon from "../assets/email.svg";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import styles from "./Result.module.scss";

const imageMap: Record<number, string> = {
  0: image1,
  1: image2,
  2: image3,
  3: image4,
  4: image5,
  5: image6,
  6: image7,
  7: image8,
  8: image9,
  9: image10,
  10: image11,
  11: image12,
  12: image13,
  13: image14,
  14: image15,
  15: image16,
  16: image17,
  17: image18,
  18: image19,
  19: image20,
};
const defaultRecipientString = "example@naver.com";
const defaultSubjectString = "Your Custom Amplifier!";
const defaultMessageString = "Here is your custom Amplifier!";

export default function Result() {
  const [modalHidden, setModalHidden] = useState(true);
  const formRef = useRef<HTMLFormElement | null>(null);
  const recipientRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  const result = localStorage.getItem("result");
  if (!result) throw Error(`result @ localStorage is null`);
  const resultString = `https://raw.githubusercontent.com/gnjmonroe/praud-amplifier/main/src/images/${result}.jpg`;

  // emailJS function
  function sendEmail(event: FormEvent<HTMLFormElement>) {
    if (!recipientRef.current || !subjectRef.current || !messageRef.current)
      return;
    event.preventDefault();

    if (!formRef.current) throw Error(`formRef is null, ${formRef.current}`);

    emailjs.sendForm(
      "service_blq9kug",
      "template_nuhg5a7",
      formRef.current,
      "zVBCCWv3DgxQc3Yfq",
    );

    recipientRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";

    setModalHidden(true);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      setModalHidden(false);
    }
  }

  function handleEmailButtonClick() {
    if (!recipientRef.current || !subjectRef.current || !messageRef.current)
      return;
    setModalHidden(false);
    recipientRef.current.value = defaultRecipientString;
    subjectRef.current.value = defaultSubjectString;
    messageRef.current.value = defaultMessageString;
  }

  return (
    <div
      className={modalHidden === true ? styles.root : styles.rootWithoutPadding}
    >
      {/* main section */}
      <Header prevSlug="confirm" />
      <div className={styles.contents}>
        <img
          className={styles.image}
          src={imageMap[Number(result)]}
          alt="Your custom Amplifier"
        />
      </div>
      <div className={styles.linkButtonContainer}>
        <div
          className={styles.shareButton}
          role="button"
          tabIndex={0}
          onClick={handleEmailButtonClick}
          onKeyDown={handleKeyDown}
        >
          <img className={styles.emailIcon} src={EmailIcon} />
        </div>
        <LinkButton text="Restart" target="/" />
      </div>
      {/* email modal */}
      <div
        className={
          modalHidden ? `${styles.modal} ${styles.hide}` : styles.modal
        }
      >
        <form
          className={styles.form}
          ref={formRef}
          onSubmit={(e) => sendEmail(e)}
        >
          <label className={`${styles.label}`} htmlFor="recipient">
            To*
            <input
              className={`${styles.textInput}`}
              ref={recipientRef}
              type="text"
              id="recipient"
              name="recipient"
              defaultValue={defaultRecipientString}
              onFocus={() => {
                if (!recipientRef.current) return;
                recipientRef.current.value = "";
              }}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="subject">
            Subject*
            <input
              className={`${styles.textInput}`}
              ref={subjectRef}
              type="text"
              id="subject"
              name="subject"
              defaultValue={defaultSubjectString}
              onFocus={() => {
                if (!subjectRef.current) return;
                subjectRef.current.value = "";
              }}
            />
          </label>
          <label className={`${styles.label}`} htmlFor="message">
            Message
            <input
              className={`${styles.textInput}`}
              ref={messageRef}
              type="text"
              id="message"
              name="message"
              defaultValue={defaultMessageString}
              onFocus={() => {
                if (!messageRef.current) return;
                messageRef.current.value = "";
              }}
            />
          </label>
          <input
            style={{ display: "none" }}
            type="text"
            id="customImage"
            name="customImage"
            value={resultString}
            readOnly
          />
          <div className={styles.modalButtons}>
            <button
              className={`${styles.modalButton} ${styles.close}`}
              type="button"
              onClick={() => setModalHidden(true)}
            >
              Close
            </button>
            <input
              className={`${styles.modalButton} ${styles.submit}`}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
