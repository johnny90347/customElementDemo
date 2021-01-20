fetch('userInfo/user-info.component.html')
    .then(resp => resp.text())
    .then(text => templateStringHandle(text))

function templateStringHandle(text) {
    class UserInfo extends HTMLElement {
        constructor() {
            super();
            // 新增一個 shadow DOM
            let shadowRoot = this.attachShadow({ mode: 'open' });
            this.innerHTML = text;
            var template = document.getElementById('userInfo');
            // 複製模板內容
            var content = template.content.cloneNode(true);
            // this.appendChild(documentFragment);
            // 內容加到 shadow DOM 中
            shadowRoot.appendChild(content);
        }
    }

    window.customElements.define('app-user-info', UserInfo);
}
