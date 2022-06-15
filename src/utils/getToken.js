const endPoint = import.meta.env.VITE_VUE_APP_TOKEN_ENDPOINT;
const room_id = import.meta.env.VITE_VUE_APP_ROOM_ID;

export default async function getToken(role) {
    const response = await fetch(`${endPoint}api/token`, {
        method: 'POST',
        body: JSON.stringify({
            user_id: '5fc62c5872909272bf9995e1',
            role: role, // listener , speaker , moderator
            room_id,
        }),
    });

    const { token } = await response.json();

    return token;
}
