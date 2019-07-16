function isYes(text) {
    text = text.toLowerCase();
    text = text.charAt(0);
    if(text === 'y') {
        return true;
    } else {
        return false;
    }
}

export default isYes;