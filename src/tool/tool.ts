
export const getStorage = (key: string) => {
  if( !key ){ return false }
  return JSON.parse( window.localStorage.getItem( key ) ) 
}

export const setStorage = (key: string , value: any) => {
  if( !key && !value ){ return false}
  try {
    value = JSON.stringify( value ) 
  } catch (err) {
    console.error(`setStorage: The value ${value} is not safe s`)
  }
  window.localStorage.setItem( key , value ) 
}

export const removeStorage = (key: string) => {
  if( !key ){ return false}
  return window.localStorage.removeItem(key) 
}

export const getSession = (key: string) => {
  if( !key ){ return false }
  return JSON.parse( window.sessionStorage.getItem( key ) ) 
}

export const setSession = ( key: string , value: any ) => {
  if( !key && !value ){ return false}
  try {
    value = JSON.stringify( value ) 
  } catch (err) {
    console.error(`setSession: The value ${value} is not safe JSON`)
  }
  window.sessionStorage.setItem( key , value ) 
}

export const removeSession = (key: string) => {
  if( !key ){ return false}
  return window.sessionStorage.removeItem( key ) 
}
export const getCookie = (name: string) => {
  name = name + "=" ;
  var start = document.cookie.indexOf(name),
    value = null;
  if(start>-1){
    var end = document.cookie.indexOf(";",start);
    if(end == -1){
      end = document.cookie.length;
    }
    value = document.cookie.substring( start+name.length ,end);
  }
  return value;
}
