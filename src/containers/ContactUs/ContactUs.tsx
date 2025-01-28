import Input from "@/components/Input/Input";
import classes from "./ContactUs.module.css";
import Dropdown from "@/components/Dropdown/Dropdown";
import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import contactUsMemoji from "../../assets/Images/contactUsEmoji.svg";
import Image from "next/image";
import { requestHandler } from "@/helpers/requestHandler";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { useToast } from "@/context/ToastContext";
import useError from "@/hooks/useError";

const ContactUs = () => {
  // States
  const [contactUsData, setContactUsData] = useState({
    fullName: "",
    emailAddress: "",
    phone: "",
    assistance: "",
  });

  const [assistance, setAssistance] = useState("");
  const [requestState, setRequestState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  // Context
  const { showToast } = useToast();

  // Hooks
  const { errorFlowFunction } = useError();

  // Effects
  useEffect(() => {
    if (assistance) {
      setContactUsData((prevState) => {
        return { ...prevState, assistance: assistance.toLowerCase() };
      });
    }
  }, [assistance]);

  // Requests
  const submitContactForm = () => {
    requestHandler({
      method: "POST",
      url: "/api/contact-us",
      data: contactUsData,
      state: requestState,
      setState: setRequestState,
      requestCleanup: true,
      successFunction() {
        showToast("Your message has been submitted successfully", "success");
        setContactUsData({
          fullName: "",
          emailAddress: "",
          phone: "",
          assistance: "",
        });
        setAssistance("");
      },
      errorFunction(err) {
        errorFlowFunction(err);
      },
    });
  };

  return (
    <section className={classes.container} id="contact-us">
      <div className={classes.imageSection}>
        <Image src={contactUsMemoji} alt="COntact Us" />
        <h4>Need Help?</h4>
        <p>
          Feel free to fill on our data capture form and a member of our team
          will get back to you within the hour
        </p>
      </div>

      <form>
        <Input
          label="Full name"
          isRequired
          name="fullName"
          onChange={(e) => inputChangeHandler(e, setContactUsData)}
          value={contactUsData?.fullName}
        />
        <Input
          label="Email Address"
          isRequired
          type="email"
          name="emailAddress"
          onChange={(e) => inputChangeHandler(e, setContactUsData)}
          value={contactUsData?.emailAddress}
        />
        <Input
          label="Phone"
          isRequired
          type="phone"
          name="phone"
          onChange={(e) => inputChangeHandler(e, setContactUsData)}
          value={contactUsData?.phone}
        />

        <Dropdown
          label="Do you require assistance with LASAA Permit for the purpose of advertising (Highly recommended for trouble-free life)"
          title="Select"
          options={["Yes", "No"]}
          isRequired
          selected={assistance}
          setSelected={setAssistance}
        />

        <Button
          disabled={
            !contactUsData?.fullName ||
            !contactUsData?.emailAddress ||
            !contactUsData?.phone ||
            !contactUsData?.assistance
          }
          onClick={(e) => {
            e.preventDefault();
            submitContactForm();
          }}
          loading={requestState?.isLoading}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default ContactUs;
