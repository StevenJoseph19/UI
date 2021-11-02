const X = function(){
    // "this" here is the caller of X
};

const Y = () => {
    // "this" here is not the caller of X

    // It's the same "this" that is found in the scope of Y
}