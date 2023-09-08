class Calculator{
     _version="1.0";
    constructor(){
       this.result=0;
    //    this.version = 1.0;
    }
    
    set version(version){
        this._version = version;
    }
    get version(){
        return this._version;
    //    return fetch("https://mocki.io/v1/dd55eff4-32e6-43ab-85f9-aefc255cd3f0")
    //     .then((response)=>response.json())
    //     .then((data)=>data.version);   
    }

    add(val){
     return this.result+=val;
    }
    subtract(val){
        return this.result-=val;
       }
    multiply(val){
        return this.result*=val;
       }
    divison(val){
        if(val==0){
            throw new Error("number can't divided by zero");
        }
        return this.result/=val;
       }
}