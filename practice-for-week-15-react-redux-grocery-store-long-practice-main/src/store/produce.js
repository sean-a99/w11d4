import produceData from "../mockData/produce.json";

export default function produceReducer(prevState = {}, action) {

    let state = {... Object.freeze(prevState)};

    switch (action.type) {

        case POPULATE_PRODUCE:
        
            let obj = {};

            action.produce.forEach((record) => {
                obj[record.id] = record;
            })

            return {...state, ...obj} ;

        default: 
        return state;
    };

};

const POPULATE_PRODUCE = "produce/POPULATE";

export const populateProduce = produce => ({

    type: POPULATE_PRODUCE, 
    produce: produceData

});





// export defau