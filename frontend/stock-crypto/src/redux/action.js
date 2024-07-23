export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
  });
  
  export const fetchData = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/stocks');
      const data = await response.json();
      dispatch(setData(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  