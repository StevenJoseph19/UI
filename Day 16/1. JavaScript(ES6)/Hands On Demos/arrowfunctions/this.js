console.log(this);

const testerobj = {
    func1 : function(){
        console.log('func1',this);
    },

    func2 : () =>{
        console.log('func2', this)
    },
}

testerobj.func1();
// testerobj.func2();