var Item = require('../model/Item');

var data = [
    {
        itemCode: 1,
        itemName: "Optimum Nutrition Gold Standard",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["OPTIMUM TRUE STRENGTH","QUALITY","CONSISTENCY"],
        description: ["True Strength is a journey. It never rests, it never quits. It's about overcoming \
                        obstacles, accomplishing goals, and recognizing achievements. And then it resets to \
                        achieve again. As your trusted sports nutrition partner in goal achievement, ON \
                        demonstrates that same passion while crafting our products. From the raw materials \
                        we source to our state-of-the-art manufacturing processes, no compromises are made. \
                        You set the bar higher after every workout, we set the bar higher to redefine the \
                        industry standards and ensure you realize optimum results."
                        ,"Whey protein isolates are the purest form of whey and the main ingredient in Gold \
                        Standard 100% Whey™. Each serving provides 24 grams of rapidly digesting whey protein \
                        with low levels of fat, cholesterol, lactose and other stuff you can do without making \
                        Gold Standard 100% Whey™ the standard all other proteins are measured against."
                        ,"Optimum Nutrition has been spotting the efforts of goal driven individuals since 1986. \
                        As one of the few companies to operate state-of-the-art manufacturing facilities that are \
                        GMP compliant, ON assures that every shake will mix up effortlessly because of its \
                        first-to-market instantization process. You also expect each shake to taste the same as \
                        the last and your next. That's the kind of consistency ON delivers."],
        nutritionFactsImage: "/images/on-whey-nutrition-facts.png",
        rating: 5,
        imageUrl: "/images/on-whey-protein.png"
    },
    {
        itemCode: 2,
        itemName: "MuscleTech™ Nitro-Tech™ 100% Whey Gold",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["BEST-IN-CLASS FORMULA, TASTE AND VALUE","SUPERIOR SCIENCE. SUPERIOR RESULTS.","BEST-IN-CLASS TASTE!"],
        description: ["For over 20 years, NITRO-TECH® has been a leading protein brand. Built on a \
                        foundation of human research and cutting-edge science, it has earned the trust of \
                        countless consumers worldwide. Now the same research and development team has \
                        pioneered a new formula based on superior protein sources, quality and manufacturing. \
                        Introducing NITRO-TECH® 100% WHEY GOLD – a pure protein formula featuring whey peptides and isolate!"
                        ,"MuscleTech® researchers reviewed numerous clinical trials on whey peptides, and \
                        the science shows that whey peptides can promote rapid recovery from exercise.* \
                        This means you are getting an ultra-pure, rapidly absorbed and quickly digested \
                        protein that allows you to recover faster, build more lean muscle mass and get \
                        better results from your training sessions!* What’s more, whey peptides have one \
                        of the highest biological values (BV) of any protein source, a value given to \
                        protein sources to measure how well they are absorbed and used by the body.*"
                        ,"Enjoying a clean formula doesn’t mean you have to deal with excess carbs and \
                        fat. For some companies, the taste of their protein is the only thing they have \
                        going for them, so they load up their protein formulas with cheap proteins that \
                        are easy to flavor, and then chase that with a load of flavoring in the form of \
                        sugar, carbs and fat. At MuscleTech®, we believe you shouldn’t have to sacrifice \
                        macronutrients for results. That’s why our research team works closely with some \
                        of the top protein-flavoring professionals in the world! In fact, we conducted \
                        taste tests to help us formulate a best-in-class NITRO-TECH® 100% WHEY GOLD taste \
                        profile we know you’ll love. The result is a great-tasting formula that doesn’t \
                        pack the extra sugar and carbs you’ll see in other protein powders. This gives \
                        you more protein per scoop and a better overall macronutrient profile."],
        nutritionFactsImage: "/images/muscletech-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/muscletech.png"
    },
    {
        itemCode: 3,
        itemName: "Dymatize® Nutrition ISO 100",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["WHY ISO100?, TASTE AND VALUE","Take your performance to the next level with ISO•100."],
        description: ["ISO100® is simply muscle-building fuel. Each serving contains 25 grams of protein \
                        and 5.5g of BCAAs including 2.7g of L-Leucine. Known worldwide for quality, taste \
                        and purity, ISO100 is produced to our highest quality standards. ISO100 is \
                        formulated using a cross-flow micro filtration, multi-step purification process \
                        that preserves important muscle-building protein fractions while removing excess \
                        carbohydrates, fat, lactose and cholesterol. ISO100 is made with pre-hydrolyzed \
                        protein sources to ensure fast digestion and absorption."
                        ,"You expect only to the best from yourself and your nutrition. DYMATIZE \
                        ISO•100® is one of the most advanced and effective proteins available and was \
                        developed to give you 100% of what you need to support muscle growth and achieve \
                        your ambitions. The Fastest-Acting Protein. ISO•100 provides 25 grams of super-fast \
                        absorbing 100% whey protein isolate and has been hydrolyzed for even faster \
                        absorption and digestion. It delivers quick amino acid replenishment, perfect first \
                        thing in the morning to stop catabolism or after intense training to speed your \
                        recovery. Each serving of ISO•100 has 5.5 grams of BCAAs including 2.7 grams of \
                        L-Leucine, the BCAA that is directly involved in in optimizing Muscle Protein \
                        Synthesis to ensure your workouts are not going to waste.The Highest Level of \
                        Purity. ISO•100 uses only whey proteins derived from cross-flow microfiltration \
                        processing (cold-filtered) to preserve the many important whey protein fractions \
                        including lactoferrin and immunoglobins, which can be lost in other forms of \
                        processing. We have carefully formulated ISO•100 to deliver more of what you want, \
                        and less of what you don't want: free of gluten, fat and lactose, plus less than one \
                        gram of sugar. With only a short list of ingerdients, it is easy to see why ISO•100 is \
                        one of the purest proteins available. In addition, ISO•100 is produced in our own GMP \
                        manufacturing facility and is Informed-Choice® Trusted by Sport certified providing \
                        assurance to the athletic community that ISO•100 is free of banned substances. New \
                        Improved Tate. Dymatize has taken flavor to a whole new level! Our in-house flavor \
                        specialists worked long and hard to create an even more delicious taste. ISO•100, the \
                        reward you deserve for all your hard work and dedication. So delightfully delicious, you \
                        will look forward to the next shake."],
        nutritionFactsImage: "/images/ISO100-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/ISO100.png"
    },
    {
        itemCode: 4,
        itemName: "Isopure® Whey Protein Isolate",
        catalogCategory: "WHEY PROTEIN",
        descriptionTitle: ["PRODUCT OVERVIEW","CONVENIENCE"],
        description: ["Natures Best Isopure Whey Protein Isolate contains 26 grams per serving of pure, \
                        unadulterated 100% whey protein isolate. Any and all impurities typically found in \
                        most whey proteins have been removed to provide you with great tasting, lactose free, \
                        state of the art carbohydrate free protein supplement."
                        ,"Natures Best Isopure Whey Protein Isolate is a convenient way to fortify your \
                        favorite foods. You simply add Isopure Unflavored Whey Protein Isolate directly \
                        to hot food, cold food or beverages. And since it is virtually tasteless, it is \
                        the perfect addition to your favorite recipes. It is 100% natural, and has no fat, \
                        carbs, sugars or lactose. It has no fillers, no artificial flavors, and no artificial \
                        sweeteners. Nature's Best set out to create a product that didn't hide \
                        anything from its customers. We wanted you to know that you're purchasing the \
                        best product available on the market. Our protein source is clearly identified as \
                        100% Pure Whey Protein Isolate. We didn't try to confuse you by listing a protein \
                        blend that doesn't tell you how much of the product is superior whey protein \
                        isolate and how much is whey protein concentrate or sweet whey or some other \
                        inferior protein source. It is instantized so it can be taken anywhere and be \
                        easily mixed with a spoon."],
        nutritionFactsImage: "/images/isopure-nutrition-facts.png",
        rating: 4,
        imageUrl: "/images/isopure.png"
    },
    {
        itemCode: 5,
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
        itemCode: 11,
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