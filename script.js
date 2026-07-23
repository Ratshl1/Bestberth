const dragon = document.getElementById("dragon1");

dragon.addEventListener("click", function(){

    document.getElementById("scene1").classList.add("hidden");

    document.getElementById("scene2").classList.remove("hidden");

});
