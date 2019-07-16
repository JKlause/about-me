export default isYes;

function isYes(text) {
    text = text.toLowerCase();
    text = text.charAt(0);
    if(text === 'y') {
        return true;
    } else if(text === 'n') {
        return false;
    } else {
        return 'error';
    }
}