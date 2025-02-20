
const baseURL = "https://superheroapi.com/api/0f8ed6f55b663f50fc5c2884e78e940b";

getHero(1);



function getHero(id) {
    let getDataPromise = new Promise(async function (myResolve, myReject) {

        try {
            const response = await fetch(baseURL + id, {
                method: 'GET',
                mode: 'no-cors'
            });
            console.log(response)


            if (!response.ok) {
                myReject(response.status);
                return;
            }

            const json = await response.json();
            console.log(json);
            myResolve(json);

        } catch (error) {
            myReject(error);
        }
    });
    
    getDataPromise.then(
        function (value) {
            
        },
        function (error) {
            console.log(error)
        }
    );
}
