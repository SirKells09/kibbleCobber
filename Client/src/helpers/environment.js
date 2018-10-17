let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;

    case 'kibble-client.herokuapp.com/':
        APIURL = 'https://kibble-client.herokuapp.com/'
}

export default APIURL;