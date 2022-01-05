const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });

let date = new Date();
date.setDate(30);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);

client.on("ready", () => {
    client.setActivity({
        state: "vibing",
        details: "🎉",
        largeImageKey: "zero_main",
        startTimestamp: new Date(),
        endTimestamp: date, //Date.parse("29 Sep 2020 00:00:00 GMT")
        instance: false,
    }).catch(console.error);
});

client.login({ clientId: "449028838559580181" }).catch(console.error);
