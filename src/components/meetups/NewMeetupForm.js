import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {

    const tiltleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault(); 

        const enteredTitle = tiltleInputRef.current.value; 
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData);
}

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="meetupTitle">Meetup Title</label>
                  <input type="text" id="meetupTitle" required ref={tiltleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="meetupAddress">Meetup Address</label>
          <input type="text" id="meetupAddress" required ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="meetupDescription">Meetup Description</label>
          <textarea id="meetupDescription" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
