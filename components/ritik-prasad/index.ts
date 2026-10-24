export function fetchData(shouldFail: boolean){
    return new Promise((res, rej) => {
        if(shouldFail){
            rej('Error occured')
        } else {
            res('Success')
        }
    })
}

export const myFunction = {
     new(){
        console.log('my function called')
    }
}