import { MikroORM } from "@micro-orm/core";
import { _prod_ } from "./constants";

const main = async () => {
    const orm = await MikroORM.init({
    entities: [],
    dbName: "thebigproject",
    type: "postgresql",
    debug: !_prod_,
});
    const post = orm.em.create(Post, {Title: "my first post"});
    await orm.em.persistAndFlush(post);
};
//# sourceMappingURL=index.js.mapyarn add mikro-orm pgcd
main();
