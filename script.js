const button = document.getElementById("openChatBtn");

        button.addEventListener('click', function(){
            const name = document.getElementById("name").value.trim();
            const product = document.getElementById("product").value.trim()
            const issue = document.getElementById("issue").value.trim()
            
           
               if (!name) { alert("Please enter your name"); return; }
   if (!product) { alert("Please select a product"); return; }
   if (!issue) { alert("Please describe your issue"); return; }

            
            window.sprChat('openNewConversation', {
                        initialMessages: [{message: issue, isSentByUser:true}],  
                        conversationContext:{"_c_6761b89040a38a010e72e3ab": product, "_c_65cb8fb5aa6941089495b8ad": name}});
        
        });
            
