import { Link } from 'react-router-dom/cjs/react-router-dom';

function ThankYou() {
  const handleClickNavToSurvey = () => {
    // TODO: Write a function that will navigate to the beginning of the survey
    // when clicked on the "Leave New Feedback" and reset/delete the previous survey data
    alert('Clicked To Nav');
    history.pushState('/feeling');
    // make axio call - .then/refresh/.catch
  };

  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}

      {/* <p> Thank You! </p> */}
      <p>Thank You!</p>
      {/* TODO: <button onClick of 'Leave New Feedback' /> */}
      <Link to="/feeling">
        <button onClick={handleClickNavToSurvey}>Leave New Feedback</button>
      </Link>
    </>
  );
}

export default ThankYou;
