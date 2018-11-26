export default (store) => (next) => async (action) => {
    
    if ( !action.payload || !action.payload.then ){
        // No payload property
        // - OR -
        // Not a promise 
        
        return next(action);
    }

    // Has a promise on the payload property

    const resp = await action.payload;

    const newAction = {
        ...action,
        payload: resp
    }

    store.dispatch(newAction);

    return resp;

    // action.payload.then((resp) => {
    //     const newAction = {
    //         ...action,
    //         payload: resp
    //     }

    //     store.dispatch(newAction);
    // });

    // return action.payload;
}

