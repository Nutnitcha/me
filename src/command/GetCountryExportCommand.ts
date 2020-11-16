import * as _ from "lodash";

import { Command } from "app/command/Command";

import ExportRepository from "app/repositories/ExportRepository";

export class GetCountryExportCommand extends Command {
    public commandRegExp: RegExp = /^\*\*([a-zA-Z]+)/;

    public async do(country: string): Promise<string> {
        const result = await ExportRepository.getExportByCountry(country.toLowerCase());
        let i = 0;
        return `Exported to ${_(country).camelCase()} ${result.length} times\n`
            + `${_(result).map((amount) => `${++i}\t${amount}`).join("\n")}`;
    }
}