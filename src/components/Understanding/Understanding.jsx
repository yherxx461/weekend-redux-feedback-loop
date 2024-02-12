import Header from '../Header/Header';

function Understanding() {
  return (
    <>
      {/* TODO: Created header tag "Feedback!" */}
      <Header />
      {/* TODO: progress bar with of current page (ex: 2 of 4 pages) */}

      {/* TODO: "How well are you understanding the content?" */}
      <h2>How well are you understanding the content?</h2>
      <p>Understanding?</p>
      <input type="number"></input>
      {/* TODO: <'Next Button'> */}
      <button type="submit" data-testid="next">
        Next
      </button>
    </>
  );
}

export default Understanding;
