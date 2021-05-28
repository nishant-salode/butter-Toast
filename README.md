# butter-Toast

### Simple toast notification library built on vanilla JS.

How to use, example :

        butterToast.create({
                type: "success"|"warning"|"error"|"info",
                title: "Congratulations!",
                text: "Your friend is added successfuly.",
                timeout: "2000"
                });

For adding html tags in title or text use backtiks, example :

        butterToast.create({
              type: "warning",
              title: "Important notice",
              text: "Your id no: " +`<b>` + "123" +`</b>` + " has expired",
              });
