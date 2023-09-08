describe("main-specs",()=>{

     describe("calculate()",()=>{
        it("validate expression when second arg is invalid",()=>{
            //i know setResult will not returning anything
            spyOn(window,'setResult').and.stub();
            calculate('3+a');
            expect(window.setResult).toHaveBeenCalled();
            expect(window.setResult).toHaveBeenCalledWith("Unexpected Data");
        })

        it("validate expression when first arg is invalid",()=>{
            spyOn(window,'setResult');
            calculate('a+3');
            expect(window.setResult).toHaveBeenCalled();
            expect(window.setResult).toHaveBeenCalledWith("Unexpected Data");
        })
        it("validate expression when both arg are invalid",()=>{
            spyOn(window,'setResult');
            calculate('a+b');
            expect(window.setResult).toHaveBeenCalled();
            expect(window.setResult).toHaveBeenCalledWith("Unexpected Data");
        })
        it("validate expression when operator invalid",()=>{
            spyOn(window,'setResult');
            calculate('a_3');
            expect(window.setResult).toHaveBeenCalled();
            expect(window.setResult).toHaveBeenCalledWith("Unexpected Data");
        })

        it("calls add",()=>{
            //but here add is the method of Calculator call we can't call it on window object
            spyOn(Calculator.prototype,"add");
            spyOn(window,'setResult');
            calculate('1+4');
            expect(Calculator.prototype.add).toHaveBeenCalled();
            expect(Calculator.prototype.add).toHaveBeenCalledWith(4);
           

        })


        it("calls subtract",()=>{
            spyOn(Calculator.prototype,"subtract");
            spyOn(window,'setResult');
            calculate('1-4');
            expect(Calculator.prototype.subtract).toHaveBeenCalled();
            expect(Calculator.prototype.subtract).toHaveBeenCalledWith(4);
        })


        it("calls multiply",()=>{
            spyOn(Calculator.prototype,"multiply");
            spyOn(window,'setResult');
            calculate('1*4');
            expect(Calculator.prototype.multiply).toHaveBeenCalled();
            expect(Calculator.prototype.multiply).toHaveBeenCalledWith(4);
        })


        it("calls division",()=>{
            spyOn(Calculator.prototype,"divison");
            spyOn(window,'setResult');
            calculate('1/4');
            expect(Calculator.prototype.divison).toHaveBeenCalled();
            expect(Calculator.prototype.divison).toHaveBeenCalledWith(4);
        })

        it("calls setResult",()=>{
            //here i want to see the actual implementation 
            spyOn(window,'setResult');
            spyOn(Calculator.prototype,"multiply").and.callThrough();
            calculate('1*5');
            expect(setResult).toHaveBeenCalledWith(5);
        })

        it("validate operations",()=>{
            
        })
     })






    describe("setResult function",()=>{

        let element;
        beforeAll(()=>{
            element = document.createElement("span");
            element.setAttribute("id","resultdata");
            document.body.appendChild(element);
        })

        afterAll(()=>{
           element=document.getElementById("resultdata");
           document.body.removeChild(element);
        })

        it("updating result element",()=>{
            
            setResult(5);
            expect(element.innerText).toBe("5");

        })
    })

    describe("showVersion()",()=>{
        

        
        it("checking version property",()=>{
           
            spyOn(document,'getElementById').and.returnValue({innerText:"5"});
            spyOnProperty(Calculator.prototype,'version').and.returnValue("6.0");
            showVersion();
            expect(Calculator.prototype.version).toBe("6.0");
        })

       
    })

   
})