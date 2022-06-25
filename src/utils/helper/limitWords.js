const limitWords = (text, max=2) => {
    const splitedText = text.split(" ");
    let newText;
    for(let i= 0; i < max; i++){
        newText += `${splitedText[i]} `
    }
    return newText;
}

export default limitWords;  