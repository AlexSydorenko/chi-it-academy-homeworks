function addParamsToRequest(params) {
    let count = 0;

    return function (data) {
        count += 1;
        return {
            ...params,
            data: data,
            count: count
        };
    };
}

const sendData = addParamsToRequest({ 'access-token': 'qwerty' });
const result1 = sendData({ field1: 'value1' });
const result2 = sendData({ field2: 'value2' });

console.log(result1);
console.log(result2);
