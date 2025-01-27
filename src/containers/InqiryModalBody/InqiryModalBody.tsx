import Input from "@/components/Input/Input";
import classes from "./InqiryModalBody.module.css";
import Close from "@/assets/SvgIcons/Close";
import Button from "@/components/Button/Button";
import TextArea from "@/components/Textarea/TextArea";

const InqiryModalBody = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Make an inquiry</h4>
        <Close />
      </div>

      <form>
        <Input label="Full name" isRequired />
        <Input label="Email Address" type="email" isRequired />
        <Input label="Phone Number" type="phone" isRequired />
        <Input label="Brand Name" isRequired />
        <TextArea label="Tell us what you are trying to achieve" isRequired />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default InqiryModalBody;
