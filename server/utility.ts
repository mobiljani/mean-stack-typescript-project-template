export class Enum {
    static getNames(e:any):Array<string> {
        var a:Array<string> = [];
        for (var val in e) {
            if (isNaN(val)) {
                a.push(val);
            }
        }
        return a;
    }

    static getValues(e:any):Array<number> {
        var a:Array<number> = [];
        for (var val in e) {
            if (!isNaN(val)) {
                a.push(parseInt(val, 10));
            }
        }
        return a;
    }

    static getValue(e:any, name:string):number {
        return e[name];
    }

    static getName(e:any, val:number):string {
        return e[val];
    }
}