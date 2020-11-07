(function(){
                emailjs.init("user_dr5KR9XLia2gKX8UDqwBy");
             })();
            const vue = new Vue({
                el: '#contact-form',
                data(){
                    return {
                        reply_to: '',
                        message: '',
                        from_name: '',
                        to_name: '',
                    }
                },
                methods: {
                    enviar(){
                        let data = {
                            from_name: this.from_name,
                            reply_to: this.reply_to,
                            to_name: 'Miguel',
                            message: this.message,
                        };
                        if (this.from_name.length < 1 || this.message.length < 1 || this.reply_to.length < 1 && this.to_name.length < 1) {
                            alert('Es necesario que llenes todos los campos');
                        }else{
                            emailjs.send("gmail","template_fjt8z64", data)
                            .then(function(response) {
                                if(response.text === 'OK'){
                                    alert('El correo se ha enviado de forma exitosa');
                                }
                               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                            }, function(err) {
                                alert('Ocurrió un problema al enviar el correo');
                               console.log("FAILED. error=", err);
                            });
                        }
                        
                        

                    }
                }
            });