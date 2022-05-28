import { config } from "@keystone-6/core";

export default config({
    db: {
        provider: "postgresql",
        url: "postgresql://sprovo:raps114110.@localhost:5432/portfolio?schema=public"
    },
    lists: {}
});