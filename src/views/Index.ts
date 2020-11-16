import { html } from "lit-ntml";

import * as base from "app/views/BaseTemplate";

export const render = async (result?: string) => base.render("index", html`
<h1>MVC E20 Export Program</h1>
<form action="/" method="POST">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Command ></span>
        </div>   
        <input type="text" class="form-control" aria-label="Enter command here" name="command">
        <div class="input-group-append">
            <input type="submit" class="btn btn-outline-secondary" value="Enter">
        </div>
    </div>
</form>
<div class="card">
  <div class="card-body" style=" white-space:pre-wrap;">${result}</div>
</div>
`);
