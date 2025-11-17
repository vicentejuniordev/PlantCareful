import type { inflateRaw } from "zlib";
import { User } from "../../../@types/index.ts";

declare module 'knex/types/tables'{
    interface Tables {
        user : User
    }
}