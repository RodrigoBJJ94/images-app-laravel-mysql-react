const apiUrl = "http://127.0.0.1:8000/api";

const API = {
    list: async () => {
        const res = await fetch(apiUrl + "/list");
        const json = await res.json();
        return json;
    },

    upload: async (image, subtitle) => {
        const formData = new FormData();

        formData.append('image', image);
        formData.append('subtitle', subtitle);
        
        await fetch(apiUrl + "/upload", {
            method: 'POST',
            body: formData
        });
    }
};

export default API;