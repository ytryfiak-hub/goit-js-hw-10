import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_G1gBmiopXmOmf8mjfPTrbARXPlzlb7ubamgRcBHRTDq2Y09UirJ01ykoZF3PE7HU";

export function fetchBreeds(){
    return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => {
        return response.data
    })
}

export function fetchCatByBreed(breedId){
    return axios
    .get("https://api.thecatapi.com/v1/images/search", {
        params: { 
            breed_ids: breedId,  
        },
        })
        .then(response => response.data )
};