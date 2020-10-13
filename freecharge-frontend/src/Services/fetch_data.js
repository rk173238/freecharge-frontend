
import API from 'axios'
export const fetchData={
    fetchStarLord
}
function fetchStarLord(){
    let url='http://starlord.hackerearth.com/recipe'
    return API.get(url).then(res=>{
        console.log(res)
        return res.data;
    })
    
}