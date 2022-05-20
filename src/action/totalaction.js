export const ActionTypes={
    TOTAL_PRICE:'TOTAL_PRICE'
}

export const getTotal=(val)=>{
  console.log('value',val)
    return  ({
        type:ActionTypes.TOTAL_PRICE,
        payload:val
    })
}