  
	export function getPalaceData(){
    return JSON.parse(window.localStorage.getItem('palace_data')); 
  }

  export function persistPalaceData(data){
    window.localStorage.setItem('palace_data', JSON.stringify(data));
    return true;
  }

