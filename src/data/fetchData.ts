async function fetchData(url, request = {}) {
    try {
        const responce = await fetch(url, request);
        if (!responce.ok) return { error: true, status: responce.status };
        const data = await responce.json();
        return { error: false, data, status: responce.status };
    } catch (error) {
        console.error(error);
        return { error: true, status: 500 };
    }
}

export default fetchData;
