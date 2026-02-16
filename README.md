# Messaging test page

<script src="script.js"></script>
<script>
window.sprChatSettings = window.sprChatSettings || {}
window.sprChatSettings = {
    "appId":"68908c590ab05c03d043ecbd_app_55100654","skin":"MODERN","scope":"CONVERSATION"
};

!function(){var a,r,n,o,i,s=window,e=s.sprChat;e&&e.loaded||(a=document,(r=function(){r.q.push(arguments)}).q=[],
s.sprChat=r,s.sprChat.loaded=!0,n=0,o="spr-live-chat-widget",i=function(){var e=a.getElementById(o),e=(e&&e.parentNode.removeChild(e),a.createElement("script")),
t=(e.type="text/javascript",e.async=!0,e.src="https://prod5-live-chat.sprinklr.com/api/livechat/handshake/widget/"+s.sprChatSettings.appId,e.id=o,
e.onerror=function(e){var t,a;++n<=3?setTimeout(i,250):(s.sprChat.loaded=!1,t="WIDGET_LOAD_FAILED",a=e,
r.q.map(function(e){if("subscribeToUpdate"===e[0]&&e[1]&&"loadCompleted"===e[1].topic)return e[1].subscriber}).map(function(e){e&&e({response:{error:!0,errorPayload:{type:t,message:a}}})}))},
a.getElementsByTagName("script")[0]);t.parentNode.insertBefore(e,t)},"loading"!==a.readyState?i():a.addEventListener("DOMContentLoaded",i))}();
</script>









const button = document.getElementById("openChatBtn");

        button.addEventListener('click', function(){
            const name = document.getElementById("name").value.trim();
            const product = document.getElementById("product").value.trim()
            const issue = document.getElementById("issue").value.trim()
            
 //          if (!name) { alert("Please enter your name"); return; }
 //  if (!product) { alert("Please select a product"); return; }
 //  if (!issue) { alert("Please describe your issue"); return; }

            
            window.sprChat('openNewConversation', {
                        initialMessages: [{message: issue, isSentByUser:true}],  
                        conversationContext:{
                            "_c_6761b89040a38a010e72e3ab": product,
                            "_c_65cb8fb5aa6941089495b8ad": name,
                        }});
        
        });
            


, "scope": "Conversation", "landingScreen": "LAST_CONVERSATION"