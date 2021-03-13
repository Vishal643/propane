import React from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/BreakingNews/action";
// import {NewsCard} from './NewsCard'
import { Link } from "react-router-dom";
import Temp from "./Temp";

const MarqueeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 170px;

  a {
    text-decoration: none;
  }
`;

const News = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector(
    (state) => state.BreakingNews,
    shallowEqual
  );

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h3>...Loading</h3>}
      {error && <div>something went wrong</div>}
      <MarqueeWrapper>
        {data?.map((item) => (
          <div>
            <div>
              <Link to={`/breakingnews/${item.id}`}> 
                <Temp {...item} key={item.id} /> 
              </Link>
            </div>
          </div>
        ))}
      </MarqueeWrapper>
    </>
  );
};

export { News };
