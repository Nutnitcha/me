import * as _ from "lodash";

import { Command } from "app/command/Command";

import ReservationRepository from "app/repositories/ExportRepository";

export class ListExportCountryCommand extends Command {
    public commandRegExp: RegExp = /^#\*E20/;

    public async do(): Promise<string> {
        const result = await ReservationRepository.getExportedCountries();
        return `Exported country\n${_(result).join("\n")}`;
    }
}