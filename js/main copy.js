// Write your code here

const handleFormSubmit = (event) => {
    event.preventDefault(); 

    const performConversion = () => {
    const convertFrom = document.getElementById('convert-from').value; 
    const convertTo = document.getElementById('convert-to').value; 
    const convertCount = document.getElementById('convert-count').value; 
  
    const outputField = document.getElementById('output');
    outputField.value = convertedAmount; 
  };
  
  
  const conversionForm = document.getElementById('conversion-form');
  conversionForm.addEventListener('submit', handleFormSubmit);
