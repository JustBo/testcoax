export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const insertItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
};

export const removeItem = (array, action) => {
    return array.filter((item, index) => index !== action.index);
};