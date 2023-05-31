// Write your code here

const handleFormSubmit = async (event) => {
    event.preventDefault(); 
    await performConversion();
  };
  const performConversion = async () => {
    const convertFrom = document.getElementById('convert-from').value; 
    const convertTo = document.getElementById('convert-to').value; 
    const convertCount = document.getElementById('convert-count').value; 
    const apiUrl = `https://api.coinbase.com/v2/prices/${convertFrom.toUpperCase()}-${convertTo.toUpperCase()}/spot`;
  
    try {
      const response = await fetch(apiUrl); 
      const data = await response.json(); 
      console.log (data)
      const spotPrice = data.data.amount; 
      const convertedAmount = convertCount * spotPrice; 
      const outputField = document.getElementById('output');
      outputField.value = convertedAmount; 
    } catch (error) {
      console.log('Fehler beim Abrufen des Spotpreises:', error);
    }
  };
  
  const conversionForm = document.getElementById('conversion-form');
  conversionForm.addEventListener('submit', handleFormSubmit);
  
