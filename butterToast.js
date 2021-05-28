//using UMD: Universal Module Definition method for module system.

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(
            // ["jquery", "underscore"], 
        factory);
    } else if (typeof exports === "object") {
        module.exports = factory(
            // require("jquery"), require("underscore")
            );
    } else {
        root.butterToast = factory(
            //if you need to import jquery or maybe underscore js
            // root.$, root._
            );
    }
// }(this, function ($, _) {
}(this, function () {
    // This is where I defined my module implementation
    if(document.readyState === "complete") {
        // Fully loaded!
        onInit();
    }
    else if(document.readyState === "interactive") {
        onInit();
        // DOM ready! Images, frames, and other subresources are still downloading.
    }
    else {
        // Loading still in progress.
        // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.
    
        window.addEventListener("DOMContentLoaded", () => {
            // DOM ready! Images, frames, and other subresources are still downloading.
        });
    
        window.addEventListener("load", () => {
            // Fully loaded!
            onInit();
        });
    }
    
    var uniqueToastIncremental = 0;
    butterToast = {        
        /*
        fun() to generate toast notification
        */
        create: function(){
        },
        timeoutHide: function(){
        }
    };

    function onInit(){
    /**
     * toastContainer should be created just once
     */debugger;
     var toastContainer = document.createElement("DIV");
     toastContainer.setAttribute('id','toast-container');
     toastContainer.className = "toast-container";
     document.body.appendChild(toastContainer); 
 
         /**
          * @param {*} params 
          *      -title : Heading for the toast | Reduces size of toast if not present
          *      -text : Toast message.
          *      -type : success | warning | danger | info
          *      -timeout : in -ms | default is 2000
          */

     butterToast.create = function(params){
         uniqueToastIncremental++; //Used for assigning id to the toast element


         var toast = document.createElement("DIV");
         toast.setAttribute('id','toast' + uniqueToastIncremental);
         toast.setAttribute('class','toast');
         switch (params.type) {
            case "success":
                toast.className +=" toast-success";
                break;
            case "warning":
                toast.className +=" toast-warning";
                break;
            case "danger":
                toast.className +=" toast-danger";
                break;
            case "info":
                toast.className +=" toast-info";
                break;
             default:
                toast.className +="";
                break;
         };
         
 
        /**
         * Create body of toast
         */
        var title = document.createElement("DIV");
        title.setAttribute('id','toast-title' + uniqueToastIncremental);
        title.setAttribute('class','toast-title');
        title.innerHTML = params.title;
        toast.appendChild(title); 

        var message = document.createElement("P");
        message.setAttribute('id','toast-message' + uniqueToastIncremental);
        message.setAttribute('class','toast-message');
        message.innerHTML = params.text;
        toast.appendChild(message); 
 
        
        // console.log(uniqueToastIncremental,params);

        toastContainer.prepend(toast);
         //hide toast after some delayed time
        butterToast.timeoutHide(uniqueToastIncremental,params.timeout);
     }
     butterToast.timeoutHide = function(id,timeInMs = 2000){

         setTimeout(() => {
             var toastToHide = document.getElementById('toast' + id);
             toastToHide.setAttribute('class','toast-hide')
             setTimeout(() => {
                toastToHide.style.display = "none";    
             }, 100);
             
         }, timeInMs);
 
     }
 
    }
    return butterToast;
}));