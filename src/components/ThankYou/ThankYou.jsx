import { Button, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
// import './ThankYou.css';

function thankYou() {
  const history = useHistory();
  // TODO: Write a function that will navigate to the beginning of the survey
  // when clicked on the "Leave New Feedback" and reset/delete the previous survey data
  const handleNewFeedback = () => {
    alert('Your are about to leave a 2nd feedback.');
    history.push('/');
  };

  return (
    <main className="thankyou">
      {/* TODO: Created header tag "Feedback!" */}

      {/* <p> Thank You! </p> */}
      <h2>Thank You!</h2>
      <p>You've completed the survey! We appreciate your feedback!</p>
      {/* TODO: <button onClick of 'Leave New Feedback' /> */}
      <Button onClick={handleNewFeedback}>
        <Link to="/">Leave New Feedback</Link>
      </Button>
    </main>
  );
}

export default thankYou;
