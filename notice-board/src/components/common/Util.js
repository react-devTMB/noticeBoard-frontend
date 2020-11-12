
export const isNull = (data) => {
    let result = false;
    console.error(data);
    if(data === null && data === undefined && data === "" && data === "null") {
        result = true;
    }
    console.log('isNull >> ' , result);
    return result;
};

export const justAnAlert = () => {
   alert('hello');
};