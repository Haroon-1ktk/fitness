
export const exerciseOptions={
  method: 'GET',
  headers: {
    'x-rapidapi-key': '26bfd6152cmsh352627030aaed2ap1419d9jsn887e14e551fc',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions={
  method: 'GET',
  headers: {
    'x-rapidapi-key': '26bfd6152cmsh352627030aaed2ap1419d9jsn887e14e551fc',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}