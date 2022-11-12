function removeDuplicate(str) {
        return str.split('').filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        }).join('');
    }
regex and test method true or false
cy.log('Without duplicate value',  /(.).*\1/.test(text));
