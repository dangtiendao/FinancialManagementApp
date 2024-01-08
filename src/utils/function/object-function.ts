
/**
 * Gộp 2 objtect, loại bỏ key thừa, giá trị = undefine, override inputObject vào defaultObjtect
 * @param inputObject 
 * @param defaultObjtect 
 * @returns 
 */
export function megerObjtect<T>(inputObject: T, defaultObjtect: T) : T{
    if(!inputObject) return defaultObjtect;
    const dicObjtect : any = {};
    Object.keys({...defaultObjtect, inputObject}).forEach(key => {
        dicObjtect[key] = inputObject[key] ?? defaultObjtect[key]
        if(!dicObjtect[key]) delete dicObjtect[key];
    })
    return dicObjtect
}