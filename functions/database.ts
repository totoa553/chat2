import FB, { FBdb } from "./firebase";

export type ChatType = {
    text:     string,
    date:     number,
    uid:      string,
    username: string,
    photoURL: string,
}

export type ChatroomType = {
    owner:  string, // username
    roomname: string,
    member: string[],
    chats:  ChatType[],
}

/**
 * firestoreにチャットルームを保存する。
 * 保存の成功・失敗ごとにメッセージを返す。
 * @param chatroom :chatroomオブジェクトを指定
 * @param uid :documentを指定
 */
export const setChatroomToFirestore = async(chatroom:ChatroomType, uid:string):Promise<string> => {
    const msg:string = await FBdb.collection("chatrooms").doc(uid).set({
        owner:    chatroom.owner,
        roomname: chatroom.roomname,
        member:   chatroom.member,
        chats:    chatroom.chats,
    })
    .then(() => {
        return "set chatroom successfully!";
    })
    .catch(() => {
        return "set chatroom failed.";
    });
    return msg;
}

/**
 * firestoreから指定されたchatroomオブジェクトを取ってくる。
 * 成功したらオブジェクトを返す。
 * 保存の成功・失敗ごとにメッセージを返す。
 * @param uid :uidを指定
 */
export const getChatroomFromFirestore = async(uid:string):Promise<[string, any]> => {
    let chatroom = {};
    const msg:string = await FBdb.collection("chatrooms").doc(uid).get()
    .then(snapshot => {
        chatroom = {
            owner:    snapshot.data().owner,
            roomname: snapshot.data().roomname,
            member:   snapshot.data().member,
            chats:    snapshot.data().chats,
        }
        return "get chatroom successfully!";
    })
    .catch(error => {
        return "get chatroom failed.";
    });
    return [msg, chatroom];
}

/**
 * firestoreからownerが指定されたusernameのdocument(chatroom)を全て取得する。
 * 取得したチャットルームを配列にして返す。
 * @param username 
 */
export const getChatroomListWithUsername = async(username:string):Promise<any[]> => {
    let roomList = [];
    await FBdb.collection("chatrooms").where("owner", "==", username).get()
    .then(snapshot => {
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
    
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            const room = {
                id: doc.id,
                owner: doc.data().owner,
            }
            roomList.push(room);
        });
    })
    .catch(error => {
        console.log(error);
    });
    return roomList;
}

/**
 * 指定したuidのdocumentを削除する。
 * 成功したらtrue, 失敗したらfalseを返す。
 * @param uid 
 */
export const deleteFirestoreChatroom = async(uid:string):Promise<boolean> => {
    let bool:boolean = false;
    await FBdb.collection("chatrooms").doc(uid).delete()
    .then(() => {
        bool = true;
    })
    .catch(error => {
        console.log(error);
        bool = false;
    });
    return bool;
}

/**
 * userrooms/uid/chats[]にchatを追加する。
 * @param uid 
 * @param chat 
 */
export const setChatToFirestore = async(uid:string, chat:ChatType):Promise<boolean> => {
    let bool:boolean = false;
    const chatroom = FBdb.collection("chatrooms").doc(uid);
    await chatroom.update({
        chats: FB.firestore.FieldValue.arrayUnion(chat),
    })
    .then(() => {
        bool = true;
    })
    .catch(error => {
        console.log(error);
        bool = false;
    });
    return bool;
}