const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');

const story = {
    start: {
        text: 'あなたは古い城の一室で目を覚ます。目の前には2つの扉がある。1つは重厚な木の扉、もう1つは鉄格子のはまった扉だ。',
        choices: [
            { text: '木の扉を開ける', next: 'woodenDoor' },
            { text: '鉄格子の扉を調べる', next: 'ironDoor' }
        ]
    },
    woodenDoor: {
        text: '木の扉は重く、やっとの思いで開けると、そこには豪華な装飾の廊下が続いていた。奥から微かに音楽が聞こえる。',
        choices: [
            { text: '廊下を進む', next: 'hallway' },
            { text: '部屋に戻る', next: 'start' }
        ]
    },
    ironDoor: {
        text: '鉄格子の扉は固く閉ざされている。よく見ると、壁に小さなレバーが隠されているのを見つけた。',
        choices: [
            { text: 'レバーを引く', next: 'lever' },
            { text: '部屋に戻る', next: 'start' }
        ]
    },
    hallway: {
        text: '廊下を進むと、大きなホールに出た。そこでは仮面をつけた人々が静かに踊っている。あなたに気づくと、彼らは一斉にこちらを向いた... To be continued.',
        choices: []
    },
    lever: {
        text: 'レバーを引くと、カチリと音がして鉄格子の扉が開いた。その先は、暗く湿った地下へと続く階段だった... To be continued.',
        choices: []
    }
};

function showScene(scene) {
    storyTextElement.innerText = scene.text;
    choicesContainerElement.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => showScene(story[choice.next]));
        choicesContainerElement.appendChild(button);
    });
}

// ゲーム開始
showScene(story.start);
