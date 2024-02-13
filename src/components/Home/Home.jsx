import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Home() {
  return (
    <>
      <div>
        {/* NAVIGATION for pages */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feeling">Feeling</Link>
          </li>
          <li>
            <Link to="/understanding">Understanding</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/thankyou">Thank You</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
