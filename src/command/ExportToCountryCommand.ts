import { Command } from "./Command";

import ExportRepository from "app/repositories/ExportRepository";

export class ExportToCountryCommand extends Command {
    public commandRegExp: RegExp = /^([a-zA-Z]+)\*(\d+)/;

    public async do(country: string, amount: string): Promise<string> {
        await ExportRepository.export(country.toLowerCase(), parseInt(amount));
        return `Export ${amount} E20 masks to ${country} complete.`;
    }
}