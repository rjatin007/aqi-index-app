const getQualityFromAqi = (aqi) => {
  if (0 <= aqi && aqi <= 50) return "good";
  else if (51 <= aqi && aqi <= 100) return "satisfactory";
  else if (101 <= aqi && aqi <= 200) return "moderate";
  else if (201 <= aqi && aqi <= 300) return "poor";
  else if (301 <= aqi && aqi <= 400) return "very_poor";
  else if (401 <= aqi && aqi <= 500) return "severe";
};

export const getFormattedData = (updatedDataMap) => {
  
  return Object.keys(updatedDataMap).map((el) => ({
    name: updatedDataMap[el]?.city,
    aqi: updatedDataMap[el]?.aqi.toFixed(2),
    quality: getQualityFromAqi(updatedDataMap[el]?.aqi),
  }));
};
export const dataFactory = () => {
  const citiesDataMap = {
    Bengaluru: {
      city: "Bengaluru",
      aqi: 0,
      quality: "",
    },
    Delhi: {
      city: "Delhi",
      aqi: 0,
      quality: "",
    },
    Mumbai: {
      city: "Mumbai",
      aqi: 0,
      quality: "",
    },
  };
  return (data) => {
    data.forEach((el) => {
      if (el.city in citiesDataMap) {
        citiesDataMap[el.city] = el;
      }
    });
    return { ...citiesDataMap };
  };
};
