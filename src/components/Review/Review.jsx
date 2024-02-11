function Review() {
  return (
    <>
      {/* TODO: Create <p> tag "Review Your Feedback" */}
      <h3>Review Your Feedback</h3>
      {/* TODO: List out feelings, understanding, support, and comments values. */}
      <p>Feelings: {`feeling.value`} </p>
      <p>Understanding: {`understanding.value`}</p>
      <p>Support: {`support.value`}</p>
      <p>Comments: {`comment.value`}</p>
      {/* TODO: <Submit Button> */}
      <button type="submit" data-testid="next">
        Next
      </button>
    </>
  );
}

export default Review;
