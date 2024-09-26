const games = [
    { name: "Blue Archive", img: "assets/game-online/bluearchive.jpg" },
    { name: "Call of Duty", img: "assets/game-online/callofduty.jpg" },
    { name: "Clash of Clans", img: "assets/game-online/clashofclans.jpg" },
    { name: "Football League 2024", img: "assets/game-online/footballleague2024.jpg" },
    { name: "Free Fire", img: "assets/game-online/freefire.jpg" },
    { name: "Genshin Impact", img: "assets/game-online/genshinimpact.jpg" },
    { name: "Hay Day", img: "assets/game-online/hayday.jpg" },
    { name: "Honkai: Star Rail", img: "assets/game-online/honkaistarrail.jpg" },
    { name: "Minecraft", img: "assets/game-online/minecraft.jpg" },
    { name: "Mobile Legends", img: "assets/game-online/mobilegends.jpg" },
    { name: "Modern Warships", img: "assets/game-online/modernwarship.jpg" },
    { name: "PUBG Mobile", img: "assets/game-online/pubgm.jpg" },
    { name: "Roblox", img: "assets/game-online/roblox.jpg" },
    { name: "SimCity BuildIt", img: "assets/game-online/simcitybuild.jpg" },
    { name: "Stumble Guys", img: "assets/game-online/stubleguys.jpg" },
    { name: "Wuthering Waves", img: "assets/game-online/wutheringwave.jpg" },
];

const apps = [
    { name: "Discord", img: "assets/aplikasi-online/discord.jpg" },
    { name: "Netflix", img: "assets/aplikasi-online/netflix.jpg" },
    { name: "Spotify", img: "assets/aplikasi-online/spotify.jpg" },
    { name: "Vidio", img: "assets/aplikasi-online/vidio.jpg" },
    { name: "Bigo", img: "assets/aplikasi-online/bigo.jpg" },
    { name: "Hago", img: "assets/aplikasi-online/hago.jpg" },
];

const eWallets = [
    { name: "Dana", img: "assets/aplikasi-online/e-wallet/dana.jpg" },
    { name: "OVO", img: "assets/aplikasi-online/e-wallet/ovo.jpg" },
    { name: "Gopay", img: "assets/aplikasi-online/e-wallet/gopay.jpg" },
];

const itemPrices = {
    "Blue Archive": [
        { item: "60 Gems", price: "IDR 15,000" },
        { item: "300 Gems", price: "IDR 75,000" },
        { item: "1,200 Gems", price: "IDR 300,000" },
        { item: "3,000 Gems", price: "IDR 750,000" },
        { item: "6,000 Gems", price: "IDR 1,500,000" },
        { item: "Special Character Packs", price: "IDR 150,000 to IDR 450,000" },
        { item: "Monthly Subscription", price: "IDR 200,000" },
    ],
    "Call of Duty": [
        { item: "80 CP", price: "IDR 15,000" },
        { item: "800 CP", price: "IDR 150,000" },
        { item: "2,000 CP", price: "IDR 375,000" },
        { item: "5,200 CP", price: "IDR 900,000" },
        { item: "Battle Pass", price: "IDR 150,000" },
        { item: "Operator Skins", price: "IDR 75,000 to IDR 300,000" },
        { item: "Seasonal Packs", price: "IDR 200,000 to IDR 400,000" },
    ],
    "Clash of Clans": [
        { item: "500 Gems", price: "IDR 75,000" },
        { item: "1,200 Gems", price: "IDR 150,000" },
        { item: "2,500 Gems", price: "IDR 300,000" },
        { item: "5,000 Gems", price: "IDR 750,000" },
        { item: "Builder's Pack", price: "IDR 75,000" },
        { item: "Gold Pass", price: "IDR 75,000/month" },
        { item: "Super Troop Packs", price: "IDR 150,000 to IDR 300,000" },
    ],
    "Football League 2024": [
        { item: "100 Coins", price: "IDR 30,000" },
        { item: "500 Coins", price: "IDR 75,000" },
        { item: "1,500 Coins", price: "IDR 150,000" },
        { item: "3,000 Coins", price: "IDR 300,000" },
        { item: "Premium Pack", price: "IDR 150,000" },
        { item: "Special Player Bundles", price: "IDR 75,000 to IDR 300,000" },
        { item: "Season Pass", price: "IDR 100,000" },
    ],
    "Free Fire": [
        { item: "100 Diamonds", price: "IDR 15,000" },
        { item: "500 Diamonds", price: "IDR 75,000" },
        { item: "1,000 Diamonds", price: "IDR 150,000" },
        { item: "4,000 Diamonds", price: "IDR 600,000" },
        { item: "Elite Pass", price: "IDR 150,000" },
        { item: "Character Bundles", price: "IDR 75,000 to IDR 300,000" },
        { item: "Weapon Skins", price: "IDR 50,000 to IDR 250,000" },
    ],
    "Genshin Impact": [
        { item: "60 Primogems", price: "IDR 15,000" },
        { item: "300 Primogems", price: "IDR 75,000" },
        { item: "1,600 Primogems", price: "IDR 300,000" },
        { item: "3,200 Primogems", price: "IDR 450,000" },
        { item: "Battle Pass", price: "IDR 150,000" },
        { item: "Special Character Packs", price: "IDR 225,000 to IDR 450,000" },
        { item: "Starter Packs", price: "IDR 150,000" },
    ],
    "Hay Day": [
        { item: "40 Gems", price: "IDR 15,000" },
        { item: "200 Gems", price: "IDR 75,000" },
        { item: "1,000 Gems", price: "IDR 300,000" },
        { item: "2,000 Gems", price: "IDR 600,000" },
        { item: "Special Offers", price: "IDR 150,000" },
        { item: "Unique Decoration Packs", price: "IDR 30,000 to IDR 150,000" },
        { item: "Farm Pass", price: "IDR 100,000" },
    ],
    "Honkai: Star Rail": [
        { item: "60 Star Rail Passes", price: "IDR 15,000" },
        { item: "300 Star Rail Passes", price: "IDR 75,000" },
        { item: "1,600 Star Rail Passes", price: "IDR 300,000" },
        { item: "3,200 Star Rail Passes", price: "IDR 450,000" },
        { item: "Monthly Card", price: "IDR 225,000" },
        { item: "Character Bundles", price: "IDR 150,000 to IDR 450,000" },
        { item: "Special Event Packs", price: "IDR 200,000" },
    ],
    "Minecraft": [
        { item: "320 Coins", price: "IDR 30,000" },
        { item: "700 Coins", price: "IDR 75,000" },
        { item: "1,600 Coins", price: "IDR 150,000" },
        { item: "3,200 Coins", price: "IDR 300,000" },
        { item: "Skin Packs", price: "IDR 30,000 to IDR 150,000" },
        { item: "Texture Packs", price: "IDR 30,000 to IDR 150,000" },
        { item: "Realms Subscription", price: "IDR 150,000/month" },
    ],
    "Mobile Legends": [
        { item: "100 Diamonds", price: "IDR 15,000" },
        { item: "500 Diamonds", price: "IDR 75,000" },
        { item: "1,000 Diamonds", price: "IDR 150,000" },
        { item: "4,000 Diamonds", price: "IDR 600,000" },
        { item: "Seasonal Skins", price: "IDR 200,000" },
        { item: "Battle Pass", price: "IDR 150,000" },
        { item: "Special Heroes", price: "IDR 300,000" },
    ],
    "Modern Warships": [
        { item: "200 Gold", price: "IDR 30,000" },
        { item: "1,000 Gold", price: "IDR 75,000" },
        { item: "2,500 Gold", price: "IDR 150,000" },
        { item: "5,000 Gold", price: "IDR 300,000" },
        { item: "Premium Packs", price: "IDR 150,000" },
        { item: "Special Ships", price: "IDR 200,000 to IDR 400,000" },
        { item: "Season Pass", price: "IDR 100,000" },
    ],
    "PUBG Mobile": [
        { item: "100 UC", price: "IDR 15,000" },
        { item: "600 UC", price: "IDR 75,000" },
        { item: "1,500 UC", price: "IDR 150,000" },
        { item: "3,000 UC", price: "IDR 300,000" },
        { item: "Season Pass", price: "IDR 150,000" },
        { item: "Character Skins", price: "IDR 300,000" },
        { item: "Special Weapon Packs", price: "IDR 200,000 to IDR 400,000" },
    ],
    "Roblox": [
        { item: "400 Robux", price: "IDR 15,000" },
        { item: "800 Robux", price: "IDR 75,000" },
        { item: "1,500 Robux", price: "IDR 150,000" },
        { item: "4,000 Robux", price: "IDR 300,000" },
        { item: "Premium Membership", price: "IDR 150,000" },
        { item: "Game Passes", price: "IDR 75,000 to IDR 300,000" },
        { item: "Special Items", price: "IDR 200,000" },
    ],
    "SimCity BuildIt": [
        { item: "50 Simoleons", price: "IDR 15,000" },
        { item: "200 Simoleons", price: "IDR 75,000" },
        { item: "1,000 Simoleons", price: "IDR 150,000" },
        { item: "5,000 Simoleons", price: "IDR 300,000" },
        { item: "Special Building Packs", price: "IDR 150,000" },
        { item: "Region Packs", price: "IDR 75,000 to IDR 300,000" },
        { item: "Premium Membership", price: "IDR 100,000" },
    ],
    "Stumble Guys": [
        { item: "100 Gems", price: "IDR 15,000" },
        { item: "500 Gems", price: "IDR 75,000" },
        { item: "1,200 Gems", price: "IDR 150,000" },
        { item: "3,000 Gems", price: "IDR 300,000" },
        { item: "Battle Pass", price: "IDR 150,000" },
        { item: "Character Packs", price: "IDR 75,000 to IDR 300,000" },
    ],
    "Wuthering Waves": [
        { item: "100 Star Coins", price: "IDR 15,000" },
        { item: "500 Star Coins", price: "IDR 75,000" },
        { item: "1,200 Star Coins", price: "IDR 150,000" },
        { item: "3,000 Star Coins", price: "IDR 300,000" },
        { item: "Special Character Packs", price: "IDR 225,000" },
        { item: "Monthly Subscription", price: "IDR 200,000" },
    ],
};

const appPrices = {
    "Discord": [
        { item: "Nitro Classic", price: "IDR 150,000/month" },
        { item: "Nitro Boost", price: "IDR 1,500,000/year" },
    ],
    "Netflix": [
        { item: "Basic Plan", price: "IDR 125,000/month" },
        { item: "Standard Plan", price: "IDR 169,000/month" },
        { item: "Premium Plan", price: "IDR 249,000/month" },
    ],
    "Spotify": [
        { item: "Premium", price: "IDR 99,000/month" },
        { item: "Family Plan", price: "IDR 149,000/month" },
    ],
    "Vidio": [
        { item: "Vidio Premium", price: "IDR 39,000/month" },
        { item: "Vidio Family", price: "IDR 79,000/month" },
    ],
    "Bigo": [
        { item: "Bigo Gold", price: "IDR 99,000/month" },
    ],
    "Hago": [
        { item: "Hago Diamonds", price: "IDR 15,000 for 100 Diamonds" },
        { item: "Hago Gold", price: "IDR 75,000 for 1,000 Gold" },
    ],
};

const eWalletPrices = {
    "Dana": [
        { item: "Saldo Dana 10,000", price: "IDR 12,000" },
        { item: "Saldo Dana 50,000", price: "IDR 52,000" },
        { item: "Saldo Dana 100,000", price: "IDR 102,000" },
        { item: "Saldo Dana 250,000", price: "IDR 252,000" },
    ],
    "OVO": [
        { item: "Saldo OVO 10,000", price: "IDR 12,000" },
        { item: "Saldo OVO 50,000", price: "IDR 52,000" },
        { item: "Saldo OVO 100,000", price: "IDR 102,000" },
        { item: "Saldo OVO 200,000", price: "IDR 200,000" },
    ],
    "Gopay": [
        { item: "Saldo Gopay 10,000", price: "IDR 12,000" },
        { item: "Saldo Gopay 50,000", price: "IDR 52,000" },
        { item: "Saldo Gopay 100,000", price: "IDR 102,000" },
        { item: "Saldo Gopay 250,000", price: "IDR 252,000" },
    ],
};


function loadImages() {
    const gameContainer = document.querySelector('.list-game .grid');
    const appContainer = document.querySelector('.list-aplikasi .grid');
    const eWalletContainer = document.querySelector('.list-ewalet .grid');

    games.forEach(game => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${game.img}" alt="${game.name}"><p>${game.name}</p>`;
        div.onclick = () => openPopup(game.name);
        gameContainer.appendChild(div);
    });

    apps.forEach(app => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${app.img}" alt="${app.name}"><p>${app.name}</p>`;
        div.onclick = () => openPopup(app.name);
        appContainer.appendChild(div);
    });

    eWallets.forEach(wallet => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${wallet.img}" alt="${wallet.name}"><p>${wallet.name}</p>`;
        div.onclick = () => openPopup(wallet.name);
        eWalletContainer.appendChild(div);
    });
}

function openPopup(name) {
    document.getElementById('popup-title').innerText = `Pilih Item untuk ${name}`;
    const select = document.getElementById('item-select');
    select.innerHTML = '';

    const prices = itemPrices[name] || appPrices[name] || eWalletPrices[name];
    prices.forEach(price => {
        const option = document.createElement('option');
        option.value = price.item;
        option.innerText = `${price.item} - ${price.price}`;
        select.appendChild(option);
    });

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function buy() {
    const itemName = document.getElementById('item-select').value;
    const uid = document.getElementById('uid').value;
    const date = new Date().toISOString().slice(0, 10);
    const adminEmail = "rainstaasnamarchpratama@gmail.com";

    const mailtoLink = `mailto:${adminEmail}?subject=${date}%20${itemName}%20UID:${uid}&body=Saya ingin melakukan pembayaran.`;
    window.location.href = mailtoLink;

    document.getElementById('notification').innerText = "Pembelian akan segera diproses setelah pembayaran terverifikasi.";
    closePopup();
}

window.onload = loadImages;
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop + section.offsetHeight > window.innerHeight / 2) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

