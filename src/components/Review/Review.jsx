import { Button, Link } from '@mui/material';
import { useSelector } from 'react-redux';

function Review() {
  const feelingResponse = useSelector((store) => store.feelingResponse);
  const understandingResponse = useSelector(
    (store) => store.understandingResponse
  );
  const supportResponse = useSelector((store) => store.supportResponse);
  const commentsResponse = useSelector((store) => store.commentsResponse);
  return (
    <>
      {/* TODO: Create <p> tag "Review Your Feedback" */}
      <h2>Review Your Feedback</h2>
      {/* TODO: List out feelings, understanding, support, and comments values. */}
      <p>Feelings: {feelingResponse} </p>
      <p>Understanding: {understandingResponse}</p>
      <p>Support: {supportResponse}</p>
      <p>Comments: {commentsResponse}</p>
      {/* TODO: <Submit Button> */}
      <Link to="/thankyou">
        <Button
          variant="outlined"
          size="small"
          type="submit"
          data-testid="next"
        >
          Submit
        </Button>
      </Link>
    </>
  );
}

export default Review;
