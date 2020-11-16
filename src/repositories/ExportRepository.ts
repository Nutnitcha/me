import * as _ from "lodash";

export class ExportRepository {
    private _exportations: Array<{
        country: string;
        amount: number
    }> = [];

    public async export(country: string, amount: number) {
        this._exportations.push({country, amount});
    }

    public async getExportByCountry(country: string) {
        const exportation = _(this._exportations).filter((exp) => exp.country === country);
        return exportation.map((exp) => exp.amount).value();
    } 

    public async getExportedCountries() {
        const country = _(this._exportations).map((exp) => exp.country).uniq().value();
        return country; 
    }
}

const repo = new ExportRepository();
export default repo;
