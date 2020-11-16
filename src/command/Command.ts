export abstract class Command {
    public abstract commandRegExp: RegExp;

    // tslint:disable-next-line: no-any
    public abstract async do(...args: any[]): Promise<string>;
}