export function log(filename: string, methodName: string, message?: any, ...args: any[]) {
    console.log(`%c[${filename}]: ${methodName}`, message, ...args);
}

export function upperCaseFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
