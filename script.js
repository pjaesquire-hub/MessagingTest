const button = document.getElementById("openChatBtn");

    button.addEventListener('click', function(){
        const name = document.getElementById("name").value.trim();
        const product = document.getElementById("product").value.trim();
        const issue = document.getElementById("issue").value.trim();

  
        // if (!name) { alert("Please enter your name"); return; }
        // if (!product) { alert("Please select a product"); return; }
        // if (!issue) { alert("Please describe your issue"); return; }

        window.sprChat('openNewConversation', {
            initialMessages: [{message: issue, isSentByUser:true}],  
            conversationContext: {
               "_c_66599c9e65546f03da49e758": ['EE App - CheckLatestEeMobileBill']
            }
        });
   });

