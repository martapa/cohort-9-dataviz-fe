import axios from 'axios';
import { COHORTS, SINGLE_COHORT } from './actions.type';

export const setCohortsData = (cohorts = {}) => ({
  type: COHORTS.SET_DATA,
  payload: cohorts
});

export const fetchCohortsThunk = () => dispatch => {
  // TODO: Add error handling
  return axios
    .get('/cohorts')
    .then(res => dispatch(setCohortsData(res.data.data)));
};

export const fetchActiveCohort = cohortID => dispatch => {
  //TODO: add error handling
  dispatch({ type: SINGLE_COHORT.GET_COHORT_PENDING });

  return axios
    .get('http://www.mocky.io/v2/5de32f5a3000007200e9c988')
    .then(res => {
      const { data } = res;
      dispatch({
        type: SINGLE_COHORT.SET_DATA,
        payload: data[cohortID],
        id: cohortID
      });
    })
    .catch(error => {
      dispatch({ type: SINGLE_COHORT.GET_COHORT_FAILURE });
    });
};
