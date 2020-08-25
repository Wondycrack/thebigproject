import { Post } from "./entities/Post";
import { _prod_ } from "./constants";

export default {
    entities: [Post],
    dbName: "thebigproject",
    type: "postgresql",
    debug: !_prod_,
};