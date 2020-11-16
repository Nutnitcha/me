import { BodyParam, Controller, Get, Post } from "routing-controllers";

import * as index from "app/views/Index";

import { commandReg } from "app/server";

@Controller()
export class IndexController {
    @Get("/")
    public async index() {
        console.log("get page");
        return index.render();
    }

    @Post("/")
    public async receiveCommand(
        @BodyParam("command") command: string
    ) {
        try {
            const result = await commandReg.run(command);
            return index.render(result);
        } catch (error) {
            return index.render(error.message);
        }
    }
}