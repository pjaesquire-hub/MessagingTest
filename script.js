window.sprChatSettings = {
    "appId":"68908c590ab05c03d043ecbd_app_55100654",
    skin: "MODERN"
};




let chatLoaded = false;

function loadSprinklrChat() {
    if (chatLoaded) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://prod5-live-chat.sprinklr.com/api/livechat/handshake/widget/" + window.sprChatSettings.appId;

    script.onload = function() {
        chatLoaded = true;
        if (window.sprChat && window.sprChat.hide) {
            window.sprChat.hide(); // hide icon until button is clicked
        }
    };

    script.onerror = function(e) {
        console.error("Failed to load Sprinklr chat widget", e);
    };

    document.body.appendChild(script);
}

// BUTTON TO OPEN CHAT
const openChatBtn = document.getElementById('openChatBtn');
openChatBtn.addEventListener('click', () => {
    loadSprinklrChat(); // load widget if not already
    if (window.sprChat && window.sprChat.show) {
        window.sprChat.show(); // show chat icon
    }
});