const API_KEY = "live_G1gBmiopXmOmf8mjfPTrbARXPlzlb7ubamgRcBHRTDq2Y09UirJ01ykoZF3PE7HU";
const url = "https://api.thecatapi.com/v1/breeds"

export function fetchBreeds(){
    return fetch(url, {
        headers: {
            "x-api-key": API_KEY,
        },
    }).then(response => {
        if(!response.ok){
            throw new Error(response.status);
        };
        return response.json();
    });
    };



export function fetchCatByBreed(breedId){

    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
        headers: {
            "x-api-key" : API_KEY,
        },
    }).then(response => {
        if(!response.ok){
            throw new Error(response.status);
        };
        return response.json();
    })
};