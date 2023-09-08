describe("calculator specs",()=>{
     describe("Calculator",()=>{
         describe("Calculator Constructor",()=>{
            it("it should add number",()=>{
                const obj = new Calculator();
                obj.add(4);
                expect(obj.result).toBe(4);
            })

            it("should initialize the total",()=>{
                const obj = new Calculator();
                expect(obj.result).toBe(0);
                expect(obj.result).toBeFalsy();
            })

            it("should have constructor",()=>{
                const obj1 = new Calculator();
                const obj2 = new Calculator();
                expect(obj1).toEqual(obj2);
                expect(obj1).toBeTruthy();
                expect(obj2).toBeTruthy();
            })
             
            it("initiate unique object",()=>{
                const obj1 = new Calculator();
                const obj2 = new Calculator();
                expect(obj1).not.toBe(obj2);
                expect(obj1.constructor.name).toContain("Calc");
            })
            
            it("intentional absense of result",()=>{
                const obj = new Calculator();
                expect(obj.result).toBe(0);
                obj.result = null;
                expect(obj.result).toBeNull();
            })

            it("checking anything matcher",()=>{
                const obj = new Calculator();
                expect(obj.result).toEqual(jasmine.anything());
            })

            it("should have common operation",()=>{
                let obj = new Calculator();
                expect(obj.add).toBeDefined();
                expect(obj.subtract).toBeDefined();
                expect(obj.multiply).toBeDefined();
                expect(obj.divison).toBeDefined();
                expect(obj.fetchData).toBeUndefined();
            })

         })


         
         describe("add()",()=>{
            it("checking regex",()=>{
                const obj = new Calculator();
                obj.add(20);
                expect(obj.add(30)).toMatch(/-?\d+/);
            })


         })

         describe("subtract()",()=>{
            it("it should subtract 2 number",()=>{
                const obj = new Calculator();
                obj.subtract(4);
                expect(obj.result).toBe(-4);
            })
            
         })

         describe("multiply()",()=>{
            it("it should multiply number",()=>{
                const obj = new Calculator();
                obj.result=4;
                obj.multiply(4);
                expect(obj.result).toBe(16);
            })

            it("result should not a number",()=>{
                const obj = new Calculator();
                obj.result = 4;
                obj.multiply("a");
                expect(obj.result).toBeNaN();
               
                
            })


         })

         describe("division()",()=>{
            it("it should divide number",()=>{
                const obj = new Calculator();
                obj.result=4;
                obj.divison(4);
                expect(obj.result).toBe(1);
            })

            it("handle divided by zero",()=>{
                const obj = new Calculator();
                expect(()=>{obj.divison(0)}).toThrow();
            })


         })
    
       

     })
   
})