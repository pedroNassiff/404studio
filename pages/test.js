import React from 'react'

const Test = () => {

    // const sum = (array) => {
    //     if (array.length === 0) return 0;
    //     const rest = array.slice(1);
    //     return array[0] + sum(rest);
    // }
    // console.log(sum([1, 5, 7, -2]));

    /////////////combinations////////////////////////////////

    const combinations = (elements) => {
        if (elements.length === 0) return [ [] ];
        const firstEl = elements[0];
        const rest = elements.slice(1);

        const combsWithoutFirst = combinations(rest);
        const combsWithFirst = [];

        combsWithoutFirst.forEach(comb => {
            const combWithFirst = [...comb, firstEl];
            combsWithFirst.push(combWithFirst);
        });
        return [...combsWithoutFirst, ...combsWithFirst];
    }


    return (
        <div>test</div>
    )
}

export default Test;