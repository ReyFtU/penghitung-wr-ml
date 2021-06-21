function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const linkTiktokGua = `<a href="https://vt.tiktok.com/ZSJXadoPT/" target="_blank">tiktok</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">Follow ${linkTiktokGua} gw ya</p>`;

    let arrayEl = [msg1];
    let arrayMax = 1;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}