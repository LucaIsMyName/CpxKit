import { Element } from "./element";
import { define } from "./utils/element";
import { Config } from "./config";

// PlugIns & Utilities
import { Storage } from "./utils/storage";
import { State } from "./utils/state";
import { Http } from "./utils/http";


export const Cpx = {
    Element,
    define,
    Config,
    
    // PlugIns & Utilities
    State,
    Storage,
    Http
}