const nav = () => {
    return `<div class="nav">
        <h1><a href="https://benadryl.dev"><img src="/img/icon.png" style="height:24px;padding-bottom:5px;vertical-align:middle;display:inline-block;"></a> benadryl.dev <span id='navPageTitle'></span>  </h1>
        <ul>
            <li><a href="javascript:;" onclick="javascript:rehydrate('/');">home</a></li>
            <li><a href="javascript:;" onclick="javascript:rehydrate('/project/chipledger');">chipledger</a></li>
            <li><a href="https://www.github.com/brodyking/">github</a></li>
        </ul>
    </div>
    `;
    }

export default nav;