import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from "react-router-dom";

function NewMeetUpPage() {

  const navigate = useNavigate();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-d5323-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => {
      navigate("/", {replace: true})
    });
  }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
    </section>
  );
}

export default NewMeetUpPage;
