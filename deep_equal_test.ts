import util from 'util'

type Income = {
    "a":number;
    "b":number;
    "c":number;
    "d":{
        "e":number;
        "f":number;
    }
}

const arrOfObj:Income[] = [
    {
        "a":1,
        "b":2,
        "c":3,
        "d":{
            "e":4,
            "f":5
        }
    },
    {
        "a":12,
        "b":22,
        "c":32,
        "d":{
            "e":42,
            "f":52
        }
    },
        {
        "a":13,
        "b":23,
        "c":33,
        "d":{
            "e":43,
            "f":53
        }
    },
]

const incoming:Income = {
    "a":1,
    "b":23,
    "c":33,
    "d":{
        "e":43,
        "f":53
    }
};

let test = arrOfObj.findIndex((ele)=>{
    //return isDeepEqual(ele,incoming)
    return util.isDeepStrictEqual(ele,incoming)
})

console.log(test)

let test2 = arrOfObj.findIndex((ele)=> {
    return incoming?.d.e === ele?.d.e
})

console.log(test2)

const isDeepEqual = (obj1:any, obj2:any) => {
    try{
        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)
        if(keys1.length !== keys2.length){ return false }
        for(const key of keys1) {
            const val1 = obj1[key]
            const val2 = obj2[key]
            const areObjects = isItObject(val1) && isItObject(val2)
            if( areObjects &&
                !isDeepEqual(val1, val2) ||
                !areObjects && val1 !== val2) {
                    return false
            }
        }

        return true
    } catch(error){
        console.error(error)
        return false
    }
}

export const isItObject = (obj:any) => {
    return obj != null && typeof obj === 'object';
}