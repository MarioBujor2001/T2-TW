function addTokens(input, tokens) {
    // cerinta 1: input sa fie de tip string
    if (typeof input != "string") {
        throw "Invalid input"
    }
    if (input.length < 6) {
        throw "Input should have at least 6 characters"
    }
    for (let i = 0; i < tokens.length; i++) {
        if (!tokens[i].hasOwnProperty('tokenName')) {
            throw 'Invalid array format'
        }
        if (typeof tokens[i].tokenName != "string") {
            throw 'Invalid array format'
        }
    }
    if (!input.includes("...")) {
        return input;
    }
    for (let i = 0; i < tokens.length; i++) {
        input = input.replace("...", "${" + tokens[i].tokenName + "}")
    }
    return input
}

const app = {
    addTokens: addTokens
}

module.exports = app;
