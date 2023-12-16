import { useEffect } from "react";
import Job from "./Job";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../features/allJobs/alljobsSlice";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h5>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h5>
        <div className="jobs">
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
