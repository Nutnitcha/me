import * as _ from "lodash";

import { Command } from "app/command/Command";

export class CommandRegistry {
    private _registry: Command[] = [];

    public registerCommand(command: new () => Command) {
        this._registry.push(new command());
    }

    public async run(commandString: string) {
        const commandHandler = _(this._registry).find((command) => command.commandRegExp.test(commandString));

        if (commandHandler) {
            const args = commandHandler.commandRegExp.exec(commandString);
            const result = await commandHandler.do(...args.slice(1, args.length));
            return result;
        } else {
            throw Error("Command is invalid");
        }
    }
}