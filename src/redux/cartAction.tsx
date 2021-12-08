export const AddData=(Data:any)=>{
    return{
     type:'AddData',
     payload:Data
    }
}
export const DeleteData=(id:any)=>{
    return{
     type:'DeleteData',
     payload:id
    }
}
export const countIncrement=(Data:any)=>{
    return{
     type:'countIncrement',
     payload:Data
    }
}