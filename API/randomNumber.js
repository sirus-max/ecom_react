const fetchRandomNumbers = async () => {
    try {
      
      const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=50&max=130&count=5');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.text();
      console.log("Success")

      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching random numbers:', error.message);
      return []; // Return empty array in case of error
    }
  };
  
  // Exporting the fetchRandomNumbers function
  export default fetchRandomNumbers;