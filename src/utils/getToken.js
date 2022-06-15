const endPoint = import.meta.env.VITE_VUE_APP_TOKEN_ENDPOINT;
const room_id = import.meta.env.VITE_VUE_APP_ROOM_ID;

export default async function getToken(role) {
    console.log(role);
    const response = await fetch(`${endPoint}api/token`, {
        method: 'POST',
        body: JSON.stringify({
            user_id: '62a34ab12630221c75a4239d',
            role: 'speaker', // listener , speaker , moderator
            room_id,
        }),
    });

    const { token } = await response.json();

    return token;
}
