const SERVER_URL = 'http://192.168.29.59:8002';
const createFormData = (photo, body = {}) => {
    const data = new FormData();
    data.append('media', {
        name: "defect.jpg",
        type: "image/jpeg",
        uri: photo.uri,
    });
    Object.keys(body).forEach((key) => {
        data.append(key, body[key]);
    });
    return data;
};

export const registerComplain = async (imageUri, number, state, city, locality, landmark, title, desc) => {
    fetch(`${SERVER_URL}/complains`, {
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data;",
        },
        body: createFormData(imageUri, { mobileNumber: number, state: state, city: city, landmark: landmark, locality: locality, title: title, desc: desc }),
    })
        .then((response) => response.json())
        .then((response) => {
            // console.log('response', response);
            return response
        })
        .catch((error) => {
            console.log('error', error);
        });
};



