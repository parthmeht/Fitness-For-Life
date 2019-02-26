var Item = require('../model/Item');

var data = [
    {
        itemCode: 1,
        itemName: "Optimum Nutrition Gold Standard",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming obstacles, accomplishing goals, and recognizing achievements. And then it resets to achieve again. As your trusted sports nutrition partner in goal achievement, ON demonstrates that same passion while crafting our products. From the raw materials we source to our state-of-the-art manufacturing processes, no compromises are made. You set the bar higher after every workout, we set the bar higher to redefine the industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein with low levels of fat, cholesterol, lactose and other stuff you can do without making Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. As one of the few companies to operate state-of-the-art manufacturing facilities that are GMP compliant, ON assures that every shake will mix up effortlessly because of its first-to-market instantization process. You also expect each shake to taste the same as the last and your next. That's the kind of consistency ON delivers."],
        nutritionFactsImage: "/images/on-whey-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/on-whey-protein.png"
    },
    {
        itemCode: 2,
        itemName: "BCAA Energy, 30 Servings",
        catalogCategory: "BCAA",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming obstacles, accomplishing goals, and recognizing achievements. And then it resets to achieve again. As your trusted sports nutrition partner in goal achievement, ON demonstrates that same passion while crafting our products. From the raw materials we source to our state-of-the-art manufacturing processes, no compromises are made. You set the bar higher after every workout, we set the bar higher to redefine the industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein with low levels of fat, cholesterol, lactose and other stuff you can do without making Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. As one of the few companies to operate state-of-the-art manufacturing facilities that are GMP compliant, ON assures that every shake will mix up effortlessly because of its first-to-market instantization process. You also expect each shake to taste the same as the last and your next. That's the kind of consistency ON delivers."],
        nutritionFactsImage: "/images/on-whey-nutrition-facts.png",
        rating: 3,
        imageUrl: "/images/on-whey-nutrition-facts.png"
    },
    {
        itemCode: 3,
        itemName: "Pre JYM, 30 Servings",
        catalogCategory: "PRE-WORKOUT SUPPLEMENTS",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming obstacles, accomplishing goals, and recognizing achievements. And then it resets to achieve again. As your trusted sports nutrition partner in goal achievement, ON demonstrates that same passion while crafting our products. From the raw materials we source to our state-of-the-art manufacturing processes, no compromises are made. You set the bar higher after every workout, we set the bar higher to redefine the industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein with low levels of fat, cholesterol, lactose and other stuff you can do without making Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. As one of the few companies to operate state-of-the-art manufacturing facilities that are GMP compliant, ON assures that every shake will mix up effortlessly because of its first-to-market instantization process. You also expect each shake to taste the same as the last and your next. That's the kind of consistency ON delivers."],
        nutritionFactsImage: "/images/on-whey-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/on-whey-nutrition-facts.png"
    }
];

module.exports.getItems = function () {
    
    var itemsCategory = [];
    for (var i = 0; i < data.length; i++) {
        var item = new Item(data[i].itemCode,
            data[i].itemName,
            data[i].catalogCategory,
            data[i].descriptionTitle,
            data[i].description,
            data[i].nutritionFactsImage,
            data[i].rating,
            data[i].imageUrl);
        
        itemsCategory.push(item);
        
    } // end of for
    return itemsCategory;
    
    // return data;
};


module.exports.getItem = function (itemCode) {
    console.info("from DB, Item code :" + itemCode);
    for (var i = 0; i < data.length; i++) {
        // var itemCode = data.itemCode;
        console.log("Data" + JSON.stringify(data[i].imgUrl));
        if (parseInt(data[i].itemCode) == itemCode) {
            console.log("Inside if");
            var item = new Item(data[i].itemCode,
                data[i].itemName,
                data[i].catalogCategory,
                data[i].descriptionTitle,
                data[i].description,
                data[i].nutritionFactsImage,
                data[i].rating,
                data[i].imageUrl);
            
            console.log("Item"+JSON.stringify(item));
            
            return item;
        }
        // console.log("Data"+i);
        
    }
};

var categories = ['WHEY PROTEIN','BCAA','PRE-WORKOUT SUPPLEMENTS'];

module.exports.getCategories = function(){
    return categories;
};