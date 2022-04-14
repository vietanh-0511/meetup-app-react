import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.mudule.css";

function MeetupList(props) {
    return <ul className={classes.list}>
            <li className={classes.li}>
                {props.meetups.map(meetup => 
                    <MeetupItem
                        key={meetup.id}
                        id={meetup.id}
                        image={meetup.image}
                        title={meetup.title} 
                        description={meetup.description}
                    />
                )}
            </li>
      </ul>;
}

export default MeetupList;
