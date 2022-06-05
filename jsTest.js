console.clear();
// javascritpt holo sycronize programing .akta block of code ses howar por next line a jai
const one = (callback) => {
    console.log(`this is task one`);
    callback();
};

// ami cacci two ta sobar ses a execute hok.
const loading = () => {
    console.log(`this is loading`);
}

const two = (f2) => {
    setTimeout(loading, 3000);
    f2();
}


const three = (z) => {
    console.log(`this is ${z}`);
}

one(function callback() {
    two(function f2() {
        three();
    });
});

three(8)
