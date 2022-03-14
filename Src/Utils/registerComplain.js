const SERVER_URL = 'http://192.168.136.190:8002';
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

export const registerComplain = async (imageUri, number, address) => {
    fetch(`${SERVER_URL}/complains`, {
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data;",
        },
        body: createFormData(imageUri, { mobileNumber: number, address: address }),
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



