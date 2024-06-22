const cringe = [
    'https://abs-0.twimg.com/emoji/v2/svg/1f3f3-fe0f-200d-1f308.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f3f3-fe0f-200d-26a7-fe0f.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f1f5-1f1f8.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/271d.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f30a.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f499.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f1fa-1f1e6.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f308.svg',
    'https://abs-0.twimg.com/emoji/v2/svg/1f1ee-1f1f1.svg'
],
    cringePattern = /[#\$]|grogu|rey/i;

function isCringe(str) {
    return cringe.includes(str);
}

function includesCringe(str) {
    return cringePattern.test(str);
}

function hideCringe() {
    document.querySelectorAll('[data-testid="User-Name"]').forEach(element => {
        const parentDiv = element.closest('[data-testid="tweet"]');
        if (parentDiv.style.display !== 'none') {
            const imgs = element.querySelectorAll('img');
            for (let i = 0; i < imgs.length; i++) {
                if (isCringe(imgs[i].src)) {
                    if (parentDiv) {
                        parentDiv.style.display = 'none';
                        console.log('hid post from', imgs[i].closest('span').textContent);
                        return;
                    }
                }
            }

            const spans = element.querySelectorAll('span');
            for (let i = 0; i < spans.length; i++) {
                if (includesCringe(spans[i].textContent)) {
                    if (parentDiv) {
                        parentDiv.style.display = 'none';
                        console.log('hid post from', spans[i].textContent);
                        return;
                    }
                }
            }
        }
    });
}

window.addEventListener("load", (event) => {
    console.log('loading twitter hide cringe');
    hideCringe();
    window.onscroll = hideCringe;
});