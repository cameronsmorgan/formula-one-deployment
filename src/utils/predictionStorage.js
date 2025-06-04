const LOCAL_STORAGE_KEY = 'userPredictions';

export const getStoredPredictions = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY); //retrieves previous userPredictions
  return stored ? JSON.parse(stored) : {};  //if something is stored, convert else return empty
};

export const savePredictionToStorage = (raceName, prediction) => {
  const current = getStoredPredictions();  //loads existing predctions
  current[raceName] = prediction;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(current)); //stores prediction udner key 
};