import { useEffect, useRef, FormEvent, SetStateAction } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailModal.module.scss";
import { defaultStrings } from "./Result";

interface EmailModalProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<SetStateAction<boolean>>;
  resultString: string;
}
export const EmailModal = ({
  isHidden,
  setIsHidden,
  resultString,
}: EmailModalProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const recipientRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    if (
      !recipientRef.current ||
      !subjectRef.current ||
      !messageRef.current ||
      !formRef.current
    )
      return;
    event.preventDefault();
    emailjs.sendForm(
      "service_blq9kug",
      "template_nuhg5a7",
      formRef.current,
      "zVBCCWv3DgxQc3Yfq",
    );
    recipientRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
    setIsHidden(true);
  }

  const handleClick = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    if (!recipientRef.current || !subjectRef.current || !messageRef.current)
      return;
    recipientRef.current.value = defaultStrings.recipient;
    subjectRef.current.value = defaultStrings.subject;
    messageRef.current.value = defaultStrings.message;
  }, [isHidden]);

  return (
    <div className={isHidden ? styles.hide : styles.root}>
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
            defaultValue={defaultStrings.recipient}
            onFocus={(e) => (e.target.value = "")}
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
            defaultValue={defaultStrings.subject}
            onFocus={(e) => (e.target.value = "")}
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
            defaultValue={defaultStrings.message}
            onFocus={(e) => (e.target.value = "")}
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
        <div className={styles.buttons}>
          <button
            className={styles.close}
            type="button"
            onClick={() => handleClick()}
          >
            Close
          </button>
          <input className={styles.submit} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
