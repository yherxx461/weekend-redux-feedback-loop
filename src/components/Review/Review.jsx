import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// import './Review.css';

function Review() {
  const feelingResponse = useSelector((state) => state.feelingResponse);
  const understandingResponse = useSelector(
    (state) => state.understandingResponse
  );
  const supportResponse = useSelector((state) => state.supportResponse);
  const commentsResponse = useSelector((state) => state.commentsResponse);

  // const [response, newResponse] = useState('');

  const dispatch = useDispatch();

  // TODO: handle function to submit reviews
  const handleSubmit = (event) => {
    // event.preventDefault();
    // axios call to add the responses to the database
    axios
      // method: 'POST',
      // url: '/api/feedback',
      .post('/api/feedback', {
        feelingResponse,
        understandingResponse,
        supportResponse,
        commentsResponse,
      })
      .then((response) => {
        console.log('POSTING data success');
        dispatch({
          type: 'RESET_FEEDBACK',
        });
      })
      .catch((error) => {
        console.error('ERROR API POST CALL', error);
      });
  };

  return (
    <main className="review">
      {/* TODO: Create <p> tag "Review Your Feedback" */}
      <h2>Review Your Feedback</h2>
      {/* TODO: List out feelings, understanding, support, and comments values. */}
      <p>Feelings: {feelingResponse} </p>
      <p>Understanding: {understandingResponse}</p>
      <p>Support: {supportResponse}</p>
      <p>Comments: {commentsResponse}</p>
      {/* TODO: <Submit Button> */}
      <Button
        data-testid="next"
        type="submit"
        variant="outlined"
        size="small"
        onClick={handleSubmit}
      >
        <Link to="/thankyou">Submit</Link>
      </Button>
    </main>
  );
}
export default Review;
