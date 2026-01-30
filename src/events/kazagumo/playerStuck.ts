import {Events, KazagumoPlayer, KazagumoTrack} from "kazagumo";

export default {
    name: Events.PlayerStuck,
    async execute(player: KazagumoPlayer, track: KazagumoTrack) {
        console.log(`Track stuck: ${track.title} in guild ${player.guildId}`);
        if (player.queue.size > 0) {
            player.skip();
        }
    }
}
