export function registerLog(route: string[]) {
    const prefix = route.join(' > ');
    const cR = route
    
    const log = function log(message:string, data?:any) {
        console.log(`${prefix} -> ${message} | ${JSON.stringify(data||{})}`);
    }
    return log
}
