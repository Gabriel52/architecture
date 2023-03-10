type UseContainerType = {
    value: string;
    hardFunction: ()=> void;
}
export const useContainer = ():UseContainerType => {
    const value = "Any value"
    const hardFunction = () => {
        console.log('Todo hard something')
    }
    
    return{
        hardFunction,
        value
    }
}