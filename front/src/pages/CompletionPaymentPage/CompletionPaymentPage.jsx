import { useLocation, useNavigate } from "react-router-dom"
import './style.scss';
import { useMemo } from "react";

const CompletionPaymentPage = () => {

  const navigate = useNavigate();


  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();

  return (
    <div className="completion">
      <div className="completion__container">
        {query.get("status") === "success" ? <h1>Thank you! We got your money!</h1> : <h1>Something went wrong! Try again sometime!</h1>}
        <button onClick={() => navigate('/')}>Back Home</button>
      </div>
    </div>
  )
}

export default CompletionPaymentPage