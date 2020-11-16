import * as DotEnv from "dotenv";
import * as kcors from "kcors";
import * as UrlMount from "koa-mount";
import * as StaticServer from "koa-static";

import { Application } from "app/core/Application";

import { CommandRegistry } from "app/command/CommandRegistry";
import { ExportToCountryCommand } from "app/command/ExportToCountryCommand";
import { GetCountryExportCommand } from "app/command/GetCountryExportCommand";
import { ListExportCountryCommand } from "app/command/ListExportCountryCommand";
import { IndexController } from "app/controllers/IndexController";

DotEnv.config();

export const commandReg = new CommandRegistry();
commandReg.registerCommand(ExportToCountryCommand);
commandReg.registerCommand(ListExportCountryCommand);
commandReg.registerCommand(GetCountryExportCommand);

const app = new Application();
app.useController(IndexController);

app.useNativeMiddleware(UrlMount("/assets", StaticServer(__dirname + "/assets")));
app.useNativeMiddleware(kcors({
    origin: "*",
    allowHeaders: ["Content-Type"]
}));

app.start(parseInt(process.env.PORT));