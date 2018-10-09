const url = "http://localhost:3001";

module.exports = {
    get(id) {
        return fetch(`${url}/users/${id}`).then(r => r.json())
    }
}