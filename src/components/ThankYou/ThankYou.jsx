function ThankYou() {
  const handleClickResetSurvey = (event) => {
    // TODO: Write a function that will navigate to the beginning of the survey
    // when clicked on the "Leave New Feedback" and reset/delete the previous survey data
    event.preventDefault();
    console.log('event', event);
    // make axio call - .then/refresh/.catch
  };

  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}

      {/* <p> Thank You! </p> */}
      <p>Thank You!</p>
      {/* TODO: <button onClick of 'Leave New Feedback' /> */}
      <button onClick={(event) => handleClickResetSurvey}>
        Leave New Feedback
      </button>
    </>
  );
}

export default ThankYou;
