const Base_url = "https://fakestoreapi.com/"

export async function getData(endpoint){
  try{

    const data = await fetch(`${Base_url}${endpoint}`);
    const res = await data.json();

    return res;

  }catch(error){
    console.log("error: ", error);
  }
}