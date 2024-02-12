import { Button } from '@mui/material';

function Review() {
  return (
    <>
      {/* TODO: Create <p> tag "Review Your Feedback" */}
      <h2>Review Your Feedback</h2>
      {/* TODO: List out feelings, understanding, support, and comments values. */}
      <p>Feelings: {`feeling.value`} </p>
      <p>Understanding: {`understanding.value`}</p>
      <p>Support: {`support.value`}</p>
      <p>Comments: {`comment.value`}</p>
      {/* TODO: <Submit Button> */}
      <Button variant="outlined" size="small" type="submit" data-testid="next">
        Submit
      </Button>
    </>
  );
}

export default Review;
