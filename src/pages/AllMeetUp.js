import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-app-d5323-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  },[]);

  

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  };
   
    return (
      <section>
            <h1>All MeetUp</h1>
            <MeetupList meetups={loadedMeetup}/>
      </section>
    );
}

export default AllMeetUpPage;