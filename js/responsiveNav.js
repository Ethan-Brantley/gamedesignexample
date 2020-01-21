function myFunction() {
                var x = document.getElementById("myNav");
                if (x.className === "siteNav") {
                    x.className += " responsive";
                } 
                else {
                    x.className = "siteNav";
                }
            }