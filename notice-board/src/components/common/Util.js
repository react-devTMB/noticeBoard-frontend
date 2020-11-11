
export const isNull = (data) => {
    let result = false;
    if(data === null && data === undefined && data === "" && data === "null") {
        result = true;
    }

    return result;
};

export const justAnAlert = () => {
   alert('hello');
};