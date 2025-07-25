const home = () => {
    return `<p>
    welcome to the personal website of brody king.<br>
    i am a high school student who enjoys making web applications and other side projects for fun.
    </p>
    <h3>🌱 my latest projects</h3>
    <ul class='linespacing'>
            <li><a href="javascript:;" onclick="javascript:rehydrate('/project/chipledger');"><strong>chipledger</strong></a> - track poker and blackjack buyins and cashouts.</li>
            <li><a href="javascript:;" onclick="javascript:rehydrate('/project/pouchtrack');"><strong>pouchtrack</strong></a> - nicotine intake tracker.</li>
            <li><a href="javascript:;" onclick="javascript:rehydrate('/project/flashcarrd');"><strong>flashcarrd</strong></a> - a simple flashcard app.</li>
        </ul>
    <h3>🦖 old projects</h3>
    <ul class="linespacing">
        <li><a href="javascript:;" onclick="javascript:rehydrate('/project/openchan');"><strong>openchan</strong></a> - imageboard script.</li>
        <li><a href="javascript:;" onclick="javascript:rehydrate('/project/wikimd');"><strong>wikimd</strong></a> - lightweight wiki software.</li>
    </ul>
     `;
}

export default home;
