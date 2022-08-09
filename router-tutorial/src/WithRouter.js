import React from "react";
import {
  useLocation,
  useParams,
  useSearchParams,
  useNavigate,
  // useMatch,
} from "react-router-dom";
const WithRouter = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // const match = useMatch();
  console.log(params);
  console.log(searchParams);
  // console.log(match);
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
      <h4>match은 변경됨 useParams</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        // value={params}
        row={7}
        readOnly={true}
      ></textarea>
      <h4>useSearchParams</h4>
      <textarea
        // value={JSON.stringify(searchParams, null, 2)}
        value={searchParams}
        row={7}
        readOnly={true}
      ></textarea>
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default WithRouter;
