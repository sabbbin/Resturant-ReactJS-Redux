export const ActionTypes=(
    TOTAL_PRICE='TOTAL_PRICE'
)

export const getTotal=(val)=>{
    return ({
        type:ActionTypes.TOTAL_PRICE,
        payload:val
    })
}