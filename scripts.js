
       
        const bag = document.querySelectorAll(".bag");
        const clothes = document.querySelectorAll(".clothes");

        const btnClothes = document.querySelector("#btnClothes");
        const btnBags = document.querySelector("#btnBags");

        btnClothes.addEventListener("click", function() {
            clothes.forEach(function(clothes) {
                clothes.classList.remove("remove");
            }
            
        );

        bag.forEach(function(bag) {
                bag.classList.add("remove");
            }
        );
        });

        btnBags.addEventListener("click", function() {
            clothes.forEach(function(clothes) {
                clothes.classList.add("remove");
            }
            
        );

        bag.forEach(function(bag) {
                bag.classList.remove("remove");
            }
        );
        });

        clear.addEventListener("click", function() {
            clothes.forEach(function(clothes) {
                clothes.classList.remove("remove");
            }
            
        );

        bag.forEach(function(bag) {
                bag.classList.remove("remove");
            }
        );
        });

        

    
    