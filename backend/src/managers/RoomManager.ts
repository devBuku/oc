import { User } from "./UserManager";

interface Room {
    user1: User,
    user2: User,
}

export class RoomManager {
    private rooms: Map<string, Room>
    constructor() {
        this.rooms = new Map<string, Room>();
    }
    createRoom(user1: User, user2: User) {
        const roomId = this.generate()
        this.rooms.set(roomId.toString(), { user1, user2 })

        // tells user1 to please send an offer. Please give me your webrtc configuration (sdp)

        user1.socket.emit("send-offer", {
            roomId
        })
    }

    // whatever sdp got from the user1 sends to the user2
    onOffer(roomId: string, sdp: string) {
        const user2 = this.rooms.get(roomId)?.user2;
        user2?.socket.emit("offer", {
            sdp
        })
    }

    // send the user1 back the answer
    onAnswer(roomId: string, sdp: string) {
        const user1 = this.rooms.get(roomId)?.user1;
        user1?.socket.emit("offer", {
            sdp
        })
    }

    generate() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}